import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/app/components/motion";
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
    "Smart Strategy, Bold Stories, and Real Impact — positioning, messaging, and go-to-market for climate tech and energy startups.",
};

const process = [
  {
    step: "01",
    title: "Listen & assess",
    body: "We start inside your world — the science, the roadmap, the market — and benchmark how you're currently understood.",
  },
  {
    step: "02",
    title: "Sharpen the story",
    body: "We find the through-line that makes your work matter, then shape positioning and messaging around it.",
  },
  {
    step: "03",
    title: "Launch & learn",
    body: "We put the story to work across brand, investor, and customer touchpoints — and measure what lands.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="animate-drift-slow pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
        />
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Services</Eyebrow>
              <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
                Helping you share why the work matters, not just how it works.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                We specialize in marketing for climate tech and energy startups
                — the hard-to-explain work of innovating and reinventing legacy
                industries. Three connected practices take you from clarity to
                compelling to compounding.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Service sections */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <article
                  id={s.slug}
                  className="grid scroll-mt-24 gap-8 rounded-3xl border border-line bg-surface p-8 sm:p-12 md:grid-cols-[1fr_1.3fr] md:gap-12"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-white">
                        {s.icon}
                      </div>
                      <span className="font-display text-4xl font-semibold text-steel/30">
                        {s.index}
                      </span>
                    </div>
                    <h2 className="font-display mt-6 text-2xl font-semibold text-ink sm:text-3xl">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-base font-medium text-accent-600">
                      {s.tagline}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-[17px] leading-relaxed text-muted">
                      {s.summary}
                    </p>
                    <ul className="mt-7 grid gap-3">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-3 rounded-xl bg-surface-2/70 px-4 py-3 text-ink"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="h-5 w-5 shrink-0 text-accent-600"
                            fill="none"
                          >
                            <path
                              d="M4 10.5 8 14l8-8.5"
                              stroke="currentColor"
                              strokeWidth="1.9"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[15px] font-medium">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-surface-2/50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>How we work</Eyebrow>
              <h2 className="font-display mt-6 text-3xl font-semibold text-ink sm:text-4xl">
                A calm, repeatable path from noise to narrative.
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-8 md:grid-cols-3">
            {process.map((p) => (
              <StaggerItem key={p.step}>
                <div className="relative">
                  <div className="font-display text-5xl font-semibold text-steel/25">
                    {p.step}
                  </div>
                  <h3 className="font-display mt-3 text-xl font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Not sure where to start?
            </h2>
            <p className="max-w-md text-muted">
              Tell us about your company and we&apos;ll point you to the
              highest-impact place to begin.
            </p>
            <ButtonLink href="/contact/" variant="primary" className="mt-2">
              Talk with us
              <ArrowIcon className="transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
