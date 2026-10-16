import type { ReactNode } from "react";
import Reveal, { RevealLines } from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function PageHeader({
  label,
  lines,
  intro,
  children,
}: {
  label: string;
  lines: ReactNode[];
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_85%_10%,var(--glow),transparent_70%)]"
      />
      <div className="container-x relative">
        <Reveal y={12}>
          <SectionLabel>{label}</SectionLabel>
        </Reveal>
        <h1 className="text-display mt-8">
          <RevealLines lines={lines} />
        </h1>
        {(intro || children) && (
          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12 md:items-end">
            {intro && (
              <Reveal delay={0.3} className="md:col-span-6">
                <p className="text-lg leading-relaxed text-ink-soft md:text-xl">{intro}</p>
              </Reveal>
            )}
            {children && (
              <Reveal delay={0.4} className="md:col-span-5 md:col-start-8 md:justify-self-end">
                {children}
              </Reveal>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
