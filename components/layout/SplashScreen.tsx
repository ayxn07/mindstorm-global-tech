"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import VaultDoor from "@/components/VaultDoor";
import { useVault } from "./VaultContext";

export default function SplashScreen() {
  const { setActive } = useVault();
  const [visible, setVisible] = useState(true);
  const [stage, setStage] = useState<"locked" | "unlocking" | "opening">(
    "locked",
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hideBoot = () => {
      document.body.classList.add("vault-handed-off");
    };

    if (sessionStorage.getItem("ms-splash-shown") === "1") {
      setVisible(false);
      setActive(false);
      hideBoot();
      return;
    }
    sessionStorage.setItem("ms-splash-shown", "1");
    setActive(true);

    document.body.style.overflow = "hidden";

    const handoff = requestAnimationFrame(() => {
      requestAnimationFrame(hideBoot);
    });

    const t1 = setTimeout(() => setStage("unlocking"), 1200);
    const t2 = setTimeout(() => setStage("opening"), 2900);
    const t3 = setTimeout(() => {
      setVisible(false);
      setActive(false);
    }, 5100);

    return () => {
      cancelAnimationFrame(handoff);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
      setActive(false);
    };
  }, [setActive]);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[200]"
        >
          <VaultDoor stage={stage} speed={1} />

          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-14 z-40 flex flex-col items-center gap-2.5"
            animate={{
              opacity: stage === "opening" ? 0 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]/70" />
              <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
                Mindstorm · Tech Global
              </span>
              <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]/70" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: stage === "locked" ? 0.5 : 0.85,
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-eyebrow font-heading uppercase text-white/50"
            >
              {stage === "locked"
                ? "Verifying credentials"
                : stage === "unlocking"
                  ? "Releasing locks · Authorised"
                  : "Welcome"}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
