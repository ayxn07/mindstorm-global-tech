"use client";

import { AnimatePresence, motion } from "motion/react";
import GradualBlur from "@/components/GradualBlur";
import { useVault } from "./VaultContext";

export default function PageBlur() {
  const { isActive } = useVault();

  return (
    <AnimatePresence>
      {!isActive && (
        <motion.div
          key="page-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <GradualBlur
            target="page"
            position="bottom"
            height="clamp(4rem, 6vw, 8rem)"
            strength={2}
            divCount={6}
            curve="ease-out"
            opacity={1}
            zIndex={30}
            responsive
            mobileHeight="4rem"
            tabletHeight="5rem"
            desktopHeight="6rem"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
