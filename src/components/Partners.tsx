const partners = [
  "Ganiga Samaj",
  "Karnataka Trust",
  "CareHospitals",
  "SevaFoundation",
  "Unity Bank",
];

export default function Partners() {
  return (
    <div id="partners" className="bg-white px-8 py-18">
      <div className="reveal mb-9 text-center text-xs font-bold tracking-[0.15em] text-muted uppercase">
        Trusted &amp; supported by
      </div>
      <div className="reveal d1 flex flex-wrap items-center justify-center gap-16">
        {partners.map((partner) => (
          <span
            key={partner}
            className="font-display text-[22px] font-bold text-[#C4B8AC] transition duration-300 hover:scale-[1.08] hover:text-forest-mid"
          >
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
}
