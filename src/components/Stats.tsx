"use client";

import { useCounter, useInView } from "@/lib/hooks";

const stats = [
  { icon: "🤝", target: 248, suffix: "+", label: "Families Helped" },
  { icon: "💰", target: 42, suffix: "L+", label: "Total Donations (₹)" },
  { icon: "👥", target: 1200, suffix: "+", label: "Active Members" },
  { icon: "🗓️", target: 6, suffix: " yrs", label: "Years of Service" },
];

function Stat({
  icon,
  target,
  suffix,
  label,
  trigger,
  index,
}: {
  icon: string;
  target: number;
  suffix: string;
  label: string;
  trigger: boolean;
  index: number;
}) {
  const value = useCounter(target, 2200, trigger);

  // Dividers sit between columns only, so they must drop at the row edge —
  // which moves from the 4th cell to the 2nd once the grid is two-up.
  const divider =
    index === 3
      ? ""
      : index === 1
        ? "border-r border-[#EDE8E3] max-[900px]:border-r-0"
        : "border-r border-[#EDE8E3]";

  return (
    <div
      className={`reveal d${index + 1} px-6 py-7 text-center ${divider}`}
    >
      <div className="mb-[10px] text-[26px]">{icon}</div>
      <div className="font-display text-[52px] leading-none font-bold text-saffron">
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-[13px] font-medium tracking-[0.02em] text-muted">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);

  return (
    <div
      ref={ref}
      className="relative z-5 border-t-4 border-saffron bg-white shadow-[0_8px_48px_rgba(0,0,0,0.07)]"
    >
      <div className="mx-auto grid max-w-320 grid-cols-2 px-8 py-4 min-[900px]:grid-cols-4">
        {stats.map((stat, i) => (
          <Stat key={stat.label} {...stat} trigger={inView} index={i} />
        ))}
      </div>
    </div>
  );
}
