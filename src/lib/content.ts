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
      return DEFAULT_HOME_CONTENT;
    }
    const data = await res.json();
    return {
      hero: data.hero ?? DEFAULT_HOME_CONTENT.hero,
      about: data.about ?? DEFAULT_HOME_CONTENT.about,
      stats: data.stats ?? DEFAULT_HOME_CONTENT.stats,
      impact: data.impact ?? DEFAULT_HOME_CONTENT.impact,
      gallery: data.gallery ?? DEFAULT_HOME_CONTENT.gallery,
      testimonials: data.testimonials ?? DEFAULT_HOME_CONTENT.testimonials,
      team: data.team ?? DEFAULT_HOME_CONTENT.team,
      faqs: data.faqs ?? DEFAULT_HOME_CONTENT.faqs,
    };
  } catch (error) {
    console.error("[getHomeContent] API fetch failed, using default content:", error);
    return DEFAULT_HOME_CONTENT;
  }
}

