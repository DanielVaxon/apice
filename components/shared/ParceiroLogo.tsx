import { cn } from "@/lib/utils";

type ParceiroLogoProps = {
  nome: string;
  className?: string;
};

export function ParceiroLogo({ nome, className }: ParceiroLogoProps) {
  return (
    <svg
      width="160"
      height="60"
      viewBox="0 0 160 60"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={nome}
      className={cn(
        "h-9 w-auto text-apice-stone/60 transition-colors duration-500 hover:text-apice-ink",
        className,
      )}
    >
      <text
        x="80"
        y="38"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="currentColor"
        letterSpacing="2.4"
      >
        {nome.toUpperCase()}
      </text>
    </svg>
  );
}
