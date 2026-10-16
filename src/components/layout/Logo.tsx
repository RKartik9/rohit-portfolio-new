import Link from "next/link";

export function Slash({ className = "", color = "var(--accent)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 14 16" className={className} aria-hidden="true">
      <path d="M6.2 0H14L7.8 16H0L6.2 0Z" fill={color} />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Rohit Kartik, home"
      className={`group inline-flex items-center gap-2.5 whitespace-nowrap text-[1.3rem] leading-none tracking-tight ${className}`}
    >
      <span className="grid size-8 place-items-center rounded-[0.6rem] bg-accent transition-transform duration-500 group-hover:-rotate-6">
        <Slash className="h-3.5 w-auto" color="#10212a" />
      </span>
      <span>
        <span className="font-bold">Rohit</span> <span className="italic-accent text-[1.15em]">Kartik</span>
      </span>
    </Link>
  );
}
