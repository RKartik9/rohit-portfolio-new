import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const clients = [
  { name: "Orangewood Labs", note: "Y Combinator W18" },
  { name: "Bazaarly", note: "E-commerce store" },
  { name: "HousieCo", note: "Real estate platform" },
  { name: "Kosha", note: "Own product" },
];

export default function Clients() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <SectionLabel>Who I&apos;ve built for</SectionLabel>
        <Reveal>
          <h2 className="text-h2 mt-8 max-w-[24ch]">
            From a <span className="text-accent-deep">YC-backed</span> startup to independent founders, every project gets
            the same <span className="italic-accent">care</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1} as="div" className="mt-14 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex aspect-[5/3] flex-col items-center justify-center rounded-[1.5rem] border border-line px-4 text-center transition-colors duration-300 hover:border-accent/60 hover:bg-accent/5"
            >
              <span className="text-lg font-bold tracking-tight md:text-xl">{c.name}</span>
              <span className="mt-1 text-sm text-ink-soft">{c.note}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
