import { NextResponse } from "next/server";
import { saveImpression } from "@/lib/impressionStorage";

export async function POST(req: Request) {
  const body = await req.json();

  saveImpression({
    variant: body.variant,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}