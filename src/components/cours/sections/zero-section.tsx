"use client";

import { useState } from "react";
import { CodeBlock } from "../code-block";

export function ZeroSection() {
  const [count, setCount] = useState(0);

  return (
    <section id="zero" className="scroll-mt-28 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">
        Piège : <code className="font-mono text-xl">0 && …</code>
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        En JavaScript,{" "}
        <code className="font-mono">0 && quelqueChose</code> vaut{" "}
        <code className="font-mono">0</code> (falsy mais <em>affichable</em>).
        React peut donc afficher un <code className="font-mono">0</code> à
        l'écran. Pour un nombre qui peut être zéro, préfère un ternaire
        explicite ou un test{" "}
        <code className="rounded bg-zinc-200 px-1 font-mono text-sm dark:bg-zinc-800">
          count &gt; 0
        </code>
        .
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          className="rounded-lg bg-zinc-200 px-3 py-1.5 text-sm dark:bg-zinc-800"
        >
          −
        </button>
        <span className="font-mono text-lg">{count}</span>
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="rounded-lg bg-zinc-200 px-3 py-1.5 text-sm dark:bg-zinc-800"
        >
          +
        </button>
      </div>
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/40">
        <p className="mb-2 text-xs font-medium uppercase text-amber-800 dark:text-amber-200">
          Anti-pattern (peut afficher « 0 »)
        </p>
        <div className="min-h-6 text-lg">
          {count && <span>Messages non lus</span>}
        </div>
      </div>
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/40">
        <p className="mb-2 text-xs font-medium uppercase text-emerald-800 dark:text-emerald-200">
          Correct
        </p>
        <div className="min-h-6 text-lg">
          {count > 0 ? (
            <span>Messages non lus : {count}</span>
          ) : (
            <span className="text-zinc-500">Aucun message</span>
          )}
        </div>
      </div>
      <CodeBlock title="Comparer">{`// Risqué si count peut être 0
{count && <span>…</span>}

// Explicite
{count > 0 ? <span>Messages : {count}</span> : null}`}</CodeBlock>
    </section>
  );
}
