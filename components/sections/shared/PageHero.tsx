"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { images, type ImageKey } from "@/data/images";
import { cn } from "@/lib/utils";

type CTA = { label: string; href: string };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  sub?: string;
  imageKey?: ImageKey;
  imageOverlayOpacity?: number;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  visual?: ReactNode;
  headingId?: string;
  heightClassName?: string;
  align?: "left" | "center";
};

export default function PageHero({
  eyebrow,
  title,
  sub,
  imageKey,
  imageOverlayOpacity = 0.75,
  primaryCta,
  secondaryCta,
  visual,
  headingId = "page-hero-heading",
  heightClassName = "min-h-[80svh] md:min-h-[86svh]",
  align = "left",
}: PageHeroProps) {
  const img = imageKey ? images[imageKey] : null;
  const isCenter = align === "center";

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative w-full overflow-hidden bg-[var(--color-ms-black)]",
        heightClassName
      )}
    >
      {img ? (
        <>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(0,0,0,${imageOverlayOpacity})` }}
          />
        </>
      ) : null}

      {visual ? (
        <div aria-hidden className="absolute inset-0">
          {visual}
        </div>
      ) : null}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(215,191,94,0.14),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--color-ms-black)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />

      <div
        className={cn(
          "relative z-10 flex h-full w-full flex-col justify-center px-6 py-24 md:px-10 md:py-28 lg:px-16 2xl:px-24",
          heightClassName
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.9, 0.3, 1] }}
          className={cn(
            "flex w-full flex-col",
            isCenter
              ? "mx-auto max-w-4xl items-center text-center"
              : "max-w-4xl items-start text-left"
          )}
        >
          {eyebrow ? (
            <div
              className={cn(
                "flex items-center gap-3",
                isCenter ? "justify-center" : "justify-start"
              )}
            >
              <span
                aria-hidden
                className="h-px w-10 bg-[var(--color-ms-gold)]"
              />
              <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
                {eyebrow}
              </span>
              {isCenter ? (
                <span
                  aria-hidden
                  className="h-px w-10 bg-[var(--color-ms-gold)]"
                />
              ) : null}
            </div>
          ) : null}

          <h1
            id={headingId}
            className="mt-8 font-heading text-h2-fluid font-semibold uppercase leading-[1.05] tracking-[0.015em] text-white sm:text-display"
          >
            {title}
          </h1>

          {sub ? (
            <p
              className={cn(
                "mt-6 text-base leading-relaxed text-white/70 md:text-lg",
                isCenter ? "max-w-2xl" : "max-w-2xl"
              )}
            >
              {sub}
            </p>
          ) : null}

          {primaryCta || secondaryCta ? (
            <div
              className={cn(
                "mt-10 flex flex-wrap items-center gap-5",
                isCenter ? "justify-center" : "justify-start"
              )}
            >
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-ms-gold)] bg-black/40 px-6 py-3 text-eyebrow font-heading uppercase text-[var(--color-ms-gold)] backdrop-blur-sm transition-colors hover:bg-[var(--color-ms-gold)] hover:text-black"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="group/ghost inline-flex items-center gap-2 border-b border-white/25 pb-1 text-eyebrow font-heading uppercase text-white/85 transition-colors hover:border-[var(--color-ms-gold)] hover:text-[var(--color-ms-gold)]"
                >
                  <span>{secondaryCta.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/ghost:translate-x-1" />
                </Link>
              ) : null}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
