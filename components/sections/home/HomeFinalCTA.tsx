"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { site } from "@/data/site";

export default function HomeFinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(215,191,94,0.20) 0%, transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(121,107,56,0.22) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,191,94,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
      />

      <div className="relative w-full px-6 py-28 md:px-10 md:py-36 lg:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 0.9, 0.3, 1] }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              Start Your Engagement
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="final-cta-heading"
            className="mt-8 font-heading text-h2-fluid font-semibold uppercase leading-[1.05] tracking-[0.015em] text-white"
          >
            Ready to Build a Secure,
            <br className="hidden md:block" />{" "}
            <span
              className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent"
            >
              Scalable Technology Ecosystem?
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Tell us what you are building. We will bring the software,
            infrastructure, networks, and security expertise to get it
            delivered — as one integrated program.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/contact"
              aria-label="Get Free Consultation"
              className="relative inline-flex select-none items-center justify-center gap-2 rounded-full px-7 py-3 text-eyebrow font-heading uppercase text-black bg-[linear-gradient(180deg,#EBD78A_0%,#D7BF5E_48%,#B89E4C_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_3px_rgba(121,107,56,0.5),0_6px_14px_-4px_rgba(0,0,0,0.55),0_0_0_1px_rgba(215,191,94,0.75),0_0_22px_-6px_rgba(215,191,94,0.35)] transition-[transform,box-shadow,filter] duration-200 ease-out will-change-transform hover:-translate-y-[1.5px] hover:brightness-[1.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-2px_3px_rgba(121,107,56,0.45),0_10px_22px_-4px_rgba(0,0,0,0.6),0_0_0_1px_rgba(215,191,94,0.9),0_0_32px_-6px_rgba(215,191,94,0.55)] active:translate-y-0 active:brightness-[0.95] active:shadow-[inset_0_2px_4px_rgba(121,107,56,0.55),inset_0_-1px_0_rgba(255,255,255,0.15),0_3px_8px_-3px_rgba(0,0,0,0.5),0_0_0_1px_rgba(215,191,94,0.75)]"
            >
              Get Free Consultation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="/services"
              className="group/ghost inline-flex items-center gap-2 border-b border-white/25 pb-1 text-eyebrow font-heading uppercase text-white/85 transition-colors hover:border-[var(--color-ms-gold)] hover:text-[var(--color-ms-gold)]"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/ghost:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-4 rounded-xl border border-[var(--color-ms-border)] bg-black/50 px-5 py-4 text-left backdrop-blur-sm transition-colors hover:border-[var(--color-ms-gold)]/55"
            >
              <span
                aria-hidden
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.16),rgba(121,107,56,0.06))]"
              >
                <Mail className="h-4 w-4 text-[var(--color-ms-gold)]" />
              </span>
              <div className="min-w-0">
                <p className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
                  Email
                </p>
                <p className="truncate text-sm text-white/85">{site.email}</p>
              </div>
            </a>
            <a
              href={`tel:${site.phone}`}
              className="group flex items-center gap-4 rounded-xl border border-[var(--color-ms-border)] bg-black/50 px-5 py-4 text-left backdrop-blur-sm transition-colors hover:border-[var(--color-ms-gold)]/55"
            >
              <span
                aria-hidden
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.16),rgba(121,107,56,0.06))]"
              >
                <Phone className="h-4 w-4 text-[var(--color-ms-gold)]" />
              </span>
              <div className="min-w-0">
                <p className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
                  Phone
                </p>
                <p className="text-sm text-white/85">{site.phoneDisplay}</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
