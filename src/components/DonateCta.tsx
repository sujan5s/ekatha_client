import SpecularButton from "./SpecularButton";

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
          <SpecularButton
            href="#apply"
            size="lg"
            radius={9999}
            tint="#ffffff"
            tintOpacity={1}
            textColor="#c44900"
            lineColor="#ffffff"
            baseColor="#e85d04"
            intensity={1.2}
            autoAnimate
            speed={0.4}
          >
            ♡ Donate Now
          </SpecularButton>
          <SpecularButton
            href="#apply"
            size="lg"
            radius={9999}
            tint="#ffffff"
            tintOpacity={0.15}
            blur={12}
            textColor="#ffffff"
            lineColor="#ffffff"
            baseColor="#ffffff"
            intensity={1}
            followMouse
            proximity={300}
          >
            Become a Member →
          </SpecularButton>
        </div>
      </div>
    </section>
  );
}
