"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "motion/react";
import {
  ChevronRight,
  Code2,
  Cpu,
  GraduationCap,
  Network,
  Server,
  ShieldCheck,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";

const serviceIcons: Record<string, LucideIcon> = {
  "/services/software-development": Code2,
  "/services/hardware-solutions": Cpu,
  "/services/networking-ccna": Network,
  "/services/cybersecurity": ShieldCheck,
  "/services/managed-it-services": Server,
  "/services/hr-technology": Users,
  "/services/education-technology": GraduationCap,
};

type Props = {
  open: boolean;
  onClose: () => void;
};

const EASE = [0.22, 0.9, 0.3, 1] as const;

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: EASE, delay: 0.35 } },
};

const panelVariants: Variants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.7, ease: EASE },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.55, ease: EASE, delay: 0.15 },
  },
};

const stackVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.32, staggerChildren: 0.06 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 28, opacity: 0, filter: "blur(6px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
  exit: {
    y: -16,
    opacity: 0,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: EASE },
  },
};

export default function MobileMenu({ open, onClose }: Props) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setServicesOpen(false);
  }, [open]);

  const services = mainNav.find((n) => n.label === "Services")?.children ?? [];
  const servicesItem = mainNav.find((n) => n.label === "Services");
  const onServicePage = services.some((c) => pathname === c.href);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-[60] lg:hidden"
        >
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 cursor-default bg-black/85 backdrop-blur-2xl"
          />

          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,rgba(8,7,5,0.98)_0%,rgba(4,4,3,0.98)_100%)]"
          >
            {/* Decorative gold accents */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.18),transparent_70%)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(215,191,94,0.10),transparent_70%)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(215,191,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.5) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />

            <motion.div
              variants={stackVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative flex h-full w-full flex-col overflow-y-auto px-6 pt-6 pb-10 md:px-10"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span aria-hidden className="h-px w-8 bg-[var(--color-ms-gold)]" />
                  <span className="font-heading text-[11px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
                    Navigation
                  </span>
                </div>
                <motion.button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={onClose}
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(215,191,94,0.45)] bg-black/60 text-[var(--color-ms-gold)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_22px_-6px_rgba(215,191,94,0.4)]"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </motion.div>

              <nav aria-label="Primary mobile" className="mt-12 flex flex-col">
                {mainNav.map((item, i) => {
                  if (item.label === "Services") {
                    return (
                      <motion.div
                        key="services"
                        variants={itemVariants}
                        className="border-b border-[rgba(215,191,94,0.16)]"
                      >
                        <button
                          type="button"
                          aria-expanded={servicesOpen}
                          aria-controls="mobile-services-list"
                          onClick={() => setServicesOpen((v) => !v)}
                          className={cn(
                            "group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors",
                            onServicePage || servicesOpen
                              ? "text-[var(--color-ms-gold)]"
                              : "text-white",
                          )}
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="font-heading text-[10px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]/70">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="font-heading text-[26px] font-semibold uppercase leading-none tracking-[0.05em] sm:text-[28px]">
                              {item.label}
                            </span>
                          </span>
                          <motion.span
                            aria-hidden
                            animate={{ rotate: servicesOpen ? 90 : 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(215,191,94,0.35)] bg-black/40 text-[var(--color-ms-gold)]"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {servicesOpen && (
                            <motion.div
                              id="mobile-services-list"
                              key="services-panel"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: EASE }}
                              className="overflow-hidden"
                            >
                              <motion.ul
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                  hidden: {},
                                  visible: {
                                    transition: { staggerChildren: 0.05 },
                                  },
                                }}
                                className="flex flex-col gap-1 pb-5 pt-1"
                              >
                                {services.map((child) => {
                                  const Icon =
                                    serviceIcons[child.href] ?? Code2;
                                  const sel = isActive(child.href);
                                  return (
                                    <motion.li
                                      key={child.href}
                                      variants={{
                                        hidden: { opacity: 0, x: -16 },
                                        visible: {
                                          opacity: 1,
                                          x: 0,
                                          transition: {
                                            duration: 0.35,
                                            ease: EASE,
                                          },
                                        },
                                      }}
                                    >
                                      <Link
                                        href={child.href}
                                        onClick={onClose}
                                        className={cn(
                                          "group flex items-center gap-3 rounded-xl border px-3 py-3 transition-colors",
                                          sel
                                            ? "border-[rgba(215,191,94,0.45)] bg-[rgba(215,191,94,0.08)]"
                                            : "border-transparent hover:border-[rgba(215,191,94,0.22)] hover:bg-[rgba(215,191,94,0.04)]",
                                        )}
                                      >
                                        <span
                                          aria-hidden
                                          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.18)_0%,rgba(121,107,56,0.06)_100%)]"
                                        >
                                          <Icon className="h-4 w-4 text-[var(--color-ms-gold)]" />
                                        </span>
                                        <span className="flex min-w-0 flex-col">
                                          <span
                                            className={cn(
                                              "font-heading text-[13px] uppercase tracking-[0.1em]",
                                              sel
                                                ? "text-[var(--color-ms-gold)]"
                                                : "text-white",
                                            )}
                                          >
                                            {child.label}
                                          </span>
                                          {child.description ? (
                                            <span className="mt-0.5 text-[11.5px] leading-snug text-white/55">
                                              {child.description}
                                            </span>
                                          ) : null}
                                        </span>
                                      </Link>
                                    </motion.li>
                                  );
                                })}

                                <motion.li
                                  variants={{
                                    hidden: { opacity: 0, x: -16 },
                                    visible: {
                                      opacity: 1,
                                      x: 0,
                                      transition: {
                                        duration: 0.35,
                                        ease: EASE,
                                      },
                                    },
                                  }}
                                >
                                  <Link
                                    href={servicesItem?.href ?? "/services"}
                                    onClick={onClose}
                                    className="mt-1 inline-flex w-full items-center justify-between rounded-xl border border-[rgba(215,191,94,0.28)] bg-[rgba(215,191,94,0.04)] px-4 py-3 font-heading text-[11px] uppercase tracking-[0.22em] text-[var(--color-ms-gold)]"
                                  >
                                    <span>View all services</span>
                                    <span aria-hidden>→</span>
                                  </Link>
                                </motion.li>
                              </motion.ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  const active = isActive(item.href);
                  return (
                    <motion.div key={item.label} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "group flex items-center justify-between gap-4 border-b border-[rgba(215,191,94,0.16)] py-5 transition-colors",
                          active
                            ? "text-[var(--color-ms-gold)]"
                            : "text-white",
                        )}
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="font-heading text-[10px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]/70">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-heading text-[26px] font-semibold uppercase leading-none tracking-[0.05em] sm:text-[28px]">
                            {item.label}
                          </span>
                        </span>
                        <span
                          aria-hidden
                          className={cn(
                            "font-heading text-[var(--color-ms-gold)] transition-all",
                            active
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                          )}
                        >
                          →
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                variants={itemVariants}
                className="mt-auto pt-12"
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="relative flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-heading text-[12px] uppercase tracking-[0.22em] text-[var(--color-ms-black)] bg-[linear-gradient(180deg,#EBD78A_0%,#D7BF5E_48%,#B89E4C_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_3px_rgba(121,107,56,0.5),0_8px_18px_-6px_rgba(0,0,0,0.65),0_0_0_1px_rgba(215,191,94,0.65),0_0_24px_-8px_rgba(215,191,94,0.45)]"
                >
                  Get Free Consultation
                  <span aria-hidden>→</span>
                </Link>
                <div className="mt-7 flex flex-col items-center gap-1.5 text-center text-[11.5px] text-white/55">
                  <p className="font-heading uppercase tracking-[0.22em] text-[var(--color-ms-gold)]/80">
                    {site.phoneDisplay}
                  </p>
                  <p>{site.email}</p>
                  <p className="text-white/45">{site.address.full}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
