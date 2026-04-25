"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/data/images";
import { whyCapabilityStack } from "@/data/whyChooseUs";

export default function WhyCapabilityStack() {
  return (
    <section
      aria-labelledby="why-capability-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(215,191,94,0.08),transparent_60%)]"
      />

      <div className="relative w-full px-6 py-24 md:px-10 md:py-32 lg:px-16 2xl:px-24">
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
              Capability Stack
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="why-capability-heading"
            className="mt-7 font-heading text-3xl font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            Seven service lines.{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              One accountability.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            Pick the one you need today. We engineer the others to interlock —
            so the system you launch is the same one we evolve for the next
            three years.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5"
        >
          {whyCapabilityStack.map((card) => {
            const Icon = card.icon;
            const img = images[card.imageKey];
            return (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 0.9, 0.3, 1] },
                  },
                }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <Link
                  href={card.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.9)_0%,rgba(10,9,6,0.96)_100%)] p-6 transition-colors duration-300 hover:border-[rgba(215,191,94,0.6)] md:p-7"
                >
                  <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 420px, 100vw"
                      className="object-cover opacity-25 transition-opacity duration-500 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.6)_0%,rgba(10,9,6,0.94)_100%)]" />
                  </div>

                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/65 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative flex items-center justify-between gap-3">
                    <span
                      aria-hidden
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.18)_0%,rgba(121,107,56,0.05)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:scale-105"
                    >
                      <Icon className="h-4.5 w-4.5 text-[var(--color-ms-gold)]" />
                    </span>
                    <span
                      aria-hidden
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white/55 transition-all duration-300 group-hover:border-[rgba(215,191,94,0.6)] group-hover:text-[var(--color-ms-gold)]"
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-heading text-lg font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-xl">
                    {card.title}
                  </h3>
                  <p className="relative mt-3 text-[13.5px] leading-relaxed text-white/65 md:text-sm">
                    {card.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
