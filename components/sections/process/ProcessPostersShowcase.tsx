"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { processStages } from "@/data/process";
import { images } from "@/data/images";
import type { FlyingPostersHandle } from "@/components/FlyingPosters";

const FlyingPosters = dynamic(() => import("@/components/FlyingPosters"), {
  ssr: false,
  loading: () => (
    <div aria-hidden className="absolute inset-0 bg-black" />
  ),
});

const posters = processStages.map((s) => images[s.imageKey].src);

export default function ProcessPostersShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const postersHandleRef = useRef<FlyingPostersHandle | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const section = sectionRef.current;
      const sticky = stickyRef.current;
      if (!section || !sticky) return;

      const total = posters.length;
      // Each plane is ~10 viewport units tall + 5 padding ≈ 15 units apart in
      // FlyingPosters' scene. Push 30 units per stage so two posters fly
      // through per stage of pin — feels brisk, no lag.
      const distancePerStage = 30;
      const totalDistance = total * distancePerStage;
      // ~0.7 viewport per stage of pin — snappy but with a touch more breathing room.
      const pinLength = () => window.innerHeight * total * 0.7;

      const master = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${pinLength()}`,
        pin: sticky,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // setScrollImmediate bypasses the internal lerp so the WebGL ribbon
          // tracks scroll position 1:1 instead of dragging behind it.
          postersHandleRef.current?.setScrollImmediate(
            self.progress * totalDistance
          );
        },
      });

      const cardTimelines = cardRefs.current.map((card, i) => {
        if (!card) return null;
        gsap.set(card, { autoAlpha: 0, y: 40, x: i % 2 === 0 ? -60 : 60 });

        const segment = 1 / total;
        const segStart = i * segment;
        const segEnd = segStart + segment;
        return gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: () => `top+=${segStart * pinLength()} top`,
            end: () => `top+=${segEnd * pinLength()} top`,
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        })
          .fromTo(
            card,
            { autoAlpha: 0, y: 40, x: i % 2 === 0 ? -60 : 60 },
            {
              autoAlpha: 1,
              y: 0,
              x: 0,
              duration: 0.4,
              ease: "power2.out",
            }
          )
          .to(card, { duration: 0.2 })
          .to(
            card,
            {
              autoAlpha: 0,
              y: -40,
              x: i % 2 === 0 ? -60 : 60,
              duration: 0.4,
              ease: "power2.in",
            }
          );
      });

      return () => {
        master.kill();
        cardTimelines.forEach((tl) => tl?.scrollTrigger?.kill());
        cardTimelines.forEach((tl) => tl?.kill());
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="process-posters-heading"
      className="relative w-full overflow-hidden bg-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />

      <div
        ref={stickyRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <FlyingPosters
          items={posters}
          planeWidth={500}
          planeHeight={500}
          distortion={3}
          scrollEase={0.12}
          cameraFov={45}
          cameraZ={20}
          onReady={(handle) => {
            postersHandleRef.current = handle;
          }}
          className="absolute inset-0 h-full w-full"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black via-black/70 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-black via-black/70 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent md:w-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent md:w-40"
        />

        <div className="pointer-events-none absolute inset-x-0 top-10 z-20 mx-auto flex max-w-3xl flex-col items-center px-6 text-center md:top-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
              <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
                Stage Gallery
              </span>
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            </div>

            <h2
              id="process-posters-heading"
              className="mt-5 font-heading text-2xl font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white sm:text-3xl md:text-4xl"
            >
              Scroll the wall.{" "}
              <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
                Watch the work fly.
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="absolute inset-0 z-20">
          {processStages.map((stage, i) => {
            const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
            return (
              <article
                key={stage.step}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`pointer-events-none absolute top-1/2 w-[min(420px,calc(100vw-3rem))] -translate-y-1/2 ${
                  side === "left"
                    ? "left-6 md:left-12 lg:left-20"
                    : "right-6 md:right-12 lg:right-20"
                }`}
              >
                <div className="rounded-2xl border border-[var(--color-ms-border)] bg-black/70 p-6 backdrop-blur-md md:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
                      Stage {stage.step}
                    </span>
                    <span className="text-eyebrow font-heading uppercase text-white/55">
                      {stage.duration}
                    </span>
                  </div>

                  <h3 className="mt-3 font-heading text-xl font-semibold uppercase tracking-[0.015em] text-white md:text-2xl">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {stage.narrative}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {stage.keyDetails.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-white/65"
                      >
                        <span
                          aria-hidden
                          className="mt-[7px] inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-ms-gold)]"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex justify-center">
          <span className="text-eyebrow font-heading uppercase text-white/45">
            Scroll to advance
          </span>
        </div>
      </div>
    </section>
  );
}
