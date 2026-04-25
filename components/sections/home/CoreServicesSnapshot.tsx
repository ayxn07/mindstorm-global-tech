"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  MonitorCog,
  Network,
  Server,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import GlareHover from "@/components/GlareHover";
import { images, type ImageKey } from "@/data/images";
import { services } from "@/data/services";

const iconBySlug: Record<string, LucideIcon> = {
  "software-development": Code2,
  "hardware-solutions": Server,
  "networking-ccna": Network,
  cybersecurity: ShieldCheck,
  "managed-it-services": MonitorCog,
  "hr-technology": Users,
  "education-technology": GraduationCap,
};

export default function CoreServicesSnapshot() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)] py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left_top,rgba(215,191,94,0.06),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />

      <div className="relative w-full px-6 md:px-10 lg:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-px w-10 bg-[var(--color-ms-gold)]"
              />
              <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
                Our Services
              </span>
            </div>
            <h2
              id="services-heading"
              className="mt-5 font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
            >
              Integrated Technology Across the Enterprise
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60 md:text-base">
            Seven service lines, one technology partner — engineered to work
            together across your infrastructure, applications, and operations.
          </p>
        </motion.div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconBySlug[service.slug] ?? Server;
            const img = images[service.heroImageKey as ImageKey];
            return (
              <motion.li
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 0.9, 0.3, 1],
                  delay: Math.min(i * 0.05, 0.25),
                }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`${service.shortTitle} — learn more`}
                  className="group relative block h-full"
                >
                  <GlareHover
                    width="100%"
                    height="100%"
                    background="transparent"
                    borderRadius="14px"
                    borderColor="rgba(215,191,94,0.22)"
                    glareColor="#D7BF5E"
                    glareOpacity={0.18}
                    glareAngle={-40}
                    glareSize={220}
                    transitionDuration={700}
                    className="!block !p-0"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                        quality={80}
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-[var(--color-ms-black)] via-[var(--color-ms-black)]/55 to-black/10"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(215,191,94,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 ring-1 ring-inset ring-white/5 transition-all duration-500 group-hover:ring-[rgba(215,191,94,0.35)]"
                      />

                      <div className="absolute left-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(215,191,94,0.4)] bg-black/60 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.5)]">
                        <Icon className="h-4.5 w-4.5 text-[var(--color-ms-gold)]" />
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                        <p className="font-heading text-[10px] uppercase tracking-[0.28em] text-[var(--color-ms-gold)]">
                          Service {String(i + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-2.5 font-heading text-lg font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-xl">
                          {service.shortTitle}
                        </h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                          {service.tagline}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 font-heading text-[10px] uppercase tracking-[0.28em] text-[var(--color-ms-gold)]">
                          <span>Explore</span>
                          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </span>
                      </div>
                    </div>
                  </GlareHover>
                </Link>
              </motion.li>
            );
          })}

          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{
              duration: 0.65,
              ease: [0.22, 0.9, 0.3, 1],
              delay: 0.3,
            }}
          >
            <Link
              href="/about"
              aria-label="Explore the full Mindstorm approach"
              className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-[14px] border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(24,22,16,0.9)_0%,rgba(10,9,7,0.95)_100%)] p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[rgba(215,191,94,0.5)] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(215,191,94,0.25),0_0_40px_-8px_rgba(215,191,94,0.3)]"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="h-px w-8 bg-[var(--color-ms-gold)]"
                  />
                  <span className="font-heading text-[10px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
                    Full Approach
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-2xl">
                  See how we deliver across every service line
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  Our consulting engagements span discovery, design,
                  implementation, and long-term support — integrated, not
                  stitched together.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-heading text-[11px] uppercase tracking-[0.28em] text-[var(--color-ms-gold)]">
                <span>Explore our approach</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </Link>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
