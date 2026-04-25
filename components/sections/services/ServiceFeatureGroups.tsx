"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Service } from "@/types/site";
import { getServiceImageSet } from "@/data/serviceImageSets";

interface Props {
  service: Service;
}

export default function ServiceFeatureGroups({ service }: Props) {
  const trail = getServiceImageSet(service.slug);

  return (
    <section
      aria-labelledby="service-features-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,191,94,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
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
              What We Deliver
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="service-features-heading"
            className="mt-7 font-heading text-h2-fluid font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white "
          >
            Specialised{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              capabilities
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {service.featureGroups.map((g, i) => {
            const imgSrc = trail[i % trail.length];
            return (
              <motion.article
                key={g.heading}
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.22, 0.9, 0.3, 1] },
                  },
                }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] transition-colors duration-300 hover:border-[rgba(215,191,94,0.55)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.30)_0%,rgba(10,9,6,0.85)_100%)]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
                  />
                  <span className="absolute left-7 top-6 text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative flex flex-1 flex-col p-7 md:p-8">
                  <h3 className="font-heading text-lg font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-xl">
                    {g.heading}
                  </h3>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-ms-gold)] shadow-[0_0_8px_var(--color-ms-glow)]"
                        />
                        <span className="text-[14px] leading-relaxed text-white/75">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
