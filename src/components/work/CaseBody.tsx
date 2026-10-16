import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/content/projects";

export default function CaseBody({ project }: { project: Project }) {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-x">
          <dl className="grid gap-3 sm:grid-cols-3">
            {project.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08} className="flex flex-col-reverse rounded-[1.5rem] border border-line p-8 md:p-10">
                <dt className="mt-3 text-sm text-ink-soft">{m.label}</dt>
                <dd className="text-h2 font-bold text-accent-deep">{m.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <SectionLabel index="01">The challenge</SectionLabel>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8 md:col-start-5">
            <p className="text-h3">{project.problem}</p>
          </Reveal>

          <Reveal className="md:col-span-3">
            <SectionLabel index="02">The approach</SectionLabel>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8 md:col-start-5">
            <p className="text-lg leading-relaxed text-ink-soft md:text-xl">{project.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-navy py-20 text-on-navy md:mx-4 md:rounded-[3.5rem] md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 size-[32rem] rounded-full bg-accent/15 blur-[140px]"
        />
        <div className="container-x relative">
          <Reveal>
            <p className="text-sm text-white/55">
              <span className="text-accent">03</span> &nbsp;What I built
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-3 md:grid-cols-2">
            {project.highlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={(i % 2) * 0.08} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <span className="text-sm tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-h3 mt-6 font-bold">{h.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-white/65">{h.body}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-14 flex flex-col gap-5 md:flex-row md:items-center">
            <p className="text-sm text-white/55 md:whitespace-nowrap">
              <span className="text-accent">04</span> &nbsp;Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Tag key={s} tone="glass">
                  {s}
                </Tag>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
