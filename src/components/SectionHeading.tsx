import type { ReactNode } from "react";

/** Section tag + heading + optional subtitle, shared by most sections. */
export default function SectionHeading({
  tag,
  heading,
  sub,
  centered = false,
  onDark = false,
  subClassName = "",
}: {
  tag: string;
  heading: ReactNode;
  sub?: ReactNode;
  centered?: boolean;
  onDark?: boolean;
  subClassName?: string;
}) {
  return (
    <div className={centered ? "text-center" : undefined}>
      <span
        className={`inline-block rounded-full px-3.5 py-1.5 text-xs font-bold tracking-[0.18em] uppercase ${
          onDark
            ? "bg-saffron-light/12 text-saffron-light"
            : "bg-saffron/8 text-saffron"
        }`}
      >
        {tag}
      </span>
      <h2
        className={`mt-4 font-display text-[clamp(32px,4vw,48px)] leading-[1.14] font-semibold ${
          onDark ? "text-white" : "text-dark"
        }`}
      >
        {heading}
      </h2>
      {sub ? (
        <p
          className={`mt-4 text-base leading-[1.75] ${
            onDark ? "text-white/60" : "text-muted"
          } ${subClassName}`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}
