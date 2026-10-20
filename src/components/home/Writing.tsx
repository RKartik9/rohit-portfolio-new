import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/content/site";

export default function Writing() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="container-x">
        <Reveal className="flex flex-col gap-10 rounded-[2rem] bg-paper-2 p-8 md:flex-row md:items-end md:justify-between md:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-ink-soft">Blog</p>
            <h2 className="text-h1 mt-4">
              Notes on <span className="italic-accent text-accent-deep">building</span> things.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Write-ups on engineering, product, AI features and 3D on the web: what worked, what didn&apos;t, and why.
            </p>
          </div>
          <Button href={site.blog} variant="dark" className="shrink-0">
            Read the blog
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
