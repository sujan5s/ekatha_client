import SectionHeading from "./SectionHeading";

const activities = [
  {
    icon: "🏥",
    iconBg: "linear-gradient(135deg,#FFF4ED,#FFE0CC)",
    title: "Medical Aid",
    desc: "Financial assistance for surgeries, treatments, and hospitalization for community members in need.",
    linkColor: "#E85D04",
    linkText: "Apply now →",
    delay: "d1",
  },
  {
    icon: "💊",
    iconBg: "linear-gradient(135deg,#F0FDF4,#D4F0DD)",
    title: "Medicine Support",
    desc: "Coverage for long-term medication for chronic illness patients who cannot afford sustained treatment.",
    linkColor: "#2D6A4F",
    linkText: "Apply now →",
    delay: "d2",
  },
  {
    icon: "⚡",
    iconBg: "linear-gradient(135deg,#FEFCE8,#FBF0C4)",
    title: "Emergency Relief",
    desc: "Rapid-response fund for sudden medical crises — disbursed within 48 hours of committee verification.",
    linkColor: "#B45309",
    linkText: "Apply now →",
    delay: "d3",
  },
  {
    icon: "👶",
    iconBg: "linear-gradient(135deg,#FDF4FF,#F3D9F7)",
    title: "Child Health",
    desc: "Special focus on children's healthcare, nutrition support, and developmental medical needs within Samaj families.",
    linkColor: "#9333EA",
    linkText: "Apply now →",
    delay: "d2",
  },
  {
    icon: "👵",
    iconBg: "linear-gradient(135deg,#EFF6FF,#D3E4FB)",
    title: "Elder Care",
    desc: "Senior citizens receive priority assistance for age-related medical treatment and ongoing care support.",
    linkColor: "#2563EB",
    linkText: "Apply now →",
    delay: "d3",
  },
  {
    icon: "📋",
    iconBg: "linear-gradient(135deg,#FFF1F2,#FBD9DD)",
    title: "Documentation Help",
    desc: "We help families navigate insurance claims, hospital paperwork, and government scheme applications.",
    linkColor: "#E11D48",
    linkText: "Learn more →",
    delay: "d4",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="bg-surface px-8 py-28">
      <div className="mx-auto max-w-320">
        <div className="reveal">
          <SectionHeading
            centered
            tag="What We Do"
            heading={
              <>
                Areas of <em className="text-saffron italic">support</em>
              </>
            }
            sub="From emergency surgeries to long-term care — we show up for every medical challenge our community faces."
            subClassName="mx-auto max-w-130"
          />
        </div>

        <div className="mt-16 grid gap-6 min-[900px]:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className={`act-card reveal ${activity.delay} group relative overflow-hidden rounded-[22px] bg-white p-[34px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-350 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2.5 hover:shadow-[0_28px_68px_rgba(0,0,0,0.12)]`}
            >
              <div
                className="mb-[22px] flex h-15 w-15 items-center justify-center rounded-2xl text-[28px] transition-transform duration-350 group-hover:scale-110 group-hover:-rotate-6"
                style={{ background: activity.iconBg }}
              >
                {activity.icon}
              </div>
              <div className="mb-2.5 text-[19px] font-bold text-dark">
                {activity.title}
              </div>
              <div className="text-sm leading-[1.75] text-muted">
                {activity.desc}
              </div>
              <a
                href="#apply"
                className="mt-6 inline-flex gap-1.5 text-[13px] font-bold transition-[gap] duration-250 hover:gap-3"
                style={{ color: activity.linkColor }}
              >
                {activity.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
