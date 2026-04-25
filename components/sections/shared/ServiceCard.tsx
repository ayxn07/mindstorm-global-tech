import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { images, type ImageKey } from "@/data/images";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  href: string;
  title: string;
  tagline?: string;
  imageKey: ImageKey;
  index?: number;
  className?: string;
};

export default function ServiceCard({
  href,
  title,
  tagline,
  imageKey,
  index,
  className,
}: ServiceCardProps) {
  const img = images[imageKey];

  return (
    <Link
      href={href}
      className={cn(
        "group relative block h-full overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-black/50 transition-colors hover:border-[var(--color-ms-gold)]/60",
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        />
        {typeof index === "number" ? (
          <span className="absolute left-4 top-4 inline-flex h-7 items-center rounded-full border border-[var(--color-ms-border)] bg-black/60 px-3 text-eyebrow font-heading uppercase text-[var(--color-ms-gold)] backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>

      <div className="flex items-start justify-between gap-3 p-5">
        <div className="min-w-0">
          <h3 className="font-heading text-lg font-semibold uppercase leading-tight tracking-[0.02em] text-white">
            {title}
          </h3>
          {tagline ? (
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              {tagline}
            </p>
          ) : null}
        </div>
        <span
          aria-hidden
          className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-ms-border)] text-[var(--color-ms-gold)] transition-colors group-hover:border-[var(--color-ms-gold)]"
        >
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
