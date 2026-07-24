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

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
      <span className="h-px w-6 bg-accent-600/60" aria-hidden />
      {children}
    </span>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 disabled:opacity-50";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand px-6 py-3 text-white shadow-sm hover:bg-brand-600 hover:shadow-md",
  secondary:
    "bg-white px-6 py-3 text-ink ring-1 ring-line hover:ring-brand hover:text-brand",
  ghost: "px-2 py-1 text-ink hover:text-brand",
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
