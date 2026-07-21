import Image from "next/image";
import type { AboutContent } from "@/lib/content";
import SpecularButton from "./SpecularButton";
//hi
const features = [
  {
    icon: "✦",
    title: "Zero Commission",
    desc: "100% of every rupee reaches the beneficiary",
  },
  {
    icon: "✓",
    title: "Verified Cases",
    desc: "Each application is reviewed by our volunteer committee",
  },
  {
    icon: "♡",
    title: "Community Governed",
    desc: "Member-run, transparent, and publicly accountable",
  },
];

export default function About({ about }: { about?: AboutContent }) {
  return (
    <section id="about" className="bg-cream px-8 py-28">
      <div className="mx-auto max-w-320">
        <div className="grid items-center gap-20 min-[900px]:grid-cols-2">
          <div className="reveal-left relative">
            <div className="group overflow-hidden rounded-[28px] bg-[#E8E0D5] shadow-[0_32px_80px_rgba(0,0,0,0.14)]">
              {about?.imageUrl ? (
                <Image
                  src={about.imageUrl}
                  alt="Community support"
                  width={700}
                  height={520}
                  className="h-130 w-full object-cover transition-transform duration-900 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
                />
              ) : (
                <div className="h-130 w-full" />
              )}
            </div>

            <div className="reveal-scale d3 float-badge absolute -top-6 -right-6 rounded-[20px] bg-gradient-to-br from-saffron to-saffron-dark px-8 py-[22px] text-center text-white shadow-[0_16px_48px_rgba(232,93,4,0.35)]">
              <div className="font-display text-[38px] leading-none font-bold">
                100%
              </div>
              <div className="mt-1.5 text-xs font-semibold opacity-90">
                Direct to
                <br />
                Beneficiary
              </div>
            </div>

            {about?.image2Url ? (
              <div className="reveal-scale d4 absolute -bottom-10 -left-10 h-45 w-45 overflow-hidden rounded-[22px] border-6 border-cream shadow-[0_20px_48px_rgba(0,0,0,0.18)]">
                <Image
                  src={about.image2Url}
                  alt="Helping hands"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
          </div>

          <div className="reveal-right">
            <span className="inline-block rounded-full bg-saffron/8 px-3.5 py-1.5 text-xs font-bold tracking-[0.18em] text-saffron uppercase">
              About Team Ekata
            </span>
            <h2 className="mt-4 font-display text-[clamp(32px,4vw,48px)] leading-[1.14] font-semibold text-dark">
              Built on trust,
              <br />
              <em className="text-saffron italic">powered by community.</em>
            </h2>
            <p className="mt-6 text-base leading-[1.85] text-[#4B5563]">
              Team Ekata is a registered community trust run by members of the{" "}
              <strong>Ganiga Samaj of Karnataka</strong>. We believe no one in
              our community should suffer financial hardship during a medical
              emergency.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[#4B5563]">
              Members with stable financial standing contribute voluntarily, and
              every rupee is disbursed directly to verified families — for
              treatments, hospitalization, and recovery.
            </p>

            <div className="mt-10 flex flex-col gap-[18px]">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 rounded-[14px] p-3.5 transition-[background,box-shadow] duration-250 hover:bg-white hover:shadow-[0_8px_28px_rgba(0,0,0,0.05)]"
                >
                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#FFF4ED] to-[#FFE8D6] text-base text-saffron">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-dark">
                      {feature.title}
                    </div>
                    <div className="mt-0.5 text-sm text-muted">
                      {feature.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <SpecularButton
                href="#activities"
                size="md"
                radius={9999}
                tint="#1a472a"
                tintOpacity={1}
                textColor="#ffffff"
                lineColor="#88d49e"
                baseColor="#1a472a"
                intensity={1.2}
                followMouse
              >
                See Our Activities →
              </SpecularButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
