import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  theme?: "light" | "dark";
  id?: string;
  withContainer?: boolean;
};

export function Section({
  children,
  className,
  innerClassName,
  theme = "light",
  id,
  withContainer = true,
}: SectionProps) {
  const themeClasses =
    theme === "dark"
      ? "bg-apice-ink text-apice-bone"
      : "bg-apice-cream text-apice-ink";

  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 lg:py-32", themeClasses, className)}
    >
      {withContainer ? (
        <Container className={innerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
