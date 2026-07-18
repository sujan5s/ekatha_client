import Image from "next/image";
import SectionHeading from "./SectionHeading";
import type { TestimonialContent } from "@/lib/content";

export default function Testimonials({
  testimonials,
}: {
  testimonials: TestimonialContent[];
}) {
  return (
    <section id="testimonials" className="bg-white px-8 py-28">
      <div className="mx-auto max-w-320">
        <div className="reveal">
          <SectionHeading
            centered
            tag="Stories"
            heading={
              <>
                Lives we&rsquo;ve <em className="text-saffron italic">touched</em>
              </>
            }
          />
        </div>

        <div className="mt-14 grid gap-7 min-[900px]:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`reveal d${(i % 3) + 1} rounded-[22px] border-l-4 border-saffron bg-surface p-[38px] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_52px_rgba(0,0,0,0.08)]`}
            >
              <div className="mb-4 text-base tracking-[2px] text-gold">★★★★★</div>
              <p className="mb-6 text-[15px] leading-[1.8] text-[#374151] italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {t.avatarUrl ? (
                  <Image
                    src={t.avatarUrl}
                    alt=""
                    width={46}
                    height={46}
                    className="h-[46px] w-[46px] rounded-full object-cover"
                  />
                ) : null}
                <div>
                  <div className="text-sm font-bold text-dark">{t.name}</div>
                  <div className="mt-0.5 text-xs text-muted">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
