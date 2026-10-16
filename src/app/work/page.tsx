import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProjectGrid from "@/components/work/ProjectGrid";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Rohit Kartik: RoboViewer, RoboGPT, Kosha, Bazaarly, HousieCo and client portfolios.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        lines={[
          <span key="1">
            <span className="text-accent-deep">Selected</span>
          </span>,
          <span key="2">
            <span className="italic-accent">work</span>.
          </span>,
        ]}
        intro="Platforms, AI products, developer tools and websites, each designed and built to do one job really well."
      >
        <ul className="flex flex-wrap gap-2 text-sm md:justify-end">
          {Array.from(new Set(projects.map((p) => p.category))).map((c) => (
            <li key={c} className="rounded-full border border-line px-3.5 py-1.5 text-ink-soft">
              {c}
            </li>
          ))}
        </ul>
      </PageHeader>
      <section className="pb-24 md:pb-36">
        <div className="container-x">
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
