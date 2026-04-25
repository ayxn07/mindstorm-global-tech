"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useLenis from "@/hooks/useLenis";
import { perspectiveSet } from "@/data/images";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface PerspectiveGridProps {
  heading?: string;
  subheading?: string;
  images?: string[];
}

export default function PerspectiveGrid({
  heading = "Integrated Hardware, Software, Network & Security Expertise",
  subheading = "Scroll Down",
  images = perspectiveSet,
}: PerspectiveGridProps) {
  useLenis();
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLDivElement>(".grid_item");
      gsap.set(items, {
        x: () => gsap.utils.random(-140, 140),
        y: () => gsap.utils.random(-100, 100),
        rotate: () => gsap.utils.random(-14, 14),
        scale: () => gsap.utils.random(0.82, 1),
        filter: "brightness(0.3)",
      });

      gsap.to(gridRef.current, {
        z: 7000,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(items, {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: "brightness(1)",
        ease: "none",
        stagger: { each: 0.015, from: "center" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=80%",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] w-full overflow-hidden bg-[var(--color-ms-black)]"
    >
      <div
        aria-hidden
        className="pointer-events-none sticky top-0 flex h-screen w-full items-center justify-center"
        style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
      >
        <div
          ref={gridRef}
          className="grid w-[115%] grid-cols-4 gap-4 [transform-style:preserve-3d]"
          style={{ willChange: "transform" }}
        >
          {images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="grid_item relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-[var(--color-ms-border)]"
              style={{ willChange: "transform, filter" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-screen flex-col items-center justify-center px-6 text-center">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
            {subheading}
          </span>
          <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
        </div>
        <h2 className="mt-6 max-w-4xl font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-[0.015em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {heading}
        </h2>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-ms-black)_85%)]"
      />
    </div>
  );
}
