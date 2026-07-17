const items = [
  "Compassion",
  "Unity",
  "Direct Support",
  "Transparency",
  "Medical Aid",
  "Community First",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-forest py-5 whitespace-nowrap">
      {/* Doubled so the -50% translate loops seamlessly. */}
      <div className="marquee-track inline-flex gap-14">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[14px] font-display text-[22px] text-white/85 italic"
          >
            {item}
            <span className="h-[7px] w-[7px] rounded-full bg-saffron-light" />
          </span>
        ))}
      </div>
    </div>
  );
}
