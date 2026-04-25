"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { images } from "@/data/images";

const intro = {
  eyebrow: "About Mindstorm",
  heading: "Technology Solutions Built for Modern Business",
  lead:
    "Mindstorm Global Consulting Services is a technology-focused consulting enterprise delivering secure, scalable, and future-ready IT solutions — one partner across software, hardware, networking, cybersecurity, managed IT, HR platforms, and education technology.",
  points: [
    "Unified infrastructure · software · security engagements",
    "CCNA-grade network design and operations",
    "Enterprise-ready delivery with security-first defaults",
    "Dedicated technical support — remote and on-site",
  ],
};

export default function CompanyIntro() {
  return (
    <section
      aria-labelledby="company-intro-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)] py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(215,191,94,0.08),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />

      <div className="relative grid w-full grid-cols-1 gap-14 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-20 lg:px-16 2xl:px-24">
        {/* LEFT — Image (16:9) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.85, ease: [0.22, 0.9, 0.3, 1] }}
          className="relative w-full"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--color-ms-border)] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9),0_0_0_1px_rgba(215,191,94,0.12)]">
            <Image
              src={images.consultingMeeting.src}
              alt={images.consultingMeeting.alt}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
              priority={false}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ms-black)]/70 via-[var(--color-ms-black)]/15 to-transparent"
            />
          </div>

          <div className="pointer-events-none absolute -left-4 bottom-6 flex items-center gap-3 rounded-2xl border border-[var(--color-ms-border)] bg-black/75 px-4 py-3 backdrop-blur-xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] md:-left-6">
            <span
              aria-hidden
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.18)_0%,rgba(121,107,56,0.06)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.45)]"
            >
              <CheckCircle2 className="h-4 w-4 text-[var(--color-ms-gold)]" />
            </span>
            <div>
              <p className="font-heading text-[10px] uppercase tracking-[0.28em] text-[var(--color-ms-gold)]">
                One Partner
              </p>
              <p className="text-[11px] leading-tight text-white/70">
                End-to-end technology delivery
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-3 -top-4 rounded-2xl border border-[var(--color-ms-border)] bg-black/75 px-4 py-3 backdrop-blur-xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] md:-right-5 md:-top-5">
            <p className="font-heading text-[10px] uppercase tracking-[0.28em] text-[var(--color-ms-gold)]">
              Enterprise Grade
            </p>
            <p className="text-[11px] leading-tight text-white/70">
              Security-first defaults
            </p>
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

        {/* RIGHT — Content (larger) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1], delay: 0.1 }}
          className="w-full"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
              {intro.eyebrow}
            </span>
          </div>

          <h2
            id="company-intro-heading"
            className="mt-7 font-heading text-4xl font-semibold uppercase leading-[1.06] tracking-[0.015em] text-white sm:text-5xl md:text-6xl 2xl:text-7xl"
          >
            {intro.heading}
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg 2xl:text-xl">
            {intro.lead}
          </p>

          <ul className="mt-9 flex flex-col gap-4">
            {intro.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-ms-gold)]" />
                <span className="text-[15px] text-white/80 md:text-base">
                  {p}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-11">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 font-heading text-[13px] uppercase tracking-[0.24em] text-[var(--color-ms-gold)] transition-colors hover:text-[var(--color-ms-gold-muted)]"
            >
              <span>Learn more about us</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
