"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, CircleDot, Target } from "lucide-react";
import type { Service } from "@/types/site";

interface Props {
  service: Service;
}

function TiltCard({
  index,
  benefit,
  total,
}: {
  index: number;
  benefit: string;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 15,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.65,
        ease: [0.22, 0.9, 0.3, 1],
        delay: index * 0.06,
      }}
      className="group relative"
    >
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(155deg,rgba(28,24,16,0.85)_0%,rgba(10,9,6,0.96)_100%)] p-6 transition-colors duration-300 hover:border-[rgba(215,191,94,0.6)] md:p-7"
        style={{ transformStyle: "preserve-3d" }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.22),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div
          className="relative flex items-center justify-between"
          style={{ transform: "translateZ(30px)" }}
        >
          <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
            Outcome
          </span>
          <span className="font-heading text-h2-fluid font-semibold leading-none text-[var(--color-ms-gold)]/85 md:text-4xl">
            {String(index + 1).padStart(2, "0")}
            <span className="text-white/20">/{String(total).padStart(2, "0")}</span>
          </span>
        </div>

        <p
          className="relative mt-8 font-heading text-base font-semibold uppercase leading-snug tracking-[0.012em] text-white md:text-lg"
          style={{ transform: "translateZ(20px)" }}
        >
          {benefit}
        </p>

        <div
          className="relative mt-6 flex items-center gap-2 text-eyebrow uppercase text-white/40"
          style={{ transform: "translateZ(15px)" }}
        >
          <span aria-hidden className="h-px w-6 bg-[var(--color-ms-gold)]/50" />
          <span>Measurable impact</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServiceOutcomeConstellation({ service }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  }

  const benefits = service.benefits;

  return (
    <section
      aria-labelledby="service-outcomes-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,191,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setSpotlight((s) => ({ ...s, active: false }))}
        className="relative w-full px-6 py-24 md:px-10 md:py-32 lg:px-16 2xl:px-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: spotlight.active ? 1 : 0,
            background: `radial-gradient(600px circle at ${spotlight.x}% ${spotlight.y}%, rgba(215,191,94,0.10), transparent 55%)`,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="relative flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              Outcome Pathway
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="service-outcomes-heading"
            className="mt-7 max-w-3xl font-heading text-h2-fluid font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white "
          >
            From engagement to{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              business impact
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/65 md:text-base">
            A traceable line from the work we do to the results it produces. Each station below represents a measurable outcome from {service.shortTitle.toLowerCase()} engagements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 0.9, 0.3, 1] }}
          className="relative mt-14 overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(20,18,12,0.6)_0%,rgba(10,9,6,0.95)_100%)] p-6 md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(215,191,94,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(215,191,94,0.4)] bg-black/60">
                <CircleDot className="h-4 w-4 text-[var(--color-ms-gold)]" />
              </span>
              <div className="text-left">
                <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-[var(--color-ms-gold)]">
                  Input
                </p>
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.02em] text-white md:text-base">
                  Engagement Start
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-2 text-eyebrow uppercase text-white/40 md:flex">
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]/40" />
              <span>{benefits.length} measurable outcomes</span>
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]/40" />
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-[var(--color-ms-gold)]">
                  Output
                </p>
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.02em] text-white md:text-base">
                  Business Impact
                </p>
              </div>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(215,191,94,0.4)] bg-black/60">
                <Target className="h-4 w-4 text-[var(--color-ms-gold)]" />
              </span>
            </div>
          </div>

          <div className="relative mt-10 hidden md:block">
            <div className="relative h-[260px]">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[var(--color-ms-gold)]/0 via-[var(--color-ms-gold)]/45 to-[var(--color-ms-gold)]/0"
              />
              <motion.div
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.4, ease: [0.22, 0.9, 0.3, 1], delay: 0.3 }}
                style={{ transformOrigin: "left" }}
                className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--color-ms-gold)] to-transparent shadow-[0_0_12px_rgba(215,191,94,0.55)]"
              />

              <div
                className="relative grid h-full"
                style={{
                  gridTemplateColumns: `repeat(${benefits.length}, minmax(0, 1fr))`,
                }}
              >
                {benefits.map((b, i) => {
                  const above = i % 2 === 0;
                  return (
                    <motion.div
                      key={b}
                      initial={{ opacity: 0, y: above ? -16 : 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + i * 0.1,
                        ease: [0.22, 0.9, 0.3, 1],
                      }}
                      className="relative h-full"
                    >
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span
                          aria-hidden
                          className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.55),transparent_70%)] blur-sm"
                        />
                        <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[rgba(215,191,94,0.7)] bg-[var(--color-ms-gold)] shadow-[0_0_10px_rgba(215,191,94,0.7)]">
                          <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-ms-gold)]/40" />
                        </span>
                      </div>

                      {above ? (
                        <>
                          <div
                            aria-hidden
                            className="absolute left-1/2 top-[calc(50%-0.4rem)] h-12 w-px -translate-x-1/2 -translate-y-full bg-gradient-to-b from-transparent to-[var(--color-ms-gold)]/65"
                          />
                          <div className="absolute left-1/2 top-[calc(50%-3.5rem)] w-[88%] max-w-[200px] -translate-x-1/2 -translate-y-full">
                            <div className="rounded-xl border border-[var(--color-ms-border)] bg-black/75 p-3 text-center backdrop-blur transition-colors duration-300 hover:border-[rgba(215,191,94,0.55)]">
                              <p className="font-heading text-[9px] uppercase tracking-[0.3em] text-[var(--color-ms-gold)]">
                                Station {String(i + 1).padStart(2, "0")}
                              </p>
                              <p className="mt-1.5 text-[12px] font-medium leading-snug text-white/85">
                                {b}
                              </p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            aria-hidden
                            className="absolute left-1/2 top-[calc(50%+0.4rem)] h-12 w-px -translate-x-1/2 bg-gradient-to-t from-transparent to-[var(--color-ms-gold)]/65"
                          />
                          <div className="absolute left-1/2 top-[calc(50%+3.5rem)] w-[88%] max-w-[200px] -translate-x-1/2">
                            <div className="rounded-xl border border-[var(--color-ms-border)] bg-black/75 p-3 text-center backdrop-blur transition-colors duration-300 hover:border-[rgba(215,191,94,0.55)]">
                              <p className="font-heading text-[9px] uppercase tracking-[0.3em] text-[var(--color-ms-gold)]">
                                Station {String(i + 1).padStart(2, "0")}
                              </p>
                              <p className="mt-1.5 text-[12px] font-medium leading-snug text-white/85">
                                {b}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative mt-10 grid gap-3 md:hidden">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-xl border border-[var(--color-ms-border)] bg-black/70 p-3 backdrop-blur"
              >
                <span className="relative flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[var(--color-ms-gold)] shadow-[0_0_10px_rgba(215,191,94,0.7)]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-ms-gold)]/40" />
                </span>
                <div>
                  <p className="font-heading text-[9px] uppercase tracking-[0.3em] text-[var(--color-ms-gold)]">
                    Station {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[13px] font-medium leading-snug text-white/85">
                    {b}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative mt-10 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/45">
            <span>Engagement</span>
            <ArrowRight className="h-3 w-3 text-[var(--color-ms-gold)]" />
            <span>{service.shortTitle}</span>
            <ArrowRight className="h-3 w-3 text-[var(--color-ms-gold)]" />
            <span className="text-white/70">Outcome</span>
          </div>
        </motion.div>

        <div
          className="relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5"
          style={{ perspective: "1200px" }}
        >
          {benefits.map((b, i) => (
            <TiltCard key={b} index={i} benefit={b} total={benefits.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
