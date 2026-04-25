"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { images } from "@/data/images";
import { technologyTiles } from "@/data/pages";

const tileImageKeys = [
  "cloudSky",
  "networkCables",
  "codeScreen",
  "cybersecurityDark",
  "serverRoom",
  "hrOffice",
  "edtechClassroom",
  "matrixCode",
] as const;

export default function TechnologyShowcase() {
  return (
    <section
      aria-labelledby="technology-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,191,94,0.05),transparent_65%)]"
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
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
              Technology Showcase
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>
          <h2
            id="technology-heading"
            className="mt-6 font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            The Technology Stack Behind Every Engagement
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
            From cloud to endpoint, from networks to platforms — the
            capabilities we engineer, operate, and secure as one integrated
            practice.
          </p>
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technologyTiles.map((tile, i) => {
            const key = tileImageKeys[i];
            const img = images[key];
            return (
              <motion.article
                key={tile.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 0.9, 0.3, 1],
                  delay: 0.06 * (i % 4),
                }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[var(--color-ms-surface)] transition-colors duration-300 hover:border-[var(--color-ms-gold)]/60"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(215,191,94,0.22),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="inline-flex h-6 items-center rounded-full border border-[var(--color-ms-border)] bg-black/60 px-2.5 font-heading text-[10px] uppercase tracking-[0.3em] text-[var(--color-ms-gold)] backdrop-blur-md">
                    0{i + 1}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-lg font-semibold uppercase leading-tight tracking-[0.02em] text-white md:text-xl">
                    {tile.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">
                    {tile.description}
                  </p>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-transparent via-[var(--color-ms-gold)] to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
