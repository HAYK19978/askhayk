import { getClicks } from "@/lib/clickStorage";
import { redirect } from "next/navigation";
import { getImpressions } from "@/lib/impressionStorage";

type Click = {
  slug: string;
  variant?: string;
  timestamp: string;
  referer: string | null;
};

function groupBySlug(clicks: Click[]) {
  return clicks.reduce<Record<string, number>>((acc, click) => {
    acc[click.slug] = (acc[click.slug] || 0) + 1;
    return acc;
  }, {});
}

function groupByDate(clicks: Click[]) {
  return clicks.reduce<Record<string, number>>((acc, click) => {
    const date = click.timestamp.split("T")[0];
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});
}

function groupByReferer(clicks: Click[]) {
  return clicks.reduce<Record<string, number>>((acc, click) => {
    const ref = click.referer || "Direct";
    acc[ref] = (acc[ref] || 0) + 1;
    return acc;
  }, {});
}

function groupByVariant(clicks: Click[]) {
  return clicks.reduce<Record<string, number>>((acc, click) => {
    const variant = click.variant || "unknown";
    acc[variant] = (acc[variant] || 0) + 1;
    return acc;
  }, {});
}

export default async function StatsPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;

  // 🔐 защита
  if (key !== process.env.ADMIN_SECRET) {
    redirect("/");
  }

  const clicks = getClicks() as Click[];
  const impressions = getImpressions();

  const total = clicks.length;
  const bySlug = groupBySlug(clicks);
  const byDate = groupByDate(clicks);
  const byReferer = groupByReferer(clicks);
  const byVariant = groupByVariant(clicks);

  function groupImpressionsByVariant(impressions: any[]) {
    return impressions.reduce<Record<string, number>>((acc, imp) => {
      const variant = imp.variant || "unknown";
      acc[variant] = (acc[variant] || 0) + 1;
      return acc;
    }, {});
  }

  const impressionsByVariant = groupImpressionsByVariant(impressions);

  return (
    <main className="max-w-[1000px] mx-auto px-6 pt-28 pb-24">
      <h1 className="text-3xl font-semibold mb-12">Affiliate Dashboard</h1>

      {/* TOTAL */}
      <section className="mb-16">
        <div className="text-sm text-[rgb(var(--color-text-muted))] mb-2">
          Total Clicks
        </div>
        <div className="text-4xl font-semibold">{total}</div>
      </section>

      {/* BY PRODUCT */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Clicks by Product</h2>

        <div className="space-y-4">
          {Object.entries(bySlug).map(([slug, count]) => (
            <div key={slug} className="flex justify-between">
              <span>{slug}</span>
              <span>{count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BY VARIANT */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Clicks by Variant</h2>

        <div className="space-y-4">
          {Object.entries(byVariant).map(([variant, count]) => (
            <div key={variant} className="flex justify-between">
              <span>Variant {variant}</span>
              <span>{count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BY DATE */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Clicks by Date</h2>

        <div className="space-y-4">
          {Object.entries(byDate).map(([date, count]) => (
            <div key={date} className="flex justify-between">
              <span>{date}</span>
              <span>{count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BY REFERER */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Traffic Sources</h2>

        <div className="space-y-4">
          {Object.entries(byReferer).map(([ref, count]) => (
            <div key={ref} className="flex justify-between">
              <span className="truncate max-w-[70%]">{ref}</span>
              <span>{count}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Impressions by Variant</h2>

        <div className="space-y-4">
          {Object.entries(impressionsByVariant).map(([variant, count]) => (
            <div key={variant} className="flex justify-between">
              <span>Variant {variant}</span>
              <span>{count}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
