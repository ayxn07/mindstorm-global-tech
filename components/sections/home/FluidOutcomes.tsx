"use client";

import { motion } from "motion/react";
import CountUp from "@/components/CountUp";
import { homeOutcomes } from "@/data/pages";

export default function FluidOutcomes() {
  return (
    <section
      aria-labelledby="outcomes-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(215,191,94,0.12) 0%, transparent 55%), radial-gradient(ellipse at 85% 70%, rgba(121,107,56,0.18) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.6))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />

      <div className="relative w-full px-6 py-24 md:px-10 md:py-32 lg:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
              Outcomes We Deliver
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>
          <h2
            id="outcomes-heading"
            className="mt-6 font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            Measurable Impact, Built into Every Engagement
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
            We engineer for reliability, speed, and completeness — so the
            technology you ship stays in the background where it belongs.
          </p>
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {homeOutcomes.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 0.9, 0.3, 1],
                delay: 0.1 * i,
              }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] p-8 backdrop-blur-xl transition-colors duration-300 hover:border-[var(--color-ms-gold)]/55 md:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(215,191,94,0.18),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative">
                <p className="flex items-baseline font-heading text-5xl font-semibold text-[var(--color-ms-gold)] md:text-6xl 2xl:text-7xl">
                  <CountUp to={o.value} duration={1.8} />
                  <span className="ml-1 text-3xl text-[var(--color-ms-gold)]/80 md:text-4xl">
                    {o.suffix}
                  </span>
                </p>
                <p className="mt-6 font-heading text-[11px] uppercase tracking-[0.3em] text-white/75">
                  {o.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {o.detail}
                </p>
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/40 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
