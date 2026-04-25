import { cn } from "@/lib/utils";

type Align = "left" | "center";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subcopy?: string;
  align?: Align;
  id?: string;
  titleClassName?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeader({
  eyebrow,
  title,
  subcopy,
  align = "left",
  id,
  titleClassName,
  className,
  as = "h2",
}: SectionHeaderProps) {
  const HeadingTag = as;
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex w-full flex-col",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "flex items-center gap-3",
            isCenter ? "justify-center" : "justify-start"
          )}
        >
          <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          <span className="font-heading text-[11px] uppercase tracking-[0.36em] text-[var(--color-ms-gold)]">
            {eyebrow}
          </span>
          {isCenter ? (
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          ) : null}
        </div>
      ) : null}

      <HeadingTag
        id={id}
        className={cn(
          "mt-6 font-heading font-semibold uppercase leading-[1.08] tracking-[0.015em] text-white",
          as === "h1"
            ? "text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl"
            : "text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl",
          titleClassName
        )}
      >
        {title}
      </HeadingTag>

      {subcopy ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-white/65 md:text-lg",
            isCenter ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {subcopy}
        </p>
      ) : null}
    </div>
  );
}
