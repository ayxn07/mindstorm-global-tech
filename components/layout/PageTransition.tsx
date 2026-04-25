"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import VaultDoor from "@/components/VaultDoor";
import { useVault } from "./VaultContext";

type Phase = "idle" | "closing" | "settled" | "opening";

const CLOSE_DURATION = 1000;
const SETTLE_DURATION = 350;
const OPEN_DURATION = 1400;
const TRANSITION_SPEED = 1.7;

export default function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const { setActive } = useVault();
  const [phase, setPhase] = useState<Phase>("idle");
  const pendingHref = useRef<string | null>(null);
  const captionVariants = {
    idle: "",
    closing: "Sealing channel",
    settled: "Authenticating",
    opening: "Welcome",
  } as const;

  useEffect(() => {
    setActive(phase !== "idle");
  }, [phase, setActive]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;
      if (rawHref.startsWith("#")) return;
      if (rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (url.pathname === pathname) return;

      e.preventDefault();
      pendingHref.current = url.pathname + url.search + url.hash;
      setPhase("closing");
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  useEffect(() => {
    if (phase === "idle") return;

    if (phase === "closing") {
      const t = setTimeout(() => {
        if (pendingHref.current) {
          router.push(pendingHref.current);
          pendingHref.current = null;
        }
        setPhase("settled");
      }, CLOSE_DURATION);
      return () => clearTimeout(t);
    }
    if (phase === "settled") {
      const t = setTimeout(() => setPhase("opening"), SETTLE_DURATION);
      return () => clearTimeout(t);
    }
    if (phase === "opening") {
      const t = setTimeout(() => setPhase("idle"), OPEN_DURATION);
      return () => clearTimeout(t);
    }
  }, [phase, router]);

  useEffect(() => {
    if (phase === "closing" || phase === "settled" || phase === "opening") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  let stage: "locked" | "closing" | "unlocking" | "opening" = "locked";
  if (phase === "closing") stage = "closing";
  else if (phase === "settled") stage = "unlocking";
  else if (phase === "opening") stage = "opening";

  return (
    <AnimatePresence>
      {phase !== "idle" && (
        <motion.div
          key="page-transition"
          className="fixed inset-0 z-[150]"
        >
          <VaultDoor stage={stage} speed={TRANSITION_SPEED} />

          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-14 z-40 flex flex-col items-center gap-2.5"
            animate={{ opacity: phase === "opening" ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]/70" />
              <span className="font-heading text-[10px] uppercase tracking-[0.55em] text-[var(--color-ms-gold)]">
                Mindstorm · Tech Global
              </span>
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]/70" />
            </div>
            <div className="font-heading text-[9px] uppercase tracking-[0.45em] text-white/55">
              {captionVariants[phase]}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
