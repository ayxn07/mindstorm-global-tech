"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { images, type ImageKey } from "@/data/images";

export default function ServicesGrid() {
  return (
    <section
      aria-labelledby="services-grid-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.28] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,191,94,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative w-full px-6 py-24 md:px-10 md:py-32 lg:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
              All Services
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="services-grid-heading"
            className="mt-7 font-heading text-4xl font-semibold uppercase leading-[1.06] tracking-[0.015em] text-white sm:text-5xl md:text-6xl"
          >
            Full coverage,{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              one partner.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {services.map((s, i) => {
            const img = images[s.heroImageKey as ImageKey];
            return (
              <motion.article
                key={s.slug}
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.22, 0.9, 0.3, 1] },
                  },
                }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] transition-colors duration-300 hover:border-[rgba(215,191,94,0.55)]"
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="flex h-full flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      priority={i < 3}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.30)_0%,rgba(10,9,6,0.85)_100%)]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
                    />
                    <span className="absolute left-7 top-6 font-heading text-[10px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col p-7 md:p-8">
                    <h3 className="font-heading text-xl font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-2xl">
                      {s.shortTitle}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-white/65 md:text-[14.5px]">
                      {s.tagline}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 self-start font-heading text-[11px] uppercase tracking-[0.28em] text-[var(--color-ms-gold)] transition-colors duration-200 group-hover:text-[#F6E5A6]">
                      <span>Explore service</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
