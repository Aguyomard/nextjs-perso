export function IntroSection() {
  return (
    <section id="intro" className="scroll-mt-28 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">
        Pourquoi cette page ?
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        En{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          Vue
        </strong>
        , les fichiers{" "}
        <code className="rounded bg-zinc-200 px-1 font-mono text-sm dark:bg-zinc-800">
          .vue
        </code>{" "}
        utilisent un <em>template</em> enrichi par des{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          directives
        </strong>{" "}
        (
        <code className="rounded bg-zinc-200 px-1 font-mono text-sm dark:bg-zinc-800">
          v-if
        </code>
        ,{" "}
        <code className="rounded bg-zinc-200 px-1 font-mono text-sm dark:bg-zinc-800">
          v-for
        </code>
        …). En{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          React / JSX
        </strong>
        , il n'y a pas ce mini-langage : le rendu conditionnel et les listes
        s'écrivent avec du{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          JavaScript ordinaire
        </strong>{" "}
        dans les accolades{" "}
        <code className="rounded bg-zinc-200 px-1 font-mono text-sm dark:bg-zinc-800">
          {"{}"}
        </code>
        .
      </p>
    </section>
  );
}
