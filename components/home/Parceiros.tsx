import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ParceiroLogo } from "@/components/shared/ParceiroLogo";

const PARCEIROS = [
  "Votorantim",
  "Gerdau",
  "Saint-Gobain",
  "Portobello",
  "Deca",
  "Eliane",
  "Lorenzetti",
  "Tigre",
];

export function Parceiros() {
  return (
    <Section theme="light" className="!py-16 md:!py-20">
      <FadeIn>
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
            <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
            <span>Quem constrói com a Ápice</span>
            <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
          </div>
          <h2 className="font-display text-3xl font-medium leading-tight text-apice-ink md:text-4xl">
            Materiais e parceiros de referência nacional.
          </h2>
          <p className="max-w-2xl font-sans text-base text-apice-stone/80">
            Trabalhamos apenas com fornecedores certificados, garantindo qualidade especificada do projeto à obra.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mt-12 md:mt-14">
          <div className="grid grid-cols-2 gap-px bg-apice-stone/15 ring-1 ring-apice-stone/15 sm:grid-cols-4 lg:grid-cols-8">
            {PARCEIROS.map((p) => (
              <div
                key={p}
                className="flex items-center justify-center bg-apice-cream px-4 py-8"
              >
                <ParceiroLogo nome={p} />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
