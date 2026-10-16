"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
const gutter = "clamp(1.25rem,4.5vw,3rem)";

export default function HorizontalScroll({ children }: { children: ReactNode }) {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [pinned, setPinned] = useState(false);
  const reduce = useReducedMotion();

  useIsoLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const measure = () => {
      setPinned(mq.matches && !reduce);
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    mq.addEventListener("change", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      mq.removeEventListener("change", measure);
    };
  }, [reduce]);

  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, pinned ? -distance : 0]);

  return (
    <div ref={outer} style={pinned ? { height: `calc(100svh + ${distance}px)` } : undefined} className="relative">
      <div
        className={
          pinned
            ? "sticky top-0 flex h-[100svh] items-center overflow-hidden"
            : "overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        }
      >
        <motion.div
          ref={track}
          style={{
            x,
            paddingLeft: `max(${gutter}, calc((100vw - 1360px) / 2 + ${gutter}))`,
            paddingRight: gutter,
          }}
          className={`flex w-max ${pinned ? "gap-6" : "snap-x snap-mandatory gap-4"}`}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
