"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import Logo from "./Logo";
import MenuOverlay from "./MenuOverlay";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 160 && y > lastY.current);
      setScrolled(y > 40);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-full bg-navy px-4 py-2 text-sm text-on-navy focus:translate-y-0"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
          hidden && !open ? "-translate-y-full" : ""
        }`}
      >
        <div className="container-x flex h-24 items-center justify-between">
          <Logo
            className={`relative z-10 h-12 rounded-full transition-all duration-500 ${
              open
                ? "text-on-navy"
                : scrolled
                  ? "bg-white pl-2 pr-5 text-navy shadow-[0_6px_30px_-12px_rgba(16,33,42,0.25)]"
                  : ""
            }`}
          />

          <div className="relative z-10 flex items-center gap-2.5">
            <ThemeToggle className={open ? "hidden" : "hidden sm:grid"} />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="group inline-flex h-12 items-center gap-4 rounded-full bg-navy pl-6 pr-1.5 text-sm font-medium uppercase tracking-[0.06em] text-on-navy ring-1 ring-white/10"
            >
              {open ? "Close" : "Menu"}
              <span className="relative grid size-9 place-items-center rounded-full bg-navy-2" aria-hidden="true">
                <span
                  className={`absolute size-1.5 rounded-full bg-accent transition-all duration-500 ${
                    open ? "h-[1.5px] w-3.5 rotate-45 rounded-none" : "-translate-x-[5px] group-hover:-translate-x-[7px]"
                  }`}
                />
                <span
                  className={`absolute size-1.5 rounded-full bg-accent transition-all duration-500 ${
                    open ? "h-[1.5px] w-3.5 -rotate-45 rounded-none" : "translate-x-[5px] group-hover:translate-x-[7px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MenuOverlay open={open} onNavigate={() => setOpen(false)} />
    </>
  );
}
