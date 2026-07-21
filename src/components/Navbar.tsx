"use client";

import { useScrollY } from "@/lib/hooks";

const links = [
  { href: "#about", label: "About" },
  { href: "#activities", label: "Activities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const scrolled = useScrollY() > 50;

  return (
    <header className="fixed inset-x-0 top-0 z-100 pointer-events-none flex justify-center px-4 pt-3 transition-all duration-500">
      <nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "h-16 w-full max-w-5xl rounded-full bg-white/75 px-6 shadow-lg shadow-black/5 backdrop-blur-md border border-white/50 ring-1 ring-black/5"
            : "h-20 w-full max-w-7xl px-8 bg-transparent"
        }`}
      >
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-saffron to-gold shadow-[0_4px_16px_rgba(232,93,4,0.3)]">
            <span className="text-sm font-extrabold tracking-[-0.5px] text-white">
              TE
            </span>
          </div>
          <span
            className={`font-display text-2xl font-bold transition-colors duration-300 ${
              scrolled ? "text-dark" : "text-white"
            }`}
          >
            Team <span className="text-saffron">Ekata</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 min-[900px]:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link relative text-sm font-semibold transition-colors duration-200 ${
                scrolled ? "text-dark/90 hover:text-saffron" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#apply"
          className="inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-2.5 text-sm font-bold text-white transition duration-200 hover:scale-105 hover:shadow-[0_6px_24px_rgba(232,93,4,0.35)]"
        >
          Donate ♡
        </a>
      </nav>
    </header>
  );
}
