import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix an internal path with the deploy basePath (for <img>/asset src, not <Link>). */
export function asset(path: string): string {
  return `${basePath}${path}`;
}

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "text-accent-300" : "text-accent-600";
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${color}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      {children}
    </span>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

const buttonBase =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy px-6 py-3 text-white shadow-sm hover:bg-navy-700 hover:shadow-md hover:shadow-navy/10",
  secondary:
    "bg-white px-6 py-3 text-ink ring-1 ring-line hover:ring-navy hover:text-navy",
  light:
    "bg-white/10 px-6 py-3 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15",
  ghost: "px-2 py-1 text-ink hover:text-navy",
};

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link
      href={href}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 ${className}`}
      aria-hidden
    >
      <path
        d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Infinite marquee. Renders children twice and translates -50% so the loop is
 * seamless. Pure CSS animation (see .animate-marquee in globals.css).
 */
export function Marquee({
  children,
  duration = 40,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div
        className="animate-marquee flex w-max items-center hover:[animation-play-state:paused]"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
