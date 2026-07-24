import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/app/components/motion";
import {
  ArrowIcon,
  ButtonLink,
  Container,
  Eyebrow,
} from "@/app/components/ui";

export const metadata: Metadata = {
  title: "CapEnergy Insights",
  description:
    "CapEnergy Insights is a messaging-intelligence beta that surfaces the credibility gaps between what climate tech teams mean and what the market hears.",
};

const modules = [
  {
    title: "Baseline Assessment",
    body: "A clear read on how your company is understood today — across your site, deck, and public presence.",
  },
  {
    title: "Investor Perception Analysis",
    body: "Where your narrative builds conviction and where it quietly creates doubt in the room that matters most.",
  },
  {
    title: "Behavioral Risk Modeling",
    body: "The messaging contradictions and credibility gaps most likely to cost you trust, mapped and prioritized.",
  },
];

const benefits = [
  { title: "Rapid results", body: "Actionable findings in days, not months." },
  { title: "Scales with you", body: "Re-run as you pivot, raise, and grow." },
  {
    title: "Repeatable intelligence",
    body: "A consistent signal you can track over time.",
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-steel/30 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-drift-slow pointer-events-none absolute -right-16 top-10 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-3xl"
        />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow tone="light">CapEnergy Insights · Beta program</Eyebrow>
              <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
                See your brand the way the market actually reads it.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                CapEnergy Insights is our messaging-intelligence report. It
                surfaces the contradictions and credibility gaps between what you
                mean and what investors and customers hear — so you can fix them
                before they cost you.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9">
                <ButtonLink href="/contact/" variant="light">
                  Join the beta
                  <ArrowIcon className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What's in a report */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>What&apos;s in a report</Eyebrow>
              <h2 className="font-display mt-6 text-3xl font-semibold text-ink sm:text-4xl">
                Three lenses on how you land.
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {modules.map((m, i) => (
              <StaggerItem key={m.title} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8">
                  <span className="font-display text-sm font-semibold text-steel/50">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-semibold text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {m.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Benefits band */}
      <section className="bg-surface-2/50 py-16 sm:py-20">
        <Container>
          <Stagger className="grid gap-8 sm:grid-cols-3">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="flex items-start gap-4">
                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-600">
                    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
                      <path
                        d="M4 10.5 8 14l8-8.5"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-[15px] text-muted">{b.body}</p>
                  </div>
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
              Want an early read on your messaging?
            </h2>
            <p className="max-w-md text-muted">
              We&apos;re onboarding a small group of climate tech teams into the
              CapEnergy Insights beta. Reach out to claim a spot.
            </p>
            <ButtonLink href="/contact/" variant="primary" className="mt-2">
              Join the beta
              <ArrowIcon className="transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
