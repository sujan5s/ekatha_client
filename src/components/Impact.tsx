"use client";

import { useState } from "react";
import Image from "next/image";
import { useCounter, useInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import type { ImpactContent } from "@/lib/content";

function Bar({
  bar,
  trigger,
}: {
  bar: ImpactContent["bars"][number];
  trigger: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const count = useCounter(bar.percent, 1600, trigger);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-transparent p-4.5 transition-all duration-300 ease-out hover:border-saffron/25 hover:bg-gradient-to-r hover:from-saffron/8 hover:via-white hover:to-surface hover:shadow-[0_14px_36px_rgba(232,93,4,0.1)] hover:-translate-y-1 hover:scale-[1.015]"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="h-3 w-3 rounded-full transition-transform duration-300 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(232,93,4,0.5)]"
            style={{ background: `linear-gradient(135deg, ${bar.colorFrom}, ${bar.colorTo})` }}
          />
          <span className="text-[15.5px] font-bold text-dark transition-colors duration-300 group-hover:text-saffron-dark">
            {bar.label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`font-display text-lg font-bold transition-all duration-300 ${
              hovered
                ? "scale-115 text-saffron drop-shadow-[0_2px_10px_rgba(232,93,4,0.35)]"
                : "text-saffron"
            }`}
          >
            {count}%
          </span>
        </div>
      </div>

      <div className="relative h-3.5 w-full overflow-hidden rounded-full bg-[#EFEAE4] p-[2px] transition-all duration-300 group-hover:h-5 group-hover:bg-[#E2D8CC] group-hover:shadow-inner">
        <div
          className="relative h-full rounded-full transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
          style={{
            width: trigger ? `${bar.percent}%` : "0%",
            background: `linear-gradient(90deg, ${bar.colorFrom}, ${bar.colorTo})`,
            boxShadow: hovered
              ? `0 0 22px ${bar.colorTo}cc, 0 4px 14px ${bar.colorFrom}88`
              : "none",
          }}
        >
          {/* Animated shimmer light effect moving across progress bar */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.75)_50%,transparent_100%)] animate-bar-shimmer" />

          {/* Glowing pulse indicator dot at tip of progress bar */}
          <div className="absolute top-1/2 right-1 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125 shadow-[0_0_10px_rgba(255,255,255,1)]" />
        </div>
      </div>
    </div>
  );
}

export default function Impact({ impact }: { impact: ImpactContent }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);

  return (
    <section id="impact" className="bg-white px-8 py-28">
      <div className="mx-auto max-w-320">
        <div ref={ref} className="reveal mb-12">
          <SectionHeading
            tag="Our Impact"
            heading={
              <>
                Where every <em className="text-saffron italic">rupee</em> goes
              </>
            }
            sub="Full transparency is our promise. Here's how contributions were allocated this year."
          />
        </div>

        <div className="grid items-stretch gap-12 min-[900px]:grid-cols-2">
          {/* Left Column: Percentage Bars */}
          <div className="reveal-left flex flex-col justify-center gap-3">
            {impact.bars.map((bar) => (
              <Bar key={bar.id} bar={bar} trigger={inView} />
            ))}
          </div>

          {/* Right Column: Photo Card aligned with the percentage bars */}
          <div className="reveal-right group relative overflow-hidden rounded-[28px] shadow-[0_28px_72px_rgba(0,0,0,0.14)] transition-all duration-500 hover:shadow-[0_36px_84px_rgba(0,0,0,0.22)]">
            {impact.quote.imageUrl ? (
              <Image
                src={impact.quote.imageUrl}
                alt="Medical care"
                width={700}
                height={480}
                className="h-full min-h-[400px] w-full object-cover object-[center_35%] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover-zoom-in-out"
              />
            ) : null}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent via-[rgba(20,20,22,0.6)] to-[rgba(20,20,22,0.92)] px-8 pt-12 pb-8 text-white transition-colors duration-300 group-hover:to-[rgba(20,20,22,0.96)]">
              <p className="font-display text-[19px] leading-[1.5] italic transition-transform duration-300 group-hover:-translate-y-1">
                &ldquo;{impact.quote.text}&rdquo;
              </p>
              <span className="mt-2.5 block text-[13px] opacity-70 transition-opacity duration-300 group-hover:opacity-95">
                {impact.quote.attribution}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
