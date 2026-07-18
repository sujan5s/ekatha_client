import Image from "next/image";
import SectionHeading from "./SectionHeading";
import type { TeamContent } from "@/lib/content";

export default function Team({ team }: { team: TeamContent[] }) {
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
          {team.map((member, i) => (
            <div
              key={member.id}
              className={`reveal d${(i % 6) + 1} group text-center transition-transform duration-350 hover:-translate-y-2.5`}
            >
              <div className="relative mx-auto mb-4.5 w-[130px]">
                {member.photoUrl ? (
                  <Image
                    src={member.photoUrl}
                    alt=""
                    width={130}
                    height={130}
                    className={`h-[130px] w-[130px] rounded-full border-[3px] object-cover transition-shadow duration-350 group-hover:shadow-[0_16px_40px_rgba(232,93,4,0.28)] ${
                      member.isLead ? "border-saffron" : "border-[#E5E7EB]"
                    }`}
                  />
                ) : null}
              </div>
              <div className="text-sm font-bold text-dark">{member.name}</div>
              <div
                className={`mt-1 text-xs font-semibold ${
                  member.isLead ? "text-saffron" : "text-muted"
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
