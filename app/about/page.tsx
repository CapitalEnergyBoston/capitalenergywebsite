import type { Metadata } from "next";
import {
  ArrowIcon,
  ButtonLink,
  Container,
  Eyebrow,
} from "@/app/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Capital Energy is an independent, Boston-based energy advisory. Learn how we work and what we stand for.",
};

const values = [
  {
    title: "Independence first",
    body: "We take no supplier commissions and sell no energy. The only party we answer to is you.",
  },
  {
    title: "Decisions, not decks",
    body: "We translate complex markets into a clear recommendation you can act on — and defend to your board.",
  },
  {
    title: "Skin in the outcome",
    body: "Our engagements are structured so we win when you save. Aligned incentives, every time.",
  },
  {
    title: "Plain language",
    body: "No jargon walls. We explain the why behind every number so your team actually understands the strategy.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-surface-2/50">
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <Eyebrow>About us</Eyebrow>
            <h1 className="font-display mt-5 text-4xl font-semibold text-ink sm:text-5xl">
              An energy partner that works only for you.
            </h1>
            <p className="mt-5 text-lg text-muted">
              Capital Energy was founded on a simple frustration: most energy
              &quot;advisors&quot; are really brokers, paid by the suppliers
              they recommend. We built the firm we wished existed — genuinely
              independent, deeply analytical, and relentlessly focused on the
              client&apos;s bottom line.
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div className="space-y-6 text-[17px] leading-relaxed text-muted">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Two decades in the markets, one job: yours.
              </h2>
              <p>
                Our team has spent careers on the trading floors, procurement
                desks, and sustainability programs of energy-intensive
                organizations. We&apos;ve sat on every side of the table — which
                is exactly why we know where the value and the risk hide.
              </p>
              <p>
                Today we bring that experience to organizations across New
                England and beyond: universities, healthcare systems,
                manufacturers, real estate portfolios, and municipalities.
                Different loads, same mission — pay less, waste less, and build
                a path to cleaner energy that actually pencils out.
              </p>
              <p>
                We keep our engagements small and senior. When you work with
                Capital Energy, you work with the people who do the analysis,
                not a junior handoff.
              </p>
            </div>

            <aside className="rounded-3xl border border-line bg-surface p-8">
              <h3 className="font-display text-lg font-semibold text-ink">
                At a glance
              </h3>
              <dl className="mt-6 space-y-5">
                {[
                  ["Founded", "Boston, Massachusetts"],
                  ["Focus", "Independent energy advisory"],
                  ["Clients", "Institutions & enterprises"],
                  ["Coverage", "New England & national"],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {k}
                    </dt>
                    <dd className="mt-1 text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-surface-2/50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="font-display mt-5 text-3xl font-semibold text-ink sm:text-4xl">
              Four principles we don&apos;t compromise on
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-line bg-surface p-8"
              >
                <h3 className="font-display text-xl font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-display text-3xl font-semibold text-ink">
              Let&apos;s talk about your energy strategy.
            </h2>
            <p className="max-w-md text-muted">
              A short conversation is the fastest way to see whether we&apos;re
              the right fit.
            </p>
            <ButtonLink href="/contact/" variant="primary" className="mt-2">
              Book a consultation
              <ArrowIcon />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
