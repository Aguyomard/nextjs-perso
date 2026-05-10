import { NextResponse } from "next/server";

import { getHelloPayload } from "@/lib/server/hello";

export function GET() {
  return NextResponse.json(getHelloPayload());
}
