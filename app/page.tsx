import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { PixelJourney } from "@/components/pixel-journey/PixelJourney";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import { Timeline } from "@/components/timeline/Timeline";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <PixelJourney />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
