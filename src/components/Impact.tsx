"use client";

import Image from "next/image";
import { useCounter, useInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

const bars = [
  {
    label: "Surgery & Hospitalization",
    value: 58,
    fill: "linear-gradient(90deg,#E85D04,#D4A017)",
  },
  {
    label: "Long-term Medication",
    value: 22,
    fill: "linear-gradient(90deg,#2D6A4F,#52B788)",
  },
  {
    label: "Emergency Relief",
    value: 14,
    fill: "linear-gradient(90deg,#2563EB,#60A5FA)",
  },
  {
    label: "Admin & Operations",
    value: 6,
    fill: "linear-gradient(90deg,#9333EA,#C084FC)",
  },
];

function Bar({
  label,
  value,
  fill,
  trigger,
}: {
  label: string;
  value: number;
  fill: string;
  trigger: boolean;
}) {
  const count = useCounter(value, 1600, trigger);

  return (
    <div>
      <div className="mb-2.5 flex justify-between">
        <span className="text-[15px] font-bold text-dark">{label}</span>
        <span className="font-display font-bold text-saffron">{count}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-[#F0EBE5]">
        <div
          className="h-full rounded-full transition-[width] duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ width: trigger ? `${value}%` : "0%", background: fill }}
        />
      </div>
    </div>
  );
}

export default function Impact() {
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
              {bars.map((bar) => (
                <Bar key={bar.label} {...bar} trigger={inView} />
              ))}
            </div>
          </div>

          <div className="reveal-right relative overflow-hidden rounded-[28px] shadow-[0_28px_72px_rgba(0,0,0,0.14)]">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80"
              alt="Medical care"
              width={700}
              height={480}
              className="h-120 w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-[rgba(20,20,22,0.85)] px-8 pt-10 pb-7 text-white">
              <p className="font-display text-[19px] leading-[1.5] italic">
                &ldquo;They didn&rsquo;t just fund the treatment — they gave my
                family hope when we had none.&rdquo;
              </p>
              <span className="mt-2.5 block text-[13px] opacity-70">
                — A beneficiary family, Udupi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
