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
    <nav
      className={`fixed inset-x-0 top-0 z-100 transition-[background,box-shadow,backdrop-filter] duration-400 ${
        scrolled
          ? "bg-white/97 shadow-[0_1px_24px_rgba(0,0,0,0.07)] backdrop-blur-xl"
          : ""
      }`}
    >
      <div className="mx-auto flex h-19 max-w-320 items-center justify-between px-8">
        <a href="#" className="flex items-center gap-[11px]">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-saffron to-gold shadow-[0_4px_16px_rgba(232,93,4,0.3)]">
            <span className="text-sm font-extrabold tracking-[-0.5px] text-white">
              TE
            </span>
          </div>
          <span
            className={`font-display text-[23px] font-bold transition-colors duration-400 ${
              scrolled ? "text-dark" : "text-white"
            }`}
          >
            Team <span className="text-saffron">Ekata</span>
          </span>
        </a>

        <div className="hidden items-center gap-[34px] min-[900px]:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link relative text-sm font-semibold transition-colors duration-200 ${
                scrolled ? "text-dark" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#apply"
          className="inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-[11px] text-sm font-bold text-white transition duration-200 hover:scale-105 hover:shadow-[0_6px_24px_rgba(232,93,4,0.35)]"
        >
          Donate ♡
        </a>
      </div>
    </nav>
  );
}
