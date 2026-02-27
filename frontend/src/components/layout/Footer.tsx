import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-[rgb(var(--border))]">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight mb-4">
              Hayk 
            </h3>
            <p className="text-sm text-[rgb(var(--foreground))]/70 leading-relaxed max-w-xs">
              Independent research across privacy, infrastructure and finance.
              Structured thinking. Real-world testing. No marketing noise.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider text-[rgb(var(--foreground))]/60">
              Research Areas
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:opacity-70 transition"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/infrastructure"
                  className="hover:opacity-70 transition"
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/finance"
                  className="hover:opacity-70 transition"
                >
                  Finance
                </Link>
              </li>
            </ul>
          </div>

          {/* Meta */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider text-[rgb(var(--foreground))]/60">
              Platform
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/methodology"
                  className="hover:opacity-70 transition"
                >
                  Research Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/transparency"
                  className="hover:opacity-70 transition"
                >
                  Transparency
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@askhayk.com"
                  className="hover:opacity-70 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 pt-8 border-t border-[rgb(var(--border))] flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-[rgb(var(--foreground))]/50">
          <p>© {new Date().getFullYear()} Hayk Framework</p>
          <p className="mt-2 md:mt-0">
            Built with structured thinking.
          </p>
        </div>
      </div>
    </footer>
  );
}