import Newsletter from "./Newsletter";

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#activities", label: "Our Activities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team", label: "Core Team" },
  { href: "#apply", label: "Donate" },
];

const resources = [
  { href: "#how", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#", label: "Transparency Report" },
  { href: "#", label: "Eligibility" },
];

const socials = [
  { label: "FB", bg: "#1877F222", color: "#1877F2" },
  { label: "IG", bg: "#E1306C22", color: "#E1306C" },
  { label: "WA", bg: "#25D36622", color: "#25D366" },
];

function LinkColumn({
  head,
  links,
}: {
  head: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="mb-5 text-[13px] font-bold tracking-[0.04em] text-white">
        {head}
      </div>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="mb-3 block text-sm transition-[color,padding-left] duration-200 hover:pl-[5px] hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#111827] px-8 pt-20 pb-9 text-white/65">
      <div className="mx-auto max-w-320">
        <div className="mb-14 grid grid-cols-1 gap-14 min-[600px]:grid-cols-2 min-[900px]:grid-cols-[2fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-4.5 font-display text-[28px] text-white">
              Team <span className="text-saffron">Ekata</span>
            </div>
            <p className="max-w-70 text-sm leading-[1.85]">
              A community-led trust of Ganiga Samaj, Karnataka — committed to
              direct healthcare support for families in need. No middlemen, ever.
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map((social) => (
                <button
                  key={social.label}
                  type="button"
                  aria-label={social.label}
                  className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-xl text-xs font-bold transition duration-200 hover:-translate-y-1 hover:scale-[1.08]"
                  style={{ background: social.bg, color: social.color }}
                >
                  {social.label}
                </button>
              ))}
            </div>
          </div>

          <LinkColumn head="Quick Links" links={quickLinks} />
          <LinkColumn head="Resources" links={resources} />

          <div>
            <div className="mb-5 text-[13px] font-bold tracking-[0.04em] text-white">
              Stay Updated
            </div>
            <p className="text-sm leading-[1.7]">
              Get stories &amp; updates from the community.
            </p>
            <Newsletter />
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-white/8 pt-7 text-[13px]">
          <span>
            © 2024 Team Ekata — Ganiga Samaj Trust, Karnataka. All rights
            reserved.
          </span>
          <span>Made with ♡ for the community</span>
        </div>
      </div>
    </footer>
  );
}
