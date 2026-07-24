import Link from "next/link";
import { asset } from "@/app/components/ui";

/**
 * Real Capital Energy wordmark (navy + steel mountain/energy mark).
 * The source PNG is navy on transparent; on dark surfaces we flip it to solid
 * white with a filter so it stays legible.
 */
export function Logo({
  className = "",
  tone = "dark",
  priority = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Capital Energy — home"
      className={`inline-flex items-center transition-opacity hover:opacity-80 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/brand/logo-stack.png")}
        alt="Capital Energy"
        width={340}
        height={150}
        loading={priority ? "eager" : "lazy"}
        className={`h-10 w-auto sm:h-11 ${
          tone === "light" ? "[filter:brightness(0)_invert(1)]" : ""
        }`}
      />
    </Link>
  );
}
