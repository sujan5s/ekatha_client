"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SpecularButton from "@/components/SpecularButton";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#activities", label: "Activities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#team", label: "Team" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = !pathname || pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) {
        setScrolled(true);
      } else {
        setScrolled(window.scrollY > 50);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center px-2 sm:px-4 pt-2 sm:pt-3 transition-all duration-500 w-full max-w-full overflow-hidden">
      <nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "h-14 sm:h-16 w-full max-w-5xl rounded-full bg-white/85 px-3 sm:px-6 shadow-lg shadow-black/5 backdrop-blur-md border border-white/50 ring-1 ring-black/5"
            : "h-16 sm:h-20 w-full max-w-7xl px-3 sm:px-8 bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10 shadow-[0_4px_16px_rgba(232,93,4,0.25)] border border-white/20">
            <Image
              src="/logo.webp"
              alt="Team Ekatha Logo"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span
            className={`font-display text-lg sm:text-2xl font-bold whitespace-nowrap transition-colors duration-300 ${
              scrolled ? "text-dark" : "text-white"
            }`}
          >
            Team <span className="text-saffron">Ekatha</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 min-[900px]:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link relative text-sm font-semibold transition-colors duration-200 ${
                scrolled ? "text-dark/90 hover:text-saffron" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="shrink-0 max-w-[120px] sm:max-w-none">
          <SpecularButton
            href="/#apply"
            size="sm"
            radius={9999}
            tint="#e85d04"
            tintOpacity={1}
            textColor="#ffffff"
            lineColor="#ffffff"
            baseColor="#c44900"
            intensity={1.2}
            autoAnimate
            speed={0.4}
          >
            Donate ♡
          </SpecularButton>
        </div>
      </nav>
    </header>
  );
}
