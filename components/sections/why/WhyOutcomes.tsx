"use client";

import { motion } from "motion/react";
import TracingBeam from "@/components/aceternity/TracingBeam";
import { whyOutcomeChapters } from "@/data/whyChooseUs";

export default function WhyOutcomes() {
  return (
    <section
      aria-labelledby="why-outcomes-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.32] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,191,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.06) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(215,191,94,0.10),transparent_55%)]"
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
            <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
              The Outcomes Chapter
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="why-outcomes-heading"
            className="mt-7 font-heading text-3xl font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            What changes after{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              we step in
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            Five outcomes our clients say define the difference — written as a
            chapter book, traced as you read.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-4xl pl-6 md:pl-12">
          <TracingBeam className="px-2 md:px-6">
            <div className="space-y-16 md:space-y-20">
              {whyOutcomeChapters.map((chapter, i) => {
                const Icon = chapter.icon;
                return (
                  <motion.article
                    key={chapter.index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.05,
                      ease: [0.22, 0.9, 0.3, 1],
                    }}
                    className="relative"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-heading text-[10px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
                        Chapter {chapter.index}
                      </span>
                      <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]/40" />
                      <span className="font-heading text-[10px] uppercase tracking-[0.28em] text-white/50">
                        {chapter.eyebrow}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-2xl font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-3xl">
                      {chapter.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-base">
                      {chapter.body}
                    </p>

                    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.7)_0%,rgba(10,9,6,0.92)_100%)] p-5 md:flex-row md:items-start md:gap-6 md:p-6">
                      <span
                        aria-hidden
                        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.16)_0%,rgba(121,107,56,0.04)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                      >
                        <Icon className="h-5 w-5 text-[var(--color-ms-gold)]" />
                      </span>
                      <ul className="grid w-full grid-cols-1 gap-2.5">
                        {chapter.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-[14px] leading-relaxed text-white/70"
                          >
                            <span
                              aria-hidden
                              className="mt-[8px] inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-ms-gold)]"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </TracingBeam>
        </div>
      </div>
    </section>
  );
}
