"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "../theme/ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const navItem = (href: string, label: string, mobile = false) => {
    const active = pathname === href;

    return (
      <Link
        href={href}
        onClick={() => mobile && setMobileOpen(false)}
        className={`text-lg transition-colors ${
          active ? "font-semibold" : "opacity-70 hover:opacity-100"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b ">
        <div className="container-custom h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            Hayk 
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navItem("/privacy", "Privacy")}
            {navItem("/infrastructure", "Infrastructure")}
            {navItem("/finance", "Finance")}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } bg-black/40`}
        onClick={() => setMobileOpen(false)}
      />

      {/* MOBILE PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-[cubic-bezier(.22,.61,.36,1)] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } bg-white dark:bg-black border-l border-neutral-200 dark:border-neutral-800`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-2xl"
        >
          ✕
        </button>

        <div className="p-8 pt-24 flex flex-col gap-8">
          <div className="text-xs uppercase tracking-wide opacity-50">
            Navigation
          </div>

          {navItem("/vpn", "Privacy", true)}
          {navItem("/hosting", "Infrastructure", true)}
          {navItem("/finance", "Finance", true)}
        </div>
      </div>
    </>
  );
}