import type { PropsWithChildren } from "react";
import { Container } from "@/components/layout/Container";

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  subtitle?: string;
}>;

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-zinc-800 py-16 sm:py-20">
      <Container>
        <header className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-zinc-400">{subtitle}</p>
          ) : null}
        </header>
        {children}
      </Container>
    </section>
  );
}
