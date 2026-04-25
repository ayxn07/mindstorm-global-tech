"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/types/site";
import { images, type ImageKey } from "@/data/images";

interface Props {
  service: Service;
}

export default function ServiceOverview({ service }: Props) {
  const img = images[service.heroImageKey as ImageKey];

  return (
    <section
      id="service-overview"
      aria-labelledby="service-overview-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(215,191,94,0.08),transparent_60%)]"
      />

      <div className="relative grid w-full grid-cols-1 gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-20 lg:px-16 2xl:px-24">
        {/* LEFT — Image (16:9, no hover anim) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.85, ease: [0.22, 0.9, 0.3, 1] }}
          className="relative w-full"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--color-ms-border)] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9),0_0_0_1px_rgba(215,191,94,0.12)]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
              priority
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ms-black)]/70 via-[var(--color-ms-black)]/15 to-transparent"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-3 -bottom-3 -z-10 h-24 w-24 rounded-xl border border-[var(--color-ms-border)] bg-[var(--color-ms-gold)]/[0.03] md:-right-5 md:-bottom-5 md:h-32 md:w-32"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-5 -left-4 -z-10 h-24 w-24 rounded-xl border border-[var(--color-ms-border)] bg-[var(--color-ms-gold)]/[0.03] md:-left-6 md:-top-7 md:h-32 md:w-32"
          />
        </motion.div>

        {/* RIGHT — Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 0.9, 0.3, 1] }}
          className="w-full"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              Overview
            </span>
          </div>

          <h2
            id="service-overview-heading"
            className="mt-7 font-heading text-h2-fluid font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white "
          >
            {service.tagline}
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {service.overview}
          </p>

          {service.benefits.length > 0 && (
            <ul className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.benefits.slice(0, 5).map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-ms-gold)]" />
                  <span className="text-[15px] text-white/80 md:text-base">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}
