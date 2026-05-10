export function RecapSection() {
  return (
    <section id="recap" className="scroll-mt-28 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">Récapitulatif</h2>
      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-100 dark:bg-zinc-900">
            <tr>
              <th className="px-4 py-2 font-medium">Besoin</th>
              <th className="px-4 py-2 font-medium">Vue (template)</th>
              <th className="px-4 py-2 font-medium">JSX</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr className="bg-white dark:bg-zinc-950/50">
              <td className="px-4 py-3">Afficher si vrai</td>
              <td className="px-4 py-3 font-mono text-xs">v-if</td>
              <td className="px-4 py-3 font-mono text-xs">
                {"{"}cond && &lt;… /&gt;{"}"}
              </td>
            </tr>
            <tr className="bg-white dark:bg-zinc-950/50">
              <td className="px-4 py-3">Sinon autre chose</td>
              <td className="px-4 py-3 font-mono text-xs">v-if / v-else</td>
              <td className="px-4 py-3 font-mono text-xs">
                {"{"}cond ? &lt;A /&gt; : &lt;B /&gt;{"}"}
              </td>
            </tr>
            <tr className="bg-white dark:bg-zinc-950/50">
              <td className="px-4 py-3">Répéter sur une liste</td>
              <td className="px-4 py-3 font-mono text-xs">v-for</td>
              <td className="px-4 py-3 font-mono text-xs">items.map(…)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Tu peux revenir à cette page avec l'URL{" "}
        <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono dark:bg-zinc-800">
          /cours/jsx-vs-vue
        </code>
        .
      </p>
    </section>
  );
}
