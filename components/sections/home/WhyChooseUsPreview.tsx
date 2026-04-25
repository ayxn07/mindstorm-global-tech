"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import HoverEffect from "@/components/aceternity/HoverEffect";
import { homeWhyBentoItems } from "@/data/pages";

const sizeClasses: Record<"sm" | "md" | "lg", string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-2",
  sm: "md:col-span-1",
};

export default function WhyChooseUsPreview() {
  const items = homeWhyBentoItems.map((item, i) => ({
    id: `${item.title}-${i}`,
    className: sizeClasses[item.size],
    render: () => {
      const Icon = item.icon;
      return (
        <motion.article
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 0.9, 0.3, 1] }}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] p-6 transition-colors duration-300 hover:border-[rgba(215,191,94,0.55)] md:p-7"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(215,191,94,0.16)] via-[rgba(215,191,94,0.04)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <span
            aria-hidden
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.16)_0%,rgba(121,107,56,0.06)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.45)]"
          >
            <Icon className="h-5 w-5 text-[var(--color-ms-gold)] transition-transform duration-500 group-hover:scale-105" />
          </span>

          <h3 className="relative mt-5 font-heading text-base font-semibold uppercase leading-snug tracking-[0.06em] text-white sm:text-lg md:text-xl">
            {item.title}
          </h3>
          <p className="relative mt-3 text-[13px] leading-relaxed text-white/65 md:text-sm">
            {item.body}
          </p>
        </motion.article>
      );
    },
  }));

  return (
    <section
      aria-labelledby="why-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(215,191,94,0.10) 0%, transparent 45%), radial-gradient(ellipse at 15% 80%, rgba(121,107,56,0.18) 0%, transparent 55%), radial-gradient(ellipse at 40% 40%, rgba(36,30,25,0.6) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(180deg,transparent,black_20%,black_80%,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,191,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
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
              Why Choose Mindstorm
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="why-heading"
            className="mt-7 font-heading text-3xl font-semibold uppercase leading-[1.06] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            One Partner.{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              Every Layer.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            Most providers specialise in one slice — we engineer the whole
            stack. Fewer handoffs, faster delivery, security designed in.
          </p>

          <div className="mt-8">
            <Link
              href="/why-choose-us"
              className="group inline-flex items-center gap-2 font-heading text-[12px] uppercase tracking-[0.22em] text-[var(--color-ms-gold)] transition-colors hover:text-[var(--color-ms-gold-muted)]"
            >
              <span>See all reasons</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="mt-14 md:mt-16">
          <HoverEffect
            items={items}
            className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:[grid-auto-rows:1fr]"
          />
        </div>
      </div>
    </section>
  );
}
