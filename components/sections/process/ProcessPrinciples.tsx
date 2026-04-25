"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import BounceCards from "@/components/BounceCards";
import { processPrinciples } from "@/data/process";
import { images } from "@/data/images";

const bounceImages = [
  images.consultingMeeting.src,
  images.codeScreen.src,
  images.serverRoom.src,
  images.cybersecurityDark.src,
  images.socDashboard.src,
];

const transformStyles = [
  "rotate(8deg) translate(-180px)",
  "rotate(4deg) translate(-90px)",
  "rotate(-2deg)",
  "rotate(-7deg) translate(90px)",
  "rotate(3deg) translate(180px)",
];

export default function ProcessPrinciples() {
  const [size, setSize] = useState({ w: 520, h: 360 });

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw < 640) setSize({ w: 320, h: 280 });
      else if (vw < 1024) setSize({ w: 460, h: 340 });
      else setSize({ w: 560, h: 380 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      aria-labelledby="process-principles-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)] py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(215,191,94,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(121,107,56,0.12),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />

      <div className="relative grid w-full grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-12 lg:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="lg:col-span-5 xl:col-span-5"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
              Operating Principles
            </span>
          </div>

          <h2
            id="process-principles-heading"
            className="mt-7 font-heading text-3xl font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white sm:text-4xl md:text-5xl"
          >
            Four rules{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              that hold every stage together.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
            The discipline behind the diagram. These keep the programme honest
            even when scope, vendors, and stakeholders try to pull it apart.
          </p>

          <ul className="mt-10 space-y-5">
            {processPrinciples.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 0.9, 0.3, 1],
                }}
                className="group relative rounded-xl border border-[var(--color-ms-border)] bg-black/40 p-5 backdrop-blur-sm transition-colors hover:border-[var(--color-ms-gold)]/55"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(215,191,94,0.35)] bg-[radial-gradient(circle_at_top,rgba(215,191,94,0.18),transparent_60%)] font-heading text-xs font-semibold text-[var(--color-ms-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold uppercase tracking-[0.05em] text-white md:text-lg">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 0.9, 0.3, 1] }}
          className="relative flex min-h-[480px] items-center justify-center lg:col-span-7 xl:col-span-7"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl border border-[var(--color-ms-border)] bg-[radial-gradient(ellipse_at_center,rgba(215,191,94,0.10),transparent_60%)]"
          />
          <div className="relative flex w-full items-center justify-center py-10">
            <BounceCards
              images={bounceImages}
              transformStyles={transformStyles}
              containerWidth={size.w}
              containerHeight={size.h}
              animationDelay={0.4}
              animationStagger={0.07}
              easeType="elastic.out(1, 0.7)"
              enableHover
            />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 bottom-6 flex justify-center"
          >
            <span className="font-heading text-[10px] uppercase tracking-[0.32em] text-white/45">
              Hover a card — feel the spread
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
