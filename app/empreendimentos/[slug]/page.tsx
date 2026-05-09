import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { EMPREENDIMENTOS, getEmpreendimentoBySlug } from "@/lib/empreendimentos";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return EMPREENDIMENTOS.map((empreendimento) => ({ slug: empreendimento.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const empreendimento = getEmpreendimentoBySlug(params.slug);
  if (!empreendimento) return { title: "Empreendimento não encontrado" };
  return {
    title: empreendimento.nome,
    description: empreendimento.descricaoCurta,
  };
}

export default function EmpreendimentoDetailPage({ params }: PageProps) {
  const empreendimento = getEmpreendimentoBySlug(params.slug);
  if (!empreendimento) notFound();

  return (
    <main className="min-h-[calc(100vh-200px)] pb-20 pt-32">
      <Container>
        <p className="mb-6 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
          <span className="block h-px w-10 bg-apice-champagne" aria-hidden />
          {empreendimento.localizacao}
        </p>
        <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          {empreendimento.nome}
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base text-apice-stone md:text-lg">
          Conteúdo desta página será desenvolvido no Prompt #3.
        </p>
      </Container>
    </main>
  );
}
