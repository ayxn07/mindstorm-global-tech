"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CheckCircle2, Clock, FileText } from "lucide-react";
import { processStages } from "@/data/process";
import { images } from "@/data/images";

export default function ProcessStages() {
  return (
    <section
      id="process-stages"
      aria-labelledby="process-stages-heading"
      className="relative w-full overflow-hidden bg-black py-20 md:py-24"
    >
      <div className="relative w-full px-6 md:px-10 lg:px-16 2xl:px-24">
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
              The Stages
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="process-stages-heading"
            className="mt-7 font-heading text-3xl font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            Six stages, one programme —{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              detailed.
            </span>
          </h2>
        </motion.div>

        <ol className="relative mt-14 space-y-16 md:mt-16 md:space-y-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--color-ms-border)] to-transparent lg:block"
          />

          {processStages.map((s, i) => {
            const reverse = i % 2 === 1;
            const img = images[s.imageKey];
            return (
              <li
                key={s.step}
                className={`relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-12% 0px" }}
                  transition={{ duration: 0.8, ease: [0.22, 0.9, 0.3, 1] }}
                  className="relative lg:col-span-6"
                >
                  <div className="relative aspect-[16/10] max-h-[360px] w-full overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-black/40 lg:max-h-[320px]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent"
                    />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[rgba(215,191,94,0.45)] bg-black/65 px-3 py-1.5 backdrop-blur-md">
                      <span className="font-heading text-[10px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
                        Stage {s.step}
                      </span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                      <span className="font-heading text-xs uppercase tracking-[0.28em] text-white/85">
                        {s.shortTitle}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 backdrop-blur-md">
                        <Clock className="h-3 w-3 text-[var(--color-ms-gold)]" />
                        <span className="font-heading text-[10px] uppercase tracking-[0.28em] text-white/75">
                          {s.duration}
                        </span>
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-12% 0px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 0.9, 0.3, 1] }}
                  className="lg:col-span-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-5xl font-semibold leading-none text-[var(--color-ms-gold)] md:text-6xl">
                      {s.step}
                    </span>
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-gradient-to-r from-[var(--color-ms-gold)]/55 to-transparent"
                    />
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-semibold uppercase tracking-[0.015em] text-white md:text-3xl">
                    {s.title}
                  </h3>

                  <p className="mt-5 text-base leading-relaxed text-white/70">
                    {s.description}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <p className="font-heading text-[10px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
                        Outcomes
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {s.outcomes.map((o) => (
                          <li
                            key={o}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-ms-gold)]" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-heading text-[10px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
                        Artefacts
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {s.artefacts.map((a) => (
                          <li
                            key={a}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75"
                          >
                            <FileText className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-ms-gold)]" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
