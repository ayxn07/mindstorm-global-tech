"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { services } from "@/data/services";
import { images, type ImageKey } from "@/data/images";

const CircularGallery = dynamic(() => import("@/components/CircularGallery"), {
  ssr: false,
});

const galleryItems = services.map((s) => ({
  image: images[s.heroImageKey as ImageKey].src,
  text: s.shortTitle,
}));

export default function ServicesGalleryShowcase() {
  return (
    <section
      id="services-gallery"
      aria-labelledby="services-gallery-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)] py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,191,94,0.10),transparent_60%)]"
      />

      <div className="relative w-full section-pad-x">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              Service Spectrum
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="services-gallery-heading"
            className="mt-7 font-heading text-h2-fluid font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white "
          >
            Drag the orbit.{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              Choose a specialty.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            A live carousel of every service line — scroll, drag, or flick to
            navigate.
          </p>
        </motion.div>
      </div>

      <div
        className="relative mt-12 w-full md:mt-16"
        style={{ height: "min(78svh, 720px)" }}
      >
        <div className="absolute inset-0">
          <CircularGallery
            items={galleryItems}
            bend={2.6}
            textColor="#D7BF5E"
            borderRadius={0.06}
            font="bold 28px Cinzel, serif"
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </div>
    </section>
  );
}
