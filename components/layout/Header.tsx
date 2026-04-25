"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown,
  Code2,
  Cpu,
  GraduationCap,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/data/navigation";
import { images } from "@/data/images";
import { servicesBySlug } from "@/data/services";
import { site } from "@/data/site";
import MobileMenu from "./MobileMenu";

const serviceIcons: Record<string, LucideIcon> = {
  "/services/software-development": Code2,
  "/services/hardware-solutions": Cpu,
  "/services/networking-ccna": Network,
  "/services/cybersecurity": ShieldCheck,
  "/services/managed-it-services": Server,
  "/services/hr-technology": Users,
  "/services/education-technology": GraduationCap,
};

const serviceImageMap: Record<string, string> = {
  "/services/software-development": images.codeScreen.src,
  "/services/hardware-solutions": images.hardwareRack.src,
  "/services/networking-ccna": images.networkCables.src,
  "/services/cybersecurity": images.cybersecurityDark.src,
  "/services/managed-it-services": images.serverRoom.src,
  "/services/hr-technology": images.hrOffice.src,
  "/services/education-technology": images.edtechClassroom.src,
};

const serviceFromHref = (href: string | null) =>
  href ? servicesBySlug[href.replace(/^\/services\//, "")] : undefined;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
      setActiveHref(null);
    }, 140);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.includes("#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  const serviceChildren =
    mainNav.find((n) => n.label === "Services")?.children ?? [];
  const onServicePage = serviceChildren.some((c) => pathname === c.href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-[background,border-color] duration-300",
          scrolled
            ? "bg-black/85 backdrop-blur-xl border-b border-[var(--color-ms-border)]"
            : "bg-black/60 backdrop-blur-xl border-b border-transparent",
        )}
      >
        <div className="section-pad-x relative flex h-16 w-full items-center justify-between md:h-20 3xl:h-24 4xl:h-28">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center"
            aria-label={site.name}
          >
            <Image
              src="/mindstorm-global-tech-logo.png"
              alt={site.name}
              width={600}
              height={188}
              quality={100}
              priority
              sizes="(max-width: 768px) 140px, (max-width: 1920px) 192px, 240px"
              className="h-10 w-auto select-none md:h-12 3xl:h-14 4xl:h-16"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="pointer-events-auto  hidden items-center gap-0.5 lg:flex xl:ml-8 xl:gap-1 2xl:ml-50 3xl:ml-60"
          >
            {mainNav.map((item) => {
              if (item.children?.length) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                      className={cn(
                        "group relative flex items-center gap-1 whitespace-nowrap px-2 py-2 text-[var(--fs-eyebrow)] font-medium uppercase tracking-[0.12em] transition-colors xl:px-3 xl:tracking-[0.16em] 2xl:tracking-[0.18em]",
                        onServicePage || servicesOpen
                          ? "text-[var(--color-ms-gold)]"
                          : "text-white/80 hover:text-[var(--color-ms-gold)]",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          servicesOpen && "rotate-180",
                        )}
                      />
                      <span
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-center scale-x-0 bg-[var(--color-ms-gold)] transition-transform duration-300",
                          (onServicePage || servicesOpen) && "scale-x-100",
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (() => {
                        const previewHref =
                          activeHref ?? serviceChildren[0]?.href ?? null;
                        const activeService = serviceFromHref(previewHref);
                        const activeImg = previewHref ? serviceImageMap[previewHref] : undefined;
                        const featureGroups = activeService?.featureGroups ?? [];
                        const subServices: string[] =
                          featureGroups.length > 1
                            ? featureGroups.map((g) => g.heading)
                            : (featureGroups[0]?.items ?? []).slice(0, 5);
                        return (
                          <motion.div
                            key="services-dropdown"
                            initial={{ opacity: 0, y: 14, scale: 0.985 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.985 }}
                            transition={{
                              duration: 0.26,
                              ease: [0.22, 0.9, 0.3, 1],
                            }}
                            className="absolute left-1/2 top-[calc(100%+12px)] z-50 w-[min(960px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden rounded-2xl border border-[rgba(215,191,94,0.22)] bg-[linear-gradient(180deg,rgba(16,15,11,0.97)_0%,rgba(6,6,4,0.97)_100%)] shadow-[inset_0_1px_0_rgba(215,191,94,0.14),0_30px_80px_-20px_rgba(0,0,0,0.95),0_0_0_1px_rgba(215,191,94,0.06),0_0_60px_-20px_rgba(215,191,94,0.22)] backdrop-blur-2xl"
                          >
                            <span
                              aria-hidden
                              className="pointer-events-none absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-l border-t border-[rgba(215,191,94,0.22)] bg-[rgb(16,15,11)]"
                            />
                            <span
                              aria-hidden
                              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
                            />

                            <div className="relative grid grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)]">
                              <div className="relative flex flex-col border-r border-[rgba(215,191,94,0.1)] p-4">
                                <div className="mb-3 flex items-center gap-3 px-1">
                                  <span
                                    aria-hidden
                                    className="h-px w-8 bg-[var(--color-ms-gold)]/60"
                                  />
                                  <p className="font-heading text-[10px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
                                    Our Services
                                  </p>
                                </div>

                                <ul className="flex flex-col gap-1">
                                  {serviceChildren.map((child) => {
                                    const Icon =
                                      serviceIcons[child.href] ?? Code2;
                                    const isSel = child.href === activeHref;
                                    return (
                                      <li key={child.href}>
                                        <Link
                                          href={child.href}
                                          onClick={() =>
                                            setServicesOpen(false)
                                          }
                                          onMouseEnter={() =>
                                            setActiveHref(child.href)
                                          }
                                          onFocus={() =>
                                            setActiveHref(child.href)
                                          }
                                          className={cn(
                                            "group/nav relative flex items-start gap-3 rounded-xl border px-2.5 py-2.5 transition-[border-color,background,box-shadow] duration-200",
                                            isSel
                                              ? "border-[rgba(215,191,94,0.32)] bg-[linear-gradient(180deg,rgba(40,35,22,0.85)_0%,rgba(14,12,8,0.9)_100%)] shadow-[inset_0_1px_0_rgba(215,191,94,0.18),0_0_0_1px_rgba(215,191,94,0.18)]"
                                              : "border-transparent hover:border-[rgba(215,191,94,0.16)] hover:bg-[rgba(215,191,94,0.04)]",
                                          )}
                                        >
                                          <span
                                            aria-hidden
                                            className={cn(
                                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.3)] transition-colors",
                                              isSel
                                                ? "border-[rgba(215,191,94,0.45)] bg-[linear-gradient(180deg,rgba(215,191,94,0.18)_0%,rgba(121,107,56,0.08)_100%)]"
                                                : "border-[rgba(215,191,94,0.2)] bg-[rgba(215,191,94,0.05)]",
                                            )}
                                          >
                                            <Icon className="h-4 w-4 text-[var(--color-ms-gold)]" />
                                          </span>

                                          <span className="flex min-w-0 flex-col">
                                            <span
                                              className={cn(
                                                "font-heading text-[11.5px] uppercase tracking-[0.14em] transition-colors",
                                                isSel
                                                  ? "text-[var(--color-ms-gold)]"
                                                  : "text-white group-hover/nav:text-[var(--color-ms-gold)]",
                                              )}
                                            >
                                              {child.label}
                                            </span>
                                            <span className="mt-0.5 text-[11px] leading-snug text-white/55">
                                              {child.description}
                                            </span>
                                          </span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>

                                <Link
                                  href="/services"
                                  onClick={() => setServicesOpen(false)}
                                  className="group/vs mt-3 inline-flex items-center gap-2 self-start border-t border-[rgba(215,191,94,0.14)] pt-3 pl-2 font-heading text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ms-gold)]"
                                >
                                  <span>View All Services</span>
                                  <span
                                    aria-hidden
                                    className="transition-transform duration-200 group-hover/vs:translate-x-1"
                                  >
                                    →
                                  </span>
                                </Link>
                              </div>

                              <div className="relative p-4">
                                <AnimatePresence mode="wait">
                                  <motion.div
                                    key={previewHref ?? "none"}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{
                                      duration: 0.22,
                                      ease: [0.22, 0.9, 0.3, 1],
                                    }}
                                    className="flex flex-col"
                                  >
                                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[rgba(215,191,94,0.22)] shadow-[0_16px_40px_-18px_rgba(0,0,0,0.85)]">
                                      {activeImg ? (
                                        <Image
                                          src={activeImg}
                                          alt={activeService?.shortTitle ?? ""}
                                          fill
                                          sizes="520px"
                                          className="object-cover"
                                        />
                                      ) : null}
                                      <span
                                        aria-hidden
                                        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                                      />
                                      <span
                                        aria-hidden
                                        className="absolute inset-0 ring-1 ring-inset ring-white/5"
                                      />
                                      <div className="absolute inset-x-4 bottom-3">
                                        <p className="font-heading text-[14px] uppercase leading-tight tracking-[0.1em] text-white">
                                          {activeService?.shortTitle ?? ""}
                                        </p>
                                      </div>
                                    </div>

                                    <p className="mt-3.5 text-[12.5px] leading-relaxed text-white/65">
                                      {activeService?.heroSub ?? ""}
                                    </p>

                                    {subServices.length ? (
                                      <div className="mt-3.5">
                                        <p className="font-heading text-[9.5px] uppercase tracking-[0.26em] text-white/45">
                                          What&rsquo;s Included
                                        </p>
                                        <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
                                          {subServices.map((s) => (
                                            <li
                                              key={s}
                                              className="flex items-center gap-2.5"
                                            >
                                              <span
                                                aria-hidden
                                                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-ms-gold)] shadow-[0_0_8px_var(--color-ms-glow)]"
                                              />
                                              <span className="text-[12px] text-white/75">
                                                {s}
                                              </span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ) : null}

                                    <Link
                                      href={previewHref ?? "/services"}
                                      onClick={() => setServicesOpen(false)}
                                      className="group/exp mt-4 inline-flex items-center gap-2 self-start font-heading text-[11px] uppercase tracking-[0.22em] text-[var(--color-ms-gold)]"
                                    >
                                      <span>
                                        Explore {activeService?.shortTitle ?? "Service"}
                                      </span>
                                      <span
                                        aria-hidden
                                        className="transition-transform duration-200 group-hover/exp:translate-x-1"
                                      >
                                        →
                                      </span>
                                    </Link>
                                  </motion.div>
                                </AnimatePresence>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })()}
                    </AnimatePresence>
                  </div>
                );
              }
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative whitespace-nowrap px-2 py-2 text-[var(--fs-eyebrow)] font-medium uppercase tracking-[0.12em] transition-colors xl:px-3 xl:tracking-[0.16em] 2xl:tracking-[0.18em]",
                    active
                      ? "text-[var(--color-ms-gold)]"
                      : "text-white/80 hover:text-[var(--color-ms-gold)]",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-center scale-x-0 bg-[var(--color-ms-gold)] transition-transform duration-300",
                      active && "scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              aria-label="Get Free Consultation"
              className="relative hidden select-none items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 font-heading text-[var(--fs-eyebrow)] uppercase tracking-[0.16em] text-black bg-[linear-gradient(180deg,#EBD78A_0%,#D7BF5E_48%,#B89E4C_100%)] xl:px-6 xl:tracking-[0.2em] 2xl:tracking-[0.22em] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_3px_rgba(121,107,56,0.5),0_6px_14px_-4px_rgba(0,0,0,0.55),0_0_0_1px_rgba(215,191,94,0.75),0_0_22px_-6px_rgba(215,191,94,0.35)] transition-[transform,box-shadow,filter] duration-200 ease-out will-change-transform hover:-translate-y-[1.5px] hover:brightness-[1.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-2px_3px_rgba(121,107,56,0.45),0_10px_22px_-4px_rgba(0,0,0,0.6),0_0_0_1px_rgba(215,191,94,0.9),0_0_32px_-6px_rgba(215,191,94,0.55)] active:translate-y-0 active:brightness-[0.95] active:shadow-[inset_0_2px_4px_rgba(121,107,56,0.55),inset_0_-1px_0_rgba(255,255,255,0.15),0_3px_8px_-3px_rgba(0,0,0,0.5),0_0_0_1px_rgba(215,191,94,0.75)] md:inline-flex"
            >
              Get Free Consultation
            </Link>
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-ms-border)] text-white/85 transition-colors hover:border-[var(--color-ms-gold)] hover:text-[var(--color-ms-gold)] lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
