import Header from "@/components/layout/Header";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="container-custom py-24">
        <section className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Structured Thinking. Real-World Testing.
          </h1>

          <p className="text-lg mb-8 text-neutral-600 dark:text-neutral-400">
            Independent research across privacy, infrastructure and finance.
            No marketing noise — only mechanisms, trade-offs and data.
          </p>

          <Link
            href="/privacy"
            className="inline-block px-6 py-3 rounded-lg font-medium transition"
            style={{
              background: "rgb(var(--primary))",
              color: "rgb(var(--background))",
            }}
          >
            Explore Research
          </Link>
        </section>

        <section className="mt-24">
          <h2 className="text-2xl font-semibold mb-10">Core Areas</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/privacy"
              className="p-8 rounded-xl border transition hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: "rgb(var(--border))" }}
            >
              <h3 className="font-semibold mb-3">Privacy & VPN</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Jurisdiction risk, encryption standards and real-world testing.
              </p>
            </Link>

            <Link
              href="/infrastructure"
              className="p-8 rounded-xl border transition hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: "rgb(var(--border))" }}
            >
              <h3 className="font-semibold mb-3">Infrastructure</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                VPS performance, cloud trade-offs and cost efficiency.
              </p>
            </Link>

            <Link
              href="/finance"
              className="p-8 rounded-xl border transition hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: "rgb(var(--border))" }}
            >
              <h3 className="font-semibold mb-3">Finance & Tools</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Fintech platforms, fee structures and risk analysis.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}