import Header from "@/components/layout/Header";

export default function FinancePage() {
  return (
    <>
      <Header />

      <main className="container-custom py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">
            Finance & Tools Research
          </h1>

          <p className="mb-6 text-neutral-600 dark:text-neutral-400">
            Analysis of fintech platforms, trading tools, fee structures,
            hidden spreads and risk mechanisms.
          </p>

          <div
            className="p-8 rounded-xl border"
            style={{ borderColor: "rgb(var(--border))" }}
          >
            <h2 className="text-xl font-semibold mb-4">
              Research Structure
            </h2>

            <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
              <li>• Fee breakdown</li>
              <li>• Risk exposure model</li>
              <li>• Liquidity & spreads</li>
              <li>• Hidden costs</li>
              <li>• Long-term sustainability</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}