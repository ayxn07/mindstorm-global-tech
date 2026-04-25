"use client";

import { motion } from "motion/react";

const easeDoor = [0.83, 0, 0.17, 1] as const;
const easeBolt = [0.65, 0, 0.35, 1] as const;

interface VaultDoorProps {
  stage: "locked" | "closing" | "unlocking" | "opening";
  speed?: number;
}

export default function VaultDoor({ stage, speed = 1 }: VaultDoorProps) {
  const unlocking = stage === "unlocking" || stage === "opening";
  const opening = stage === "opening";
  const closing = stage === "closing";
  const sd = (s: number) => s / speed;

  const leftInitialX = closing ? "-100%" : 0;
  const rightInitialX = closing ? "100%" : 0;
  const leftAnimateX = opening ? "-100%" : unlocking ? "-0.4%" : 0;
  const rightAnimateX = opening ? "100%" : unlocking ? "0.4%" : 0;

  const doorDuration = opening
    ? sd(1.9)
    : closing
      ? sd(1.6)
      : sd(0.55);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(215,191,94,0.12), transparent 55%)",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: opening
            ? [1, 0.6, 0]
            : unlocking
              ? 1
              : closing
                ? 0.55
                : 0,
        }}
        transition={{ duration: sd(0.7), ease: "easeOut" }}
      />

      <motion.div
        className="absolute top-0 left-0 h-full w-1/2 will-change-transform"
        initial={{ x: leftInitialX }}
        animate={{ x: leftAnimateX }}
        transition={{
          duration: doorDuration,
          ease: easeDoor,
          delay: opening ? 0.2 : 0,
        }}
      >
        <DoorPanel side="left" unlocking={unlocking} opening={opening} speed={speed} />
      </motion.div>

      <motion.div
        className="absolute top-0 right-0 h-full w-1/2 will-change-transform"
        initial={{ x: rightInitialX }}
        animate={{ x: rightAnimateX }}
        transition={{
          duration: doorDuration,
          ease: easeDoor,
          delay: opening ? 0.2 : 0,
        }}
      >
        <DoorPanel side="right" unlocking={unlocking} opening={opening} speed={speed} />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 z-30 h-full w-[2px] -translate-x-1/2"
        initial={{ opacity: 0, scaleY: 0.4 }}
        animate={{
          opacity: opening
            ? [0.9, 1, 0.85, 0]
            : unlocking
              ? [0, 0.95, 0.9]
              : closing
                ? [0, 0, 1, 0.6]
                : 0,
          scaleY: unlocking || closing ? 1 : 0.4,
        }}
        transition={{
          duration: opening
            ? sd(1.9)
            : closing
              ? sd(1.6)
              : sd(0.7),
          ease: "easeOut",
          delay: opening ? 0.05 : 0,
        }}
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(215,191,94,0.55) 25%, rgba(247,225,140,1) 50%, rgba(215,191,94,0.55) 75%, transparent 100%)",
          filter: "drop-shadow(0 0 22px rgba(215,191,94,0.85))",
          transformOrigin: "center",
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-ms-gold)]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: opening ? [0, 1, 0] : closing ? [0, 0, 0.7, 0] : 0,
          scale: opening ? [0, 6, 24] : closing ? [0, 0, 4, 6] : 0,
        }}
        transition={{
          duration: opening ? sd(1.2) : closing ? sd(1.6) : 0,
          ease: "easeOut",
          delay: opening ? 0.1 : 0,
        }}
        style={{ filter: "blur(14px)" }}
      />
    </div>
  );
}

