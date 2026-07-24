import Link from "next/link";
import { Logo } from "@/app/components/logo";
import { navLinks } from "@/app/components/nav-links";
import { Container } from "@/app/components/ui";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line bg-brand-700 text-white/80">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Independent energy advisory for organizations that want lower
              costs, cleaner power, and a strategy they can defend to any
              stakeholder.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@capitalenergy.com"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  hello@capitalenergy.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+16175550100"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  (617) 555-0100
                </a>
              </li>
              <li className="text-white/70">Boston, Massachusetts</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Capital Energy. All rights reserved.</p>
          <p>Boston-based energy consulting.</p>
        </div>
      </Container>
    </footer>
  );
}
