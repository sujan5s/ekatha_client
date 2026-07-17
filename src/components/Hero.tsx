"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const avatars = [11, 32, 45, 14];

export default function Hero() {
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
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1800&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-zoom !h-[120%] object-cover object-[center_30%]"
        />
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
            Unity in action,
            <br />
            <em className="text-saffron-light italic">compassion</em> in deed.
          </h1>

          <p
            className="fade-up mb-11 max-w-135 text-lg leading-[1.75] text-white/78"
            style={{ animationDelay: "0.6s" }}
          >
            We are Team Ekata — a community-led trust where members of Ganiga
            Samaj give what they can, and together we lift families through
            medical hardship. No middlemen. 100% direct support.
          </p>

          <div
            className="fade-up flex flex-wrap gap-4"
            style={{ animationDelay: "0.75s" }}
          >
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-9 py-4 text-[15px] font-bold text-white shadow-[0_8px_28px_rgba(232,93,4,0.32)] transition duration-200 hover:-translate-y-[3px] hover:scale-[1.03] hover:shadow-[0_16px_44px_rgba(232,93,4,0.48)]"
            >
              ♡ Donate Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/35 bg-white/10 px-[34px] py-4 text-[15px] font-semibold text-white backdrop-blur-lg transition duration-200 hover:-translate-y-[3px] hover:bg-white/20"
            >
              Our Mission →
            </a>
          </div>

          <div
            className="fade-up mt-11 flex items-center gap-4"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="flex">
              {avatars.map((id, i) => (
                <Image
                  key={id}
                  src={`https://i.pravatar.cc/80?img=${id}`}
                  alt=""
                  width={40}
                  height={40}
                  className={`h-10 w-10 rounded-full border-[2.5px] border-[rgba(20,20,22,0.9)] object-cover ${
                    i === 0 ? "" : "-ml-3"
                  }`}
                />
              ))}
            </div>
            <div className="text-[13px] leading-[1.5] text-white/70">
              <strong className="text-white">1,200+ members</strong> supporting
              our
              <br />
              community across Karnataka
            </div>
          </div>
        </div>
      </div>

      <div
        className="fade-in absolute bottom-[34px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        style={{ animationDelay: "1.6s" }}
      >
        <span className="text-[10px] tracking-[0.15em] text-white/40">
          SCROLL
        </span>
        <div className="scroll-line h-11 w-[1.5px] bg-white/30" />
      </div>
    </section>
  );
}
