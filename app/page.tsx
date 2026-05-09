import { Hero } from "@/components/home/Hero";
import { Numeros } from "@/components/home/Numeros";
import { EmpreendimentosDestaque } from "@/components/home/EmpreendimentosDestaque";
import { Diferenciais } from "@/components/home/Diferenciais";
import { ProcessoConstrutivo } from "@/components/home/ProcessoConstrutivo";
import { Selos } from "@/components/home/Selos";
import { Depoimentos } from "@/components/home/Depoimentos";
import { Parceiros } from "@/components/home/Parceiros";
import { NewsletterImprensa } from "@/components/home/NewsletterImprensa";
import { CTAFechamento } from "@/components/home/CTAFechamento";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Numeros />
      <EmpreendimentosDestaque />
      <Diferenciais />
      <ProcessoConstrutivo />
      <Selos />
      <Depoimentos />
      <Parceiros />
      <NewsletterImprensa />
      <CTAFechamento />
    </main>
  );
}
