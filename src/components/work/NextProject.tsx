import Link from "next/link";
import type { Project } from "@/content/projects";
import { Chevron } from "@/components/ui/Button";
import ProjectCover from "./ProjectCover";

export default function NextProject({ project }: { project: Project }) {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <Link href={`/work/${project.slug}`} className="group grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-sm text-ink-soft">Next project</p>
            <p className="text-h1 mt-4 transition-colors group-hover:text-accent-deep">{project.title}</p>
            <p className="mt-4 max-w-md text-ink-soft">{project.summary}</p>
            <span className="mt-8 inline-flex h-12 items-center gap-4 rounded-full bg-navy pl-6 pr-1.5 text-on-navy">
              View case
              <span className="grid size-9 place-items-center rounded-full bg-accent text-navy transition-transform duration-500 group-hover:rotate-[360deg]">
                <Chevron />
              </span>
            </span>
          </div>
          <div className="overflow-hidden rounded-[2rem] md:col-span-5 md:col-start-8">
            <ProjectCover project={project} sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[4/3]" />
          </div>
        </Link>
      </div>
    </section>
  );
}
