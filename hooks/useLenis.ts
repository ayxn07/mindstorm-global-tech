"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let isGlobalLenisActive = false;

export function setGlobalLenisActive(active: boolean) {
  isGlobalLenisActive = active;
}

export default function useLenis() {
  useEffect(() => {
    if (isGlobalLenisActive) return;

    const lenis = new Lenis();
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
