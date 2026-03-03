import { Section } from "@/components/layout/Section";
import { portfolioData } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <Section id="about" title="About" subtitle={portfolioData.location}>
      <p className="max-w-3xl leading-relaxed text-zinc-300">{portfolioData.longBio}</p>
    </Section>
  );
}
