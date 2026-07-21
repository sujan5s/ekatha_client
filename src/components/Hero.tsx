"use client";

import { useEffect, useRef } from "react";
import type { HeroContent } from "@/lib/content";
import HeroSlideshow from "./HeroSlideshow";

import SpecularButton from "./SpecularButton";

export default function Hero({ hero }: { hero: HeroContent }) {
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax is written straight to the node rather than through state: this
  // fires on every scroll frame and must not re-render the tree.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current && y < window.innerHeight) {
        bgRef.current.style.transform = `translateY(${y * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-175 overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 h-[120%] will-change-transform">
        <HeroSlideshow slides={hero.slides} />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(20,20,22,0.90) 38%, rgba(20,20,22,0.45) 100%)",
        }}
      />
      <div className="hero-grain absolute inset-0 opacity-5" />

      <div className="relative mx-auto flex h-full max-w-320 items-center px-8 pt-19">
        <div className="max-w-175">
          <h1
            className="fade-up mb-7 font-display text-[clamp(46px,7vw,88px)] leading-[1.06] font-semibold tracking-[-0.02em] text-white"
            style={{ animationDelay: "0.45s" }}
          >
            {hero.headline}
            <br />
            <em className="text-saffron-light italic">{hero.headlineEm}</em>{" "}
            {hero.headlineEnd}
          </h1>

          <p
            className="fade-up mb-11 max-w-135 text-lg leading-[1.75] text-white/78"
            style={{ animationDelay: "0.6s" }}
          >
            {hero.subText}
          </p>

          <div
            className="fade-up flex flex-wrap gap-4"
            style={{ animationDelay: "0.75s" }}
          >
            <SpecularButton
              href="#apply"
              size="lg"
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
              {hero.ctaPrimary}
            </SpecularButton>
            <SpecularButton
              href="#about"
              size="lg"
              radius={9999}
              tint="#ffffff"
              tintOpacity={0.12}
              blur={16}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#888888"
              intensity={1}
              followMouse
              proximity={300}
            >
              {hero.ctaGhost}
            </SpecularButton>
          </div>

          <div
            className="fade-up mt-11 flex items-center gap-4"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="text-[13px] leading-[1.5] text-white/70">
              {hero.trustText}
            </div>
          </div>
        </div>
      </div>

      <div
        className="fade-in absolute bottom-[34px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        style={{ animationDelay: "1.6s" }}
      >
        <span className="text-[10px] tracking-[0.15em] text-white/40">SCROLL</span>
        <div className="scroll-line h-11 w-[1.5px] bg-white/30" />
      </div>
    </section>
  );
}
