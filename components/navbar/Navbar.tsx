"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/data/site";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-base-border/80 bg-white/80 backdrop-blur-md dark:border-dark-border/80 dark:bg-dark-bg/80">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-base-ink dark:text-dark-ink"
          onClick={() => setOpen(false)}
        >
          {profile.name_eng}
          <span className="text-accent">.dev</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-base-ink/80 transition-colors hover:text-accent dark:text-dark-ink/80"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link href="/about-me#contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Get in Touch
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-base-border text-base-ink dark:border-dark-border dark:text-dark-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-base-border bg-white px-5 pb-6 pt-2 md:hidden dark:border-dark-border dark:bg-dark-bg">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-sm font-medium text-base-ink/85 hover:bg-base-section dark:text-dark-ink/85 dark:hover:bg-dark-section"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/about-me#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full text-sm"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
