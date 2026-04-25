"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  Cloud,
  Database,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Radio,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Users,
  type LucideIcon,
} from "lucide-react";
import { images } from "@/data/images";

type SectorSize = "featured" | "wide" | "standard";

type SectorStat = { label: string; value: string };

type Sector = {
  title: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  blurb: string;
  tags: string[];
  size: SectorSize;
  stats?: SectorStat[];
  systems?: string[];
};

const sectors: Sector[] = [
  {
    title: "Enterprise",
    icon: Building2,
    image: images.serverRoom.src,
    imageAlt: images.serverRoom.alt,
    size: "featured",
    blurb:
      "Scalable infrastructure, identity, and application platforms for distributed operations — engineered to run quietly under scale, audits, and M&A.",
    tags: ["Platforms", "Identity", "Cloud"],
    stats: [
      { label: "Uptime Target", value: "99.95%" },
      { label: "Deploy Scale", value: "Multi-region" },
      { label: "Identity", value: "SSO + MFA" },
    ],
    systems: ["Entra ID", "Azure / AWS", "Okta", "Intune", "ServiceNow"],
  },
  {
    title: "Security Ops",
    icon: ShieldCheck,
    image: images.socDashboard.src,
    imageAlt: images.socDashboard.alt,
    size: "featured",
    blurb:
      "SIEM, SOC tooling, and detection engineering for always-on defence — tuned to your threat model, with response playbooks the team will actually run.",
    tags: ["SIEM", "SOC", "Detection"],
    stats: [
      { label: "MTTD Target", value: "< 15 min" },
      { label: "Coverage", value: "24 / 7" },
      { label: "Framework", value: "MITRE ATT&CK" },
    ],
    systems: ["Splunk", "Sentinel", "CrowdStrike", "Wazuh", "SOAR"],
  },
  {
    title: "Education",
    icon: GraduationCap,
    image: images.edtechClassroom.src,
    imageAlt: images.edtechClassroom.alt,
    size: "wide",
    blurb:
      "Learning platforms, campus networks, and device fleets — resilient during admission windows, exams, and peak enrolment.",
    tags: ["LMS", "Campus", "MDM"],
    systems: ["Moodle", "Google Workspace", "Meraki", "Intune"],
  },
  {
    title: "Finance",
    icon: Landmark,
    image: images.skyline.src,
    imageAlt: images.skyline.alt,
    size: "standard",
    blurb:
      "Hardened networks and compliance-aware controls for resilient transaction systems.",
    tags: ["Compliance", "Networks", "DR"],
  },
  {
    title: "Manufacturing",
    icon: Factory,
    image: images.hardwareRack.src,
    imageAlt: images.hardwareRack.alt,
    size: "standard",
    blurb:
      "OT/IT integration, ERP, and shop-floor connectivity with monitored uptime.",
    tags: ["OT/IT", "ERP", "Uptime"],
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    image: images.consultingMeeting.src,
    imageAlt: images.consultingMeeting.alt,
    size: "standard",
    blurb:
      "Secure patient data, clinical systems, and availability-first infrastructure.",
    tags: ["PHI", "Clinical", "Uptime"],
  },
  {
    title: "Government",
    icon: Scale,
    image: images.cybersecurityDark.src,
    imageAlt: images.cybersecurityDark.alt,
    size: "standard",
    blurb:
      "Policy-aligned deployments with auditability, hardening, and long-term support.",
    tags: ["Audit", "Hardening", "LTS"],
  },
  {
    title: "Retail",
    icon: ShoppingBag,
    image: images.codeScreen.src,
    imageAlt: images.codeScreen.alt,
    size: "standard",
    blurb:
      "Omnichannel platforms, POS connectivity, and edge networks across locations.",
    tags: ["Omnichannel", "POS", "Edge"],
  },
  {
    title: "Telecom",
    icon: Radio,
    image: images.networkCables.src,
    imageAlt: images.networkCables.alt,
    size: "standard",
    blurb:
      "Carrier-grade cabling, routing, and security for high-throughput environments.",
    tags: ["Carrier", "Routing", "HT"],
  },
  {
    title: "Data & AI",
    icon: Database,
    image: images.matrixCode.src,
    imageAlt: images.matrixCode.alt,
    size: "wide",
    blurb:
      "Data pipelines, governance, and model serving aligned with measurable business value — not science projects.",
    tags: ["Pipelines", "MLOps", "Governance"],
    systems: ["Snowflake", "Databricks", "Airflow", "dbt", "MLflow"],
  },
  {
    title: "Cloud Ops",
    icon: Cloud,
    image: images.cloudSky.src,
    imageAlt: images.cloudSky.alt,
    size: "standard",
    blurb:
      "Multi-cloud landing zones, cost controls, and zero-trust perimeter design.",
    tags: ["Multi-cloud", "Zero-Trust", "FinOps"],
  },
  {
    title: "HR Services",
    icon: Users,
    image: images.hrOffice.src,
    imageAlt: images.hrOffice.alt,
    size: "standard",
    blurb:
      "HRMS, payroll, and attendance platforms integrated with identity systems.",
    tags: ["HRMS", "Payroll", "SSO"],
  },
];

