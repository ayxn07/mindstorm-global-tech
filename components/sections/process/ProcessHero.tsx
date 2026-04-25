"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import BackgroundDarkVeil from "@/components/visuals/BackgroundDarkVeil";
import { processMetrics } from "@/data/process";

export default function ProcessHero() {
  return (
    <section
      aria-labelledby="process-hero-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div className="relative min-h-[100svh] w-full">
        <BackgroundDarkVeil
          hueShift={-158}
          warpAmount={3}
          speed={0.55}
          noiseIntensity={0.02}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black/40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.30)_45%,transparent_85%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--color-ms-black)] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--color-ms-black)]/80 to-transparent"
        />

        <div className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-24 text-center md:px-10 md:py-28 lg:px-16 2xl:px-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.9, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              How We Work
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </motion.div>

          <motion.h1
            id="process-hero-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.9, 0.3, 1] }}
            className="mt-8 max-w-5xl font-heading text-h2-fluid font-semibold uppercase leading-[1.05] tracking-[0.015em] text-white"
          >
            From Brief to Production —{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              Six Engineered Stages.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 0.9, 0.3, 1] }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
          >
            A structured implementation programme — discovery, design, build,
            harden, launch, and operate — engineered for predictable delivery
            across software, hardware, and security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 0.9, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {processMetrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.65 + i * 0.07,
                  ease: [0.22, 0.9, 0.3, 1],
                }}
                className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(215,191,94,0.32)] bg-black/55 px-4 py-2 backdrop-blur-md"
              >
                <span className="font-heading text-base font-semibold text-[var(--color-ms-gold)] md:text-lg">
                  {m.value}
                  {m.suffix}
                </span>
                <span className="text-eyebrow font-heading uppercase text-white/70">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 0.9, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-5"
          >
            <Link
              href="#process-stages"
              className="relative inline-flex select-none items-center justify-center gap-2 rounded-full px-7 py-3 text-eyebrow font-heading uppercase text-black bg-[linear-gradient(180deg,#EBD78A_0%,#D7BF5E_48%,#B89E4C_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_3px_rgba(121,107,56,0.5),0_6px_14px_-4px_rgba(0,0,0,0.55),0_0_0_1px_rgba(215,191,94,0.75),0_0_22px_-6px_rgba(215,191,94,0.35)] transition-[transform,box-shadow,filter] duration-200 ease-out will-change-transform hover:-translate-y-[1.5px] hover:brightness-[1.06] active:translate-y-0 active:brightness-[0.95]"
            >
              Walk the Programme
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/contact"
              className="group/ghost inline-flex items-center gap-2 border-b border-white/25 pb-1 text-eyebrow font-heading uppercase text-white/85 transition-colors hover:border-[var(--color-ms-gold)] hover:text-[var(--color-ms-gold)]"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/ghost:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-white/45">
              <span className="text-eyebrow font-heading uppercase">
                Six Stages
              </span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
