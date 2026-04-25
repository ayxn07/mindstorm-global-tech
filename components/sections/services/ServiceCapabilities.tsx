"use client";

import Image from "next/image";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/types/site";
import { getServiceImageSet } from "@/data/serviceImageSets";

interface Props {
  service: Service;
}

function resolveIcon(name: string): LucideIcon {
  const candidate = (Icons as unknown as Record<string, LucideIcon>)[name];
  return candidate ?? Icons.Sparkles;
}

export default function ServiceCapabilities({ service }: Props) {
  const trail = getServiceImageSet(service.slug);

  return (
    <section
      aria-labelledby="service-capabilities-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <Image
          src={trail[trail.length - 1]}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.85)_0%,rgba(10,9,6,0.95)_100%)]" />
      </div>

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
              Advanced Capabilities
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="service-capabilities-heading"
            className="mt-7 font-heading text-3xl font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            Engineered for{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              real workloads
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5"
        >
          {service.advancedCapabilities.map((c) => {
            const Icon = resolveIcon(c.icon);
            return (
              <motion.article
                key={c.title}
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 0.9, 0.3, 1] },
                  },
                }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] p-7 transition-colors duration-300 hover:border-[rgba(215,191,94,0.55)] md:p-8"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <span
                  aria-hidden
                  className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-xl border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.18)_0%,rgba(121,107,56,0.05)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.3)]"
                >
                  <Icon className="h-5 w-5 text-[var(--color-ms-gold)]" />
                </span>

                <h3 className="relative mt-6 font-heading text-lg font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-xl">
                  {c.title}
                </h3>
                <p className="relative mt-3 text-[13.5px] leading-relaxed text-white/65 md:text-sm">
                  {c.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
