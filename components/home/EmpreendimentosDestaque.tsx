import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { EmpreendimentoCard } from "@/components/shared/EmpreendimentoCard";
import { getEmpreendimentosDestaque } from "@/lib/empreendimentos";

export function EmpreendimentosDestaque() {
  const destaques = getEmpreendimentosDestaque();

  return (
    <Section theme="dark">
      <FadeIn>
        <SectionHeading
          eyebrow="Portfólio ativo"
          title="Onde a Ápice está construindo agora."
          subtitle="Empreendimentos em lançamento, em obra e entregues recentemente."
          theme="dark"
        />
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3">
        {destaques.map((emp, i) => (
          <FadeIn key={emp.slug} delay={i * 0.1}>
            <EmpreendimentoCard empreendimento={emp} />
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-16 flex justify-center">
          <Button
            href="/empreendimentos"
            variant="secondary"
            size="lg"
            className="border-apice-cream text-apice-cream hover:bg-apice-cream hover:text-apice-ink"
          >
            Ver todos os empreendimentos
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
