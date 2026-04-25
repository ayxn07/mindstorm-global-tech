"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { images, type ImageKey } from "@/data/images";
import { homeIndustries } from "@/data/pages";

const DomeGallery = dynamic(() => import("@/components/DomeGallery"), {
  ssr: false,
  loading: () => (
    <div aria-hidden className="absolute inset-0 bg-[var(--color-ms-black)]" />
  ),
});

const domeImages = homeIndustries.map((i) => ({
  src: images[i.image as ImageKey].src,
  alt: `${i.title} — ${images[i.image as ImageKey].alt}`,
}));

export default function IndustriesHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setInView(true);
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      aria-labelledby="industries-hero-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div className="relative min-h-[100svh] w-full">
        <div aria-hidden className="absolute inset-0">
          {inView ? (
            <DomeGallery
              images={domeImages}
              grayscale={false}
              fit={0.6}
              minRadius={680}
              maxRadius={1300}
              maxVerticalRotationDeg={13}
              dragSensitivity={30}
              segments={38}
              overlayBlurColor="#000000"
              imageBorderRadius="12px"
            />
          ) : null}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black/35"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_center,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.45)_45%,transparent_80%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--color-ms-black)] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--color-ms-black)]/80 to-transparent"
        />

        <div className="pointer-events-none relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-24 text-center md:px-10 md:py-28 lg:px-16 2xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.9, 0.3, 1] }}
            className="mx-auto flex max-w-4xl flex-col items-center"
          >
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
              <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
                Industries We Serve
              </span>
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            </div>

            <h1
              id="industries-hero-heading"
              className="mt-8 font-heading text-4xl font-semibold uppercase leading-[1.05] tracking-[0.015em] text-white sm:text-5xl md:text-6xl 2xl:text-7xl"
            >
              Technology That Works
              <br className="hidden md:block" />{" "}
              <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
                Across Every Sector
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              From enterprise and finance to education, healthcare, and the
              public sector — we architect infrastructure, software, and
              security for the constraints each industry actually operates
              under.
            </p>

            <div className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="#industries-list"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-ms-gold)] bg-black/40 px-6 py-3 font-heading text-[12px] uppercase tracking-[0.28em] text-[var(--color-ms-gold)] backdrop-blur-sm transition-colors hover:bg-[var(--color-ms-gold)] hover:text-black"
              >
                Explore Sectors
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group/ghost inline-flex items-center gap-2 border-b border-white/25 pb-1 font-heading text-[12px] uppercase tracking-[0.28em] text-white/85 transition-colors hover:border-[var(--color-ms-gold)] hover:text-[var(--color-ms-gold)]"
              >
                <span>Talk to a specialist</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/ghost:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-white/40">
              <span className="font-heading text-[10px] uppercase tracking-[0.32em]">
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
