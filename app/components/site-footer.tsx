import Link from "next/link";
import { Logo } from "@/app/components/logo";
import { navLinks } from "@/app/components/nav-links";
import { ArrowIcon, Container } from "@/app/components/ui";
import { contact, socials } from "@/app/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-navy-900 text-white/75">
      {/* CTA strip */}
      <Container className="border-b border-white/10 py-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="font-display max-w-xl text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s make your work impossible to ignore.
          </h2>
          <Link
            href="/contact/"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-navy-900 transition-transform hover:scale-[1.03]"
          >
            Talk with us
            <ArrowIcon className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>

      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Brand, story, and go-to-market for the climate tech founders
              reinventing legacy industries.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white/70 transition-colors hover:text-accent-300"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="text-white/70 transition-colors hover:text-accent-300"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="text-white/60">{contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Capital Energy. All rights reserved.</p>
          <p>Somerville, Massachusetts · Marketing for climate tech</p>
        </div>
      </Container>
    </footer>
  );
}
