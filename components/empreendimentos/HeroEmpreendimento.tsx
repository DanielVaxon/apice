"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { galleryThumb } from "@/data/unsplash-pool";
import { blurDataURL } from "@/lib/image-helpers";
import type {
  Empreendimento,
  EmpreendimentoStatus,
} from "@/lib/empreendimentos";

const statusConfig: Record<
  EmpreendimentoStatus,
  { label: string; className: string }
> = {
  lancamento: {
    label: "Lançamento",
    className: "bg-apice-champagne text-apice-ink",
  },
  "em-obra": {
    label: "Em obra",
    className: "bg-apice-bronze text-apice-cream",
  },
  entregue: {
    label: "Entregue",
    className: "bg-apice-stone text-apice-cream",
  },
};

const tipoLabel: Record<Empreendimento["tipo"], string> = {
  residencial: "Residencial",
  comercial: "Comercial",
};

export function HeroEmpreendimento({
  empreendimento,
}: {
  empreendimento: Empreendimento;
}) {
  const allImages = [empreendimento.heroImage, ...empreendimento.galeria];
  const [currentIndex, setCurrentIndex] = useState(0);
  const status = statusConfig[empreendimento.status];

  const isResidencial = empreendimento.tipo === "residencial";
  const numerosRapidos = [
    {
      valor: String(empreendimento.unidades),
      label: "Unidades",
    },
    {
      valor:
        isResidencial && empreendimento.area_min && empreendimento.area_max
          ? `${empreendimento.area_min.replace(" m²", "")}–${empreendimento.area_max}`
          : `${empreendimento.tipologias?.length ?? "—"}`,
      label: isResidencial ? "Área" : "Tipologias",
    },
    {
      valor: empreendimento.entrega
        ? (empreendimento.entrega.split(" de ").pop() ?? empreendimento.entrega)
        : empreendimento.ano
          ? String(empreendimento.ano)
          : "—",
      label: empreendimento.entrega ? "Entrega" : "Entregue",
    },
  ];

  return (
    <section className="grid min-h-[80vh] grid-cols-1 md:min-h-[85vh] md:grid-cols-5">
      {/* Imagem destaque (60% em desktop) */}
      <div className="relative aspect-[4/3] overflow-hidden bg-apice-stone md:col-span-3 md:aspect-auto">
        {allImages.map((src, i) => (
          <Image
            key={src + i}
            src={src}
            alt={`${empreendimento.nome} — imagem ${i + 1}`}
            fill
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 60vw"
            placeholder="blur"
            blurDataURL={blurDataURL(1200, 800)}
            className={cn(
              "object-cover transition-opacity duration-500",
              currentIndex === i ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-apice-ink/80 via-apice-ink/40 to-transparent"
          aria-hidden
        />
        <div className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center bg-apice-ink/70 px-3 py-1.5 font-sans text-[10px] uppercase tracking-widest text-apice-cream backdrop-blur-sm">
          {currentIndex + 1} / {allImages.length}
        </div>
      </div>

      {/* Coluna direita (40%) */}
      <div className="flex flex-col gap-6 bg-apice-ink p-8 text-apice-cream md:col-span-2 md:p-12 lg:p-16">
        {/* Status + tipo */}
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-block px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-widest",
              status.className,
            )}
          >
            {status.label}
          </span>
          <span className="inline-block border border-apice-cream/60 px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-apice-cream">
            {tipoLabel[empreendimento.tipo]}
          </span>
        </div>

        {/* Eyebrow + título */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-apice-champagne">
            {empreendimento.localizacao}
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
            {empreendimento.nome}
          </h1>
        </div>

        {/* Bloco de números rápidos */}
        <div className="grid grid-cols-3 gap-4 border-y border-apice-stone/50 py-6">
          {numerosRapidos.map((n) => (
            <div key={n.label} className="flex flex-col gap-1">
              <p className="font-display text-xl font-medium leading-tight text-apice-cream md:text-2xl">
                {n.valor}
              </p>
              <p className="font-sans text-[9px] uppercase tracking-widest-2 text-apice-bone/60 md:text-[10px]">
                {n.label}
              </p>
            </div>
          ))}
        </div>

        {/* Preço */}
        {empreendimento.precoApartirDe && (
          <div className="flex flex-col gap-1">
            <p className="font-sans text-[10px] uppercase tracking-widest-2 text-apice-bone/60">
              A partir de
            </p>
            <p className="font-display text-3xl font-medium text-apice-champagne md:text-4xl">
              {empreendimento.precoApartirDe.replace("A partir de ", "")}
            </p>
          </div>
        )}

        {/* CTAs */}
        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
          <Link
            href="#interesse"
            className="inline-flex flex-1 items-center justify-center border border-apice-champagne bg-apice-champagne px-6 py-4 font-sans text-xs font-medium uppercase tracking-widest text-apice-ink transition-all duration-300 hover:border-apice-bronze hover:bg-apice-bronze hover:text-apice-cream"
          >
            Tenho interesse
          </Link>
          <Link
            href="#ficha"
            className="inline-flex flex-1 items-center justify-center border border-apice-cream px-6 py-4 font-sans text-xs font-medium uppercase tracking-widest text-apice-cream transition-all duration-300 hover:bg-apice-cream hover:text-apice-ink"
          >
            Ver ficha técnica
          </Link>
        </div>

        {/* Thumbnails */}
        {allImages.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {allImages.slice(0, 4).map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Ver imagem ${i + 1}`}
                aria-pressed={currentIndex === i}
                className={cn(
                  "relative aspect-[4/3] overflow-hidden bg-apice-stone transition-all duration-300",
                  currentIndex === i
                    ? "ring-2 ring-apice-champagne ring-offset-2 ring-offset-apice-ink"
                    : "opacity-60 hover:opacity-100",
                )}
              >
                <Image
                  src={galleryThumb(src)}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
