"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import {
  Activity,
  Globe2,
  Layers,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(215,191,94,0.18),transparent_60%)]"
      />
    ),
  },
);

const ARC_COLORS = ["#D7BF5E", "#F6E5A6", "#EBD78A", "#B89E4C"];

const pickColor = (i: number) => ARC_COLORS[i % ARC_COLORS.length];

const RAW_ARCS: Array<Omit<Arc, "color">> = [
  { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.25 },
  { order: 1, startLat: 51.5072, startLng: -0.1276, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3 },
  { order: 1, startLat: 19.076, startLng: 72.8777, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.2 },
  { order: 2, startLat: 35.6762, startLng: 139.6503, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.2 },
  { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.35 },
  { order: 2, startLat: 12.9716, startLng: 77.5946, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.45 },
  { order: 3, startLat: 40.7128, startLng: -74.006, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.3 },
  { order: 3, startLat: 25.2048, startLng: 55.2708, endLat: 28.6139, endLng: 77.209, arcAlt: 0.18 },
  { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.35 },
  { order: 4, startLat: 22.3193, startLng: 114.1694, endLat: 37.5665, endLng: 126.978, arcAlt: 0.18 },
  { order: 4, startLat: 19.076, startLng: 72.8777, endLat: -1.2921, endLng: 36.8219, arcAlt: 0.4 },
  { order: 4, startLat: 51.5072, startLng: -0.1276, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.5 },
  { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: 13.0827, endLng: 80.2707, arcAlt: 0.22 },
  { order: 5, startLat: 25.2048, startLng: 55.2708, endLat: -1.2921, endLng: 36.8219, arcAlt: 0.3 },
  { order: 5, startLat: 40.7128, startLng: -74.006, endLat: 19.4326, endLng: -99.1332, arcAlt: 0.2 },
  { order: 6, startLat: 22.5726, startLng: 88.3639, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.22 },
  { order: 6, startLat: 28.6139, startLng: 77.209, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.5 },
  { order: 6, startLat: 12.9716, startLng: 77.5946, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3 },
];

type Arc = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const PILLARS_LEFT: Pillar[] = [
  {
    icon: Globe2,
    title: "Global Engineering Reach",
    body: "Multi-region delivery teams designing, building, and supporting infrastructure under one operating model.",
  },
  {
    icon: Layers,
    title: "One Stack, One Owner",
    body: "Hardware, software, networks and security engineered as a single programme — no integration tax.",
  },
];

const PILLARS_RIGHT: Pillar[] = [
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    body: "Zero-trust controls and compliance baked into every architecture from the first whiteboard session.",
  },
  {
    icon: Activity,
    title: "Always-On Operations",
    body: "Named engineers, predictable SLAs and observability that holds up at 3am — not just on the demo.",
  },
];

export default function GlobalReachShowcase() {
  const sampleArcs = useMemo<Arc[]>(
    () => RAW_ARCS.map((a, i) => ({ ...a, color: pickColor(i) })),
    [],
  );

  const globeConfig = useMemo(
    () => ({
      pointSize: 3,
      globeColor: "#1A1710",
      showAtmosphere: true,
      atmosphereColor: "#F6E5A6",
      atmosphereAltitude: 0.18,
      emissive: "#241E10",
      emissiveIntensity: 0.6,
      shininess: 1.2,
      polygonColor: "rgba(246,229,166,0.95)",
      ambientLight: "#FFF5D1",
      directionalLeftLight: "#FFF5D1",
      directionalTopLight: "#F6E5A6",
      pointLight: "#FFF5D1",
      arcTime: 2200,
      arcLength: 0.85,
      rings: 1,
      maxRings: 3,
      initialPosition: { lat: 19.076, lng: 72.8777 },
      autoRotate: true,
      autoRotateSpeed: 0.4,
    }),
    [],
  );

  return (
    <section
      aria-labelledby="global-reach-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,191,94,0.06),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />

      <div className="section-pad-x section-pad-y relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              Global Footprint
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>
          <h2
            id="global-reach-heading"
            className="mt-6 font-heading text-h2-fluid font-semibold uppercase leading-[1.05] tracking-[0.015em] text-white"
          >
            Engineered Locally.{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              Delivered Globally.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-body-lg-fluid leading-relaxed text-white/70">
            One operating model across continents — the same team that
            architects your stack runs it, secures it, and scales it with you.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 grid w-full grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-[minmax(280px,1fr)_minmax(0,2.4fr)_minmax(280px,1fr)] lg:gap-10 2xl:gap-14">
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            {PILLARS_LEFT.map((p, i) => (
              <PillarCard key={p.title} pillar={p} delay={0.1 + i * 0.08} align="left" />
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, ease: [0.22, 0.9, 0.3, 1] }}
              className="relative mx-auto aspect-square w-full max-w-[clamp(28rem,55vw,920px)] lg:max-w-none lg:h-[clamp(40rem,55vw,68rem)]"
            >
              <div className="relative h-full w-full">
                <World globeConfig={globeConfig} data={sampleArcs} />
              </div>
            </motion.div>
          </div>

          <div className="order-3 flex flex-col gap-6">
            {PILLARS_RIGHT.map((p, i) => (
              <PillarCard key={p.title} pillar={p} delay={0.1 + i * 0.08} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  delay,
  align,
}: {
  pillar: Pillar;
  delay: number;
  align: "left" | "right";
}) {
  const Icon = pillar.icon;
  return (
    <motion.article
      initial={{ opacity: 0, x: align === "left" ? -24 : 24, y: 12 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.9, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] p-7 transition-colors duration-300 hover:border-[var(--color-ms-gold)]/55 md:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(215,191,94,0.16),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative flex flex-col gap-5">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[var(--color-ms-border)] bg-black/40 text-[var(--color-ms-gold)] transition-colors duration-300 group-hover:border-[var(--color-ms-gold)]/55 group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </span>
        <div className="min-w-0">
          <h3 className="font-heading text-h3-fluid font-semibold uppercase leading-tight tracking-[0.04em] text-white">
            {pillar.title}
          </h3>
          <p className="mt-3 text-body-fluid leading-relaxed text-white/70">
            {pillar.body}
          </p>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[var(--color-ms-gold)] to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
    </motion.article>
  );
}
