# Guide projet (Next.js)

Ce fichier oriente les contributions humaines et les assistants IA (Claude, etc.) sur la structure, les conventions et les commandes du dépôt.

## Stack

- **Next.js** (App Router), **React**, **TypeScript** (mode strict)
- **Tailwind CSS** v4
- **ESLint** (`eslint-config-next`) + **Prettier** (`eslint-config-prettier` pour éviter les conflits)
- **Zod** pour valider les variables d'environnement dans [`src/env.ts`](src/env.ts)
- Déploiement / prod locale : **Docker** ([`Dockerfile`](Dockerfile), [`docker-compose.yml`](docker-compose.yml)), build Next en mode **`standalone`**

## Commandes

Préférer le **Makefile** pour une interface stable :

| Cible                                   | Effet                              |
| --------------------------------------- | ---------------------------------- |
| `make install`                          | `npm ci` (dépendances)             |
| `make dev`                              | serveur de développement           |
| `make build` / `make start`             | build prod / démarrage Node        |
| `make lint`                             | ESLint                             |
| `make format` / `make format-check`     | Prettier (écriture / vérification) |
| `make docker-build` / `make docker-run` | image et conteneur                 |
| `make up` / `make down`                 | Docker Compose                     |

Scripts npm équivalents : `npm run dev`, `npm run build`, `npm run lint`, `npm run format`, `npm run format:check`.

## Arborescence (`src/`)

| Dossier                              | Rôle                                                                                                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`src/app/`](src/app/)               | **Routage uniquement** : `layout.tsx`, `page.tsx`, `route.ts` / route handlers sous `app/api/`. Garder les fichiers courts : pas de logique métier volumineuse ici. |
| [`src/components/`](src/components/) | Composants UI réutilisables, organisés par domaine ou par écran (ex. `components/hello/`).                                                                          |
| [`src/lib/`](src/lib/)               | Utilitaires partagés (isomorphes). Code **serveur uniquement** (ORM, secrets, DB) dans `lib/server/`. Ne jamais importer `lib/server/` depuis un Client Component.  |
| [`src/lib/actions/`](src/lib/actions/) | **Server Functions** (`'use server'`) : un fichier par domaine (ex. `actions/post.ts`). Toujours valider l'auth en entrée.                                        |
| [`src/types/`](src/types/)           | Types et contrats partagés (réponses API, modèles légers).                                                                                                          |

**Alias** : `@/` pointe vers [`src/`](src/) (voir [`tsconfig.json`](tsconfig.json)).

## Fichiers spéciaux App Router

Ces fichiers sont réservés par Next.js et ne doivent contenir que leur export attendu :

| Fichier          | Rôle                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| `layout.tsx`     | Layout persistant entre navigations. Ne pas y mettre de data fetching non mis en cache.                 |
| `page.tsx`       | Entrée d'une route. Server Component par défaut. Peut exporter `metadata` ou `generateMetadata`.        |
| `loading.tsx`    | Fallback Suspense affiché pendant le streaming du segment. Server Component.                            |
| `error.tsx`      | Error boundary du segment. **Obligatoirement** `'use client'`. Props : `error` + `unstable_retry`.     |
| `not-found.tsx`  | Affiché quand `notFound()` est appelé dans le segment.                                                  |
| `global-error.tsx` | Erreur au niveau du root layout. Doit définir ses propres `<html>` et `<body>`.                      |
| `route.ts`       | Route handler HTTP. Ne pas coloquer avec un `page.tsx` dans le même segment.                           |

## Flux métier et API

### Route Handlers (`src/app/api/.../route.ts`)

- Utiliser les APIs Web natives `Request` / `Response` (ou `NextRequest` / `NextResponse` pour les helpers avancés).
- Retourner du JSON avec `Response.json({ ... })`.
- Déléguer la logique dans `src/lib/server/` ; garder `route.ts` court.
- Les GET handlers ne sont **pas mis en cache** par défaut. Ajouter `export const dynamic = 'force-static'` pour opter dans le cache.

### Server Functions / Server Actions (`src/lib/actions/`)

- Déclarer `'use server'` en haut du fichier (ou en haut de la fonction inline dans un Server Component).
- **Ne jamais définir** une Server Function dans un Client Component — l'importer depuis `src/lib/actions/`.
- Toujours vérifier l'authentification/autorisation en première ligne.
- Après une mutation : appeler `revalidatePath('/...')` ou `revalidateTag('...')` pour invalider le cache, puis `redirect('/...')` si redirection nécessaire. `redirect()` est une exception de contrôle de flux : ne rien écrire après.
- Utiliser `useActionState` (React) pour gérer l'état pending côté client.

### Data fetching (Server Components)

- Les requêtes `fetch` **ne sont pas mises en cache par défaut** dans cette version. Utiliser la directive `use cache` pour opter dans le cache, ou envelopper dans `<Suspense>` pour streamer les données fraîches.
- Préférer le fetch direct ORM/DB dans `src/lib/server/` plutôt qu'un appel HTTP interne quand on est déjà côté serveur.
- Les pages Server Component peuvent `fetch` les routes internes si nécessaire ; l'URL de base est centralisée dans [`src/lib/url.ts`](src/lib/url.ts) (`getServerBaseUrl`).

## Metadata

- Exporter `metadata` (statique) ou `generateMetadata` (dynamique) **uniquement depuis des Server Components** (`layout.tsx` ou `page.tsx`).
- Ces exports ne sont **pas supportés** dans `global-error.tsx` (utiliser `<title>` React à la place).

```ts
// statique
export const metadata: Metadata = { title: 'Ma page', description: '...' }

// dynamique
export async function generateMetadata({ params }): Promise<Metadata> {
  return { title: await fetchTitle(params.slug) }
}
```

## Variables d'environnement

1. Copier [`.env.example`](.env.example) vers `.env.local` (non versionné).
2. Utiliser uniquement les valeurs exposées via **`env`** depuis [`src/env.ts`](src/env.ts) plutôt que `process.env` dispersé.
3. Préfixe **`NEXT_PUBLIC_`** : accessible au navigateur ; ne jamais y mettre de secrets.

## Conventions React / Next

- **Server Components par défaut** — pas de `"use client"` tant que le composant n'a pas besoin d'état navigateur, d'événements, ou d'APIs client-only.
- Nommage : fichiers de composants en **PascalCase** ou **kebab-case** cohérent avec le dossier ; un composant exporté par fichier quand c'est possible.
- Préférer des **petits composants** et des fonctions pures dans `lib/` pour faciliter les tests futurs.

## Anti-patterns à éviter

- Secrets ou clés privées dans `NEXT_PUBLIC_*` ou importées côté client.
- Grosses fonctions métier directement dans `route.ts` sans extraction.
- Contournement de `src/env.ts` pour la configuration validée.
- Définir une Server Function (`'use server'`) dans un Client Component (`'use client'`).
- Oublier la vérification d'auth dans une Server Function — elles sont accessibles via POST direct.
- Mettre du data fetching non mis en cache dans `layout.tsx` sans `<Suspense>` — bloque la navigation.
- Appeler `redirect()` ou `notFound()` après un `await` qui peut suspendre le stream (les placer avant).

## Évolutions possibles

Quand le projet grossit : dossiers `features/` par domaine, tests (Vitest / Playwright), Husky + lint-staged, CI dédiée — à ajouter selon les besoins de l'équipe.
