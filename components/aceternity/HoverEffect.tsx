"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type HoverEffectProps = {
  items: ReadonlyArray<{ id: string; render: () => ReactNode; className?: string }>;
  className?: string;
};

export default function HoverEffect({ items, className }: HoverEffectProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("grid w-full gap-4 md:gap-5", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn("group relative block h-full w-full p-1", item.className)}
          onMouseEnter={() => setActive(item.id)}
          onMouseLeave={() => setActive(null)}
        >
          <AnimatePresence>
            {active === item.id && (
              <motion.span
                aria-hidden
                className="absolute inset-0 block h-full w-full rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(215,191,94,0.18),rgba(215,191,94,0.04)_55%,transparent_80%)]"
                layoutId="hover-effect-bg"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.18 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.18, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative h-full">{item.render()}</div>
        </div>
      ))}
    </div>
  );
}
