import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { services, site } from "@/content/site";

export default function Services() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="container-x grid gap-6 md:grid-cols-12">
        <Reveal className="rounded-[2rem] bg-paper-2 p-8 md:col-span-7 md:p-12">
          <h2 className="text-h1">
            What I&apos;m <span className="italic-accent text-accent-deep">good</span> at
          </h2>
          <ul className="mt-10 grid gap-x-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-3 border-b border-line py-4 text-lg">
                <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-accent p-8 text-navy md:col-span-5 md:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-white/25 blur-3xl"
          />
          <div className="relative">
            <p className="text-sm font-medium">Have something in mind?</p>
            <p className="text-h2 mt-4 font-bold">
              Let&apos;s build it <span className="italic-accent font-normal">together</span>.
            </p>
            <p className="mt-6 max-w-sm leading-relaxed text-navy/75">
              Tell me what you&apos;re working on. You&apos;ll get an honest take on scope, stack and timeline, usually the
              same day.
            </p>
          </div>
          <div className="relative mt-12 flex flex-wrap gap-3">
            <Button href="/contact" variant="dark">
              Let&apos;s talk
            </Button>
            <Button href={site.phoneHref} variant="light">
              {site.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
