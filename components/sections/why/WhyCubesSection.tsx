"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";

const Cubes = dynamic(() => import("@/components/Cubes"), {
  ssr: false,
  loading: () => (
    <div aria-hidden className="absolute inset-0 bg-[var(--color-ms-surface-2)]" />
  ),
});

export default function WhyCubesSection() {
  return (
    <section
      aria-labelledby="why-cubes-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(215,191,94,0.10) 0%, transparent 50%), radial-gradient(ellipse at 100% 0%, rgba(121,107,56,0.18) 0%, transparent 55%)",
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
            <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
              Modular · Scalable · Future-Ready
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="why-cubes-heading"
            className="mt-7 font-heading text-3xl font-semibold uppercase leading-[1.06] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            Architecture That{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              Reacts In Real Time.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            Move your cursor — every block tilts toward you. Click — they
            ripple. The same modular thinking applies to every system we
            architect: independent units that respond as one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 0.9, 0.3, 1] }}
          className="relative mx-auto mt-14 h-[480px] w-full max-w-5xl overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.85)_0%,rgba(10,9,6,0.95)_100%)] md:mt-16 md:h-[560px]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Cubes
              gridSize={8}
              maxAngle={55}
              radius={3}
              cellGap={25}
              borderStyle="1px solid rgba(215,191,94,0.35)"
              faceColor="#0B0B09"
              rippleColor="#D7BF5E"
              rippleSpeed={1.6}
              autoAnimate
              rippleOnClick
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(8,8,6,0.75)_100%)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
