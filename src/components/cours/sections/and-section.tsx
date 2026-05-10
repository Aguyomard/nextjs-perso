"use client";

import { useState } from "react";
import { CodeBlock } from "../code-block";

export function AndSection() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <section id="and" className="scroll-mt-28 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">
        Une branche : <code className="font-mono text-xl">&&</code>
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        Pour afficher quelque chose{" "}
        <strong className="text-zinc-900 dark:text-zinc-100">uniquement si</strong>{" "}
        une condition est vraie, le motif{" "}
        <code className="rounded bg-zinc-200 px-1 font-mono text-sm dark:bg-zinc-800">
          condition && &lt;Composant /&gt;
        </code>{" "}
        est très courant : si la condition est fausse, l'expression vaut la
        valeur fausse et React n'affiche rien de significatif pour le DOM (voir
        section suivante pour le cas du <code className="font-mono">0</code>).
      </p>
      <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
        <input
          type="checkbox"
          checked={loggedIn}
          onChange={(e) => setLoggedIn(e.target.checked)}
          className="size-4 rounded border-zinc-400"
        />
        <span className="text-sm">Utilisateur connecté</span>
      </label>
      <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
        <p className="mb-2 text-xs font-medium uppercase text-zinc-500">Rendu</p>
        {loggedIn && (
          <p className="text-emerald-700 dark:text-emerald-400">
            Bienvenue ! Voici ton tableau de bord.
          </p>
        )}
        {!loggedIn && (
          <p className="text-zinc-500">Coche la case pour voir le message.</p>
        )}
      </div>
      <CodeBlock title="Pattern typique">{`{loggedIn && (
  <p>Bienvenue !</p>
)}`}</CodeBlock>
    </section>
  );
}
