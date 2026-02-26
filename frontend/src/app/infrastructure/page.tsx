import Header from "@/components/layout/Header";

export default function InfrastructurePage() {
  return (
    <>
      <Header />

      <main className="container-custom py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">
            Infrastructure Research
          </h1>

          <p className="mb-6 text-neutral-600 dark:text-neutral-400">
            Deep analysis of VPS providers, cloud trade-offs, pricing models,
            performance benchmarks and operational risks.
          </p>

          <div
            className="p-8 rounded-xl border"
            style={{ borderColor: "rgb(var(--border))" }}
          >
            <h2 className="text-xl font-semibold mb-4">
              Evaluation Framework
            </h2>

            <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
              <li>• Performance benchmarks</li>
              <li>• Cost efficiency</li>
              <li>• Jurisdiction & legal risk</li>
              <li>• Scalability limits</li>
              <li>• Real-world deployment testing</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}