"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import type { TestimonialContent } from "@/lib/content";

export default function Testimonials({
  testimonials,
}: {
  testimonials: TestimonialContent[];
}) {
  const list = testimonials && testimonials.length > 0 ? testimonials : [];
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Repeat items for seamless continuous looping
  const items = list.length < 6 ? [...list, ...list, ...list] : [...list, ...list];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-320 px-8">
        <div className="reveal mb-14 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <SectionHeading
            tag="Stories"
            heading={
              <>
                Lives we&rsquo;ve <em className="text-saffron italic">touched</em>
              </>
            }
            sub="Real experiences shared by families and Samaj members."
          />

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (scrollRef.current)
                  scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
              }}
              aria-label="Scroll left"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white text-base font-bold text-dark shadow-sm transition-all hover:border-saffron hover:bg-saffron hover:text-white"
            >
              ←
            </button>
            <button
              onClick={() => {
                if (scrollRef.current)
                  scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
              }}
              aria-label="Scroll right"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white text-base font-bold text-dark shadow-sm transition-all hover:border-saffron hover:bg-saffron hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Slow Moving Continuous Carousel Track */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="no-scrollbar w-full overflow-x-auto scroll-smooth py-4"
      >
        <div
          className="animate-story-scroll flex w-max gap-6 px-8 hover:[animation-play-state:paused]"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {items.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[340px] shrink-0 rounded-[24px] border-l-4 border-saffron bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_48px_rgba(0,0,0,0.09)] sm:w-[380px]"
            >
              <div className="mb-4 text-sm tracking-[2px] text-gold">★★★★★</div>
              <p className="mb-6 min-h-[85px] text-[15px] italic leading-[1.8] text-[#374151]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3.5 border-t border-black/5 pt-4">
                {t.avatarUrl ? (
                  <Image
                    src={t.avatarUrl}
                    alt={t.name}
                    width={46}
                    height={46}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-saffron/20"
                  />
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-saffron/15 text-sm font-bold text-saffron">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="text-sm font-bold text-dark">{t.name}</div>
                  <div className="text-xs font-medium text-muted">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
