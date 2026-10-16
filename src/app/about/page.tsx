import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { experience, site, skills } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rohit Kartik is a software engineer at Orangewood Labs (YC W18) who designs and builds full-stack web products, AI features and interactive 3D.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        lines={[
          <span key="1">
            <span className="text-accent-deep">Engineer</span> with a
          </span>,
          <span key="2">
            <span className="italic-accent">designer&apos;s</span> eye.
          </span>,
        ]}
        intro="I'm Rohit Kartik, a software engineer in Noida who designs and builds web products end to end, from the interface to the database."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={site.resume} variant="dark" external>
            Download resume
          </Button>
          <Button href="/contact" variant="outline">
            Get in touch
          </Button>
        </div>
      </PageHeader>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <SectionLabel>The short story</SectionLabel>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink-soft md:col-span-8 md:col-start-5 md:text-xl">
            <p className="text-h3 text-ink">
              I like building the whole thing: the interface people touch, the services behind it, and the{" "}
              <span className="italic-accent">details</span> that make it feel finished.
            </p>
            <p>
              Since October 2024 I&apos;ve been a software developer at Orangewood Labs (Y Combinator W18), working across
              web interfaces, backend services, real-time systems and AI. There I built RoboViewer, a desktop platform with
              a Three.js 3D editor and visual programming, and RoboGPT, a natural-language interface driven by text and
              voice.
            </p>
            <p>
              Outside of that I design and build products end to end. Kosha is my own directory of free tools for people who
              build, Bazaarly is a full e-commerce storefront, and I make portfolios and product sites for engineers,
              founders and small teams.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.5rem] bg-navy py-24 text-on-navy md:mx-4 md:rounded-[3.5rem] md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-accent/15 blur-[140px]"
        />
        <div className="container-x relative">
          <Reveal>
            <p className="text-sm text-white/55">Experience</p>
            <h2 className="text-h1 mt-6 max-w-4xl">
              Where I&apos;ve <span className="italic-accent text-accent">been</span>.
            </h2>
          </Reveal>
          <ol className="mt-16 md:mt-20">
            {experience.map((e, i) => (
              <Reveal
                as="li"
                key={e.company}
                delay={i * 0.06}
                className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-12 md:py-14"
              >
                <span className="text-sm tabular-nums text-accent md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <div className="md:col-span-4">
                  <h3 className="text-h3 font-bold">{e.company}</h3>
                  <p className="mt-2 text-sm text-white/55">
                    {e.note} · {e.location}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-lg">{e.role}</p>
                    <p className="text-sm tabular-nums text-white/55">{e.period}</p>
                  </div>
                  {e.points.length > 0 && (
                    <ul className="mt-5 space-y-3 text-white/65">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-3 leading-relaxed">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container-x grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <SectionLabel>Toolkit</SectionLabel>
            <h2 className="text-h1 mt-6">
              What I <span className="italic-accent text-accent-deep">reach</span> for
            </h2>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 md:col-span-8">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={(i % 2) * 0.06} className="rounded-[1.5rem] bg-paper-2 p-7">
                <p className="font-medium">{s.group}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <Tag key={item} className="bg-paper text-ink">
                      {item}
                    </Tag>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
