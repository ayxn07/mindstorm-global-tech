"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Service } from "@/types/site";
import { getServiceImageSet } from "@/data/serviceImageSets";

interface Props {
  service: Service;
}

export default function ServiceProcess({ service }: Props) {
  const trail = getServiceImageSet(service.slug);

  return (
    <section
      aria-labelledby="service-process-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />

      <div className="relative w-full px-6 py-24 md:px-10 md:py-32 lg:px-16 2xl:px-24">
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
              How We Deliver
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="service-process-heading"
            className="mt-7 font-heading text-h2-fluid font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white "
          >
            A six-step{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              delivery model
            </span>
          </h2>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {service.processSteps.map((step, i) => {
            const imgSrc = trail[i % trail.length];
            return (
              <motion.li
                key={step.number}
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 0.9, 0.3, 1] },
                  },
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] p-7 transition-colors duration-300 hover:border-[rgba(215,191,94,0.55)] md:p-8"
              >
                <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 opacity-25 transition-opacity duration-500 group-hover:opacity-40">
                  <Image
                    src={imgSrc}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.55)_0%,rgba(10,9,6,0.92)_100%)]" />
                </div>

                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
                />

                <div className="relative flex items-center gap-4">
                  <span className="font-heading text-display font-semibold leading-none text-[var(--color-ms-gold)]/85 md:text-6xl">
                    {String(step.number).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-6 font-heading text-lg font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-xl">
                  {step.title}
                </h3>
                <p className="relative mt-3 text-[13.5px] leading-relaxed text-white/65 md:text-sm">
                  {step.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
