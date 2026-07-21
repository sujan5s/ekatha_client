"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import type { FaqContent } from "@/lib/content";

export default function Faq({ faqs }: { faqs: FaqContent[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-surface px-8 py-28">
      <div className="mx-auto max-w-320">
        <div className="reveal">
          <SectionHeading
            centered
            tag="Questions"
            heading={
              <>
                Frequently <em className="text-saffron italic">asked</em>
              </>
            }
          />
        </div>

        <div className="mx-auto mt-14 max-w-205">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={faq.id}
                className="reveal d1 mb-3.5 overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-7 py-6 text-left text-base font-bold text-dark"
                  suppressHydrationWarning
                >
                  {faq.question}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg transition duration-300 ${
                      open
                        ? "rotate-45 bg-saffron text-white"
                        : "bg-saffron/10 text-saffron"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(.22,1,.36,1)]"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 pb-6 text-[14.5px] leading-[1.75] text-muted">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
