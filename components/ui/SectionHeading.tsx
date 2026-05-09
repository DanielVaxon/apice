import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const subtitleColor = theme === "dark" ? "text-apice-bone/70" : "text-apice-stone/80";
  const titleColor = theme === "dark" ? "text-apice-bone" : "text-apice-ink";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-4 text-xs uppercase tracking-widest-3 text-apice-champagne",
          )}
        >
          <span className="block h-px w-10 bg-apice-champagne" aria-hidden />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className={cn(
          "font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl",
          titleColor,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl font-sans text-base md:text-lg",
            subtitleColor,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
