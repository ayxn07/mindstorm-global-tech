"use client";

import { motion } from "motion/react";
import { Check, Minus } from "lucide-react";
import Meteors from "@/components/aceternity/Meteors";
import { whyComparison } from "@/data/whyChooseUs";

export default function WhyComparison() {
  return (
    <section
      aria-labelledby="why-comparison-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_30%,rgba(215,191,94,0.10),transparent_60%),radial-gradient(ellipse_50%_45%_at_30%_70%,rgba(121,107,56,0.10),transparent_60%)]"
      />

      <div className="relative w-full px-6 py-24 md:px-10 md:py-32 lg:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              Vendor vs Mindstorm
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="why-comparison-heading"
            className="mt-7 font-heading text-h2-fluid font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white "
          >
            The same brief, two{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              very different outcomes
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            Compare what most IT vendors deliver against the Mindstorm
            programme — across delivery, security, accountability, and
            evolution.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Vendor column */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(20,18,14,0.8)_0%,rgba(8,8,6,0.92)_100%)] p-7 md:p-9"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-eyebrow font-heading uppercase text-white/50">
                {whyComparison.vendor.label}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-eyebrow font-heading uppercase text-white/55">
                {whyComparison.vendor.badge}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {whyComparison.vendor.summary}
            </p>

            <ul className="mt-7 space-y-3">
              {whyComparison.rows.map((row) => (
                <li
                  key={row.vendor}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/30 p-3.5"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5"
                  >
                    <Minus className="h-3 w-3 text-white/40" />
                  </span>
                  <span className="text-[13.5px] leading-relaxed text-white/55">
                    {row.vendor}
                  </span>
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Mindstorm column */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 0.9, 0.3, 1],
            }}
            className="relative overflow-hidden rounded-3xl border border-[rgba(215,191,94,0.45)] bg-[linear-gradient(180deg,rgba(38,32,16,0.85)_0%,rgba(10,9,6,0.95)_100%)] p-7 shadow-[0_0_0_1px_rgba(215,191,94,0.15),0_30px_70px_-30px_rgba(215,191,94,0.35)] md:p-9"
          >
            <Meteors number={14} />

            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-9 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/75 to-transparent"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.22),transparent_70%)]"
            />

            <div className="relative flex items-center justify-between gap-3">
              <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
                {whyComparison.mindstorm.label}
              </span>
              <span className="rounded-full border border-[rgba(215,191,94,0.55)] bg-[rgba(215,191,94,0.12)] px-3 py-1 text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
                {whyComparison.mindstorm.badge}
              </span>
            </div>

            <p className="relative mt-4 text-sm leading-relaxed text-white/80">
              {whyComparison.mindstorm.summary}
            </p>

            <ul className="relative mt-7 space-y-3">
              {whyComparison.rows.map((row, i) => (
                <motion.li
                  key={row.mindstorm}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.2 + i * 0.05,
                    ease: [0.22, 0.9, 0.3, 1],
                  }}
                  className="flex items-start gap-3 rounded-xl border border-[rgba(215,191,94,0.2)] bg-black/35 p-3.5 backdrop-blur-sm"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[rgba(215,191,94,0.55)] bg-[rgba(215,191,94,0.16)]"
                  >
                    <Check className="h-3 w-3 text-[var(--color-ms-gold)]" />
                  </span>
                  <span className="text-[13.5px] leading-relaxed text-white/80">
                    {row.mindstorm}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
