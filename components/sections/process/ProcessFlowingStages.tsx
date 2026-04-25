"use client";

import { motion } from "motion/react";
import { processStages } from "@/data/process";
import { images } from "@/data/images";
import FlowingMenu from "@/components/FlowingMenu";

const items = processStages.map((s) => ({
  link: "#process-stages",
  text: `${s.step} · ${s.title}`,
  image: images[s.imageKey].src,
}));

export default function ProcessFlowingStages() {
  return (
    <section
      aria-labelledby="process-flow-heading"
      className="relative w-full overflow-hidden bg-black py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />

      <div className="relative w-full px-6 md:px-10 lg:px-16 2xl:px-24">
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
              The Flow
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="process-flow-heading"
            className="mt-7 max-w-3xl font-heading text-3xl font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            Hover the rail.{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              See the stage.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            Each row is a stage in the programme — sweep over it to reveal the
            artefacts behind the work.
          </p>
        </motion.div>
      </div>

      <div className="relative mt-12 w-full md:mt-16">
        <div
          className="relative w-full overflow-hidden border-y border-[var(--color-ms-border)]"
          style={{ height: "min(76svh, 720px)" }}
        >
          <FlowingMenu
            items={items}
            speed={18}
            textColor="#F6E5A6"
            bgColor="#000000"
            marqueeBgColor="#D7BF5E"
            marqueeTextColor="#0A0A0A"
            borderColor="rgba(215,191,94,0.22)"
          />
        </div>
      </div>
    </section>
  );
}
