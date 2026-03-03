import { Section } from "@/components/layout/Section";
import { portfolioData } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <Section id="contact" title="Contact" subtitle="Let’s build something great">
      <div className="space-y-4">
        <a
          href={`mailto:${portfolioData.email}`}
          className="inline-block text-lg font-medium text-zinc-100 underline underline-offset-4"
        >
          {portfolioData.email}
        </a>

        <ul className="flex flex-wrap gap-4 text-sm text-zinc-300">
          {portfolioData.socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} className="underline underline-offset-4">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
