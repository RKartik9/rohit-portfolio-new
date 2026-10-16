import Link from "next/link";
import type { Project } from "@/content/projects";
import Tag from "@/components/ui/Tag";
import { Chevron } from "@/components/ui/Button";
import ProjectCover from "./ProjectCover";

export default function ProjectCard({
  project,
  aspect = "aspect-[4/5]",
  priority,
  sizes,
  className = "",
}: {
  project: Project;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative block overflow-hidden rounded-[2rem] ${className}`}
    >
      <ProjectCover project={project} priority={priority} sizes={sizes} className={aspect} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(16,33,42,0.96)_0%,rgba(16,33,42,0.7)_32%,rgba(16,33,42,0)_62%)]"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white md:p-8">
        <div>
          <p className="text-sm text-white/70">{project.category}</p>
          <h3 className="text-h3 mt-1">{project.title}</h3>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Tag key={t} tone="glass">
                {t}
              </Tag>
            ))}
          </div>
        </div>
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-navy transition-transform duration-500 group-hover:rotate-[360deg]">
          <Chevron />
        </span>
      </div>
    </Link>
  );
}
