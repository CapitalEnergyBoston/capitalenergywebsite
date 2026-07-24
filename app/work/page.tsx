import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/app/components/motion";
import { Container, Eyebrow, asset } from "@/app/components/ui";
import { projects } from "@/app/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Capital Energy — brand, story, and go-to-market for climate ventures and mission-driven organizations.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute -left-24 -top-20 -z-10 h-96 w-96 rounded-full bg-steel/20 blur-3xl"
        />
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Our work</Eyebrow>
              <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
                The ventures and missions we&apos;ve helped tell their story.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                From seed-stage climate hardware to nonprofits with a message
                that matters, we help teams turn complex work into something
                people remember.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <StaggerItem key={p.slug}>
                <article className="group relative overflow-hidden rounded-2xl border border-line bg-surface">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(p.image)}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/15 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy backdrop-blur">
                      {p.sector}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h2 className="font-display text-lg font-semibold text-white">
                      {p.name}
                    </h2>
                    <p className="mt-0.5 text-sm text-white/70">{p.work}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