function sizeClasses(size: SectorSize) {
  switch (size) {
    case "featured":
      return "sm:col-span-2 lg:row-span-2";
    case "wide":
      return "sm:col-span-2";
    case "standard":
    default:
      return "";
  }
}

export default function SectorsShowcase() {
  return (
    <section
      id="industries-list"
      aria-labelledby="sectors-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(215,191,94,0.08),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,191,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative w-full px-6 py-24 md:px-10 md:py-32 lg:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 0.9, 0.3, 1] }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              Sectors We Serve
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="sectors-heading"
            className="mt-8 font-heading text-h2-fluid font-semibold uppercase leading-[1.05] tracking-[0.015em] text-white sm:text-display"
          >
            Every Industry Has Its Own
            <br className="hidden md:block" />{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              Shape of Risk
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Our delivery teams build to the operating reality of each sector —
            the regulations it answers to, the uptime it tolerates, and the
            people who actually use the systems.
          </p>
        </motion.div>

        <ul className="mx-auto mt-16 grid w-full max-w-[1600px] auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            const isFeatured = s.size === "featured";
            const isWide = s.size === "wide";
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 0.9, 0.3, 1],
                  delay: (i % 6) * 0.05,
                }}
                className={sizeClasses(s.size)}
              >
                <Link
                  href="/contact"
                  className={`group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[rgba(215,191,94,0.28)] p-5 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:border-[rgba(215,191,94,0.65)] hover:shadow-[0_0_0_1px_rgba(215,191,94,0.35),0_0_28px_-4px_rgba(215,191,94,0.30),0_24px_60px_-24px_rgba(0,0,0,0.85)] md:p-6 ${isFeatured ? "lg:p-8" : ""}`}
                >
                  {/* Background image */}
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-30 transition-opacity duration-700 group-hover:opacity-50"
                  />
                  {/* Dark gradient overlay so text stays legible */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/30"
                  />
                  {/* Always-on subtle gold top border line */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(215,191,94,0.55)] to-transparent"
                  />
                  {/* Corner glow intensifies on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.22),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <span
                      aria-hidden
                      className={`inline-flex shrink-0 items-center justify-center rounded-xl border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.18)_0%,rgba(121,107,56,0.05)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.3)] ${isFeatured ? "h-12 w-12" : "h-11 w-11"}`}
                    >
                      <Icon
                        className={`text-[var(--color-ms-gold)] ${isFeatured ? "h-5 w-5" : "h-[18px] w-[18px]"}`}
                      />
                    </span>
                    <span
                      aria-hidden
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-ms-border)] text-white/70 transition-all duration-300 group-hover:border-[var(--color-ms-gold)] group-hover:bg-[var(--color-ms-gold)] group-hover:text-black"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  <h3
                    className={`relative mt-5 font-heading font-semibold uppercase leading-tight tracking-[0.02em] text-white ${
                      isFeatured
                        ? "text-2xl md:text-3xl"
                        : isWide
                          ? "text-xl md:text-2xl"
                          : "text-lg md:text-xl"
                    }`}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={`relative mt-2.5 leading-relaxed text-white/65 ${
                      isFeatured
                        ? "text-sm md:text-[15px]"
                        : isWide
                          ? "text-[13px] md:text-sm"
                          : "text-[13px] line-clamp-3"
                    }`}
                  >
                    {s.blurb}
                  </p>

                  {isFeatured && s.stats ? (
                    <dl className="relative mt-5 grid grid-cols-3 gap-3 border-t border-[var(--color-ms-border)] pt-5">
                      {s.stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-1">
                          <dt className="font-heading text-[9.5px] uppercase tracking-[0.24em] text-white/45">
                            {stat.label}
                          </dt>
                          <dd className="font-heading text-sm text-[var(--color-ms-gold)] md:text-base">
                            {stat.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  {isFeatured && s.systems ? (
                    <div className="relative mt-auto pt-5">
                      <p className="font-heading text-[9.5px] uppercase tracking-[0.24em] text-white/40">
                        Key Systems
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {s.systems.map((sys) => (
                          <span
                            key={sys}
                            className="inline-flex h-6 items-center rounded-full border border-[var(--color-ms-border)] bg-black/50 px-2.5 text-[10.5px] text-white/75"
                          >
                            {sys}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {isWide && s.systems ? (
                    <div className="relative mt-auto flex flex-wrap gap-1.5 pt-4">
                      {s.systems.map((sys) => (
                        <span
                          key={sys}
                          className="inline-flex h-6 items-center rounded-full border border-[var(--color-ms-border)] bg-black/50 px-2.5 text-[10.5px] text-white/75"
                        >
                          {sys}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {!isFeatured && !isWide ? (
                    <div className="relative mt-auto flex flex-wrap gap-1.5 pt-4">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex h-5 items-center rounded-full border border-[var(--color-ms-border)] bg-black/50 px-2 text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
