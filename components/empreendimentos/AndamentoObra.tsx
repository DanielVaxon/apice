import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BarraProgresso } from "./BarraProgresso";
import { cn } from "@/lib/utils";
import type { AndamentoObra as AndamentoObraType } from "@/lib/empreendimentos";

export function AndamentoObra({
  andamentoObra,
}: {
  andamentoObra: AndamentoObraType;
}) {
  return (
    <section className="bg-apice-cream py-20 md:py-28 lg:py-32">
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
              <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
              <span>Acompanhamento de obra</span>
            </div>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-apice-ink md:text-5xl">
              Transparência em cada etapa.
            </h2>
            <p className="max-w-2xl font-sans text-base leading-relaxed text-apice-stone/80 md:text-lg">
              Atualizamos o andamento de cada obra mensalmente. Compradores recebem fotos e relatórios via área do cliente.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-col gap-3 md:mt-16">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
              <p className="font-display text-3xl font-medium text-apice-ink md:text-4xl">
                {andamentoObra.percentual}
                <span className="text-apice-champagne">%</span> concluído
              </p>
              <p className="font-sans text-xs uppercase tracking-widest-2 text-apice-stone">
                Entrega prevista:{" "}
                <span className="font-medium text-apice-ink">
                  {andamentoObra.proximaEntrega}
                </span>
              </p>
            </div>
            <BarraProgresso percentual={andamentoObra.percentual} />
            <p className="font-sans text-sm text-apice-stone">
              Etapa atual:{" "}
              <span className="font-medium text-apice-ink">
                {andamentoObra.etapaAtual}
              </span>
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative mt-20 md:mt-24">
            <div
              aria-hidden
              className="absolute left-3 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-apice-stone/20 md:left-0 md:right-0 md:top-3 md:block md:h-px md:w-auto"
            />
            <ol className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-3">
              {andamentoObra.historico.map((item, i) => {
                const isLast = i === andamentoObra.historico.length - 1;
                return (
                  <li
                    key={item.data}
                    className="relative flex items-start gap-4 md:flex-col md:gap-3"
                  >
                    <span
                      className={cn(
                        "relative z-10 flex shrink-0 items-center justify-center rounded-full bg-apice-cream transition-all",
                        isLast
                          ? "h-8 w-8 border-2 border-apice-champagne"
                          : "h-6 w-6 border-2 border-apice-stone/40",
                      )}
                    >
                      {isLast && (
                        <span className="block h-2 w-2 rounded-full bg-apice-champagne" />
                      )}
                    </span>
                    <div className="flex flex-col gap-1">
                      <p className="font-sans text-[10px] uppercase tracking-widest-2 text-apice-stone/70">
                        {item.data}
                      </p>
                      <p className="font-sans text-sm leading-snug text-apice-ink">
                        {item.etapa}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
