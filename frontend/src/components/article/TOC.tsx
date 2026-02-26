"use client";

import { useEffect, useState } from "react";

export default function TOC() {
  const [headings, setHeadings] = useState<
    { id: string; text: string }[]
  >([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(".article-content h2")
    );

    const mapped = elements.map((el) => {
      if (!el.id) {
        el.id = el.textContent!
          .toLowerCase()
          .replace(/\s+/g, "-");
      }

      return {
        id: el.id,
        text: el.textContent || "",
      };
    });

    setHeadings(mapped);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  if (!headings.length) return null;

  return (
    <aside className="hidden lg:block fixed right-12 top-40 w-52 text-sm">
      <div className="text-xs uppercase tracking-wide mb-4 text-[rgb(var(--color-text-muted))]">
        On this page
      </div>

      <ul className="space-y-3">
        {headings.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`transition ${
                active === item.id
                  ? "font-semibold"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}