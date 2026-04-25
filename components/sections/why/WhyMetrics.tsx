"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CountUp from "@/components/CountUp";
import { images } from "@/data/images";
import { whyMetrics } from "@/data/whyChooseUs";

export default function WhyMetrics() {
  return (
    <section
      aria-labelledby="why-metrics-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 opacity-[0.16]">
        <Image
          src={images.cybersecurityDark.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.85)_0%,rgba(10,9,6,0.94)_100%)]" />
      </div>

      <div className="relative w-full px-6 py-24 md:px-10 md:py-28 lg:px-16 2xl:px-24">
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
              The Numbers
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="why-metrics-heading"
            className="mt-7 font-heading text-h2-fluid font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white "
          >
            What the partnership{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              actually buys you
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {whyMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 0.9, 0.3, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] p-7 transition-colors duration-300 hover:border-[rgba(215,191,94,0.55)] md:p-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-baseline gap-1">
                <CountUp
                  to={m.to}
                  duration={m.duration}
                  delay={0.2 + i * 0.1}
                  className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text font-heading text-display font-semibold leading-none tracking-tight text-transparent md:text-6xl"
                />
                <span className="font-heading text-2xl font-semibold leading-none text-[var(--color-ms-gold)] md:text-3xl">
                  {m.suffix}
                </span>
              </div>

              <p className="relative mt-5 text-eyebrow font-heading uppercase text-white/85">
                {m.label}
              </p>
              <p className="relative mt-3 text-[13px] leading-relaxed text-white/55">
                {m.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
