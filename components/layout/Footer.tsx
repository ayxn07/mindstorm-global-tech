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
      <div className="section-pad relative w-full border-t border-[var(--color-ms-border)] bg-[var(--color-ms-black)]">
        <div className="content-cap grid gap-12 md:grid-cols-2 lg:grid-cols-4">
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
            <p className="text-body-fluid mt-5 max-w-xs text-white/60">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              Company
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-fluid text-white/70 transition-colors hover:text-[var(--color-ms-gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              Services
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-fluid text-white/70 transition-colors hover:text-[var(--color-ms-gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              Contact
            </h4>
            <ul className="text-body-fluid mt-5 flex flex-col gap-3 text-white/70">
              {site.offices.map((office) => (
                <li key={office.label} className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-ms-gold)]" />
                  <span>
                    <span className="block font-heading text-[var(--fs-eyebrow)] uppercase tracking-[0.18em] text-white/85">
                      {office.label}
                    </span>
                    <span className="block">{office.full}</span>
                  </span>
                </li>
              ))}
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

        <div className="content-cap mt-14 border-t border-[var(--color-ms-border)] pt-8">
          <h4 className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
            Industries We Serve
          </h4>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {footerIndustries.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-eyebrow uppercase text-white/60 transition-colors hover:text-[var(--color-ms-gold)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="content-cap mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-ms-border)] pt-8 text-center md:flex-row md:text-left">
          <p className="text-[var(--fs-eyebrow)] text-white/50">{legal.copyright}</p>
          <p className="text-eyebrow font-heading uppercase text-white/40">
            {legal.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
