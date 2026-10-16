import { featuredProjects } from "@/content/projects";
import Button from "@/components/ui/Button";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import ProjectCard from "@/components/work/ProjectCard";

const card = "w-[82vw] shrink-0 snap-start sm:w-[60vw] md:w-[min(30rem,38vw)]";

export default function FeaturedWork() {
  return (
    <section aria-labelledby="work-heading" className="bg-paper-2 py-20 md:py-0">
      <HorizontalScroll>
        <div className={`${card} flex flex-col justify-between rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_-30px_rgba(16,33,42,0.25)] dark:bg-navy md:aspect-[4/5] md:p-10`}>
          <div>
            <p className="text-sm text-ink-soft">Selected work</p>
            <h2 id="work-heading" className="text-h1 mt-6">
              Recent <span className="italic-accent text-accent-deep">work</span>
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink-soft">
              Platforms, products and portfolios, each designed and built to do one job really well.
            </p>
          </div>
          <Button href="/work" variant="dark" className="mt-10 self-start">
            All projects
          </Button>
        </div>
        {featuredProjects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} priority={i === 0} sizes="(min-width: 768px) 38vw, 82vw" className={card} />
        ))}
      </HorizontalScroll>
    </section>
  );
}
