import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  footerCompany,
  footerIndustries,
  footerServices,
} from "@/data/navigation";
import { legal, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="relative w-full border-t border-[var(--color-ms-border)] bg-[var(--color-ms-black)] px-6 py-16 md:px-10 md:py-20 lg:px-16 2xl:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label={site.name}
            >
              <Image
                src="/mindstorm-global-tech-logo.png"
                alt={site.name}
                width={600}
                height={188}
                quality={100}
                sizes="180px"
                className="h-11 w-auto select-none"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-[11px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
              Company
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-[var(--color-ms-gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[11px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
              Services
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-[var(--color-ms-gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[11px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
              Contact
            </h4>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-ms-gold)]" />
                <span>{site.address.full}</span>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-[var(--color-ms-gold)]"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-ms-gold)]" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-start gap-3 transition-colors hover:text-[var(--color-ms-gold)]"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-ms-gold)]" />
                  <span>{site.phoneDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--color-ms-border)] pt-8">
          <h4 className="font-heading text-[11px] uppercase tracking-[0.32em] text-[var(--color-ms-gold)]">
            Industries We Serve
          </h4>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {footerIndustries.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-[var(--color-ms-gold)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-ms-border)] pt-8 text-center md:flex-row md:text-left">
          <p className="text-xs text-white/50">{legal.copyright}</p>
          <p className="font-heading text-[10px] uppercase tracking-[0.32em] text-white/40">
            {legal.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
