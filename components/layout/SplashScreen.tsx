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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
