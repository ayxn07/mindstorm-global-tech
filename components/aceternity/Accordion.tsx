"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: string | null;
};

export default function Accordion({
  items,
  className,
  defaultOpen = null,
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen);

  return (
    <div className={cn("flex w-full flex-col gap-3", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              "group relative overflow-hidden rounded-2xl border bg-[linear-gradient(180deg,rgba(22,20,14,0.78)_0%,rgba(10,9,6,0.92)_100%)] backdrop-blur-sm transition-colors duration-300",
              isOpen
                ? "border-[rgba(215,191,94,0.55)]"
                : "border-[var(--color-ms-border)] hover:border-[rgba(215,191,94,0.45)]"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7 md:py-6"
            >
              <span className="font-heading text-base font-semibold uppercase tracking-[0.015em] text-white md:text-lg">
                {item.question}
              </span>
              <span
                aria-hidden
                className={cn(
                  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(215,191,94,0.35)] bg-black/45 transition-transform duration-300",
                  isOpen ? "rotate-45" : "rotate-0"
                )}
              >
                <Plus className="h-4 w-4 text-[var(--color-ms-gold)]" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${item.id}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.32, ease: [0.22, 0.9, 0.3, 1] },
                      opacity: { duration: 0.28, delay: 0.05 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.18 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 text-[14.5px] leading-relaxed text-white/70 md:px-7 md:pb-7">
                    <div
                      aria-hidden
                      className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
                    />
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
