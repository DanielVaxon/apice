import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  EMPREENDIMENTOS,
  getEmpreendimentoBySlug,
  getEmpreendimentosRelacionados,
} from "@/lib/empreendimentos";
import { APICE_INFO } from "@/lib/constants";
import { HeroEmpreendimento } from "@/components/empreendimentos/HeroEmpreendimento";
import { StatusBar } from "@/components/empreendimentos/StatusBar";
import { FichaTecnica } from "@/components/empreendimentos/FichaTecnica";
import { Galeria } from "@/components/empreendimentos/Galeria";
import { PlantasTipologias } from "@/components/empreendimentos/PlantasTipologias";
import { Localizacao } from "@/components/empreendimentos/Localizacao";
import { AndamentoObra } from "@/components/empreendimentos/AndamentoObra";
import { Relacionados } from "@/components/empreendimentos/Relacionados";
import { CTAInteresse } from "@/components/empreendimentos/CTAInteresse";
import { EmpreendimentoSchema } from "@/components/seo/EmpreendimentoSchema";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return EMPREENDIMENTOS.map((empreendimento) => ({
    slug: empreendimento.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const empreendimento = getEmpreendimentoBySlug(params.slug);
  if (!empreendimento) {
    return { title: "Empreendimento não encontrado" };
  }
  const baseUrl = APICE_INFO.url.replace(/\/$/, "");
  const url = `${baseUrl}/empreendimentos/${empreendimento.slug}`;
  return {
    title: empreendimento.metaTitle,
    description: empreendimento.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: empreendimento.metaTitle,
      description: empreendimento.metaDescription,
      url,
      type: "article",
      siteName: APICE_INFO.nomeFantasia,
      locale: "pt_BR",
      images: [
        {
          url: empreendimento.heroImage,
          width: 1200,
          height: 630,
          alt: empreendimento.nome,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: empreendimento.metaTitle,
      description: empreendimento.metaDescription,
      images: [empreendimento.heroImage],
    },
  };
}

export default function EmpreendimentoPage({ params }: PageProps) {
  const empreendimento = getEmpreendimentoBySlug(params.slug);
  if (!empreendimento) notFound();

  const relacionados = getEmpreendimentosRelacionados(params.slug, 3);
  const empreendimentosOptions = EMPREENDIMENTOS.map((e) => ({
    slug: e.slug,
    nome: e.nome,
  }));

  return (
    <main>
      <EmpreendimentoSchema empreendimento={empreendimento} />

      <HeroEmpreendimento empreendimento={empreendimento} />

      {empreendimento.status === "em-obra" && empreendimento.andamentoObra && (
        <StatusBar andamentoObra={empreendimento.andamentoObra} />
      )}

      <FichaTecnica empreendimento={empreendimento} />

      <Galeria empreendimento={empreendimento} />

      <PlantasTipologias empreendimento={empreendimento} />

      <Localizacao empreendimento={empreendimento} />

      {empreendimento.andamentoObra && (
        <AndamentoObra andamentoObra={empreendimento.andamentoObra} />
      )}

      <Relacionados empreendimentos={relacionados} />

      <CTAInteresse
        empreendimento={empreendimento}
        empreendimentosOptions={empreendimentosOptions}
      />
    </main>
  );
}
