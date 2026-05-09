import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

type PageProps = { params: { slug: string } };

export function generateMetadata({ params }: PageProps): Metadata {
  return {
    title: `Artigo: ${params.slug}`,
    description: "Artigo do blog da Construtora Ápice.",
  };
}

export default function BlogArticlePage({ params }: PageProps) {
  return (
    <main className="min-h-[calc(100vh-200px)] pb-20 pt-32">
      <Container>
        <p className="mb-6 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
          <span className="block h-px w-10 bg-apice-champagne" aria-hidden />
          Artigo
        </p>
        <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          {params.slug}
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base text-apice-stone md:text-lg">
          Conteúdo deste artigo será desenvolvido no Prompt #5 via MDX.
        </p>
      </Container>
    </main>
  );
}
