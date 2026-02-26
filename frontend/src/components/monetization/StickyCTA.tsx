"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Variant = "A" | "B";

export default function StickyCTA() {
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

    // 🔥 логируем impression
    fetch("/api/impression", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ variant: chosen }),
    });
  }, []);

  if (!variant) return null;

  const product =
    variant === "A"
      ? {
          name: "NordVPN",
          slug: "nordvpn",
          label: "Best Overall",
        }
      : {
          name: "Surfshark",
          slug: "surfshark",
          label: "Best Value",
        };

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      <div
        className="p-6 rounded-xl shadow-lg max-w-xs"
        style={{
          background: "rgb(var(--color-surface))",
          border: "1px solid rgb(var(--color-border))",
        }}
      >
        <div className="text-sm mb-2 text-[rgb(var(--color-text-muted))]">
          Top Recommendation
        </div>

        <div className="font-semibold mb-4">
          {product.name} — {product.label}
        </div>

        <Link
          href={`/go/${product.slug}?v=${variant}`}
          className="block text-center px-4 py-2 rounded-md
          bg-black text-white dark:bg-white dark:text-black
          hover:opacity-80 transition"
        >
          Visit {product.name}
        </Link>
      </div>
    </div>
  );
}