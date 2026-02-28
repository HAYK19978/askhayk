"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeToggle from "../theme/ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <>
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
          borderColor: isDark ? "#262626" : "#e5e5e5",
        }}
      >
        <div className="container-custom flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-lg">
            Hayk Framework
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/privacy">Privacy</Link>
            <Link href="/infrastructure">Infrastructure</Link>
            <Link href="/finance">Finance</Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div
            className="absolute right-0 top-0 h-full w-80 shadow-2xl p-8"
            style={{
              backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
              borderLeft: `1px solid ${
                isDark ? "#262626" : "#e5e5e5"
              }`,
            }}
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-semibold">Navigation</span>
              <button
                onClick={() => setOpen(false)}
                className="text-2xl"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-xl">
              <Link href="/privacy" onClick={() => setOpen(false)}>
                Privacy
              </Link>
              <Link href="/infrastructure" onClick={() => setOpen(false)}>
                Infrastructure
              </Link>
              <Link href="/finance" onClick={() => setOpen(false)}>
                Finance
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}