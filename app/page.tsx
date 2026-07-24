import Link from "next/link";
import { HomeHero } from "@/app/components/home-hero";
import { TestimonialMarquee } from "@/app/components/testimonials";
import {
  Reveal,
  Stagger,
  StaggerItem,
  Counter,
} from "@/app/components/motion";
import {
  ArrowIcon,
  ButtonLink,
  Container,
  Eyebrow,
  Marquee,
  asset,
} from "@/app/components/ui";
import { services, projects } from "@/app/content";

const featured = projects.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* -------------------------------------------------- Trusted-by band */}
      <section className="border-y border-line bg-surface py-8 shadow-soft">
        <Container className="mb-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Trusted by the founders building climate&apos;s future
          </p>
        </Container>
        <Marquee duration={38}>
          {projects.map((p) => (
            <span
              key={p.slug}
              className="font-display mx-8 text-xl font-medium text-navy/45 transition-colors hover:text-navy sm:text-2xl"
            >
              {p.name}
            </span>
          ))}
        </Marquee>
      </section>

      {/* --------------------------------------------------- Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <Reveal>
              <Eyebrow>Why we exist</Eyebrow>
              <h2 className="font-display mt-6 text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                We bring coherence, confidence, and some much-needed calm to the
                chaos.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="flex flex-col justify-end">
              <p className="text-lg leading-relaxed text-muted">
                Explaining your company&apos;s purpose in a way people can
                understand and connect with isn&apos;t always second nature for
                technical teams. The gap between what a founder means and what
                the market hears is one of the most underestimated risks in
                climate tech.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                We close that gap — turning hard-to-explain innovation into a
                story that earns trust and moves people to act.
              </p>
            </Reveal>
          </div>

          {/* Stat row */}
          <Stagger className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
            {[
              { n: 12, suffix: "+", label: "Ventures & missions" },
              { n: 100, suffix: "%", label: "Climate & energy focused" },
              { n: 6, suffix: "", label: "Founder testimonials" },
              { n: 1, suffix: "", label: "Partner in your corner", plain: "Somerville, MA" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="font-display text-4xl font-semibold text-navy sm:text-5xl">
                  {s.plain ? (
                    <span className="text-2xl sm:text-3xl">{s.plain}</span>
                  ) : (
                    <Counter to={s.n} suffix={s.suffix} />
                  )}
                </div>
                <div className="mt-2 text-sm text-muted">{s.label}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ------------------------------------------------------- Services */}
      <section className="bg-surface-2/50 py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>What we do</Eyebrow>
                <h2 className="font-display mt-6 text-3xl font-semibold text-ink sm:text-4xl">
                  Helping you share why the work matters — not just how it works.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <ButtonLink href="/services/" variant="secondary">
                Explore services
                <ArrowIcon />
              </ButtonLink>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <Link
                  href="/services/"
                  className="card-hover shadow-soft group flex h-full flex-col rounded-2xl border border-line bg-surface p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy/6 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                      {s.icon}
                    </div>
                    <span className="font-display text-sm font-semibold text-steel/60">
                      {s.index}
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-xl font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent-600">
                    {s.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                    {s.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                    Learn more
                    <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---------------------------------------------------- Featured work */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>Selected work</Eyebrow>
                <h2 className="font-display mt-6 text-3xl font-semibold text-ink sm:text-4xl">
                  Stories we&apos;re proud to have shaped.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <ButtonLink href="/work/" variant="secondary">
                View all work
                <ArrowIcon />
              </ButtonLink>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
            {featured.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href="/work/"
                  className="card-hover shadow-soft group block overflow-hidden rounded-2xl border border-line bg-surface"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(p.image)}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-transparent opacity-90" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy backdrop-blur">
                      {p.sector}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white">
                          {p.name}
                        </h3>
                        <p className="text-sm text-white/75">{p.work}</p>
                      </div>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-navy-900 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ------------------------------------------------------ Testimonials */}
      <section className="aurora relative overflow-hidden py-20 text-white sm:py-28">
        <div
          aria-hidden
          className="animate-drift-slow pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        />
        <Container className="relative mb-12">
          <Reveal>
            <Eyebrow tone="light">Kind words</Eyebrow>
            <h2 className="font-display mt-6 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Founders and leaders who trusted us with their story.
            </h2>
          </Reveal>
        </Container>
        <TestimonialMarquee />
      </section>

      {/* --------------------------------------------------- Insights teaser */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="shadow-soft relative overflow-hidden rounded-3xl border border-line bg-surface px-8 py-14 sm:px-14 sm:py-16">
              <div
                aria-hidden
                className="animate-drift-slow absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
              />
              <div
                aria-hidden
                className="animate-float absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-steel/15 blur-3xl"
              />
              <span
                aria-hidden
                className="accent-bar absolute inset-x-0 top-0 h-1"
              />
              <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
                <div>
                  <Eyebrow>CapEnergy Insights · Beta</Eyebrow>
                  <h2 className="font-display mt-5 text-3xl font-semibold text-ink sm:text-4xl">
                    See your brand the way the market actually reads it.
                  </h2>
                  <p className="mt-4 max-w-xl text-muted">
                    Our messaging-intelligence reports surface the contradictions
                    and credibility gaps between what you mean and what investors
                    and customers hear — fast, repeatable, and built to scale.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <ButtonLink href="/insights/" variant="primary">
                    Join the beta
                    <ArrowIcon className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
