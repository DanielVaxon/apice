import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const ETAPAS = [
  {
    num: "01",
    titulo: "Projeto e aprovações",
    descricao:
      "Estudo de viabilidade, projetos arquitetônico e estrutural, aprovação em órgãos competentes.",
  },
  {
    num: "02",
    titulo: "Fundação e estrutura",
    descricao:
      "Sondagem do terreno, fundação calculada, estrutura em concreto armado de alta resistência.",
  },
  {
    num: "03",
    titulo: "Alvenaria e acabamentos",
    descricao:
      "Vedação, instalações, revestimentos, esquadrias e acabamentos finos com supervisão técnica.",
  },
  {
    num: "04",
    titulo: "Vistorias e entrega",
    descricao:
      "Vistorias internas, ensaios técnicos, entrega das chaves e início da garantia de 60 meses.",
  },
];

export function ProcessoConstrutivo() {
  return (
    <Section theme="dark">
      <FadeIn>
        <SectionHeading
          eyebrow="Como construímos"
          title="Quatro etapas. Zero improviso."
          subtitle="Do projeto à entrega das chaves, cada empreendimento Ápice segue o mesmo método de execução."
          align="center"
          theme="dark"
        />
      </FadeIn>

      <div className="relative mt-20 md:mt-24">
        <div
          aria-hidden
          className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-apice-champagne/30 md:block"
        />
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          {ETAPAS.map((etapa, i) => (
            <FadeIn key={etapa.num} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-5 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-apice-champagne bg-apice-ink font-display text-2xl font-medium text-apice-champagne">
                  {etapa.num}
                </span>
                <h3 className="font-display text-xl font-medium text-apice-cream">
                  {etapa.titulo}
                </h3>
                <p className="max-w-xs font-sans text-sm leading-relaxed text-apice-bone/70">
                  {etapa.descricao}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={0.4}>
        <div className="mt-16 flex justify-center">
          <Link
            href="/processo-construtivo"
            className="font-sans text-xs uppercase tracking-widest text-apice-champagne underline-offset-8 transition-all duration-300 hover:underline"
          >
            Conheça nosso processo completo →
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}
