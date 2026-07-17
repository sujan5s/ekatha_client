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

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Activities />
        <Impact />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <Team />
        <Partners />
        <DonateCta />
        <Faq />
        <ApplyForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
