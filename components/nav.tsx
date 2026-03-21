"use client";

import Link from "next/link";

const navLinks = [
  { href: "#tools", label: "Reviews" },
  { href: "#quiz", label: "Quiz" },
  { href: "#compare", label: "Compare" },
  { href: "#deep-dive", label: "Deep Dive" },
  { href: "#timeline", label: "Timeline" },
  { href: "#newsletter", label: "Newsletter" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 md:px-10 bg-bg/85 backdrop-blur-md border-b border-accent/15">
      <Link
        href="#"
        className="font-heading font-extrabold text-xl bg-gradient-to-br from-accent via-accent2 to-cyan bg-clip-text text-transparent bg-[length:200%_auto] animate-[logoShimmer_4s_linear_infinite]"
      >
        ToolCritic
      </Link>

      <ul className="hidden md:flex gap-7 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted text-sm font-medium transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#quiz"
        className="bg-gradient-to-br from-accent to-accent2 text-white border-none rounded-3xl px-5 py-2 text-sm font-semibold transition-all shadow-[0_0_18px_rgba(162,89,255,0.35)] hover:translate-y-[-1px] hover:shadow-[0_0_28px_rgba(162,89,255,0.6)]"
      >
        Find My Tool
      </Link>
    </nav>
  );
}
