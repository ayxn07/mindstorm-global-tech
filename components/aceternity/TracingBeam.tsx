"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TracingBeamProps = {
  children: ReactNode;
  className?: string;
};

export default function TracingBeam({ children, className }: TracingBeamProps) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const measure = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (contentRef.current) ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  const [dotActive, setDotActive] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setDotActive(v > 0.02);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-5xl", className)}
    >
      <div className="absolute -left-2 top-3 md:-left-12 md:top-4">
        <motion.div
          transition={{ duration: 0.2, delay: 0.4 }}
          animate={{
            boxShadow: dotActive
              ? "rgba(0,0,0,0) 0 0 0 0"
              : "rgba(215,191,94,0.55) 0 0 0 6px",
          }}
          className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-[rgba(215,191,94,0.45)] bg-black"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.4 }}
            animate={{
              backgroundColor: dotActive ? "#0A0A0A" : "#D7BF5E",
              borderColor: dotActive ? "#A7954F" : "#F6E5A6",
            }}
            className="h-2 w-2 rounded-full border border-[#F6E5A6] bg-[#D7BF5E]"
          />
        </motion.div>
        <svg
          aria-hidden
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
        >
          <motion.path
            d={`M 1 0 V -36 l 18 24 V ${svgHeight * 0.8} l -18 24 V ${svgHeight}`}
            fill="none"
            stroke="rgba(215,191,94,0.18)"
            strokeWidth="1.25"
            transition={{ duration: 10 }}
          />
          <motion.path
            d={`M 1 0 V -36 l 18 24 V ${svgHeight * 0.8} l -18 24 V ${svgHeight}`}
            fill="none"
            stroke="url(#tracing-gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          />
          <defs>
            <motion.linearGradient
              id="tracing-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#D7BF5E" stopOpacity="0" />
              <stop stopColor="#D7BF5E" />
              <stop offset="0.325" stopColor="#F6E5A6" />
              <stop offset="1" stopColor="#A7954F" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}
