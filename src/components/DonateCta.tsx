export default function DonateCta() {
  return (
    <section
      id="donate-cta"
      className="dcta-hearts relative overflow-hidden px-8 py-22"
      style={{
        background: "linear-gradient(120deg,#C44900,#E85D04 55%,#D4A017)",
      }}
    >
      <div className="reveal relative mx-auto max-w-205 text-center">
        <h2 className="font-display text-[clamp(30px,4.5vw,46px)] leading-[1.15] font-semibold text-white">
          Your contribution can save a life today.
        </h2>
        <p className="mt-4.5 text-[17px] leading-[1.7] text-white/90">
          Every rupee you give goes directly to a family facing a medical
          emergency. Join 1,200+ members building a safety net for our community.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-[15px] font-bold text-saffron-dark transition duration-200 hover:-translate-y-[3px] hover:scale-[1.03] hover:shadow-[0_16px_44px_rgba(0,0,0,0.25)]"
          >
            ♡ Donate Now
          </a>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/60 px-9 py-4 text-[15px] font-semibold text-white transition duration-200 hover:-translate-y-[3px] hover:bg-white/15"
          >
            Become a Member →
          </a>
        </div>
      </div>
    </section>
  );
}
