"use client";

import { motion } from "motion/react";
import { Compass, Telescope } from "lucide-react";
import { site } from "@/data/site";

const missionPoints = [
  "Integrated delivery — hardware, software, networks, and security as one program",
  "Sector-aware solutions — built around each client's operating constraints",
  "Long-term partnership — implementation, support, and evolution together",
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
};

export default function AboutMissionVision() {
  return (
    <section
      aria-labelledby="mission-vision-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,191,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(215,191,94,0.08),transparent_55%)]"
      />

      <div className="relative w-full px-6 py-24 md:px-10 md:py-32 lg:px-16 2xl:px-24">
        <h2 id="mission-vision-heading" className="sr-only">
          Mission and Vision
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {/* MISSION */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] p-7 md:p-10"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.18),transparent_70%)]"
            />

            <div className="relative flex items-center gap-4">
              <span
                aria-hidden
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.18)_0%,rgba(121,107,56,0.05)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.3)]"
              >
                <Compass className="h-5 w-5 text-[var(--color-ms-gold)]" />
              </span>
              <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
                Our Mission
              </span>
            </div>

            <h3 className="relative mt-6 font-heading text-2xl font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-3xl">
              Deliver technology that{" "}
              <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
                solves real problems
              </span>
            </h3>

            <p className="relative mt-4 text-[14.5px] leading-relaxed text-white/70 md:text-[15px]">
              We exist to give businesses — from growing SMEs to large
              institutions — access to the same quality of IT infrastructure,
              security, and software that enterprise giants rely on. Without
              the complexity. Without the overhead.
            </p>

            <ul className="relative mt-6 flex flex-col gap-3 border-t border-[var(--color-ms-border)] pt-6">
              {missionPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.08,
                    ease: [0.22, 0.9, 0.3, 1],
                  }}
                  className="flex items-start gap-3"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-ms-gold)] shadow-[0_0_8px_var(--color-ms-glow)]"
                  />
                  <span className="text-[13.5px] leading-relaxed text-white/80">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* VISION */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 0.9, 0.3, 1] }}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] p-7 md:p-10"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.18),transparent_70%)]"
            />

            <div className="relative flex items-center gap-4">
              <span
                aria-hidden
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.18)_0%,rgba(121,107,56,0.05)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.3)]"
              >
                <Telescope className="h-5 w-5 text-[var(--color-ms-gold)]" />
              </span>
              <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
                Our Vision
              </span>
            </div>

            <h3 className="relative mt-6 font-heading text-2xl font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-3xl">
              A world where every organisation operates on{" "}
              <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
                technology it can trust
              </span>
            </h3>

            <p className="relative mt-4 text-[14.5px] leading-relaxed text-white/70 md:text-[15px]">
              We believe great technology infrastructure should not be a
              privilege of scale. Our vision is to make secure, resilient, and
              intelligent IT accessible to every business that needs it —
              regardless of size or sector.
            </p>

            <motion.blockquote
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mt-auto pt-7"
            >
              <div className="rounded-xl border border-[rgba(215,191,94,0.32)] bg-black/45 p-5 backdrop-blur-sm">
                <p className="font-heading text-sm uppercase leading-relaxed tracking-[0.08em] text-white/85 md:text-base">
                  &ldquo;{site.tagline}&rdquo;
                </p>
                <p className="mt-2 font-heading text-[10px] uppercase tracking-[0.28em] text-[var(--color-ms-gold)]">
                  — {site.shortName}
                </p>
              </div>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
