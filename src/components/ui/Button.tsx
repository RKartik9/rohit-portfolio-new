import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "light" | "dark" | "outline" | "accent";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
};

const shells: Record<Variant, string> = {
  light: "bg-white text-navy shadow-[0_6px_30px_-12px_rgba(16,33,42,0.25)] hover:shadow-[0_10px_40px_-12px_rgba(16,33,42,0.35)]",
  dark: "bg-navy text-on-navy hover:bg-navy-2",
  outline: "border border-accent/70 text-ink hover:bg-accent/10",
  accent: "bg-accent text-navy hover:brightness-105",
};

const dots: Record<Variant, string> = {
  light: "bg-accent text-navy",
  dark: "bg-navy-2 text-accent",
  outline: "",
  accent: "bg-navy text-accent",
};

export function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`size-4 ${className}`}>
      <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`size-[0.9em] ${className}`}>
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Button({ href, children, variant = "light", size = "md", external, className = "" }: Props) {
  const h = size === "lg" ? "h-14 text-base" : "h-12 text-[0.95rem]";
  const circle = size === "lg" ? "size-11" : "size-9";
  const hasDot = variant !== "outline";
  const cls = `group inline-flex items-center gap-4 rounded-full font-medium transition-all duration-300 ${h} ${
    hasDot ? "pl-6 pr-1.5" : "px-7"
  } ${shells[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {hasDot ? (
        <span
          className={`grid ${circle} place-items-center rounded-full transition-transform duration-500 group-hover:translate-x-0.5 group-hover:rotate-[360deg] ${dots[variant]}`}
        >
          <Chevron />
        </span>
      ) : (
        <Chevron className="transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        className={cls}
        target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
