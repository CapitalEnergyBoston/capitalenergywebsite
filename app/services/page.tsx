import type { Metadata } from "next";
import {
  ArrowIcon,
  ButtonLink,
  Container,
  Eyebrow,
} from "@/app/components/ui";
import { services } from "@/app/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Energy procurement, sustainability, risk management, and bill audit — independent advisory across the full energy lifecycle.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-surface-2/50">
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="font-display mt-5 text-4xl font-semibold text-ink sm:text-5xl">
              Everything you need from an energy desk — without the headcount.
            </h1>
            <p className="mt-5 text-lg text-muted">
              Whether you have a single contract coming up for renewal or a
              portfolio of sites across markets, we bring the data, the supplier
              relationships, and the negotiating leverage.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-6">
            {services.map((service, i) => (
              <article
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 gap-8 rounded-3xl border border-line bg-surface p-8 sm:p-12 md:grid-cols-[1fr_1.4fr]"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/8 text-brand">
                      {service.icon}
                    </div>
                    <span className="font-display text-sm font-semibold text-accent-600">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="font-display mt-5 text-2xl font-semibold text-ink">
                    {service.title}
                  </h2>
                </div>

                <div>
                  <p className="text-[17px] leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-1">
                    {service.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-ink">
                        <svg
                          viewBox="0 0 20 20"
                          className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
                          fill="none"
                        >
                          <path
                            d="M4 10.5 8 14l8-8.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-[15px]">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Not sure where to start?
            </h2>
            <p className="max-w-md text-muted">
              Tell us about your situation and we&apos;ll point you to the
              highest-impact place to begin.
            </p>
            <ButtonLink href="/contact/" variant="primary" className="mt-2">
              Talk to an advisor
              <ArrowIcon />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
