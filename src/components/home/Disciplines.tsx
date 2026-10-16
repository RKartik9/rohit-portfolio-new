import Reveal from "@/components/ui/Reveal";
import ScrollText from "@/components/ui/ScrollText";
import { disciplines } from "@/content/site";

export default function Disciplines() {
  return (
    <section aria-labelledby="disciplines-heading" className="relative overflow-hidden rounded-[2.5rem] bg-navy py-24 text-on-navy md:mx-4 md:rounded-[3.5rem] md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-60 top-40 size-[42rem] rounded-full bg-accent/15 blur-[140px]"
      />
      <div className="container-x relative">
        <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
          <h2 id="disciplines-heading" className="text-h1 md:col-span-8">
            Everything for a <span className="italic-accent text-accent">strong</span> product.
          </h2>
          <p className="max-w-sm text-lg leading-relaxed text-white/65 md:col-span-4">
            Design, code, intelligence and interaction under one roof, so nothing gets lost between handoffs.
          </p>
        </Reveal>

        <ol className="mt-20 md:mt-28">
          {disciplines.map((d, i) => (
            <li key={d.title} className="grid gap-6 border-t border-white/10 py-12 md:grid-cols-12 md:gap-10 md:py-16">
              <Reveal className="md:col-span-4">
                <p className="flex items-center gap-3 text-sm text-white/55">
                  <span className="tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    {d.eyebrow[0]} <span className="italic-accent text-accent">{d.eyebrow[1]}</span>
                  </span>
                </p>
                <h3 className="text-h2 mt-4 font-bold">{d.title}</h3>
              </Reveal>
              <div className="md:col-span-8">
                <ScrollText text={d.lead} className="text-h3 max-w-[30ch]" />
                <p className="mt-6 max-w-xl leading-relaxed text-white/60">{d.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
