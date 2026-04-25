"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import BackgroundDarkVeil from "@/components/visuals/BackgroundDarkVeil";

const milestones = [
  {
    title: "Founded",
    body: "Born from the gap between what businesses needed and what fragmented IT vendors could deliver.",
  },
  {
    title: "Expanding",
    body: "Grew across 12+ sectors — finance, enterprise, education, healthcare, government, manufacturing, and beyond.",
  },
  {
    title: "Today",
    body: "A full-spectrum IT consulting firm — software, hardware, networks, security, HR, and EdTech — under one roof.",
  },
];

export default function AboutOriginStory() {
  return (
    <section
      id="about-story"
      aria-labelledby="origin-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <BackgroundDarkVeil
        hueShift={-158}
        warpAmount={2.4}
        speed={0.45}
        noiseIntensity={0.02}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.78)_0%,rgba(10,9,6,0.92)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />

      <div className="relative w-full px-6 py-24 md:px-10 md:py-32 lg:px-16 2xl:px-24">
        <div className="grid w-full grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-stretch lg:gap-16">
          {/* LEFT — Narrative + Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 0.9, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
              <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
                Our Foundation
              </span>
            </div>

            <h2
              id="origin-heading"
              className="mt-7 font-heading text-h2-fluid font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white "
            >
              One Partner.{" "}
              <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
                Every Layer of Your Stack.
              </span>
            </h2>

            <div className="mt-7 flex flex-col gap-5 text-[15px] leading-relaxed text-white/70 md:text-base">
              <p>
                {site.shortName} was founded with a single conviction:
                technology works best when it is delivered as a unified system
                — not as a collection of disconnected vendors.
              </p>
              <p>
                From {site.address.full}, our team brings together expertise in
                software engineering, CCNA-grade networking, cybersecurity
                architecture, hardware procurement, HR platforms, and education
                technology — and delivers it through a single coordinated
                engagement.
              </p>
            </div>

            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.14 } },
              }}
              className="relative mt-10 flex flex-col"
            >
              <span
                aria-hidden
                className="absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--color-ms-gold)]/60 via-[var(--color-ms-gold)]/30 to-transparent"
              />
              {milestones.map((m, i) => (
                <motion.li
                  key={m.title}
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: [0.22, 0.9, 0.3, 1] },
                    },
                  }}
                  className="relative flex gap-6 pb-8 last:pb-0"
                >
                  <div className="relative z-10 flex shrink-0 flex-col items-center">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(215,191,94,0.45)] bg-[linear-gradient(180deg,rgba(215,191,94,0.22)_0%,rgba(121,107,56,0.08)_100%)] font-heading text-base font-semibold text-[var(--color-ms-gold)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.35),0_0_22px_-4px_rgba(215,191,94,0.45)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1 pt-1.5">
                    <h3 className="font-heading text-lg font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-xl">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/70 md:text-[14.5px]">
                      {m.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-2 inline-flex items-center gap-3 self-start rounded-full border border-[rgba(215,191,94,0.32)] bg-black/55 px-5 py-2.5 backdrop-blur-md"
            >
              <span
                aria-hidden
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.18)_0%,rgba(121,107,56,0.05)_100%)]"
              >
                <MapPin className="h-3.5 w-3.5 text-[var(--color-ms-gold)]" />
              </span>
              <span className="text-eyebrow font-heading uppercase text-white/80">
                Headquartered in {site.address.full}
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Cinematic image panel filling full column height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 0.9, 0.3, 1] }}
            className="relative min-h-[clamp(20rem,55vw,520px)] w-full overflow-hidden rounded-2xl border border-[var(--color-ms-border)] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95),0_0_0_1px_rgba(215,191,94,0.18)] lg:min-h-full"
          >
            <Image
              src={images.skyline.src}
              alt={images.skyline.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.30)_0%,rgba(10,9,6,0.55)_55%,rgba(10,9,6,0.92)_100%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.22),transparent_70%)]"
            />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-[var(--color-ms-gold)]" />
                <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
                  Built for the long horizon
                </span>
              </div>
              <p className="max-w-md font-heading text-xl font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-2xl">
                Engineered today for the workloads of{" "}
                <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
                  tomorrow.
                </span>
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
                <div>
                  <p className="font-heading text-2xl font-semibold text-[var(--color-ms-gold)] md:text-3xl">
                    7+
                  </p>
                  <p className="mt-1 font-heading text-[10px] uppercase tracking-[0.24em] text-white/55">
                    Service lines
                  </p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-semibold text-[var(--color-ms-gold)] md:text-3xl">
                    12+
                  </p>
                  <p className="mt-1 font-heading text-[10px] uppercase tracking-[0.24em] text-white/55">
                    Sectors
                  </p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-semibold text-[var(--color-ms-gold)] md:text-3xl">
                    24×7
                  </p>
                  <p className="mt-1 font-heading text-[10px] uppercase tracking-[0.24em] text-white/55">
                    Coverage
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
