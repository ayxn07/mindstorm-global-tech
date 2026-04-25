"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { homeProcessSteps } from "@/data/pages";

export default function ProcessPreview() {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(215,191,94,0.08),transparent_55%)]"
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
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
              <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
                How We Work
              </span>
            </div>
            <h2
              id="process-heading"
              className="mt-6 font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
            >
              A Six-Step Path from Brief to Production
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
              A structured implementation approach from requirement analysis to
              long-term support — engineered for predictable delivery.
            </p>
          </div>

          <Link
            href="/process"
            className="group inline-flex shrink-0 items-center gap-2 font-heading text-[12px] uppercase tracking-[0.22em] text-[var(--color-ms-gold)] transition-colors hover:text-[var(--color-ms-gold-muted)]"
          >
            <span>See the full process</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent md:block"
          />

          <ol className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:grid-cols-6">
            {homeProcessSteps.map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 0.9, 0.3, 1],
                  delay: 0.08 * i,
                }}
                className="relative flex flex-col"
              >
                <div className="relative z-10 mb-6 inline-flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[var(--color-ms-border)] bg-[var(--color-ms-surface)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_-12px_rgba(0,0,0,0.8)]">
                  <div
                    aria-hidden
                    className="absolute inset-1 rounded-full border border-[rgba(215,191,94,0.25)] bg-[radial-gradient(circle_at_top,rgba(215,191,94,0.14),transparent_60%)]"
                  />
                  <span className="relative font-heading text-2xl font-semibold text-[var(--color-ms-gold)]">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold uppercase tracking-[0.05em] text-white md:text-lg">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {s.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
