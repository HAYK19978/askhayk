"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Variant = "A" | "B";

export default function VpnTopPick() {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const existing = localStorage.getItem("ab_variant");

    let chosen: Variant;

    if (existing === "A" || existing === "B") {
      chosen = existing;
    } else {
      chosen = Math.random() < 0.5 ? "A" : "B";
      localStorage.setItem("ab_variant", chosen);
    }

    setVariant(chosen);
  }, []);

  if (!variant) return null;

  const product =
    variant === "A"
      ? {
          name: "NordVPN",
          slug: "nordvpn",
          title: "Best Overall Balance",
          description:
            "Strong jurisdiction structure, audited no-log policy, high-speed infrastructure and solid protocol support.",
        }
      : {
          name: "Surfshark",
          slug: "surfshark",
          title: "Best Value Performance",
          description:
            "Competitive pricing, audited no-log policy and strong multi-device support with excellent speed-to-cost ratio.",
        };

  return (
    <section className="mb-24 border p-10 rounded-xl border-neutral-200 dark:border-neutral-800">
      <div className="text-sm uppercase tracking-wide opacity-50 mb-3">
        Editor’s Choice
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        {product.name} — {product.title}
      </h2>

      <p className="opacity-70 mb-6">
        {product.description}
      </p>

      <Link
        href={`/go/${product.slug}?v=${variant}`}
        className="inline-block px-6 py-3 rounded-md
        bg-black text-white dark:bg-white dark:text-black
        hover:opacity-80 transition"
      >
        Visit {product.name}
      </Link>
    </section>
  );
}