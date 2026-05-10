import { CodeBlock } from "../code-block";

export function DirectivesSection() {
  return (
    <section id="directives" className="scroll-mt-28 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">
        Pas de <code className="font-mono text-xl">v-if</code> /{" "}
        <code className="font-mono text-xl">v-for</code>
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        JSX compile vers des appels de fonctions ; les enfants sont des{" "}
        <em>expressions</em>. À la place des directives, on utilise des
        opérateurs et des méthodes de tableau.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Vue (template)
          </p>
          <CodeBlock>{`<div v-if="visible">OK</div>
<ul>
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
</ul>`}</CodeBlock>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            React (JSX)
          </p>
          <CodeBlock>{`{visible && <div>OK</div>}
<ul>
  {items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>`}</CodeBlock>
        </div>
      </div>
    </section>
  );
}
