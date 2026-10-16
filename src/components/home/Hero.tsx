"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { RevealLines, ease } from "@/components/ui/Reveal";
import StatBadge from "@/components/ui/StatBadge";
import { site, stats } from "@/content/site";

const cards = [
  { src: "/projects/kosha/cover.jpg", alt: "Kosha", className: "right-[19%] top-[15%] w-[25%] rotate-[-7deg]", d: "10s" },
  { src: "/projects/bazaarly/cover.jpg", alt: "Bazaarly", className: "-right-[1%] top-[38%] w-[27%] rotate-[6deg]", d: "12s" },
  { src: "/projects/robogpt/cover.jpg", alt: "RoboGPT", className: "right-[21%] bottom-[6%] w-[23%] rotate-[3deg]", d: "9s" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const slashY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden pb-16 pt-36 md:min-h-[100svh] md:pb-20 md:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_20%,var(--glow),transparent_70%)]"
      />

      <motion.div
        aria-hidden="true"
        style={{ y: slashY }}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease, delay: 0.1 }}
        className="pointer-events-none absolute -right-[18%] top-0 hidden h-[115%] w-[62%] md:block"
      >
        <div
          className="h-full w-full"
          style={{
            clipPath: "polygon(42% 0, 100% 0, 58% 100%, 0 100%)",
            background: "linear-gradient(160deg, #ffb27a 0%, var(--accent) 45%, var(--accent-deep) 100%)",
          }}
        />
      </motion.div>

      <motion.div style={{ y: cardsY }} className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        {cards.map((c, i) => (
          <motion.div
            key={c.src}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.5 + i * 0.12 }}
            className={`absolute ${c.className}`}
          >
            <div
              className="glass animate-float rounded-[1.6rem] p-2 shadow-[0_30px_80px_-30px_rgba(16,33,42,0.45)]"
              style={{ ["--d" as string]: c.d }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem]">
                <Image src={c.src} alt={c.alt} fill sizes="30vw" className="object-cover object-top" priority={i === 0} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="container-x relative">
        <h1 className="text-display max-w-[11ch]">
          <RevealLines
            lines={[
              <span key="1">
                <span className="text-accent-deep">Products</span> that
              </span>,
              <span key="2">
                feel <span className="italic-accent">right</span>.
              </span>,
            ]}
          />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="mt-10 max-w-md md:mt-14"
        >
          <p className="text-lg leading-relaxed text-ink-soft md:text-xl">
            I&apos;m {site.name}, a {site.role.toLowerCase()} who designs and builds web products: fast interfaces,
            solid backends and the AI and 3D features that make them stand out.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/contact" variant="dark" size="lg">
              Start a project
            </Button>
            <Button href="/work" variant="outline" size="lg">
              View work
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 md:mt-24"
        >
          <StatBadge stats={stats} />
        </motion.div>
      </div>
    </section>
  );
}
