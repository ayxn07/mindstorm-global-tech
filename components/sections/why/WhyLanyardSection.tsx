"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";

const Lanyard = dynamic(() => import("@/components/Lanyard/Lanyard"), {
  ssr: false,
  loading: () => (
    <div aria-hidden className="absolute inset-0 bg-[var(--color-ms-surface-2)]" />
  ),
});

export default function WhyLanyardSection() {
  return (
    <section
      aria-labelledby="why-lanyard-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(215,191,94,0.10) 0%, transparent 55%), radial-gradient(ellipse at 50% 90%, rgba(121,107,56,0.14) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />

      <div className="relative w-full px-6 py-20 md:px-10 md:py-28 lg:px-16 2xl:px-24">
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
              One Badge. Every Layer.
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="why-lanyard-heading"
            className="mt-7 font-heading text-h2-fluid font-semibold uppercase leading-[1.06] tracking-[0.015em] text-white "
          >
            Built Around{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              One Identity.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            One partner badge across hardware, software, networks and security.
            Drag the card — every system we deliver hangs together on the same
            lanyard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 0.9, 0.3, 1] }}
          className="relative mx-auto mt-12 flex h-[clamp(34rem,72vw,52rem)] w-full max-w-4xl items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[radial-gradient(ellipse_at_center,rgba(28,25,18,0.95)_0%,rgba(8,8,6,0.98)_70%)] md:mt-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(215,191,94,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />

          <div className="absolute inset-0 z-10">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>

          <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-center">
            <span className="text-eyebrow font-heading uppercase text-white/50">
              Drag · Throw · Release
            </span>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.9, 0.3, 1] }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 md:mt-14 md:grid-cols-4"
        >
          {[
            "Single point of accountability",
            "Cisco-grade network engineering",
            "Security baked in, not bolted on",
            "Same engineers, end to end",
          ].map((line) => (
            <li
              key={line}
              className="flex items-start gap-2.5 rounded-xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.7)_0%,rgba(10,9,6,0.85)_100%)] px-4 py-3 text-[12px] leading-relaxed text-white/75"
            >
              <span
                aria-hidden
                className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-ms-gold)]"
              />
              <span>{line}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
