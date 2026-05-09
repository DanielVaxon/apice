import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { APICE_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com a Construtora Ápice. ${APICE_INFO.endereco.full}.`,
};

export default function ContatoPage() {
  return (
    <main className="min-h-[calc(100vh-200px)] pb-20 pt-32">
      <Container>
        <p className="mb-6 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
          <span className="block h-px w-10 bg-apice-champagne" aria-hidden />
          Fale com a Ápice
        </p>
        <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          Contato
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base text-apice-stone md:text-lg">
          Conteúdo desta página será desenvolvido no Prompt #4.
        </p>
      </Container>
    </main>
  );
}
