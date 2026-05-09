import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { EmpreendimentoCard } from "@/components/shared/EmpreendimentoCard";
import type { Empreendimento } from "@/lib/empreendimentos";

export function Relacionados({
  empreendimentos,
}: {
  empreendimentos: Empreendimento[];
}) {
  if (empreendimentos.length === 0) return null;

  return (
    <section className="bg-apice-ink py-20 text-apice-bone md:py-28 lg:py-32">
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
              <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
              <span>Também pode interessar</span>
            </div>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-apice-cream md:text-5xl">
              Outros empreendimentos da Ápice.
            </h2>
          </div>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3">
          {empreendimentos.map((emp, i) => (
            <FadeIn key={emp.slug} delay={Math.min(i * 0.1, 0.3)}>
              <EmpreendimentoCard empreendimento={emp} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
