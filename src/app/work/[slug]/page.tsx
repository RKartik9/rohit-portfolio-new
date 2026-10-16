import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseHero from "@/components/work/CaseHero";
import CaseBody from "@/components/work/CaseBody";
import NextProject from "@/components/work/NextProject";
import { hasCover } from "@/components/work/ProjectCover";
import { getNextProject, getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.category}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      url: `/work/${project.slug}`,
      ...(hasCover(project.cover) && { images: [{ url: project.cover }] }),
    },
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <CaseHero project={project} />
      <CaseBody project={project} />
      <NextProject project={getNextProject(project.slug)} />
    </>
  );
}
