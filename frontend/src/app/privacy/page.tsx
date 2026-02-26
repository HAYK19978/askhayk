import Link from "next/link";
import VpnTopPick from "@/components/vpn/VpnTopPick";
import { vpnProviders } from "@/lib/vpnData";
import Header from "@/components/layout/Header";

export default function PrivacyPage() {
  return (
    <>
      <Header />

    <main className="max-w-[1100px] mx-auto px-6 pt-28 pb-24">
      {/* HERO */}   
      <section className="mb-24 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          VPN Research & Real-World Testing
        </h1>

        <p className="text-lg opacity-70 leading-relaxed">
          Independent analysis of logging policies, jurisdiction risks,
          encryption standards and real-world latency testing. No marketing
          noise — only trade-offs and evidence.
        </p>
      </section>

      {/* TOP PICK */}
      <section className="mb-24 border p-10 rounded-xl border-neutral-200 dark:border-neutral-800">
        <div className="text-sm uppercase tracking-wide opacity-50 mb-3">
          Editor’s Choice
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          NordVPN — Best Overall Balance
        </h2>

        <p className="opacity-70 mb-6">
          Strong jurisdiction structure, audited no-log policy, high-speed
          infrastructure and solid protocol support.
        </p>

        <Link
          href="/go/nordvpn"
          className="inline-block px-6 py-3 rounded-md
          bg-black text-white dark:bg-white dark:text-black
          hover:opacity-80 transition"
        >
          Visit NordVPN
        </Link>
      </section>

      {/* COMPARISON TABLE */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-10">
          VPN Comparison Overview
        </h2>

        <div className="overflow-x-auto border rounded-xl border-neutral-200 dark:border-neutral-800">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="p-4">Provider</th>
                <th className="p-4">Jurisdiction</th>
                <th className="p-4">No-Log Audit</th>
                <th className="p-4">Speed</th>
                <th className="p-4">Link</th>
              </tr>
            </thead>
            <tbody>
              {vpnProviders.map((vpn) => (
                <tr
                  key={vpn.slug}
                  className="border-b border-neutral-200 dark:border-neutral-800"
                >
                  <td className="p-4 font-medium">{vpn.name}</td>
                  <td className="p-4">{vpn.jurisdiction}</td>
                  <td className="p-4">{vpn.audit}</td>
                  <td className="p-4">{vpn.speed}</td>
                  <td className="p-4">
                    <Link href={`/go/${vpn.slug}`} className="underline">
                      Visit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="mb-24 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6">Testing Methodology</h2>

        <ul className="space-y-4 opacity-70">
          <li>• Jurisdiction and legal exposure analysis</li>
          <li>• Independent audit verification</li>
          <li>• Speed testing across multiple regions</li>
          <li>• Protocol and encryption evaluation</li>
          <li>• Real-world use case testing</li>
        </ul>
      </section>

      {/* ARTICLES */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">Latest VPN Research</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <Link href="/vpn/best-vpn-for-privacy" className="group">
            <div className="border p-6 rounded-xl border-neutral-200 dark:border-neutral-800 transition hover:-translate-y-1">
              <h3 className="text-lg font-medium mb-3">
                Best VPN for Privacy in 2026
              </h3>
              <p className="opacity-70 text-sm">
                Deep analysis of logging structures, audits and jurisdiction
                trade-offs.
              </p>
            </div>
          </Link>

          <Link href="/vpn/vpn-vs-tor" className="group">
            <div className="border p-6 rounded-xl border-neutral-200 dark:border-neutral-800 transition hover:-translate-y-1">
              <h3 className="text-lg font-medium mb-3">
                VPN vs Tor — When Each Makes Sense
              </h3>
              <p className="opacity-70 text-sm">
                Mechanism comparison, risk models and real-world limitations.
              </p>
            </div>
          </Link>
        </div>
      </section>
      <VpnTopPick />
    </main>
    </>

  );
}
