import Link from "next/link";
import { AndSection } from "./sections/and-section";
import { DirectivesSection } from "./sections/directives-section";
import { IntroSection } from "./sections/intro-section";
import { ListsSection } from "./sections/lists-section";
import { RecapSection } from "./sections/recap-section";
import { TernarySection } from "./sections/ternary-section";
import { ZeroSection } from "./sections/zero-section";

type SectionId =
  | "intro"
  | "directives"
  | "ternary"
  | "and"
  | "zero"
  | "lists"
  | "recap";

const nav: { id: SectionId; label: string }[] = [
  { id: "intro", label: "Introduction" },
  { id: "directives", label: "Directives" },
  { id: "ternary", label: "Ternaires" },
  { id: "and", label: "&&" },
  { id: "zero", label: "Piège 0" },
  { id: "lists", label: "Listes" },
  { id: "recap", label: "Récap" },
];

export function JsxVsVueCourse() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="sticky top-0 z-10 border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Cours
            </p>
            <h1 className="text-lg font-semibold tracking-tight">
              JSX et templates Vue
            </h1>
          </div>
          <Link
            href="/"
            className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            ← Accueil
          </Link>
        </div>
        <nav
          className="mx-auto flex max-w-3xl flex-wrap gap-2 border-t border-zinc-200/60 px-4 py-2 dark:border-zinc-800/80"
          aria-label="Sections du cours"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full bg-zinc-200/80 px-2.5 py-1 text-xs text-zinc-800 transition hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-3xl space-y-14 px-4 py-10 pb-20">
        <IntroSection />
        <DirectivesSection />
        <TernarySection />
        <AndSection />
        <ZeroSection />
        <ListsSection />
        <RecapSection />
      </main>
    </div>
  );
}
