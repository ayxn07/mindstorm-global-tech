"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { homeMarqueeWords } from "@/data/pages";

const WORDS = [...homeMarqueeWords, ...homeMarqueeWords];

export default function MarqueeBand() {
  const rowARef = useRef<HTMLDivElement>(null);
  const rowBRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 45,
    stiffness: 320,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1200],
    [0, 4],
    { clamp: false }
  );

  const baseX = useMotionValue(0);
  const baseXReverse = useMotionValue(0);

  useEffect(() => {
    let rafId = 0;
    let prev = performance.now();
    let visible = true;
    const BASE_SPEED = 55;

    const loop = (now: number) => {
      const dt = Math.min(0.1, (now - prev) / 1000);
      prev = now;
      if (visible) {
        const extra = velocityFactor.get();
        const dir = extra < 0 ? -1 : 1;
        const px = (BASE_SPEED + Math.abs(extra) * 60) * dt * dir;
        baseX.set(wrap(baseX.get() - px, rowARef.current));
        baseXReverse.set(wrap(baseXReverse.get() + px, rowBRef.current));
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const node = rowARef.current?.parentElement;
    let io: IntersectionObserver | null = null;
    if (node) {
      io = new IntersectionObserver(
        (entries) => {
          visible = entries[0]?.isIntersecting ?? true;
          if (visible) prev = performance.now();
        },
        { rootMargin: "120px" },
      );
      io.observe(node);
    }

    return () => {
      cancelAnimationFrame(rafId);
      io?.disconnect();
    };
  }, [baseX, baseXReverse, velocityFactor]);

  return (
    <section
      aria-hidden
      className="relative w-full overflow-hidden bg-[var(--color-ms-black)] py-14 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-border)] to-transparent"
      />

      <motion.div
        ref={rowARef}
        style={{ x: baseX }}
        className="flex whitespace-nowrap will-change-transform"
      >
        {WORDS.map((w, i) => (
          <span
            key={`a-${w}-${i}`}
            className="mx-8 font-heading text-display-xl font-semibold uppercase tracking-[0.04em] text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(215,191,94,0.65)",
            }}
          >
            {w}
            <span className="mx-4 inline-block h-1.5 w-1.5 translate-y-[-0.5em] rounded-full bg-[var(--color-ms-gold)] align-middle" />
          </span>
        ))}
      </motion.div>

      <motion.div
        ref={rowBRef}
        style={{ x: baseXReverse }}
        className="mt-6 flex whitespace-nowrap will-change-transform md:mt-8"
      >
        {WORDS.map((w, i) => (
          <span
            key={`b-${w}-${i}`}
            className="mx-8 font-heading text-display-xl font-semibold uppercase tracking-[0.04em] text-white/75"
          >
            {w}
            <span className="mx-4 inline-block h-1.5 w-1.5 translate-y-[-0.5em] rounded-full bg-white/40 align-middle" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function wrap(value: number, el: HTMLElement | null): number {
  if (!el) return value;
  const width = el.scrollWidth / 2;
  if (!width) return value;
  if (value <= -width) return value + width;
  if (value >= 0) return value - width;
  return value;
}
