"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Handshake,
  Layers,
  Target,
  TrendingUp,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { images } from "@/data/images";

type Value = {
  icon: LucideIcon;
  title: string;
  body: string;
  size: "lg" | "md" | "sm";
  image?: string;
};

const values: Value[] = [
  {
    icon: ShieldCheck,
    title: "Security-first",
    body: "Every architecture decision starts with security posture — never as a bolt-on. Threat modelling, hardening, and zero-trust defaults are baked in from day one.",
    size: "lg",
    image: images.cybersecurityDark.src,
  },
  {
    icon: Handshake,
    title: "Partnership",
    body: "We work as an extension of your team — not a vendor at arm's length.",
    size: "md",
  },
  {
    icon: Layers,
    title: "Integration",
    body: "Hardware, software, networks, and security are designed together — not in silos.",
    size: "md",
  },
  {
    icon: Target,
    title: "Precision delivery",
    body: "Scope is defined clearly. Timelines are met. No scope creep, no surprises.",
    size: "sm",
  },
  {
    icon: TrendingUp,
    title: "Built to scale",
    body: "Systems are sized for tomorrow's load — not just today's.",
    size: "sm",
  },
  {
    icon: Eye,
    title: "Full observability",
    body: "Every deployment ships with dashboards, alerts, and audit trails — not just code.",
    size: "lg",
    image: images.socDashboard.src,
  },
];

const sizeClasses: Record<Value["size"], string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-2",
  sm: "md:col-span-1",
};

export default function AboutCoreValues() {
  return (
    <section
      aria-labelledby="values-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,191,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
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
            <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              What Drives Us
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="values-heading"
            className="mt-7 font-heading text-h2-fluid font-semibold uppercase leading-[1.06] tracking-[0.015em] text-white sm:text-5xl md:text-6xl"
          >
            Six values behind{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              every engagement
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            These are not aspirational slogans — they describe how we actually
            work, every project, every day.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5"
        >
          {values.map(({ icon: Icon, title, body, size, image }) => (
            <motion.article
              key={title}
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
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] p-7 transition-colors duration-300 hover:border-[rgba(215,191,94,0.55)] md:p-8 ${sizeClasses[size]}`}
            >
              {image && (
                <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 700px, 100vw"
                    className="object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-45"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.55)_0%,rgba(10,9,6,0.92)_100%)]" />
                </div>
              )}

              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.16),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.18)_0%,rgba(121,107,56,0.05)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105"
                >
                  <Icon className="h-4.5 w-4.5 text-[var(--color-ms-gold)]" />
                </span>
              </div>

              <h3 className="relative mt-5 font-heading text-lg font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-xl">
                {title}
              </h3>
              <p className="relative mt-3 text-[13.5px] leading-relaxed text-white/65 md:text-sm">
                {body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
