import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

const PILARES = [
  {
    numero: "01",
    titulo: "Engenharia sob medida",
    descricao:
      "Cada projeto é estruturado por equipe própria de engenheiros. Sem terceirização frouxa. Cálculo, fundação e estrutura passam pelo nosso CREA antes da primeira viga subir.",
  },
  {
    numero: "02",
    titulo: "Prazo é contrato",
    descricao:
      "Em 17 anos, 38 empreendimentos entregues. Multa contratual por atraso prevista no nosso favor. Cliente recebe a chave na data combinada.",
  },
  {
    numero: "03",
    titulo: "Materiais que duram",
    descricao:
      "Cimento Votorantim, vidros Saint-Gobain, louças Deca, revestimentos Portobello. Especificação técnica fechada antes da assinatura, sem barganha de obra.",
  },
  {
    numero: "04",
    titulo: "Pós-obra real",
    descricao:
      "60 meses de garantia estrutural por contrato. Equipe de assistência técnica própria, atendimento em até 72h. Não é call center: é nosso engenheiro indo ao apartamento.",
  },
];

export function Diferenciais() {
  return (
    <Section theme="light">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div className="md:sticky md:top-32 md:self-start">
          <FadeIn>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
                <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
                <span>Por que a Ápice</span>
              </div>
              <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-apice-ink md:text-5xl lg:text-6xl">
                Quatro pilares que sustentam
                <br />
                cada obra entregue.
              </h2>
              <p className="max-w-xl font-sans text-base text-apice-stone/80 md:text-lg">
                Não vendemos sonho. Vendemos engenharia, prazo e materiais que duram. O resto é consequência.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col">
          {PILARES.map((p, i) => (
            <FadeIn key={p.numero} delay={i * 0.08}>
              <div
                className={cn(
                  "flex gap-6 py-8 md:gap-8 md:py-10",
                  i < PILARES.length - 1 && "border-b border-apice-stone/15",
                )}
              >
                <span
                  aria-hidden
                  className="w-12 shrink-0 font-display text-5xl font-normal leading-none text-apice-champagne"
                >
                  {p.numero}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-2xl font-medium text-apice-ink md:text-[26px]">
                    {p.titulo}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-apice-stone md:text-[15px]">
                    {p.descricao}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
