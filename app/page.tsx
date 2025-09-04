import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import ScrollToTop from "@/components/scroll-to-top";
import Roadmap from '../components/Roadmap';
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <link rel="icon" href="/Logo.png" sizes="any" />
      <SpeedInsights />
      <Hero />
      <About />
      <Roadmap />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
