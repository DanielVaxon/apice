import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import type { Empreendimento } from "@/lib/empreendimentos";

export function FichaTecnica({
  empreendimento,
}: {
  empreendimento: Empreendimento;
}) {
  return (
    <Section theme="light" id="ficha">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        <FadeIn>
          <div className="md:sticky md:top-32 md:self-start flex flex-col gap-5">
            <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
              <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
              <span>Ficha técnica</span>
            </div>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-apice-ink md:text-5xl">
              Especificações do empreendimento.
            </h2>
            <p className="font-sans text-base leading-relaxed text-apice-stone/80 md:text-lg">
              Todas as informações técnicas auditadas e registradas no CREA-DF. Documentação completa disponível para análise mediante solicitação.
            </p>
            <p className="mt-2 font-sans text-xs text-apice-stone/60">
              CREA-DF · Registro de obra · Memorial descritivo · Manual do proprietário
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <dl className="flex flex-col">
            {empreendimento.fichaTecnica.map((item, i) => (
              <div
                key={item.label}
                className={cn(
                  "grid grid-cols-1 gap-2 py-4 md:grid-cols-[1fr_2fr] md:items-baseline md:gap-6 md:py-5",
                  i < empreendimento.fichaTecnica.length - 1 &&
                    "border-b border-apice-stone/15",
                )}
              >
                <dt className="font-sans text-[11px] uppercase tracking-widest-2 text-apice-stone/70">
                  {item.label}
                </dt>
                <dd className="font-sans text-base leading-relaxed text-apice-ink">
                  {item.valor}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </Section>
  );
}
