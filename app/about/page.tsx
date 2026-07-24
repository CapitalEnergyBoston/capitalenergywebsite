import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/app/components/motion";
import {
  ArrowIcon,
  ButtonLink,
  Container,
  Eyebrow,
} from "@/app/components/ui";
import { contact } from "@/app/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Capital Energy is a Somerville-based marketing partner for climate tech and energy startups. Learn how we think and what we stand for.",
};

const values = [
  {
    title: "Clarity over jargon",
    body: "The most advanced technology means nothing if people can't grasp why it matters. We translate, we don't complicate.",
  },
  {
    title: "Substance first",
    body: "We start with the real science and strategy, then build the story on top. No hype we can't back up.",
  },
  {
    title: "Partners, not vendors",
    body: "We embed with founding teams through the messy, high-stakes moments — and stay when it counts.",
  },
  {
    title: "Calm in the chaos",
    body: "Scaling is loud. We bring coherence and steadiness so you can make confident decisions faster.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="animate-drift-slow pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-accent/12 blur-3xl"
        />
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>About us</Eyebrow>
              <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
                We help the climate economy sound as bold as it is.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Capital Energy is a marketing partner for climate tech and energy
                startups. We exist because the people reinventing legacy
                industries are often too close to the work to explain why it
                matters — and that gap is one of the most underestimated risks in
                climate tech.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story + panel */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <Reveal className="space-y-6 text-[17px] leading-relaxed text-muted">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Story is infrastructure.
              </h2>
              <p>
                Great climate technology deserves a narrative that earns trust,
                unlocks capital, and rallies the right people. We treat that
                narrative like infrastructure — something you design
                deliberately, build to last, and improve as you scale.
              </p>
              <p>
                We work shoulder-to-shoulder with founders and leadership teams:
                pressure-testing positioning, translating deep tech into human
                language, and building the brand and go-to-market foundations
                that growth depends on.
              </p>
              <p>
                Based in Somerville, Massachusetts, we&apos;re proud to have
                partnered with climate ventures and mission-driven organizations
                across New England and beyond.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <aside className="shadow-soft rounded-3xl border border-line bg-surface p-8">
                <h3 className="font-display text-lg font-semibold text-ink">
                  At a glance
                </h3>
                <dl className="mt-6 space-y-5">
                  {[
                    ["Based in", "Somerville, MA"],
                    ["Focus", "Climate tech & energy"],
                    ["Practices", "Strategy · Story · GTM"],
                    ["Founder-led", "Hands-on partnership"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                        {k}
                      </dt>
                      <dd className="mt-1 text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-accent-600"
                >
                  {contact.email}
                  <ArrowIcon />
                </a>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-surface-2/50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>What we stand for</Eyebrow>
              <h2 className="font-display mt-6 text-3xl font-semibold text-ink sm:text-4xl">
                Four principles behind every engagement
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card-hover shadow-soft h-full rounded-2xl border border-line bg-surface p-8">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {v.body}
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
              Let&apos;s tell your story well.
            </h2>
            <p className="max-w-md text-muted">
              A short conversation is the fastest way to see if we&apos;re the
              right partner.
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
