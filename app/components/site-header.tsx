"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/app/components/logo";
import { navLinks } from "@/app/components/nav-links";
import { ButtonLink, Container } from "@/app/components/ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Logo priority />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-medium transition-colors ${
                isActive(link.href) ? "text-navy" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contact/" variant="primary">
            Talk with us
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink ring-1 ring-line md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            {open ? (
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-3 text-base font-medium ${
                  isActive(link.href)
                    ? "bg-surface-2 text-navy"
                    : "text-ink hover:bg-surface-2"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/contact/" variant="primary" className="mt-2">
              Talk with us
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
