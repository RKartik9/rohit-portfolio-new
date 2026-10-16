"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { ease } from "./Reveal";

export default function Accordion({
  items,
  className = "",
}: {
  items: { q: string; a: string }[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <ul className={`grid items-start gap-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <li
            key={item.q}
            className={`rounded-[1.5rem] border transition-colors duration-300 ${
              isOpen ? "border-transparent bg-white shadow-[0_20px_50px_-30px_rgba(16,33,42,0.3)] dark:bg-navy" : "border-line"
            }`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-medium md:px-7 md:py-6"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`relative grid size-10 shrink-0 place-items-center rounded-full transition-all duration-500 ${
                    isOpen ? "rotate-45 bg-accent text-navy" : "bg-navy text-on-navy group-hover:bg-accent group-hover:text-navy"
                  }`}
                >
                  <span className="absolute h-[1.5px] w-3.5 bg-current" />
                  <span className="absolute h-3.5 w-[1.5px] bg-current" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl px-6 pb-6 leading-relaxed text-ink-soft md:px-7 md:pb-7">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
