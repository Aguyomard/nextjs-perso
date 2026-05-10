import { HelloMessage } from "@/components/hello/hello-message";
import { getServerBaseUrl } from "@/lib/url";
import type { HelloResponse } from "@/types/hello";

export default async function Home() {
  const res = await fetch(`${getServerBaseUrl()}/api/hello`, {
    cache: "no-store",
  });
  const data: HelloResponse = await res.json();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HelloMessage data={data} />
    </div>
  );
}
