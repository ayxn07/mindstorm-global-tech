"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Accordion from "@/components/aceternity/Accordion";
import { whyFaqs } from "@/data/whyChooseUs";

export default function WhyFAQ() {
  return (
    <section
      aria-labelledby="why-faq-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(215,191,94,0.10),transparent_60%)]"
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
              Common Questions
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="why-faq-heading"
            className="mt-7 font-heading text-3xl font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            What teams ask{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              before signing
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            Honest answers to the questions we hear in every discovery call —
            so the contract that follows holds no surprises.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-3xl">
          <Accordion
            items={whyFaqs.map((f, i) => ({
              id: `faq-${i}`,
              question: f.q,
              answer: <p>{f.a}</p>,
            }))}
            defaultOpen="faq-0"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.78)_0%,rgba(10,9,6,0.92)_100%)] p-6 text-center md:flex-row md:text-left"
        >
          <div>
            <p className="font-heading text-[11px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
              Still have a question?
            </p>
            <p className="mt-2 text-sm text-white/70">
              Our engineers — not a sales team — answer the discovery call.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-[rgba(215,191,94,0.55)] bg-black/40 px-6 py-3 font-heading text-[12px] uppercase tracking-[0.28em] text-[var(--color-ms-gold)] backdrop-blur-sm transition-colors hover:bg-[var(--color-ms-gold)] hover:text-black"
          >
            Ask an Engineer
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
