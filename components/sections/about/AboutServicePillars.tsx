"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Network,
  Server,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { images } from "@/data/images";

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
  tags: string[];
  image: string;
  alt: string;
  href: string;
};

const pillars: Pillar[] = [
  {
    icon: Code2,
    title: "Software Development",
    body: "Custom applications, SaaS integrations, CRM/ERP builds, and API ecosystems — scoped to your workflow, not a template.",
    tags: ["React", "Node.js", "Python", "REST/GraphQL"],
    image: images.codeScreen.src,
    alt: images.codeScreen.alt,
    href: "/services/software-development",
  },
  {
    icon: Network,
    title: "CCNA Networking",
    body: "Structured cabling, LAN/WAN design, switch and router configuration, and remote monitoring — carrier-grade in architecture, business-grade in cost.",
    tags: ["Cisco", "LAN/WAN", "VPN", "Monitoring"],
    image: images.networkCables.src,
    alt: images.networkCables.alt,
    href: "/services/networking-ccna",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    body: "Threat detection, SIEM, endpoint protection, vulnerability management, and incident response — always on, always tuned.",
    tags: ["SIEM", "EDR", "Zero Trust", "Compliance"],
    image: images.cybersecurityDark.src,
    alt: images.cybersecurityDark.alt,
    href: "/services/cybersecurity",
  },
  {
    icon: Server,
    title: "Managed IT Services",
    body: "AMC contracts, 24×7 helpdesk, patch management, and infrastructure monitoring — so your team focuses on the business, not the backbone.",
    tags: ["AMC", "Helpdesk", "Patch", "DR"],
    image: images.serverRoom.src,
    alt: images.serverRoom.alt,
    href: "/services/managed-it-services",
  },
  {
    icon: GraduationCap,
    title: "EdTech & HR Platforms",
    body: "LMS, campus networks, HRMS, payroll, attendance, and SSO — deployed and integrated as one cohesive system.",
    tags: ["LMS", "HRMS", "SSO", "MDM"],
    image: images.edtechClassroom.src,
    alt: images.edtechClassroom.alt,
    href: "/services/education-technology",
  },
];

export default function AboutServicePillars() {
  return (
    <section
      aria-labelledby="pillars-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(215,191,94,0.07),transparent_55%)]"
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
            <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
              What We Deliver
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="pillars-heading"
            className="mt-7 font-heading text-3xl font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            Five pillars.{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              One integrated program.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/65 md:text-base">
            Each pillar is a specialty. Together, they are the complete
            technology stack your business needs to operate — and compete.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {pillars.map(({ icon: Icon, title, body, tags, image, alt, href }, i) => (
            <motion.li
              key={title}
              variants={{
                hidden: { opacity: 0, y: 26 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 0.9, 0.3, 1] },
                },
              }}
              className={`${i === 0 ? "lg:col-span-2" : ""} group relative`}
            >
              <Link
                href={href}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] transition-colors duration-300 hover:border-[rgba(215,191,94,0.55)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
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

                  <span className="absolute left-7 top-6 font-heading text-[10px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
                    Pillar {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    aria-hidden
                    className="absolute bottom-5 left-7 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(215,191,94,0.45)] bg-[linear-gradient(180deg,rgba(215,191,94,0.22)_0%,rgba(121,107,56,0.06)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.35)]"
                  >
                    <Icon className="h-5 w-5 text-[var(--color-ms-gold)]" />
                  </span>

                  <span
                    aria-hidden
                    className="absolute right-6 top-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(215,191,94,0.3)] bg-black/45 text-[var(--color-ms-gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="relative flex flex-1 flex-col p-7 md:p-8">
                  <h3 className="font-heading text-lg font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/70 md:text-[14.5px]">
                    {body}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center rounded-full border border-[rgba(215,191,94,0.28)] bg-black/40 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.22em] text-white/75"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
