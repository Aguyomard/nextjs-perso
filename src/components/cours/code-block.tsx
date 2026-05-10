export function CodeBlock({
  title,
  children,
}: {
  title?: string;
  children: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950 text-zinc-100 dark:border-zinc-800">
      {title ? (
        <div className="border-b border-zinc-800 px-3 py-2 text-xs font-medium text-zinc-400">
          {title}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
        <code className="font-mono">{children}</code>
      </pre>
    </div>
  );
}
