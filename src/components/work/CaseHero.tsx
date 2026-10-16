import Button from "@/components/ui/Button";
import Reveal, { RevealLines } from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/content/projects";
import ProjectCover from "./ProjectCover";

export default function CaseHero({ project }: { project: Project }) {
  const meta = [
    { label: "Client", value: project.client },
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Live", value: project.urlLabel ?? project.url.replace(/^https?:\/\/(www\.)?/, "") },
  ];

  return (
    <section className="relative overflow-hidden pt-36 md:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_10%,var(--glow),transparent_70%)]"
      />
      <div className="container-x relative">
        <Reveal y={12}>
          <SectionLabel>{project.category}</SectionLabel>
        </Reveal>
        <h1 className="text-display mt-8">
          <RevealLines lines={[project.title]} />
        </h1>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12">
          <Reveal delay={0.3} className="md:col-span-6">
            <p className="text-lg leading-relaxed md:text-xl">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.4} className="rounded-[1.5rem] bg-paper-2 p-7 md:col-span-5 md:col-start-8">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="text-ink-soft">{m.label}</dt>
                  <dd className="mt-1 font-medium">{m.value}</dd>
                </div>
              ))}
            </dl>
            <Button href={project.url} variant="dark" className="mt-8">
              Visit live site
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-16 md:mt-24">
          <ProjectCover
            project={project}
            priority
            sizes="(min-width: 1440px) 1340px, 100vw"
            className="aspect-[16/10] rounded-[2rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
