import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import type { Project } from "@/content/projects";
import { Slash } from "@/components/layout/Logo";

export function hasCover(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

export default function ProjectCover({
  project,
  priority,
  sizes = "(min-width: 768px) 50vw, 100vw",
  className = "",
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-navy ${className}`}>
      {hasCover(project.cover) ? (
        <Image
          src={project.cover}
          alt={`${project.title} website`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-left-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-navy transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
          <div aria-hidden="true" className="absolute -right-1/4 -top-1/4 size-[80%] rounded-full bg-accent/35 blur-[90px]" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <span className="relative flex flex-col items-center gap-5 text-white/80">
            <Slash className="h-16 w-auto md:h-24" />
            <span className="text-sm tracking-wide">{project.urlLabel ?? project.url.replace(/^https?:\/\/(www\.)?/, "")}</span>
          </span>
        </div>
      )}
    </div>
  );
}
