import About from "@/components/About";
import Activities from "@/components/Activities";
import ApplyForm from "@/components/ApplyForm";
import BackToTop from "@/components/BackToTop";
import DonateCta from "@/components/DonateCta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getHomeContent } from "@/lib/content";

export default async function Home() {
  const content = await getHomeContent();

  return (
    <>
      <ScrollReveal />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero hero={content.hero} />
        <Marquee />
        <Stats stats={content.stats} />
        <About about={content.about} />
        <Activities />
        <Impact impact={content.impact} />
        <Gallery gallery={content.gallery} />
        <HowItWorks />
        <Testimonials testimonials={content.testimonials} />
        <Team team={content.team} />
        <Partners />
        <DonateCta />
        <Faq faqs={content.faqs} />
        <ApplyForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
