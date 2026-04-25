"use client";

import Image from "next/image";
import { motion } from "motion/react";
import HoverEffect from "@/components/aceternity/HoverEffect";
import { images } from "@/data/images";
import { whyDifferentiators } from "@/data/whyChooseUs";

const sizeClasses: Record<"sm" | "md" | "lg", string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-2",
  sm: "md:col-span-1",
};

const toneTint: Record<"amber" | "gold" | "deep", string> = {
  gold: "from-[rgba(215,191,94,0.18)] via-[rgba(215,191,94,0.06)] to-transparent",
  amber:
    "from-[rgba(246,229,166,0.14)] via-[rgba(246,229,166,0.04)] to-transparent",
  deep: "from-[rgba(121,107,56,0.18)] via-[rgba(121,107,56,0.05)] to-transparent",
};

export default function WhyDifferentiators() {
  const items = whyDifferentiators.map((d, i) => ({
    id: `${d.title}-${i}`,
    className: sizeClasses[d.size],
    render: () => {
      const Icon = d.icon;
      const bg = d.imageKey ? images[d.imageKey] : null;
      return (
        <motion.article
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            duration: 0.6,
            delay: i * 0.06,
            ease: [0.22, 0.9, 0.3, 1],
          }}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] p-7 transition-colors duration-300 hover:border-[rgba(215,191,94,0.55)] md:p-8"
        >
          {bg && (
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
              <Image
                src={bg.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover opacity-25 transition-opacity duration-500 group-hover:opacity-45"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.55)_0%,rgba(10,9,6,0.92)_100%)]" />
            </div>
          )}

          <span
            aria-hidden
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${toneTint[d.tone]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
            {d.title}
          </h3>
          <p className="relative mt-3 text-[13.5px] leading-relaxed text-white/65 md:text-sm">
            {d.body}
          </p>
        </motion.article>
      );
    },
  }));

  return (
    <section
      id="why-differentiators"
      aria-labelledby="why-differentiators-heading"
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
            <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
              The Eight Differentiators
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="why-differentiators-heading"
            className="mt-7 font-heading text-3xl font-semibold uppercase leading-[1.06] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            Why teams pick us{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              and stay
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            Eight reasons that surface — repeatedly — when clients describe what
            changed after Mindstorm picked up the engagement.
          </p>
        </motion.div>

        <div className="mt-16">
          <HoverEffect
            items={items}
            className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:[grid-auto-rows:1fr]"
          />
        </div>
      </div>
    </section>
  );
}
