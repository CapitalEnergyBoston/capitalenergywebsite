import Link from "next/link";
import {
  ArrowIcon,
  ButtonLink,
  Container,
  Eyebrow,
} from "@/app/components/ui";
import { services } from "@/app/content";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 55% at 15% 0%, color-mix(in oklab, var(--brand) 10%, transparent) 0%, transparent 60%), radial-gradient(50% 45% at 100% 20%, color-mix(in oklab, var(--accent) 12%, transparent) 0%, transparent 55%)",
          }}
        />
        <Container className="pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="max-w-3xl reveal">
            <Eyebrow>Boston-based energy advisory</Eyebrow>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl">
              Energy strategy that pays for itself.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Capital Energy helps organizations cut what they spend on power,
              hedge against volatile markets, and build a credible path to
              cleaner energy — without the jargon or the sales pitch.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact/" variant="primary">
                Book a consultation
                <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="/services/" variant="secondary">
                Explore our services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------------- Trust bar */}
      <section className="border-y border-line bg-surface-2/60">
        <Container className="py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-semibold text-brand">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------------- Services */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="font-display mt-5 text-3xl font-semibold text-ink sm:text-4xl">
              Advisory across the full energy lifecycle
            </h2>
            <p className="mt-4 text-lg text-muted">
              Four practice areas, one integrated team. Engage us for a single
              project or as your outsourced energy desk.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href="/services/"
                className="group flex flex-col rounded-2xl border border-line bg-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/8 text-brand">
                  {service.icon}
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {service.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Learn more
                  <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ Approach */}
      <section className="bg-brand text-white">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="font-display mt-5 text-3xl font-semibold sm:text-4xl">
                Independent, data-driven, and always on your side of the table.
              </h2>
              <p className="mt-5 text-white/75">
                We don&apos;t sell energy and we don&apos;t take supplier
                commissions. Our only incentive is the result we deliver for
                you — measured in dollars saved and risk removed.
              </p>
              <div className="mt-8">
                <ButtonLink
                  href="/about/"
                  variant="secondary"
                  className="!bg-white/10 !text-white !ring-white/20 hover:!bg-white/15"
                >
                  How we work
                </ButtonLink>
              </div>
            </div>

            <ol className="space-y-8">
              {approach.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-lg font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-8 py-14 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(50% 120% at 50% 0%, color-mix(in oklab, var(--accent) 10%, transparent), transparent 70%)",
              }}
            />
            <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">
              Let&apos;s find the savings hiding in your energy spend.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              A 30-minute consultation is free, and you&apos;ll leave with at
              least one concrete idea to act on.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/contact/" variant="primary">
                Book a consultation
                <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

const stats = [
  { value: "$40M+", label: "Energy spend under advisory" },
  { value: "12%", label: "Average cost reduction" },
  { value: "150+", label: "Contracts negotiated" },
  { value: "20 yrs", label: "In energy markets" },
];

const approach = [
  {
    title: "Understand your load",
    body: "We start with your actual usage data, contracts, and goals — not a template. Every recommendation is grounded in your numbers.",
  },
  {
    title: "Model the market",
    body: "We benchmark suppliers, timing, and structures against live market data to find the options worth pursuing.",
  },
  {
    title: "Negotiate and execute",
    body: "We run the process end to end, put suppliers in competition, and hand you a clean, defensible decision.",
  },
  {
    title: "Manage the risk",
    body: "Markets move. We monitor your position and flag when it’s time to act, so you’re never caught off guard.",
  },
];
