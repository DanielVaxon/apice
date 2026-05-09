import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { DepoimentoCard } from "@/components/shared/DepoimentoCard";

const DEPOIMENTOS = [
  {
    nome: "Roberto Mendes",
    empreendimento: "Residencial Granja do Torto",
    texto:
      "Comprei na planta em 2021 e recebi a chave exatamente na data combinada. Em uma cidade onde atraso de obra é regra, isso já vale o investimento. A qualidade do acabamento veio como bônus.",
  },
  {
    nome: "Cristina Almeida",
    empreendimento: "Edifício Lúmen Lago Sul",
    texto:
      "Fui acompanhando a obra pela área do cliente — fotos atualizadas semanalmente, cronograma transparente. Quando precisei chamar a assistência técnica seis meses depois da entrega, o engenheiro veio em 48 horas. Ápice cumpre o que promete.",
  },
  {
    nome: "Marcelo Guimarães",
    empreendimento: "Centro Empresarial Águas Claras",
    texto:
      "Como investidor, prezo previsibilidade acima de tudo. A Ápice entregou três salas comerciais para mim no prazo, com a documentação impecável. Hoje rendem aluguel sem dor de cabeça. Recomendação fácil.",
  },
];

export function Depoimentos() {
  return (
    <Section theme="dark">
      <FadeIn>
        <SectionHeading
          eyebrow="Vozes de quem entregamos"
          title="Quem confiou na Ápice fala por nós."
          theme="dark"
        />
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3">
        {DEPOIMENTOS.map((d, i) => (
          <FadeIn key={d.nome} delay={i * 0.1}>
            <DepoimentoCard {...d} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
