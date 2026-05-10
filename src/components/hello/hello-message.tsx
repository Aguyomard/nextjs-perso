import type { HelloResponse } from "@/types/hello";

type HelloMessageProps = {
  data: HelloResponse;
};

export function HelloMessage({ data }: HelloMessageProps) {
  return (
    <main className="flex flex-col items-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {data.message}
      </h1>
      <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
        Message served by{" "}
        <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
          GET /api/hello
        </code>
      </p>
    </main>
  );
}
