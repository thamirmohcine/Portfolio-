import { Container } from "@/components/layout/Container";
import { portfolioData } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <p className="inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">
          {portfolioData.role}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          <span className="hero-gradient">{portfolioData.name}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {portfolioData.shortBio}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-zinc-100 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500"
          >
            Contact Me
          </a>
        </div>
      </Container>
    </section>
  );
}
