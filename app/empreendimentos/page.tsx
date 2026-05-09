import type { Metadata } from "next";
import { SearchX } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { EmpreendimentoCard } from "@/components/shared/EmpreendimentoCard";
import { EmpreendimentosFiltro } from "@/components/empreendimentos/EmpreendimentosFiltro";
import {
  EMPREENDIMENTOS,
  type EmpreendimentoStatus,
  type EmpreendimentoTipo,
} from "@/lib/empreendimentos";

export const metadata: Metadata = {
  title: "Empreendimentos",
  description:
    "Conheça os empreendimentos residenciais e comerciais da Construtora Ápice em Brasília. Lançamentos, obras em andamento e entregas recentes.",
};

const VALID_STATUS: EmpreendimentoStatus[] = ["lancamento", "em-obra", "entregue"];
const VALID_TIPO: EmpreendimentoTipo[] = ["residencial", "comercial"];

type PageProps = {
  searchParams: { status?: string; tipo?: string };
};

export default function EmpreendimentosPage({ searchParams }: PageProps) {
  const statusFilter = VALID_STATUS.includes(searchParams.status as EmpreendimentoStatus)
    ? (searchParams.status as EmpreendimentoStatus)
    : undefined;
  const tipoFilter = VALID_TIPO.includes(searchParams.tipo as EmpreendimentoTipo)
    ? (searchParams.tipo as EmpreendimentoTipo)
    : undefined;

  const filtrados = EMPREENDIMENTOS.filter((emp) => {
    if (statusFilter && emp.status !== statusFilter) return false;
    if (tipoFilter && emp.tipo !== tipoFilter) return false;
    return true;
  });

  return (
    <main>
      {/* HERO */}
      <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden bg-apice-ink md:min-h-[70vh]">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(14,14,12,0.92) 0%, rgba(58,56,51,0.85) 100%), radial-gradient(circle at 20% 30%, rgba(196,165,114,0.12) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(196,165,114,0.08) 0%, transparent 55%)",
          }}
        />
        <Container className="relative py-24 md:py-32">
          <FadeIn>
            <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
              <span aria-hidden className="block h-px w-12 bg-apice-champagne" />
              <span>Portfólio completo</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.04] tracking-tight text-apice-cream md:text-7xl">
              Empreendimentos
              <br />
              Construtora Ápice
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-apice-bone/80 md:text-lg">
              Conheça nossos lançamentos, obras em andamento e entregas recentes em Brasília.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* FILTROS (sticky) */}
      <EmpreendimentosFiltro
        total={EMPREENDIMENTOS.length}
        filtrados={filtrados.length}
      />

      {/* GRID OU EMPTY STATE */}
      <section className="bg-apice-cream py-16 md:py-20">
        <Container>
          {filtrados.length === 0 ? (
            <FadeIn>
              <div className="mx-auto flex max-w-md flex-col items-center gap-5 py-16 text-center md:py-24">
                <SearchX
                  size={56}
                  className="text-apice-stone/40"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h2 className="font-display text-3xl font-medium text-apice-ink md:text-4xl">
                  Nenhum empreendimento encontrado.
                </h2>
                <p className="font-sans text-base text-apice-stone/80">
                  Tente ajustar os filtros ou veja todos os nossos empreendimentos.
                </p>
                <div className="mt-2">
                  <Button href="/empreendimentos" variant="primary" size="md">
                    Ver todos
                  </Button>
                </div>
              </div>
            </FadeIn>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtrados.map((emp, i) => (
                <FadeIn key={emp.slug} delay={Math.min(i * 0.05, 0.3)}>
                  <EmpreendimentoCard empreendimento={emp} />
                </FadeIn>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* CTA fim de página */}
      <section className="border-t border-apice-stone/15 bg-apice-cream py-16 md:py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
              <p className="font-display text-2xl font-medium leading-snug text-apice-ink md:text-3xl">
                Não encontrou o que procurava?
                <br />
                <span className="text-apice-stone">
                  Nosso time de consultores pode apresentar opções personalizadas.
                </span>
              </p>
              <Button href="/contato" variant="primary" size="lg">
                Falar com consultor
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
