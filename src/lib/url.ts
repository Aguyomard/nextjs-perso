import { env } from "@/env";

/**
 * Base URL for server-side fetch to this app's routes (SSR, Route Handlers).
 */
export function getServerBaseUrl(): string {
  if (env.NEXT_PUBLIC_APP_URL) {
    return env.NEXT_PUBLIC_APP_URL;
  }
  if (env.VERCEL_URL) {
    return `https://${env.VERCEL_URL}`;
  }
  return `http://127.0.0.1:${env.PORT}`;
}
