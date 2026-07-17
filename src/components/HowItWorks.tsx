import SectionHeading from "./SectionHeading";

const steps = [
  {
    num: "01",
    title: "Submit Application",
    desc: "Fill the form with medical details, hospital documents, and contact information.",
    delay: "d1",
  },
  {
    num: "02",
    title: "Verification",
    desc: "Our committee reviews and verifies every case within 3–5 business days.",
    delay: "d2",
  },
  {
    num: "03",
    title: "Direct Transfer",
    desc: "Approved funds are sent directly to the hospital or beneficiary — fast and fee-free.",
    delay: "d3",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="how-dots relative overflow-hidden bg-forest px-8 py-28"
    >
      <div className="relative mx-auto max-w-320">
        <div className="reveal">
          <SectionHeading
            centered
            onDark
            tag="Simple Process"
            heading={
              <>
                How we <em className="text-saffron-light italic">help you</em>
              </>
            }
            sub="A transparent, straightforward process — because trust is everything."
            subClassName="mx-auto max-w-115"
          />
        </div>

        <div className="mt-18 grid gap-12 min-[900px]:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`step reveal ${step.delay} group text-center`}
            >
              <div className="mx-auto mb-8 flex h-25 w-25 items-center justify-center rounded-full border-2 border-saffron bg-saffron/8 font-display text-3xl font-bold text-saffron-light transition-[transform,box-shadow] duration-350 group-hover:scale-[1.12] group-hover:shadow-[0_0_0_12px_rgba(232,93,4,0.1)]">
                {step.num}
              </div>
              <div className="mb-3.5 text-[21px] font-bold text-white">
                {step.title}
              </div>
              <div className="text-[15px] leading-[1.75] text-white/60">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 text-center">
          <a
            href="#apply"
            className="inline-flex items-center gap-2.5 rounded-full bg-saffron px-[42px] py-[17px] text-[15px] font-bold text-white shadow-[0_8px_28px_rgba(232,93,4,0.32)] transition duration-200 hover:-translate-y-[3px] hover:scale-[1.03] hover:shadow-[0_16px_44px_rgba(232,93,4,0.48)]"
          >
            Apply for Assistance →
          </a>
        </div>
      </div>
    </section>
  );
}
