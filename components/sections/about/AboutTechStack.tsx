"use client";

import Image from "next/image";
import { motion } from "motion/react";
import LogoLoop from "@/components/LogoLoop";
import { homeTechLogos } from "@/data/pages";
import { images } from "@/data/images";

const logos = homeTechLogos.map((name) => ({
  node: (
    <span className="flex h-12 items-center whitespace-nowrap px-7 text-eyebrow font-heading uppercase text-white/55 transition-colors duration-200 hover:text-[var(--color-ms-gold)] md:text-base">
      {name}
    </span>
  ),
  title: name,
  ariaLabel: name,
}));

export default function AboutTechStack() {
  return (
    <section
      aria-labelledby="techstack-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,191,94,0.07),transparent_60%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <Image
          src={images.networkCables.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.88)_0%,rgba(10,9,6,0.92)_100%)]" />
      </div>

      <div className="relative w-full px-6 py-24 md:px-10 md:py-28 lg:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              Technology Partners
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="techstack-heading"
            className="mt-7 font-heading text-h2-fluid font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white "
          >
            Built on platforms{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              you already know
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            We work with the tools and vendors our clients&apos; teams already
            rely on — never proprietary lock-ins.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.9, 0.3, 1] }}
          className="relative mt-12 w-full"
        >
          <LogoLoop
            logos={logos}
            speed={55}
            direction="left"
            logoHeight={48}
            gap={0}
            pauseOnHover
            fadeOut
            fadeOutColor="#080806"
            scaleOnHover={false}
            ariaLabel="Technology vendors and platforms we work with"
            className="w-full"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-10 max-w-xl text-center text-eyebrow font-heading uppercase text-white/45"
        >
          Certified partner, reseller, or deployment-experienced
          across all listed platforms
        </motion.p>
      </div>
    </section>
  );
}
