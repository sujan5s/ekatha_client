"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import SectionHeading from "./SectionHeading";

type Tab = "help" | "donate";

const AMOUNT_CHIPS = [500, 1000, 2500, 5000, 10000];

const SUCCESS_MESSAGE: Record<Tab, string> = {
  help: "Your application has been received. Our committee will contact you within 3–5 business days.",
  donate:
    "Welcome to Team Ekata! We'll reach out soon with next steps for your contribution.",
};

const fieldClass =
  "w-full rounded-xl border-[1.5px] border-[#E5E7EB] bg-cream px-4 py-3.5 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-saffron focus:shadow-[0_0_0_3px_rgba(232,93,4,0.1)]";

function Field({
  label,
  full = false,
  children,
}: {
  label: string;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-2 ${full ? "min-[900px]:col-span-2" : ""}`}
    >
      <label className="text-[13px] font-semibold text-dark">{label}</label>
      {children}
    </div>
  );
}

export default function ApplyForm() {
  const [tab, setTab] = useState<Tab>("help");
  const [submitted, setSubmitted] = useState<Tab | null>(null);
  const [amount, setAmount] = useState(2500);

  const switchTab = (next: Tab) => {
    setTab(next);
    setSubmitted(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(tab);
  };

  return (
    <section id="apply" className="bg-surface px-8 py-28">
      <div className="mx-auto max-w-320">
        <div className="reveal mb-12">
          <SectionHeading
            centered
            tag="Take Action"
            heading={
              <>
                Apply for help or{" "}
                <em className="text-saffron italic">contribute</em>
              </>
            }
            sub="Every application is treated with complete confidentiality and care."
          />
        </div>

        <div className="reveal mx-auto mb-10 flex w-fit gap-1 rounded-full bg-white p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          {(
            [
              ["help", "🙏 Apply for Help"],
              ["donate", "♡ Donate / Join"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => switchTab(value)}
              className={`cursor-pointer rounded-full px-[30px] py-3 text-sm font-semibold transition duration-300 ${
                tab === value
                  ? "bg-saffron text-white shadow-[0_4px_16px_rgba(232,93,4,0.3)]"
                  : "text-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="reveal mx-auto max-w-240 rounded-[28px] bg-white p-13 shadow-[0_8px_56px_rgba(0,0,0,0.08)]">
          {submitted ? (
            <div className="pop-in py-10 text-center">
              <div className="mb-5 text-7xl">🙏</div>
              <h3 className="mb-3 font-display text-3xl text-dark">
                Thank you!
              </h3>
              <p className="text-base leading-[1.75] text-muted">
                {SUCCESS_MESSAGE[submitted]}
              </p>
              <button
                type="button"
                onClick={() => switchTab("help")}
                className="mt-7 cursor-pointer rounded-full border-2 border-saffron px-7 py-3 text-sm font-semibold text-saffron"
              >
                Submit Another
              </button>
            </div>
          ) : tab === "help" ? (
            // Keyed so switching tabs remounts the form rather than letting
            // React reuse these inputs for the other tab's fields.
            <form key="help" onSubmit={handleSubmit}>
              <div className="grid gap-5 min-[900px]:grid-cols-2">
                <Field label="Full Name *">
                  <input
                    className={fieldClass}
                    type="text"
                    placeholder="Patient / Applicant name"
                    required
                  />
                </Field>
                <Field label="Mobile Number *">
                  <input
                    className={fieldClass}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </Field>
                <Field label="District, Karnataka *">
                  <input
                    className={fieldClass}
                    type="text"
                    placeholder="e.g. Udupi, Mangaluru…"
                    required
                  />
                </Field>
                <Field label="Amount Required (₹) *">
                  <input
                    className={fieldClass}
                    type="number"
                    placeholder="e.g. 50000"
                    required
                  />
                </Field>
                <Field label="Medical Condition *">
                  <input
                    className={fieldClass}
                    type="text"
                    placeholder="Brief diagnosis / treatment needed"
                    required
                  />
                </Field>
                <Field label="Hospital / Clinic Name">
                  <input
                    className={fieldClass}
                    type="text"
                    placeholder="Where treatment is ongoing"
                  />
                </Field>
                <Field label="Describe the Situation *" full>
                  <textarea
                    className={`${fieldClass} resize-y`}
                    rows={4}
                    placeholder="Please share the medical situation and how the funds will be used…"
                    required
                  />
                </Field>
                <div className="min-[900px]:col-span-2">
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-[14px] bg-saffron p-[17px] text-base font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_12px_36px_rgba(232,93,4,0.3)]"
                  >
                    Submit Application →
                  </button>
                  <p className="mt-3 text-center text-xs text-muted">
                    Your information is kept confidential and shared only with
                    our review committee.
                  </p>
                </div>
              </div>
            </form>
          ) : (
            <form key="donate" onSubmit={handleSubmit}>
              <div className="grid gap-5 min-[900px]:grid-cols-2">
                <Field label="Full Name *">
                  <input
                    className={fieldClass}
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </Field>
                <Field label="Email Address *">
                  <input
                    className={fieldClass}
                    type="email"
                    placeholder="you@email.com"
                    required
                  />
                </Field>
                <Field label="Mobile Number *">
                  <input
                    className={fieldClass}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </Field>
                <Field label="Occupation">
                  <input
                    className={fieldClass}
                    type="text"
                    placeholder="Your profession"
                  />
                </Field>
                <Field label="Choose an amount (₹)" full>
                  <div className="mt-1 flex flex-wrap gap-2.5">
                    {AMOUNT_CHIPS.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => setAmount(chip)}
                        className={`cursor-pointer rounded-full border-[1.5px] px-4.5 py-2.5 text-[13px] font-semibold transition-all duration-200 hover:border-saffron hover:bg-saffron/5 hover:text-saffron ${
                          amount === chip
                            ? "border-saffron bg-saffron/5 text-saffron"
                            : "border-[#E5E7EB] bg-white text-muted"
                        }`}
                      >
                        ₹{chip.toLocaleString("en-IN")}
                      </button>
                    ))}
                  </div>
                </Field>
                <Field label="Donation Amount (₹) *">
                  <input
                    className={fieldClass}
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                  />
                </Field>
                <Field label="Frequency">
                  <select className={fieldClass} defaultValue="One-time">
                    <option>One-time</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </Field>
                <Field label="Message (optional)" full>
                  <textarea
                    className={`${fieldClass} resize-y`}
                    rows={3}
                    placeholder="Any message for the community…"
                  />
                </Field>
                <div className="min-[900px]:col-span-2">
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-[14px] bg-forest p-[17px] text-base font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_12px_36px_rgba(26,71,42,0.3)]"
                  >
                    Donate to Team Ekata ♡
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
