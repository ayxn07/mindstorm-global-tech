"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { ArrowRight, Code2, Network, Server, ShieldCheck, type LucideIcon } from "lucide-react";
import BackgroundDarkVeil from "@/components/visuals/BackgroundDarkVeil";
import SplitText from "@/components/SplitText";
import ShinyText from "@/components/ShinyText";
import CountUp from "@/components/CountUp";
import { images } from "@/data/images";
import { pages, homeStats } from "@/data/pages";

const rotatingWords = [
  "Software",
  "Networks",
  "Cybersecurity",
  "Managed IT",
  "HR Tech",
  "EdTech",
];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const t = window.setInterval(
      () => setIndex((i) => (i + 1) % rotatingWords.length),
      2400,
    );
    return () => window.clearInterval(t);
  }, []);

  return (
    <motion.span
      layout
      transition={{ layout: { duration: 0.55, ease: [0.22, 0.9, 0.3, 1] } }}
      className="relative inline-flex overflow-hidden py-[0.15em] align-baseline"
      style={{ lineHeight: 1.1 }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={rotatingWords[index]}
          layout="position"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{
            y: { duration: 0.5, ease: [0.22, 0.9, 0.3, 1] },
            opacity: { duration: 0.35 },
            layout: { duration: 0.55, ease: [0.22, 0.9, 0.3, 1] },
          }}
          className="whitespace-nowrap text-[var(--color-ms-gold)]"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

const capabilityCards: {
  title: string;
  caption: string;
  Icon: LucideIcon;
}[] = [
  { title: "Software", caption: "Web · Mobile · ERP · CRM", Icon: Code2 },
  { title: "Networks", caption: "Cisco CCNA · LAN / WAN", Icon: Network },
  {
    title: "Cybersecurity",
    caption: "SOC · SIEM · Zero-Trust",
    Icon: ShieldCheck,
  },
  { title: "Managed IT", caption: "24×7 Support · AMC", Icon: Server },
];

export default function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative w-full overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24"
    >
      <BackgroundDarkVeil />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(215,191,94,0.10),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.4)_45%,rgba(0,0,0,0.92)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--color-ms-black)]"
      />

      <div className="relative grid w-full grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(520px,720px)] lg:gap-10 lg:px-16 xl:grid-cols-[minmax(0,1fr)_minmax(680px,920px)] xl:gap-12 2xl:grid-cols-[minmax(0,1fr)_minmax(820px,1120px)] 2xl:gap-14 2xl:px-24 min-h-[calc(100svh-6rem)]">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.9, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span
              aria-hidden
              className="h-px w-10 bg-[var(--color-ms-gold)]"
            />
            <ShinyText
              text={pages.home.heroEyebrow ?? "Enterprise-Grade Technology Consulting"}
              color="#b1a370"
              shineColor="#F6E5A6"
              speed={3}
              className="font-heading text-[10px] uppercase tracking-[0.36em] md:text-[11px]"
            />
          </motion.div>

          <LayoutGroup>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 0.9, 0.3, 1] }}
              className="mt-7 flex flex-wrap items-baseline gap-x-3 font-heading text-base uppercase tracking-[0.1em] text-white/75 md:text-lg"
            >
              <motion.span
                layout="position"
                transition={{ layout: { duration: 0.55, ease: [0.22, 0.9, 0.3, 1] } }}
                className="text-white/55"
              >
                We power
              </motion.span>
              <RotatingWord />
              <motion.span
                layout="position"
                transition={{ layout: { duration: 0.55, ease: [0.22, 0.9, 0.3, 1] } }}
                className="text-white/55"
              >
                for modern enterprises.
              </motion.span>
            </motion.p>
          </LayoutGroup>

          <SplitText
            tag="h1"
            text={pages.home.heroHeading}
            splitType="words"
            delay={60}
            duration={0.9}
            from={{ opacity: 0, y: 36 }}
            to={{ opacity: 1, y: 0 }}
            ease="power3.out"
            textAlign="left"
            className="mt-6 max-w-[30ch] font-heading text-4xl font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white sm:text-5xl md:text-6xl 2xl:text-7xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 0.9, 0.3, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            {pages.home.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 0.9, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Link
              href="/contact"
              aria-label="Get Free Consultation"
              className="relative inline-flex select-none items-center justify-center gap-2 rounded-full px-7 py-3 font-heading text-[12px] uppercase tracking-[0.22em] text-[var(--color-ms-black)] bg-[linear-gradient(180deg,#EBD78A_0%,#D7BF5E_48%,#B89E4C_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_3px_rgba(121,107,56,0.5),0_6px_14px_-4px_rgba(0,0,0,0.55),0_0_0_1px_rgba(215,191,94,0.75),0_0_22px_-6px_rgba(215,191,94,0.35)] transition-[transform,box-shadow,filter] duration-200 ease-out will-change-transform hover:-translate-y-[1.5px] hover:brightness-[1.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-2px_3px_rgba(121,107,56,0.45),0_10px_22px_-4px_rgba(0,0,0,0.6),0_0_0_1px_rgba(215,191,94,0.9),0_0_32px_-6px_rgba(215,191,94,0.55)] active:translate-y-0 active:brightness-[0.95] active:shadow-[inset_0_2px_4px_rgba(121,107,56,0.55),inset_0_-1px_0_rgba(255,255,255,0.15),0_3px_8px_-3px_rgba(0,0,0,0.5),0_0_0_1px_rgba(215,191,94,0.75)]"
            >
              Get Free Consultation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="/#services"
              className="group/ghost inline-flex items-center gap-2 font-heading text-[12px] uppercase tracking-[0.22em] text-white/80 transition-colors hover:text-[var(--color-ms-gold)]"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/ghost:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
            className="mt-10 grid grid-cols-2 gap-3 sm:max-w-2xl lg:grid-cols-4"
          >
            {capabilityCards.map((c) => (
              <div
                key={c.title}
                className="group/tile relative overflow-hidden rounded-xl border border-[rgba(215,191,94,0.14)] bg-[linear-gradient(180deg,rgba(24,22,16,0.92)_0%,rgba(10,9,7,0.92)_100%)] p-3.5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(215,191,94,0.1),inset_0_-1px_0_rgba(0,0,0,0.6),0_2px_6px_-2px_rgba(0,0,0,0.6)] transition-[transform,border-color,box-shadow] duration-200 ease-out will-change-transform hover:-translate-y-[2.5px] hover:border-[rgba(215,191,94,0.5)] hover:shadow-[inset_0_1px_0_rgba(215,191,94,0.2),inset_0_-1px_0_rgba(0,0,0,0.55),0_14px_26px_-10px_rgba(0,0,0,0.85),0_0_0_1px_rgba(215,191,94,0.3),0_0_32px_-10px_rgba(215,191,94,0.45)]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover/tile:opacity-100"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-xl bg-[radial-gradient(ellipse_at_top,rgba(215,191,94,0.12),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover/tile:opacity-100"
                />
                <div
                  aria-hidden
                  className="relative mb-2.5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.16)_0%,rgba(121,107,56,0.06)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.45),0_2px_5px_-2px_rgba(0,0,0,0.6)]"
                >
                  <c.Icon className="h-4 w-4 text-[var(--color-ms-gold)]" />
                </div>
                <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-[var(--color-ms-gold)]">
                  {c.title}
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-white/65">
                  {c.caption}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 0.9, 0.3, 1] }}
          className="relative mt-4 w-full lg:mt-0 lg:self-center"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--color-ms-border)] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9),0_0_0_1px_rgba(215,191,94,0.12)]">
            <Image
              src="/Hero-Section.jpeg"
              alt={images.serverRoom.alt}
              fill
              priority
              quality={90}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[var(--color-ms-black)] via-[var(--color-ms-black)]/25 to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-0 ring-1 ring-inset ring-white/5"
            />

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-[var(--color-ms-border)] bg-black/55 px-3 py-1.5 backdrop-blur-xl">
              <span
                aria-hidden
                className="h-2 w-2 rounded-full bg-[var(--color-ms-gold)] shadow-[0_0_10px_var(--color-ms-glow)]"
              />
              <span className="font-heading text-[10px] uppercase tracking-[0.28em] text-white/85">
                Security-First Infrastructure
              </span>
            </div>

            <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-3 rounded-xl border border-[var(--color-ms-border)] bg-black/70 p-4 backdrop-blur-2xl md:inset-x-5 md:bottom-5">
              {homeStats.map((s) => (
                <div key={s.label}>
                  <p className="flex items-baseline font-heading text-2xl text-[var(--color-ms-gold)] md:text-3xl">
                    <CountUp to={s.value} duration={1.6} />
                    <span className="ml-0.5 text-base text-[var(--color-ms-gold)]/80 md:text-lg">
                      {s.suffix}
                    </span>
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
