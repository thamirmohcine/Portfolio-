import { Section } from "@/components/layout/Section";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { portfolioData } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work">
      <div className="grid gap-6 md:grid-cols-2">
        {portfolioData.projects.map((project, index) => (
          <TerminalCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
