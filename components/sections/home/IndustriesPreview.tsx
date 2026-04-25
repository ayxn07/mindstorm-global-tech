"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { images, type ImageKey } from "@/data/images";
import { homeIndustries } from "@/data/pages";

const DomeGallery = dynamic(() => import("@/components/DomeGallery"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden
      className="absolute inset-0 bg-[var(--color-ms-black)]"
    />
  ),
});

const domeImages = homeIndustries.map((i) => ({
  src: images[i.image as ImageKey].src,
  alt: `${i.title} — ${images[i.image as ImageKey].alt}`,
}));

export default function IndustriesPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setInView(true);
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-labelledby="industries-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,191,94,0.06),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />

      <div className="relative w-full px-6 py-24 md:px-10 md:py-32 lg:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
              Industries We Serve
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>
          <h2
            id="industries-heading"
            className="mt-6 font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            Technology That Works Across Sectors
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
            From enterprise and finance to education and public sector — we
            design systems for the constraints each industry actually operates
            under.
          </p>
          <Link
            href="/industries"
            className="group mt-8 inline-flex items-center gap-2 font-heading text-[12px] uppercase tracking-[0.22em] text-[var(--color-ms-gold)] transition-colors hover:text-[var(--color-ms-gold-muted)]"
          >
            <span>Explore all industries</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: [0.22, 0.9, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto mt-16 h-[520px] w-full overflow-hidden rounded-2xl border border-[var(--color-ms-border)] md:h-[620px] lg:h-[720px]"
        >
          {inView ? (
            <DomeGallery
              images={domeImages}
              grayscale={false}
              fit={0.55}
              minRadius={620}
              maxRadius={1100}
              maxVerticalRotationDeg={6}
              dragSensitivity={18}
              segments={32}
              overlayBlurColor="#000000"
              imageBorderRadius="12px"
            />
          ) : null}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.85)_95%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--color-ms-border)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
