"use client";

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
  const count = useCounter(bar.percent, 1600, trigger);

  return (
    <div>
      <div className="mb-2.5 flex justify-between">
        <span className="text-[15px] font-bold text-dark">{bar.label}</span>
        <span className="font-display font-bold text-saffron">{count}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-[#F0EBE5]">
        <div
          className="h-full rounded-full transition-[width] duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)]"
          style={{
            width: trigger ? `${bar.percent}%` : "0%",
            background: `linear-gradient(90deg, ${bar.colorFrom}, ${bar.colorTo})`,
          }}
        />
      </div>
    </div>
  );
}

export default function Impact({ impact }: { impact: ImpactContent }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);

  return (
    <section id="impact" className="bg-white px-8 py-28">
      <div className="mx-auto max-w-320">
        <div className="grid items-center gap-18 min-[900px]:grid-cols-2">
          <div ref={ref} className="reveal-left">
            <SectionHeading
              tag="Our Impact"
              heading={
                <>
                  Where every <em className="text-saffron italic">rupee</em> goes
                </>
              }
              sub="Full transparency is our promise. Here's how contributions were allocated this year."
            />
            <div className="mt-8 flex flex-col gap-7">
              {impact.bars.map((bar) => (
                <Bar key={bar.id} bar={bar} trigger={inView} />
              ))}
            </div>
          </div>

          <div className="reveal-right relative overflow-hidden rounded-[28px] shadow-[0_28px_72px_rgba(0,0,0,0.14)]">
            {impact.quote.imageUrl ? (
              <Image
                src={impact.quote.imageUrl}
                alt="Medical care"
                width={700}
                height={480}
                className="h-120 w-full object-cover"
              />
            ) : null}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-[rgba(20,20,22,0.85)] px-8 pt-10 pb-7 text-white">
              <p className="font-display text-[19px] leading-[1.5] italic">
                &ldquo;{impact.quote.text}&rdquo;
              </p>
              <span className="mt-2.5 block text-[13px] opacity-70">
                {impact.quote.attribution}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
