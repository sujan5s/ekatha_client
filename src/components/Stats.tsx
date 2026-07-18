"use client";

import { useCounter, useInView } from "@/lib/hooks";
import type { StatContent } from "@/lib/content";

function Stat({
  stat,
  trigger,
  index,
  total,
}: {
  stat: StatContent;
  trigger: boolean;
  index: number;
  total: number;
}) {
  const value = useCounter(stat.value, 2200, trigger);

  // Dividers sit between columns only, dropping at the row edge (which moves
  // from the last cell to the 2nd once the grid is two-up).
  const isRowEnd = index === total - 1;
  const divider = isRowEnd
    ? ""
    : index % 2 === 1
      ? "border-r border-[#EDE8E3] max-[900px]:border-r-0"
      : "border-r border-[#EDE8E3]";

  return (
    <div className={`reveal d${index + 1} px-6 py-7 text-center ${divider}`}>
      <div className="mb-[10px] text-[26px]">{stat.icon}</div>
      <div className="font-display text-[52px] leading-none font-bold text-saffron">
        {value.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="mt-2 text-[13px] font-medium tracking-[0.02em] text-muted">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats({ stats }: { stats: StatContent[] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);

  return (
    <div
      ref={ref}
      className="relative z-5 border-t-4 border-saffron bg-white shadow-[0_8px_48px_rgba(0,0,0,0.07)]"
    >
      <div className="mx-auto grid max-w-320 grid-cols-2 px-8 py-4 min-[900px]:grid-cols-4">
        {stats.map((stat, i) => (
          <Stat
            key={stat.id}
            stat={stat}
            trigger={inView}
            index={i}
            total={stats.length}
          />
        ))}
      </div>
    </div>
  );
}
