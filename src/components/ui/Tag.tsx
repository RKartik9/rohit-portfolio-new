export default function Tag({
  children,
  tone = "default",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "default" | "glass";
  className?: string;
}) {
  const tones = {
    default: "border border-line text-ink-soft",
    glass: "border border-white/30 bg-white/10 text-white backdrop-blur-md",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
