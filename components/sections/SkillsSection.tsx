import { Section } from "@/components/layout/Section";
import { portfolioData } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies I work with">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioData.skills.map((group) => (
          <article key={group.title} className="rounded-2xl border border-zinc-800 p-5">
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {group.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
