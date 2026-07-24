"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
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
  // Pointer position, normalized to [-1, 1], smoothed — drives the parallax.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      px.set(x);
      py.set(y);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [px, py]);

  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop sx={sx} sy={sy} />

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
              <span
                aria-hidden
                className="absolute -inset-x-3 -inset-y-1 -z-10 rounded-2xl bg-accent/25 blur-2xl"
              />
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

type MV = ReturnType<typeof useSpring>;

/** Animated ambient backdrop: parallax color blobs + an energy-line motif. */
function HeroBackdrop({ sx, sy }: { sx: MV; sy: MV }) {
  // Different depths move by different amounts for a layered parallax feel.
  const b1x = useTransform(sx, (v) => v * -28);
  const b1y = useTransform(sy, (v) => v * -22);
  const b2x = useTransform(sx, (v) => v * 34);
  const b2y = useTransform(sy, (v) => v * 26);
  const b3x = useTransform(sx, (v) => v * 18);
  const b3y = useTransform(sy, (v) => v * -16);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {/* Base wash — deeper at the edges for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-background to-surface-2" />

      {/* Parallax color blobs */}
      <motion.div
        style={{ x: b1x, y: b1y }}
        className="animate-drift absolute -left-24 -top-24 h-96 w-96 rounded-full bg-steel/35 blur-3xl"
      />
      <motion.div
        style={{ x: b2x, y: b2y }}
        className="animate-drift-slow absolute right-[-6rem] top-6 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl"
      />
      <motion.div
        style={{ x: b3x, y: b3y }}
        className="animate-float absolute bottom-[-7rem] left-1/3 h-80 w-80 rounded-full bg-navy/15 blur-3xl"
      />

      {/* Faint dot grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, color-mix(in oklab, var(--navy) 14%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(72% 62% at 50% 40%, #000 0%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(72% 62% at 50% 40%, #000 0%, transparent 78%)",
        }}
      />

      {/* Energy line motif (echoes the logo), top-right */}
      <motion.svg
        viewBox="0 0 400 200"
        className="absolute right-0 top-0 h-64 w-[36rem] max-w-[70%] text-steel/50"
        fill="none"
        style={{ x: b3x, y: b3y }}
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
      </motion.svg>
    </div>
  );
}
