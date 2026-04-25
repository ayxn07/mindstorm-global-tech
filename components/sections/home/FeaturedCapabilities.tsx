"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import CardSwap, { Card } from "@/components/CardSwap";
import { images } from "@/data/images";
import { featuredCapabilities } from "@/data/pages";

const capabilityImageKeys = [
  "networkCables",
  "serverRoom",
  "edtechClassroom",
  "socDashboard",
] as const;

export default function FeaturedCapabilities() {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(215,191,94,0.08),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />

      <div className="relative mx-auto grid w-full items-center gap-10 px-6 py-16 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:px-10 md:py-20 lg:gap-10 lg:px-16 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] xl:gap-12 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="relative z-10 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
              Featured Capabilities
            </span>
          </div>
          <h2
            id="capabilities-heading"
            className="mt-6 font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            Engineering Outcomes, Not Just Deliverables
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            A look at the kind of work we ship — secure networks,
            production-grade platforms, learning ecosystems, and always-on
            operations. Each engagement is scoped, staffed, and delivered as one
            integrated program.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-white/70">
            {featuredCapabilities.map((cap) => (
              <li key={cap.title} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-ms-gold)]"
                />
                <span>
                  <span className="font-heading text-white">{cap.title}</span>
                  <span className="mx-2 text-white/30">—</span>
                  <span className="text-white/65">{cap.description}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border-b border-[var(--color-ms-gold)] pb-1 font-heading text-xs uppercase tracking-[0.3em] text-[var(--color-ms-gold)] transition-colors hover:text-white"
            >
              Start your engagement
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.9, ease: [0.22, 0.9, 0.3, 1], delay: 0.1 }}
          className="relative min-h-[460px] md:min-h-[520px] lg:min-h-[560px] xl:min-h-[600px] 2xl:min-h-[640px]"
        >
          <CardSwap
            width="min(82vw, 1020px)"
            height="min(52vw, 620px)"
            cardDistance={72}
            verticalDistance={78}
            delay={4500}
            pauseOnHover
            skewAmount={5}
            easing="elastic"
          >
            {featuredCapabilities.map((cap, i) => {
              const key = capabilityImageKeys[i];
              const img = images[key];
              return (
                <Card
                  key={cap.title}
                  customClass="!border-2 !border-[var(--color-ms-gold)] shadow-[0_0_0_1px_rgba(215,191,94,0.35),0_20px_50px_-20px_rgba(215,191,94,0.45)] overflow-hidden"
                >
                  <div className="relative h-full w-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${img.src})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-6 items-center rounded-full border border-[var(--color-ms-border)] bg-black/60 px-2.5 font-heading text-[10px] uppercase tracking-[0.3em] text-[var(--color-ms-gold)] backdrop-blur-sm">
                          0{i + 1}
                        </span>
                        <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-white/60">
                          Capability
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold uppercase leading-tight tracking-[0.02em] text-white md:text-2xl">
                          {cap.title}
                        </h3>
                        <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-white/75">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </CardSwap>
        </motion.div>
      </div>
    </section>
  );
}
