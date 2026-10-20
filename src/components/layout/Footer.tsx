import Link from "next/link";
import { nav, site } from "@/content/site";
import { projects } from "@/content/projects";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatusDot from "@/components/ui/StatusDot";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[2.5rem] bg-navy text-on-navy md:rounded-t-[3.5rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-[40rem] rounded-full bg-accent/15 blur-[140px]"
      />

      <div className="container-x relative pb-10 pt-12 md:pt-16">
        <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-2.5 pl-5 pr-5 text-sm">
          <StatusDot>I&apos;m online · reply within a working day</StatusDot>
        </span>

        <Reveal className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 className="text-display">
              Say <span className="italic-accent text-accent">hi</span>.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-white/70">
              A no-pressure fifteen minute call. Bring your idea, I&apos;ll bring the questions.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:col-span-5 md:items-end">
            <Button href="/contact" variant="accent" size="lg">
              Start a project
            </Button>
            <a href={`mailto:${site.email}`} className="text-white/70 underline-offset-4 hover:text-accent hover:underline">
              {site.email}
            </a>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-white/10 pt-12 md:mt-28 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {site.role} designing and building fast web products, from the first sketch to production.
            </p>
            <StatusDot className="mt-6 text-white/80">Available for new work</StatusDot>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 md:col-span-8">
            <div>
              <p className="mb-4 text-white/45">Navigate</p>
              <ul className="space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className="hover:text-accent">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-white/45">Work</p>
              <ul className="space-y-2.5">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/work/${p.slug}`} className="hover:text-accent">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-white/45">Contact</p>
              <ul className="space-y-2.5">
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-accent">
                    Email me
                  </a>
                </li>
                <li>
                  <a href={site.phoneHref} className="hover:text-accent">
                    {site.phone}
                  </a>
                </li>
                {site.socials.slice(0, 2).map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:pr-20">
          <p>
            {site.name} © {new Date().getFullYear()}
          </p>
          <p>
            {site.role} · {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
