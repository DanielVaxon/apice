import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre construção civil, engenharia, mercado imobiliário e sustentabilidade.",
};

export default function BlogPage() {
  return (
    <main className="min-h-[calc(100vh-200px)] pb-20 pt-32">
      <Container>
        <p className="mb-6 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
          <span className="block h-px w-10 bg-apice-champagne" aria-hidden />
          Editorial
        </p>
        <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          Blog Ápice
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base text-apice-stone md:text-lg">
          Conteúdo será desenvolvido no Prompt #5 (MDX).
        </p>
      </Container>
    </main>
  );
}
