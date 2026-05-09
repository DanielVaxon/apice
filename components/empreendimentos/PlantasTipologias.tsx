"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { PlantaSVG } from "./PlantaSVG";
import { cn } from "@/lib/utils";
import type {
  BlueprintKey,
  Empreendimento,
  Planta,
  Tipologia,
} from "@/lib/empreendimentos";

type Item = {
  tipo: string;
  area: string;
  descricao: string;
  tipologia: BlueprintKey;
};

export function PlantasTipologias({
  empreendimento,
}: {
  empreendimento: Empreendimento;
}) {
  const isResidencial = empreendimento.tipo === "residencial";
  const eyebrow = isResidencial ? "Plantas" : "Tipologias";

  const items: Item[] = isResidencial
    ? ((empreendimento.plantas ?? []) as Planta[])
    : ((empreendimento.tipologias ?? []) as Tipologia[]);

  const [active, setActive] = useState(0);

  if (items.length === 0) return null;

  const current = items[active] ?? items[0];

  return (
    <Section theme="light">
      <FadeIn>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
            <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-apice-ink md:text-5xl">
            Opções disponíveis.
          </h2>
        </div>
      </FadeIn>

      {/* Tabs */}
      {items.length > 1 && (
        <FadeIn delay={0.05}>
          <div
            role="tablist"
            aria-label="Selecionar tipologia"
            className="mt-12 flex flex-wrap gap-2 border-b border-apice-stone/15 pb-2"
          >
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.tipo}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="planta-panel"
                  onClick={() => setActive(i)}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2.5 font-sans text-[11px] font-medium uppercase tracking-widest transition-all duration-300 md:text-xs",
                    isActive
                      ? "border-b-2 border-apice-champagne text-apice-ink"
                      : "border-b-2 border-transparent text-apice-stone/70 hover:text-apice-ink",
                  )}
                >
                  <span
                    className={cn(
                      "inline-block h-1.5 w-1.5 rounded-full",
                      isActive ? "bg-apice-champagne" : "bg-apice-stone/30",
                    )}
                    aria-hidden
                  />
                  {item.tipologia} · {item.area}
                </button>
              );
            })}
          </div>
        </FadeIn>
      )}

      <FadeIn delay={0.1} key={`panel-${active}`}>
        <div
          id="planta-panel"
          role="tabpanel"
          className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-16"
        >
          {/* Detalhes textuais */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-sans text-[10px] uppercase tracking-widest-2 text-apice-stone/70">
                {current.tipologia}
              </p>
              <h3 className="font-display text-3xl font-medium text-apice-ink md:text-4xl">
                {current.tipo}
              </h3>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="font-display text-5xl font-medium text-apice-champagne md:text-6xl">
                {current.area}
              </p>
            </div>
            <p className="max-w-md font-sans text-base leading-relaxed text-apice-stone md:text-lg">
              {current.descricao}
            </p>
            {isResidencial && (
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-apice-stone/15 pt-6 md:max-w-md">
                <Detail label="Dormitórios" value={extractRooms(current)} />
                <Detail label="Suítes" value={extractSuites(current)} />
                <Detail label="Vagas" value={empreendimento.vagasGaragem ?? "—"} />
                <Detail
                  label="Pé direito"
                  value={
                    empreendimento.fichaTecnica.find((f) =>
                      f.label.toLowerCase().includes("pé direito"),
                    )?.valor ?? "—"
                  }
                />
              </div>
            )}
            <div className="group relative mt-2 inline-flex self-start">
              <button
                type="button"
                disabled
                aria-describedby={`tooltip-pdf-${current.tipologia}`}
                className="inline-flex cursor-not-allowed items-center gap-2 border border-apice-champagne/40 px-5 py-3 font-sans text-xs uppercase tracking-widest text-apice-champagne/60 transition-all"
              >
                <Download size={14} aria-hidden />
                Baixar planta em PDF
              </button>
              <span
                id={`tooltip-pdf-${current.tipologia}`}
                role="tooltip"
                className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap border border-apice-champagne/30 bg-apice-ink px-3 py-2 font-sans text-[11px] tracking-wide text-apice-bone opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              >
                Disponível mediante interesse confirmado
                <span
                  aria-hidden
                  className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-apice-ink"
                />
              </span>
            </div>
          </div>

          {/* Blueprint SVG */}
          <div className="overflow-hidden border border-apice-stone/30 bg-apice-ink">
            <div className="aspect-[4/3] w-full">
              <PlantaSVG
                tipologia={current.tipologia}
                area={current.area}
              />
            </div>
            <div className="flex items-center justify-between border-t border-apice-stone/30 bg-apice-ink px-4 py-3 font-sans text-[10px] uppercase tracking-widest-2 text-apice-bone/50">
              <span>Blueprint técnico · VAXON</span>
              <span className="text-apice-champagne">{current.tipologia}</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-sans text-[10px] uppercase tracking-widest-2 text-apice-stone/60">
        {label}
      </span>
      <span className="font-sans text-sm text-apice-ink">{value}</span>
    </div>
  );
}

function extractRooms(item: Item): string {
  const t = item.tipo.toLowerCase();
  const match = t.match(/(\d+)\s*(quarto|suíte)/);
  if (match) return `${match[1]} dormitórios`;
  if (item.tipologia === "STUDIO") return "Studio integrado";
  if (item.tipologia === "1Q") return "1 dormitório";
  if (item.tipologia === "2Q") return "2 dormitórios";
  if (item.tipologia === "3Q") return "3 dormitórios";
  if (item.tipologia === "4Q" || item.tipologia === "COBERTURA") return "4 dormitórios";
  if (item.tipologia === "GARDEN") return "3 dormitórios";
  return "—";
}

function extractSuites(item: Item): string {
  const t = item.tipo.toLowerCase();
  const match = t.match(/(\d+)\s*suíte/);
  if (match) return `${match[1]} suítes`;
  if (item.tipologia === "COBERTURA") return "4 suítes";
  if (item.tipologia === "4Q") return "2 suítes";
  if (item.tipologia === "3Q") return "1 suíte";
  return "—";
}
