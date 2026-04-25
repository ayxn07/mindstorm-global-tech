"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { pages } from "@/data/pages";

const MagicRings = dynamic(() => import("@/components/MagicRings"), {
  ssr: false,
  loading: () => (
    <div aria-hidden className="absolute inset-0 bg-[var(--color-ms-black)]" />
  ),
});

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div className="relative min-h-[100svh] w-full">
        <div aria-hidden className="absolute inset-0 h-full w-full">
          <MagicRings
            color="#D7BF5E"
            colorTwo="#F6E5A6"
            ringCount={7}
            speed={0.9}
            attenuation={9}
            lineThickness={2}
            baseRadius={0.38}
            radiusStep={0.11}
            scaleRate={0.1}
            opacity={0.95}
            blur={0}
            noiseAmount={0.06}
            rotation={0}
            ringGap={1.6}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={false}
            mouseInfluence={0.18}
            hoverScale={1.15}
            parallax={0.04}
            clickBurst={false}
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.25)_55%,transparent_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--color-ms-black)] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[var(--color-ms-black)] to-transparent"
        />

        <div className="pointer-events-none relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-24 text-center md:px-10 md:py-28 lg:px-16 2xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.9, 0.3, 1] }}
            className="mx-auto flex max-w-4xl flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.9, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
              <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
                {pages.contact.heroEyebrow}
              </span>
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            </motion.div>

            <motion.h1
              id="contact-hero-heading"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.9, 0.3, 1] }}
              className="mt-8 font-heading text-h2-fluid font-semibold uppercase leading-[1.05] tracking-[0.015em] text-white"
            >
              Start a Conversation.{" "}
              <br className="hidden md:block" />
              <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
                Ship Real Outcomes.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 0.9, 0.3, 1] }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              Tell us what you are building. Hardware, software, networks,
              security — engineered as one programme by the same team that runs
              it. Discovery calls usually start within a week.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 0.9, 0.3, 1] }}
              className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-5"
            >
              <Link
                href="#contact-form"
                aria-label="Open the contact form"
                className="relative inline-flex select-none items-center justify-center gap-2 rounded-full px-7 py-3 text-eyebrow font-heading uppercase text-[var(--color-ms-black)] bg-[linear-gradient(180deg,#EBD78A_0%,#D7BF5E_48%,#B89E4C_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_3px_rgba(121,107,56,0.5),0_6px_14px_-4px_rgba(0,0,0,0.55),0_0_0_1px_rgba(215,191,94,0.75),0_0_22px_-6px_rgba(215,191,94,0.35)] transition-[transform,box-shadow,filter] duration-200 ease-out will-change-transform hover:-translate-y-[1.5px] hover:brightness-[1.06] active:translate-y-0 active:brightness-[0.95]"
              >
                Book a Discovery Call
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#contact-details"
                className="group/ghost inline-flex items-center gap-2 border-b border-white/25 pb-1 text-eyebrow font-heading uppercase text-white/85 transition-colors hover:border-[var(--color-ms-gold)] hover:text-[var(--color-ms-gold)]"
              >
                <span>Direct lines</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/ghost:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-white/45">
              <span className="text-eyebrow font-heading uppercase">
                Scroll
              </span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
