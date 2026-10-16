import type { Project } from "@/content/projects";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={(i % 2) * 0.12} className={i % 2 === 1 ? "md:mt-24" : ""}>
          <ProjectCard project={project} priority={i < 2} sizes="(min-width: 768px) 50vw, 100vw" />
        </Reveal>
      ))}
    </div>
  );
}
