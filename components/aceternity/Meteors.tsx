"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

type MeteorsProps = {
  number?: number;
  className?: string;
};

export default function Meteors({ number = 18, className }: MeteorsProps) {
  const meteors = useMemo(
    () =>
      Array.from({ length: number }).map((_, i) => ({
        id: i,
        top: -20 + Math.random() * 30,
        left: Math.random() * 100,
        delay: Math.random() * 1.4,
        duration: 3 + Math.random() * 4,
      })),
    [number]
  );

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {meteors.map((m) => (
        <span
          key={m.id}
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            ["--meteor-angle" as string]: "215deg",
          }}
          className="absolute h-0.5 w-0.5 rotate-[215deg] animate-[meteor_linear_infinite] rounded-full bg-[var(--color-ms-gold)] shadow-[0_0_0_1px_rgba(215,191,94,0.18)] before:absolute before:top-1/2 before:h-px before:w-[60px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[rgba(215,191,94,0.65)] before:to-transparent before:content-['']"
        />
      ))}
    </div>
  );
}
