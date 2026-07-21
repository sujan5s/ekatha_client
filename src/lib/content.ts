export interface HeroContent {
  eyebrow: string;
  headline: string;
  headlineEm: string;
  headlineEnd: string;
  subText: string;
  ctaPrimary: string;
  ctaGhost: string;
  trustText: string;
  slides: { id: string; imageUrl: string; alt: string }[];
}

export interface AboutContent {
  imageUrl: string;
  image2Url: string;
}

export interface StatContent {
  id: string;
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ImpactContent {
  bars: {
    id: string;
    label: string;
    percent: number;
    colorFrom: string;
    colorTo: string;
  }[];
  quote: { text: string; attribution: string; imageUrl: string };
}

export interface GalleryContent {
  id: string;
  imageUrl: string;
  caption: string;
  span: "NORMAL" | "TALL" | "WIDE";
}

export interface TestimonialContent {
  id: string;
  text: string;
  name: string;
  location: string;
  avatarUrl: string;
}

export interface TeamContent {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  isLead: boolean;
}

export interface FaqContent {
  id: string;
  question: string;
  answer: string;
}

export interface HomeContent {
  hero: HeroContent;
  about: AboutContent;
  stats: StatContent[];
  impact: ImpactContent;
  gallery: GalleryContent[];
  testimonials: TestimonialContent[];
  team: TeamContent[];
  faqs: FaqContent[];
}

export const DEFAULT_HOME_CONTENT: HomeContent = {
  hero: {
    eyebrow: "A Community Trust · Ganiga Samaj, Karnataka",
    headline: "Unity in action,",
    headlineEm: "compassion",
    headlineEnd: "in deed.",
    subText:
      "We are Team Ekata — a community-led trust where members of Ganiga Samaj give what they can, and together we lift families through medical hardship. No middlemen. 100% direct support.",
    ctaPrimary: "♡ Donate Now",
    ctaGhost: "Our Mission →",
    trustText: "1,200+ members supporting our community across Karnataka",
    slides: [
      {
        id: "default-1",
        imageUrl:
          "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1800&q=85",
        alt: "Community support",
      },
    ],
  },
  about: {
    imageUrl:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=700&q=80",
    image2Url:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80",
  },
  stats: [
    { id: "1", icon: "₹", value: 45, suffix: "L+", label: "Medical Aid Disbursed" },
    { id: "2", icon: "👥", value: 1200, suffix: "+", label: "Active Donors" },
    { id: "3", icon: "🏥", value: 340, suffix: "+", label: "Families Supported" },
    { id: "4", icon: "⚡", value: 100, suffix: "%", label: "Direct Transfer" },
  ],
  impact: {
    bars: [
      { id: "1", label: "Emergency Hospitalization", percent: 92, colorFrom: "#e85d04", colorTo: "#f4a261" },
      { id: "2", label: "Critical Surgery Fund", percent: 88, colorFrom: "#1a472a", colorTo: "#2d6a4f" },
      { id: "3", label: "Chronic Illness Care", percent: 85, colorFrom: "#d4a017", colorTo: "#f4a261" },
      { id: "4", label: "Post-op Rehabilitation", percent: 79, colorFrom: "#1c1c1e", colorTo: "#6b7280" },
    ],
    quote: {
      text: "When my father needed urgent surgery, Team Ekata transferred funds directly within 24 hours. No red tape, no delay.",
      attribution: "Suresh Ganiga, Hubballi",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    },
  },
  gallery: [],
  testimonials: [],
  team: [],
  faqs: [],
};

export const DEFAULT_GALLERY: GalleryContent[] = [
  {
    id: "g1",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    caption: "Health Checkup Camp in Mangaluru",
    span: "TALL",
  },
  {
    id: "g2",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
    caption: "Volunteer Distribution Drive",
    span: "WIDE",
  },
  {
    id: "g3",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80",
    caption: "Direct Medical Aid Handover",
    span: "NORMAL",
  },
  {
    id: "g4",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80",
    caption: "Elder Care & Health Visit",
    span: "NORMAL",
  },
  {
    id: "g5",
    imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&q=80",
    caption: "Relief Goods & Medicine Support",
    span: "WIDE",
  },
  {
    id: "g6",
    imageUrl: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=1200&q=80",
    caption: "Blood Donation Drive 2024",
    span: "NORMAL",
  },
  {
    id: "g7",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    caption: "Community Trust Annual Meet",
    span: "NORMAL",
  },
  {
    id: "g8",
    imageUrl: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80",
    caption: "Child Health Initiative",
    span: "WIDE",
  },
  {
    id: "g9",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80",
    caption: "Emergency Medical Relief",
    span: "NORMAL",
  },
  {
    id: "g10",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&q=80",
    caption: "Volunteer Team Verification",
    span: "TALL",
  },
  {
    id: "g11",
    imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=1200&q=80",
    caption: "Samaj Member Meetup",
    span: "NORMAL",
  },
  {
    id: "g12",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
    caption: "Youth Volunteer Network",
    span: "NORMAL",
  },
];

export const API_URL = process.env.API_URL ?? "http://localhost:8080";

/**
 * Fetch the homepage content from the API (source of truth). Tagged "home" so
 * the API server can purge it on demand (POST /api/revalidate) the moment a
 * dashboard edit lands. The 60s ISR window is only a fallback in case that
 * ping is ever missed, and keeps serving the last good page if the API is down.
 */
export async function getHomeContent(): Promise<HomeContent> {
  try {
    const res = await fetch(`${API_URL}/api/public/home`, {
      next: { revalidate: 60, tags: ["home"] },
    });
    if (!res.ok) {
      return { ...DEFAULT_HOME_CONTENT, gallery: DEFAULT_GALLERY };
    }
    const data = await res.json();
    return {
      hero: data.hero ?? DEFAULT_HOME_CONTENT.hero,
      about: data.about ?? DEFAULT_HOME_CONTENT.about,
      stats: data.stats ?? DEFAULT_HOME_CONTENT.stats,
      impact: data.impact ?? DEFAULT_HOME_CONTENT.impact,
      gallery:
        data.gallery && data.gallery.length > 0
          ? data.gallery
          : DEFAULT_GALLERY,
      testimonials: data.testimonials ?? DEFAULT_HOME_CONTENT.testimonials,
      team: data.team ?? DEFAULT_HOME_CONTENT.team,
      faqs: data.faqs ?? DEFAULT_HOME_CONTENT.faqs,
    };
  } catch (error) {
    console.error("[getHomeContent] API fetch failed, using default content:", error);
    return { ...DEFAULT_HOME_CONTENT, gallery: DEFAULT_GALLERY };
  }
}

