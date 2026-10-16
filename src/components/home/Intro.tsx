import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function Intro() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <SectionLabel className="md:col-span-3 md:pt-3">Hi, I&apos;m Rohit</SectionLabel>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="text-h2 max-w-[22ch]">
              I turn ideas into <span className="text-accent-deep">software</span> people actually{" "}
              <span className="italic-accent">enjoy</span> using, from the first sketch to production.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 grid gap-8 text-lg leading-relaxed text-ink-soft md:grid-cols-2">
            <p>
              Over the last two years I&apos;ve shipped product interfaces, full-stack platforms, AI features, client
              portfolios and an open directory of design tools. Different problems, same standard.
            </p>
            <div>
              <p>
                I care about the parts users feel: speed, clarity, motion that means something, and code that is still easy
                to change a year later.
              </p>
              <Button href="/about" variant="outline" className="mt-8">
                More about me
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
