import Image from "next/image";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    text: "Team Ekata helped us cover my father's heart surgery. Without them, we couldn't have managed the costs at all.",
    name: "Kavitha S.",
    loc: "Mangaluru",
    avatar: 44,
    delay: "d1",
  },
  {
    text: "The process was fast and dignified. Within 4 days, funds were directly at the hospital. No questions, just help.",
    name: "Ramesh G.",
    loc: "Udupi",
    avatar: 13,
    delay: "d2",
  },
  {
    text: "Not just money — they also guided us through paperwork and government schemes. Truly a community that cares.",
    name: "Meena B.",
    loc: "Bengaluru",
    avatar: 25,
    delay: "d3",
  },
];

export default function Testimonials() {
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
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className={`reveal ${testimonial.delay} rounded-[22px] border-l-4 border-saffron bg-surface p-[38px] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_52px_rgba(0,0,0,0.08)]`}
            >
              <div className="mb-4 text-base tracking-[2px] text-gold">
                ★★★★★
              </div>
              <p className="mb-6 text-[15px] leading-[1.8] text-[#374151] italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={`https://i.pravatar.cc/80?img=${testimonial.avatar}`}
                  alt=""
                  width={46}
                  height={46}
                  className="h-[46px] w-[46px] rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-bold text-dark">
                    {testimonial.name}
                  </div>
                  <div className="mt-0.5 text-xs text-muted">
                    {testimonial.loc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
