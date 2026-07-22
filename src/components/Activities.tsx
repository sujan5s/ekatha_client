import SectionHeading from "./SectionHeading";

const activities = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 14C20.49 12.54 21 10.79 21 9.11C21 6.27 18.73 4 15.9 4C14.28 4 12.83 4.75 12 5.91C11.17 4.75 9.72 4 8.1 4C5.27 4 3 6.27 3 9.11C3 10.79 3.51 12.54 5 14L12 21L19 14Z" fill="#E85D04" fillOpacity="0.15" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8V14M9 11H15" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    iconBg: "linear-gradient(135deg,#FFF4ED,#FFE0CC)",
    title: "Medical Aid",
    desc: "Financial assistance for surgeries, treatments, and hospitalization for community members in need.",
    linkColor: "#E85D04",
    linkText: "Apply now →",
    delay: "d1",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#2D6A4F" fillOpacity="0.18" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="3" fill="#2D6A4F" />
        <path d="M8 18C9.5 19.2 14.5 19.2 16 18" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    iconBg: "linear-gradient(135deg,#F0FDF4,#D4F0DD)",
    title: "Bhatkal",
    desc: "Direct medical financial support and aid disbursed to applicants residing in Bhatkal taluk.",
    linkColor: "#2D6A4F",
    linkText: "Apply now →",
    delay: "d2",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 6V12C4 17.52 7.4 22.5 12 24C16.6 22.5 20 17.52 20 12V6L12 2Z" fill="#B45309" fillOpacity="0.15" stroke="#B45309" strokeWidth="2" strokeLinejoin="round" />
        <path d="M13 7L8 14H12L11 19L16 12H12L13 7Z" fill="#B45309" stroke="#B45309" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
    iconBg: "linear-gradient(135deg,#FEFCE8,#FBF0C4)",
    title: "Byndoor",
    desc: "Dedicated medical funding and financial assistance for applicants from Byndoor taluk.",
    linkColor: "#B45309",
    linkText: "Apply now →",
    delay: "d3",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.8 3v4.8a4.8 4.8 0 0 0 9.6 0V3M9.6 12.6V17a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1.5" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16.6" cy="12.5" r="2.5" fill="#9333EA" fillOpacity="0.2" stroke="#9333EA" strokeWidth="2"/>
        <path d="M3.5 3h2.6M11.7 3h2.6" stroke="#9333EA" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "linear-gradient(135deg,#FDF4FF,#F3D9F7)",
    title: "Kundapura",
    desc: "Financial aid for surgeries and medical treatment for verified applicants in Kundapura taluk.",
    linkColor: "#9333EA",
    linkText: "Apply now →",
    delay: "d2",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21M5 21V5A2 2 0 017 3H17A2 2 0 0119 5V21" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#2563EB" fillOpacity="0.1"/>
        <path d="M9 21V17H15V21" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 7V13M9 10H15" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "linear-gradient(135deg,#EFF6FF,#D3E4FB)",
    title: "Udupi",
    desc: "Direct medical funds and financial assistance provided to applicants residing in Udupi taluk.",
    linkColor: "#2563EB",
    linkText: "Apply now →",
    delay: "d3",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21M4 21V10L9 6V21M9 21V12L15 8V21M15 21V4L20 7V21" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#E11D48" fillOpacity="0.12" />
        <path d="M12 11H12.01M12 15H12.01M6 13H6.01M6 17H6.01M17 9H17.01M17 13H17.01" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "linear-gradient(135deg,#FFF1F2,#FBD9DD)",
    title: "Bangalore",
    desc: "Medical financial support for community members and applicants seeking treatment in Bangalore.",
    linkColor: "#E11D48",
    linkText: "Apply now →",
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
