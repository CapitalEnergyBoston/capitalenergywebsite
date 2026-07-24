import Link from "next/link";

/** Wordmark + monogram. Uses currentColor so it adapts to light/dark backgrounds. */
export function Logo({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "light";
}) {
  const textColor = tone === "light" ? "text-white" : "text-ink";
  return (
    <Link
      href="/"
      aria-label="Capital Energy — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M13 2 4 13.5h6L9 22l11-13h-6l-1-7Z"
            fill="var(--accent)"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={`font-display text-lg font-semibold ${textColor}`}>
        Capital&nbsp;Energy
      </span>
    </Link>
  );
}
