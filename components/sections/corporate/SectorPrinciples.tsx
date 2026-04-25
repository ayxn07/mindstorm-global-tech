"use client";

import { motion } from "motion/react";
import {
  Activity,
  ClipboardCheck,
  Layers,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Principle = {
  icon: LucideIcon;
  title: string;
  body: string;
  points: string[];
};

const principles: Principle[] = [
  {
    icon: ClipboardCheck,
    title: "Regulation-first architecture",
    body:
      "We map statutory and contractual constraints — PCI, HIPAA, RBI, SEBI, ISO, GDPR, DPDP — onto the architecture before we touch code. Controls are a property of the build, not a later retrofit.",
    points: [
      "Data residency and retention modelled at design time",
      "Auditor-ready evidence trails from day one",
      "Change control aligned to your assurance programme",
    ],
  },
  {
    icon: Activity,
    title: "Uptime aligned to business tolerance",
    body:
      "A trading floor, a campus, and a shop-floor line do not share a reliability target. We calibrate redundancy, DR, and observability to the real cost of a bad hour in your sector.",
    points: [
      "Tiered SLOs per service, not blanket five-nines theatre",
      "Multi-region / multi-AZ where it earns its budget",
      "Runbooks exercised, not only authored",
    ],
  },
  {
    icon: Layers,
    title: "Native integration with your stack",
    body:
      "Your HRMS, ERP, EHR, LMS, POS, and SIS already carry the business. We fit new systems around them through clean APIs, event buses, and identity — not parallel universes.",
    points: [
      "SSO, SCIM, and role models unified across tools",
      "Event-driven integration with replay and dead-letter handling",
      "Zero silent-failure policy on cross-system flows",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Observable, auditable delivery",
    body:
      "Every engagement ships with the instrumentation needed to prove it is working — for your users, your oncall, and your auditors. If a metric matters, it is on a dashboard and a paging policy.",
    points: [
      "Golden-signal telemetry from day one",
      "Security events centralised into SIEM",
      "Quarterly service reviews with measurable deltas",
    ],
  },
];

const stats = [
  { value: "12+", label: "Sectors served" },
  { value: "24 / 7", label: "Delivery coverage" },
  { value: "99.95%", label: "Typical uptime target" },
  { value: "ISO · SOC2", label: "Alignment baseline" },
];

export default function SectorPrinciples() {
  return (
    <section
      aria-labelledby="sector-principles-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(215,191,94,0.08),transparent_55%)]"
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
            <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
              How We Adapt
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="sector-principles-heading"
            className="mt-8 font-heading text-4xl font-semibold uppercase leading-[1.05] tracking-[0.015em] text-white sm:text-5xl md:text-6xl"
          >
            Four principles we hold{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              across every sector
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Industries differ in what they regulate, how they fail, and who
            uses the systems. The way we deliver for them does not.
          </p>
        </motion.div>

        <ul className="mx-auto mt-16 grid w-full max-w-[1400px] grid-cols-1 gap-5 md:grid-cols-2">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 0.9, 0.3, 1],
                  delay: (i % 4) * 0.06,
                }}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.9)_0%,rgba(10,9,6,0.96)_100%)] p-6 transition-[border-color,box-shadow] duration-500 hover:border-[var(--color-ms-gold)]/55 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8),0_0_0_1px_rgba(215,191,94,0.22)] md:p-8"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/40 to-transparent"
                />

                <div className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.18)_0%,rgba(121,107,56,0.05)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.3)]"
                  >
                    <Icon className="h-5 w-5 text-[var(--color-ms-gold)]" />
                  </span>
                  <span className="font-heading text-[10px] uppercase tracking-[0.28em] text-white/45">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold uppercase leading-tight tracking-[0.02em] text-white md:text-2xl">
                  {p.title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-white/70 md:text-[15px]">
                  {p.body}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5 border-t border-[var(--color-ms-border)] pt-5">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        aria-hidden
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-ms-gold)] shadow-[0_0_8px_var(--color-ms-glow)]"
                      />
                      <span className="text-[13px] leading-relaxed text-white/75 md:text-sm">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="mx-auto mt-14 grid w-full max-w-[1400px] grid-cols-2 gap-4 rounded-2xl border border-[var(--color-ms-border)] bg-black/45 p-6 backdrop-blur-sm md:grid-cols-4 md:p-8"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-start gap-1 border-l border-[var(--color-ms-border)] pl-4 first:border-l-0 md:items-center md:border-l md:pl-0 md:text-center"
            >
              <span className="font-heading text-2xl font-semibold text-[var(--color-ms-gold)] md:text-3xl">
                {s.value}
              </span>
              <span className="font-heading text-[10px] uppercase tracking-[0.28em] text-white/55">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