function DoorPanel({
  side,
  unlocking,
  opening,
  speed,
}: {
  side: "left" | "right";
  unlocking: boolean;
  opening: boolean;
  speed: number;
}) {
  const isLeft = side === "left";
  const sd = (s: number) => s / speed;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: isLeft
            ? "linear-gradient(110deg, #050402 0%, #0a0905 30%, #14110a 65%, #1a1610 92%, #0c0a06 100%)"
            : "linear-gradient(-110deg, #050402 0%, #0a0905 30%, #14110a 65%, #1a1610 92%, #0c0a06 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.045]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.65) 0px, rgba(255,255,255,0.65) 1px, transparent 1px, transparent 3px)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background: isLeft
            ? "radial-gradient(ellipse at 75% 50%, rgba(215,191,94,0.10), transparent 55%)"
            : "radial-gradient(ellipse at 25% 50%, rgba(215,191,94,0.10), transparent 55%)",
        }}
      />

      <div
        aria-hidden
        className={`pointer-events-none absolute top-0 ${
          isLeft ? "right-0" : "left-0"
        } h-full w-px`}
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(215,191,94,0.45) 25%, rgba(215,191,94,0.55) 50%, rgba(215,191,94,0.45) 75%, transparent 100%)",
        }}
      />

      <div
        aria-hidden
        className={`pointer-events-none absolute top-0 ${
          isLeft ? "right-[2px]" : "left-[2px]"
        } h-full w-[1px] opacity-50`}
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
        }}
      />

      <FrameAccents isLeft={isLeft} />

      <BoltColumn isLeft={isLeft} unlocking={unlocking} sd={sd} />

      <motion.div
        aria-hidden
        className={`pointer-events-none absolute top-0 ${
          isLeft ? "right-0" : "left-0"
        } h-full w-32`}
        style={{
          background: isLeft
            ? "linear-gradient(to left, rgba(0,0,0,0.45), transparent)"
            : "linear-gradient(to right, rgba(0,0,0,0.45), transparent)",
        }}
        animate={{
          opacity: opening ? [0.8, 1, 0.6] : 0.8,
        }}
        transition={{ duration: sd(1.2), ease: "easeOut" }}
      />

      <Wordmark isLeft={isLeft} />
    </div>
  );
}

function FrameAccents({ isLeft }: { isLeft: boolean }) {
  const innerEdge = isLeft ? "right-6" : "left-6";

  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none absolute top-6 ${innerEdge} h-12 w-[1px] bg-[var(--color-ms-gold)]/35`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute top-6 ${innerEdge} h-[1px] w-12`}
        style={{
          background: isLeft
            ? "linear-gradient(to left, rgba(215,191,94,0.35), transparent)"
            : "linear-gradient(to right, rgba(215,191,94,0.35), transparent)",
        }}
      />

      <div
        aria-hidden
        className={`pointer-events-none absolute bottom-6 ${innerEdge} h-12 w-[1px] bg-[var(--color-ms-gold)]/35`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute bottom-6 ${innerEdge} h-[1px] w-12`}
        style={{
          background: isLeft
            ? "linear-gradient(to left, rgba(215,191,94,0.35), transparent)"
            : "linear-gradient(to right, rgba(215,191,94,0.35), transparent)",
        }}
      />
    </>
  );
}

function BoltColumn({
  isLeft,
  unlocking,
  sd,
}: {
  isLeft: boolean;
  unlocking: boolean;
  sd: (s: number) => number;
}) {
  const positions = [0.18, 0.36, 0.54, 0.72, 0.86];

  return (
    <>
      {positions.map((p, i) => (
        <motion.div
          key={i}
          aria-hidden
          className={`absolute z-10 ${isLeft ? "right-0" : "left-0"} flex items-center`}
          style={{
            top: `${p * 100}%`,
            transform: "translateY(-50%)",
            flexDirection: isLeft ? "row-reverse" : "row",
          }}
          initial={{ x: 0 }}
          animate={{
            x: unlocking ? (isLeft ? -28 : 28) : 0,
          }}
          transition={{
            duration: sd(0.55),
            ease: easeBolt,
            delay: 0.05 + i * 0.07,
          }}
        >
          <span
            className="h-[1px] w-12 opacity-70"
            style={{
              background: isLeft
                ? "linear-gradient(to left, rgba(215,191,94,0.85), rgba(215,191,94,0))"
                : "linear-gradient(to right, rgba(215,191,94,0.85), rgba(215,191,94,0))",
            }}
          />
          <span className="block h-[14px] w-[6px] rounded-[1px] bg-gradient-to-b from-[#F6E5A6] via-[var(--color-ms-gold)] to-[var(--color-ms-gold-dark)] shadow-[0_0_10px_rgba(215,191,94,0.7),inset_0_-1px_0_rgba(0,0,0,0.55)]" />
        </motion.div>
      ))}
    </>
  );
}

function Wordmark({ isLeft }: { isLeft: boolean }) {
  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none absolute top-10 ${
          isLeft ? "left-12" : "right-12"
        } text-eyebrow font-heading uppercase text-white/[0.18]`}
      >
        {isLeft ? "Mindstorm" : "Tech · Global"}
      </div>
      <div
        aria-hidden
        className={`pointer-events-none absolute bottom-10 ${
          isLeft ? "left-12" : "right-12"
        } text-eyebrow font-heading uppercase text-white/[0.12]`}
      >
        {isLeft ? "Series · MTG-01" : "Authorised Access"}
      </div>
    </>
  );
}
