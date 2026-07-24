import type { Metadata } from "next";
import {
  ArrowIcon,
  ButtonLink,
  Container,
  Eyebrow,
} from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspective on energy markets, procurement timing, and the transition to cleaner power from the Capital Energy team.",
};

const articles = [
  {
    tag: "Markets",
    title: "When to lock: reading the forward curve without overthinking it",
    excerpt:
      "A simple framework for deciding whether to fix your electricity price now or wait — and the three signals that should move you off the fence.",
    read: "6 min read",
  },
  {
    tag: "Procurement",
    title: "The five clauses that quietly inflate your energy contract",
    excerpt:
      "Bandwidth, materiality, and pass-through language rarely make the headline rate — but they decide what you actually pay. Here's what to watch.",
    read: "5 min read",
  },
  {
    tag: "Sustainability",
    title: "RECs, PPAs, or on-site solar? A decision tree for real budgets",
    excerpt:
      "Decarbonization options aren't interchangeable. We map which lever fits which goal, timeline, and balance sheet.",
    read: "8 min read",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="border-b border-line bg-surface-2/50">
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Insights</Eyebrow>
            <h1 className="font-display mt-5 text-4xl font-semibold text-ink sm:text-5xl">
              Clear thinking on a noisy market.
            </h1>
            <p className="mt-5 text-lg text-muted">
              Practical perspective on energy prices, procurement strategy, and
              the transition to cleaner power — written for decision-makers, not
              traders.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <article
                key={a.title}
                className="group flex flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex w-fit rounded-full bg-brand/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                  {a.tag}
                </span>
                <h2 className="font-display mt-4 text-xl font-semibold leading-snug text-ink">
                  {a.title}
                </h2>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {a.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-muted">{a.read}</span>
                  <ArrowIcon className="text-brand transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-line bg-brand px-8 py-12 text-center text-white sm:px-16">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Get our monthly market note
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/75">
              A short, no-fluff read on where energy prices are heading and what
              it means for your next contract.
            </p>
            <div className="mt-7 flex justify-center">
              <ButtonLink
                href="/contact/"
                variant="secondary"
                className="!bg-white !text-brand hover:!bg-white/90"
              >
                Subscribe
                <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
