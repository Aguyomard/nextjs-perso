import type { HelloResponse } from "@/types/hello";

export function getHelloPayload(): HelloResponse {
  return { message: "Hello World v5" };
}
