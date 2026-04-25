"use client";

import LogoLoop from "@/components/LogoLoop";
import { homeTechLogos } from "@/data/pages";

const logos = homeTechLogos.map((name) => ({
  node: (
    <span className="flex h-10 items-center whitespace-nowrap px-6 font-heading text-[15px] uppercase tracking-[0.25em] text-white/55 transition-colors duration-200 hover:text-[var(--color-ms-gold)] md:text-base">
      {name}
    </span>
  ),
  title: name,
  ariaLabel: name,
}));

export default function LogoStrip() {
  return (
    <section
      aria-label="Technology ecosystem"
      className="relative w-full overflow-hidden border-y border-[var(--color-ms-border)] bg-[var(--color-ms-surface)] py-12 md:py-14"
    >
      <div className="mb-7 flex items-center justify-center gap-3 px-6">
        <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
        <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
          Technology Ecosystem
        </span>
        <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
      </div>

      <LogoLoop
        logos={logos}
        speed={60}
        direction="left"
        logoHeight={40}
        gap={0}
        pauseOnHover
        fadeOut
        fadeOutColor="#080806"
        scaleOnHover={false}
        ariaLabel="Technology vendors and platforms we work with"
        className="w-full"
      />
    </section>
  );
}
