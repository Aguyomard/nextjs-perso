"use client";

import { useState } from "react";
import { CodeBlock } from "../code-block";

export function TernarySection() {
  const [role, setRole] = useState<"guest" | "user" | "admin">("guest");

  return (
    <section id="ternary" className="scroll-mt-28 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">
        Deux branches : le ternaire
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        Quand tu veux{" "}
        <strong className="text-zinc-900 dark:text-zinc-100">soit A soit B</strong>
        , utilise l'opérateur ternaire{" "}
        <code className="rounded bg-zinc-200 px-1 font-mono text-sm dark:bg-zinc-800">
          condition ? &lt;A /&gt; : &lt;B /&gt;
        </code>
        . C'est l'équivalent naturel de{" "}
        <code className="rounded bg-zinc-200 px-1 font-mono text-sm dark:bg-zinc-800">
          v-if
        </code>{" "}
        /{" "}
        <code className="rounded bg-zinc-200 px-1 font-mono text-sm dark:bg-zinc-800">
          v-else
        </code>
        .
      </p>
      <div className="flex flex-wrap gap-2">
        {(["guest", "user", "admin"] as const).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              role === r
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
        <p className="mb-2 text-xs font-medium uppercase text-zinc-500">
          Rendu (démo)
        </p>
        {role === "admin" ? (
          <p className="font-medium text-emerald-700 dark:text-emerald-400">
            Panneau admin
          </p>
        ) : role === "user" ? (
          <p className="text-zinc-700 dark:text-zinc-300">Espace utilisateur</p>
        ) : (
          <p className="text-zinc-500">Connecte-toi pour voir plus.</p>
        )}
      </div>
      <CodeBlock title="Code de la démo">{`{role === "admin" ? (
  <p>Panneau admin</p>
) : role === "user" ? (
  <p>Espace utilisateur</p>
) : (
  <p>Connecte-toi pour voir plus.</p>
)}`}</CodeBlock>
    </section>
  );
}
