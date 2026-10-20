"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";
import { ease } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Button";
import ThemeToggle from "./ThemeToggle";

export default function MenuOverlay({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-40 overflow-y-auto bg-navy text-on-navy"
          initial={{ clipPath: "circle(0% at 92% 6%)" }}
          animate={{ clipPath: "circle(150% at 92% 6%)" }}
          exit={{ clipPath: "circle(0% at 92% 6%)" }}
          transition={{ duration: 0.9, ease }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-40 size-[36rem] rounded-full bg-accent/20 blur-[120px]"
          />
          <div className="container-x relative flex min-h-full flex-col justify-between gap-16 pb-10 pt-32">
            <nav aria-label="Primary">
              <p className="mb-6 text-sm text-white/50">Menu</p>
              <ul>
                {nav.map((item, i) => {
                  const active =
                    !item.external && (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));
                  const linkClass = "group inline-flex items-start gap-3 py-1";
                  const label = (
                    <span
                      className={`text-h1 transition-colors duration-300 group-hover:text-accent ${active ? "text-accent" : ""}`}
                    >
                      {item.label}
                    </span>
                  );
                  return (
                    <li key={item.href} className="overflow-hidden">
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9, ease, delay: 0.25 + i * 0.07 }}
                      >
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onNavigate}
                            className={linkClass}
                          >
                            {label}
                            <span className="mt-3 text-2xl text-white/50 transition-colors duration-300 group-hover:text-accent md:mt-5 md:text-4xl">
                              <Arrow className="-rotate-45" />
                            </span>
                          </a>
                        ) : (
                          <Link href={item.href} onClick={onNavigate} className={linkClass}>
                            {label}
                          </Link>
                        )}
                      </motion.div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col gap-8 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <p className="mb-3 text-white/50">Follow me</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {site.socials.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-accent">
                        {s.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href={site.resume} target="_blank" className="hover:text-accent">
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
              <ThemeToggle />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
