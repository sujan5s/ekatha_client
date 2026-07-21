import SpecularButton from "./SpecularButton";

const floatingHearts = [
  { left: "8%", size: "26px", duration: "7s", delay: "0s" },
  { left: "20%", size: "36px", duration: "9s", delay: "2.5s" },
  { left: "35%", size: "22px", duration: "6.5s", delay: "4.5s" },
  { left: "50%", size: "32px", duration: "8.5s", delay: "1s" },
  { left: "65%", size: "40px", duration: "10s", delay: "3s" },
  { left: "78%", size: "24px", duration: "7.5s", delay: "5.5s" },
  { left: "90%", size: "34px", duration: "9.5s", delay: "1.8s" },
];

export default function DonateCta() {
  return (
    <section
      id="donate-cta"
      className="dcta-hearts relative overflow-hidden px-8 py-22"
      style={{
        background: "linear-gradient(120deg,#C44900,#E85D04 55%,#D4A017)",
      }}
    >
      {/* Floating Live Hearts Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingHearts.map((h, i) => (
          <span
            key={i}
            className="animate-float-heart absolute text-white/40 select-none"
            style={{
              left: h.left,
              bottom: "0px",
              fontSize: h.size,
              animationDuration: h.duration,
              animationDelay: h.delay,
            }}
          >
            ♡
          </span>
        ))}
      </div>

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
