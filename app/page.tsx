import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { TerminalBackground } from "@/components/effects/TerminalBackground";
import { HeroSection } from "../components/sections/HeroSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <TerminalBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
