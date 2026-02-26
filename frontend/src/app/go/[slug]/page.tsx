import { redirect } from "next/navigation";
import { redirectMap } from "@/lib/redirects";
import { headers } from "next/headers";
import { saveClick } from "@/lib/clickStorage";

export default async function GoPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ v?: string }>;
}) {
  const { slug } = await params;
  const { v } = await searchParams;

  const destination = redirectMap[slug];

  if (!destination) {
    redirect("/");
  }

  const headersList = await headers();

  const userAgent = headersList.get("user-agent");
  const referer = headersList.get("referer");
  const ip =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip");

  saveClick({
    slug,
    variant: v || "unknown",
    timestamp: new Date().toISOString(),
    ip,
    referer,
    userAgent,
  });

  redirect(destination);
}