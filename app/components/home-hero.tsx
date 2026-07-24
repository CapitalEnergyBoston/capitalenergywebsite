"use client";

import { motion } from "motion/react";
import { type SVGProps } from "react";
import { ArrowIcon, ButtonLink, Container } from "@/app/components/ui";

const easeOut = [0.22, 1, 0.36, 1] as const;

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop />

      <Container className="relative pt-20 pb-20 sm:pt-28 sm:pb-28">
        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy shadow-soft backdrop-blur"
          >
            <span className="h-1.5 w-1.5 animate-float rounded-full bg-accent shadow-[0_0_12px_2px_var(--accent)]" />
            Marketing for climate tech
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display mt-7 text-[2.6rem] font-semibold leading-[1.03] text-ink sm:text-6xl lg:text-7xl"
          >
            Building from scratch
            <br className="hidden sm:block" /> or{" "}
            <span className="relative whitespace-nowrap text-navy">
              scaling fast
              <AccentUnderline />
            </span>
            ?
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            We help climate tech companies translate complex work into
            compelling brands — so you can{" "}
            <span className="font-medium text-ink">establish trust</span>,{" "}
            <span className="font-medium text-ink">accelerate growth</span>, and{" "}
            <span className="font-medium text-ink">shape your story</span>.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href="/services/" variant="primary">
              How can we help?
              <ArrowIcon className="transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="/work/" variant="secondary">
              See our work
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function AccentUnderline() {
  return (
    <motion.svg
      viewBox="0 0 300 12"
      className="absolute -bottom-2 left-0 w-full text-accent"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 8C60 3 120 3 150 6c40 3 90 3 148-2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: easeOut, delay: 0.9 }}
      />
    </motion.svg>
  );
}

/**
 * Calm ambient backdrop: a clean light wash with a single soft, slowly rotating
 * color sheen and one gently breathing glow. Cohesive cool tones, low opacity —
 * movement you notice only if you look for it. Plus a faint scrolling ticker.
 */
function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {/* Clean base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-background" />

      {/* Soft, slowly rotating light sheen — the main subtle motion */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-spin-slow absolute left-1/2 top-[-20%] h-[120vw] w-[120vw] -translate-x-1/2 opacity-90"
          style={{
            background:
              "conic-gradient(from 90deg, transparent 0deg, color-mix(in oklab, var(--steel) 42%, transparent) 55deg, transparent 125deg, color-mix(in oklab, var(--accent) 22%, transparent) 205deg, transparent 275deg, color-mix(in oklab, var(--navy) 24%, transparent) 325deg, transparent 360deg)",
            filter: "blur(64px)",
            WebkitMaskImage:
              "radial-gradient(closest-side, #000 35%, transparent 72%)",
            maskImage:
              "radial-gradient(closest-side, #000 35%, transparent 72%)",
          }}
        />
      </div>

      {/* One gently breathing steel glow, low and soft */}
      <div className="animate-drift absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-steel/18 blur-3xl" />

      {/* Faint scrolling ticker motif — a quiet nod to the logo */}
      <div className="absolute right-[-6%] top-10 w-[46rem] max-w-[80%] -rotate-[6deg] opacity-60">
        <div className="marquee-mask overflow-hidden">
          <div
            className="animate-marquee flex w-max text-steel/35"
            style={{ ["--marquee-duration" as string]: "26s" }}
          >
            <TickerLine />
            <TickerLine aria-hidden />
          </div>
        </div>
      </div>

      {/* Bottom fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

// Seamlessly tiling jagged "ticker" segment (same y at both ends so copies loop).
const TICKER_PATH =
  "M0 70 L30 52 L55 63 L90 32 L120 50 L150 26 L185 52 L215 30 L250 58 L275 40 L300 70";

function TickerLine({ className = "", ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 300 100"
      className={`h-24 w-[300px] shrink-0 sm:h-28 ${className}`}
      fill="none"
      {...rest}
    >
      <path
        d={TICKER_PATH}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
