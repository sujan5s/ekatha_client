import Image from "next/image";
import SectionHeading from "./SectionHeading";

const members = [
  { name: "Rajesh Kumar G.", role: "President", avatar: 11, lead: true },
  { name: "Suresh Naik", role: "Vice President", avatar: 14, lead: true },
  { name: "Anita Shetty", role: "Secretary", avatar: 45, lead: false },
  { name: "Mohan Gowda", role: "Treasurer", avatar: 17, lead: false },
  { name: "Priya Bhat", role: "Committee Member", avatar: 44, lead: false },
  { name: "Venkatesh R.", role: "Committee Member", avatar: 12, lead: false },
];

export default function Team() {
  return (
    <section id="team" className="bg-cream px-8 py-28">
      <div className="mx-auto max-w-320">
        <div className="reveal">
          <SectionHeading
            centered
            tag="Core Team"
            heading={
              <>
                The people behind <em className="text-saffron italic">Ekata</em>
              </>
            }
            sub="Our volunteer committee dedicates time and care to ensure every rupee reaches those who need it most."
            subClassName="mx-auto max-w-120"
          />
        </div>

        <div className="mt-16 grid grid-cols-3 gap-7 min-[900px]:grid-cols-6">
          {members.map((member, i) => (
            <div
              key={member.name}
              className={`reveal d${i + 1} group text-center transition-transform duration-350 hover:-translate-y-2.5`}
            >
              <div className="relative mx-auto mb-4.5 w-[130px]">
                <Image
                  src={`https://i.pravatar.cc/200?img=${member.avatar}`}
                  alt=""
                  width={130}
                  height={130}
                  className={`h-[130px] w-[130px] rounded-full border-[3px] object-cover transition-shadow duration-350 group-hover:shadow-[0_16px_40px_rgba(232,93,4,0.28)] ${
                    member.lead ? "border-saffron" : "border-[#E5E7EB]"
                  }`}
                />
              </div>
              <div className="text-sm font-bold text-dark">{member.name}</div>
              <div
                className={`mt-1 text-xs font-semibold ${
                  member.lead ? "text-saffron" : "text-muted"
                }`}
              >
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
