"use client";

import { useState } from "react";
import { CodeBlock } from "../code-block";

export function ListsSection() {
  const [tasks, setTasks] = useState([
    { id: "1", label: "Lire la doc React" },
    { id: "2", label: "Coder un .map()" },
  ]);

  const taskLines = tasks
    .map((t) => `  <li key="${t.id}">${t.label}</li>`)
    .join("\n");

  return (
    <section id="lists" className="scroll-mt-28 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">
        Listes : <code className="font-mono text-xl">.map()</code> et{" "}
        <code className="font-mono text-xl">key</code>
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        À la place de{" "}
        <code className="rounded bg-zinc-200 px-1 font-mono text-sm dark:bg-zinc-800">
          v-for
        </code>
        , on transforme le tableau en tableau d'éléments React avec{" "}
        <code className="font-mono">.map()</code>. Chaque élément doit avoir
        une prop <code className="font-mono">key</code> stable (souvent un id)
        pour aider React à réconcilier les listes efficacement.
      </p>
      <button
        type="button"
        onClick={() =>
          setTasks((t) => [
            ...t,
            { id: String(Date.now()), label: `Tâche ${t.length + 1}` },
          ])
        }
        className="rounded-lg bg-zinc-900 px-3 py-1.5 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        Ajouter une tâche
      </button>
      <ul className="list-inside list-disc rounded-xl border border-zinc-200 bg-white py-3 pl-6 dark:border-zinc-800 dark:bg-zinc-900/40">
        {tasks.map((task) => (
          <li key={task.id} className="text-zinc-800 dark:text-zinc-200">
            {task.label}
          </li>
        ))}
      </ul>
      <CodeBlock title="Équivalent JSX généré (simplifié)">{`<ul>
${taskLines}
</ul>`}</CodeBlock>
    </section>
  );
}
