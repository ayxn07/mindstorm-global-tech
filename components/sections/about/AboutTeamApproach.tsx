"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Users,
  ClipboardCheck,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import { images } from "@/data/images";

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  alt: string;
};

const pillars: Pillar[] = [
  {
    icon: Users,
    title: "Our Engineers",
    body: "Certified practitioners across networking, cybersecurity, software, and IT infrastructure — never generalists pretending to be specialists.",
    bullets: [
      "CCNA-certified network architects",
      "Application & cloud engineers",
      "Security analysts (SOC + compliance)",
      "Senior IT project managers",
    ],
    image: images.codeScreen.src,
    alt: images.codeScreen.alt,
  },
  {
    icon: ClipboardCheck,
    title: "Our Process",
    body: "Structured from day one: requirements → design → build → test → deploy → support. There is no ambiguity on scope or ownership.",
    bullets: [
      "Documented SLAs & RACI matrices",
      "Change management with rollback paths",
      "Post-deployment review on every release",
      "Runbook & handover delivery",
    ],
    image: images.consultingMeeting.src,
    alt: images.consultingMeeting.alt,
  },
  {
    icon: HeartHandshake,
    title: "Our Commitment",
    body: "We do not disappear after go-live. Managed IT, AMC contracts, and a dedicated helpdesk are built into the program from the start.",
    bullets: [
      "24×7 monitoring & escalation",
      "Quarterly architecture reviews",
      "Patch & vulnerability cycles",
      "Tiered escalation paths",
    ],
    image: images.socDashboard.src,
    alt: images.socDashboard.alt,
  },
];

export default function AboutTeamApproach() {
  return (
    <section
      aria-labelledby="team-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)]"
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
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              How We Work
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="team-heading"
            className="mt-7 font-heading text-h2-fluid font-semibold uppercase leading-[1.06] tracking-[0.015em] text-white sm:text-5xl md:text-6xl"
          >
            The team behind{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              the technology
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            A tight-knit group of engineers, architects, and analysts —
            brought together around one delivery model.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-16 grid w-full grid-cols-1 gap-5 md:grid-cols-3 md:gap-6"
        >
          {pillars.map(({ icon: Icon, title, body, bullets, image, alt }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 26 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 0.9, 0.3, 1] },
                },
              }}
            >
              <SpotlightCard
                spotlightColor="rgba(215, 191, 94, 0.22)"
                className="!h-full !rounded-2xl !border-[var(--color-ms-border)] !bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] !p-0 transition-colors duration-300 hover:!border-[rgba(215,191,94,0.55)]"
              >
                <div className="relative flex h-full flex-col">
                  <div className="relative h-44 w-full overflow-hidden rounded-t-2xl md:h-48">
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover opacity-60"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,6,0.30)_0%,rgba(10,9,6,0.92)_100%)]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
                    />
                    <span
                      aria-hidden
                      className="absolute bottom-5 left-7 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(215,191,94,0.45)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.3),0_0_20px_-6px_rgba(215,191,94,0.5)]"
                    >
                      <Icon className="h-5 w-5 text-[var(--color-ms-gold)]" />
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col p-7 md:p-8">
                    <h3 className="font-heading text-xl font-semibold uppercase leading-tight tracking-[0.015em] text-white md:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-white/65 md:text-[14.5px]">
                      {body}
                    </p>

                    <ul className="mt-6 flex flex-col gap-3 border-t border-[var(--color-ms-border)] pt-6">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span
                            aria-hidden
                            className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-ms-gold)] shadow-[0_0_8px_var(--color-ms-glow)]"
                          />
                          <span className="text-[13px] leading-relaxed text-white/80">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
