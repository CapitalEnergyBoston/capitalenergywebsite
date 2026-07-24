"use client";

import { motion } from "motion/react";
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
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy backdrop-blur"
          >
            <span className="h-1.5 w-1.5 animate-float rounded-full bg-accent" />
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

/** Animated ambient backdrop: drifting color blobs + an energy-line motif. */
function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {/* Soft base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-surface-2/60" />

      {/* Drifting color blobs */}
      <div className="animate-drift absolute -left-24 -top-24 h-96 w-96 rounded-full bg-steel/25 blur-3xl" />
      <div className="animate-drift-slow absolute right-[-6rem] top-10 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-3xl" />
      <div className="animate-float absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />

      {/* Faint dot grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, color-mix(in oklab, var(--navy) 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 75%)",
        }}
      />

      {/* Energy line motif (echoes the logo), top-right */}
      <svg
        viewBox="0 0 400 200"
        className="absolute right-0 top-0 h-64 w-[36rem] max-w-[70%] text-steel/40"
        fill="none"
      >
        <motion.path
          d="M10 150 L90 110 L120 130 L200 60 L240 90 L330 20 L390 45"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: easeOut, delay: 0.4 }}
        />
      </svg>
    </div>
  );
}
