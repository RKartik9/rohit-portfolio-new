"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ease } from "./Reveal";

export default function StatBadge({ stats }: { stats: { value: string; label: string }[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % stats.length), 2600);
    return () => clearInterval(t);
  }, [stats.length, reduce]);

  const s = stats[i];

  return (
    <div className="flex items-center gap-4" aria-live="polite">
      <span className="relative grid size-16 place-items-center overflow-hidden rounded-full bg-navy text-lg font-medium text-on-navy">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={s.value + i}
            initial={{ y: 44, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -44, opacity: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {s.value}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="relative h-6 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={s.label}
            className="block"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
          >
            {s.label}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
