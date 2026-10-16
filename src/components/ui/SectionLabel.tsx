export default function SectionLabel({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <p className={`flex items-center gap-3 text-[0.95rem] text-ink-soft md:whitespace-nowrap ${className}`}>
      {index && <span className="tabular-nums text-accent-deep">{index}</span>}
      <span>{children}</span>
    </p>
  );
}
