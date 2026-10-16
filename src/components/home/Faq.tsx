import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { faq } from "@/content/site";

export default function Faq() {
  return (
    <section className="pb-24 pt-8 md:pb-36">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-h1 mt-6">
            Good <span className="italic-accent text-accent-deep">questions</span>
          </h2>
          <p className="mt-6 max-w-xs leading-relaxed text-ink-soft">
            Don&apos;t see yours? Send a message and you&apos;ll hear back within a working day.
          </p>
          <Button href="/contact" variant="outline" className="mt-8">
            Ask a question
          </Button>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-8">
          <Accordion items={faq} />
        </Reveal>
      </div>
    </section>
  );
}
