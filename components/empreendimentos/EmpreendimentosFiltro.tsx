"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useTransition } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type FilterValue = string | null;

const STATUS_OPTIONS: { label: string; value: FilterValue }[] = [
  { label: "Todos", value: null },
  { label: "Lançamento", value: "lancamento" },
  { label: "Em obra", value: "em-obra" },
  { label: "Entregues", value: "entregue" },
];

const TIPO_OPTIONS: { label: string; value: FilterValue }[] = [
  { label: "Todos", value: null },
  { label: "Residencial", value: "residencial" },
  { label: "Comercial", value: "comercial" },
];

type EmpreendimentosFiltroProps = {
  total: number;
  filtrados: number;
};

export function EmpreendimentosFiltro({
  total,
  filtrados,
}: EmpreendimentosFiltroProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentStatus = searchParams.get("status");
  const currentTipo = searchParams.get("tipo");
  const hasFilter = Boolean(currentStatus || currentTipo);

  const updateFilter = useCallback(
    (key: "status" | "tipo", value: FilterValue) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      const queryString = params.toString();
      const url = queryString ? `${pathname}?${queryString}` : pathname;
      startTransition(() => {
        router.push(url, { scroll: false });
      });
    },
    [pathname, router, searchParams],
  );

  const clearFilters = useCallback(() => {
    startTransition(() => {
      router.push(pathname, { scroll: false });
    });
  }, [pathname, router]);

  return (
    <div
      className={cn(
        "sticky top-[88px] z-40 border-y border-apice-stone/15 bg-apice-cream/90 backdrop-blur-md transition-opacity duration-200 md:top-[100px]",
        isPending && "opacity-70",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between md:gap-8 md:px-10 md:py-6 lg:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <FilterGroup
            label="Status"
            options={STATUS_OPTIONS}
            current={currentStatus}
            onSelect={(value) => updateFilter("status", value)}
          />
          <span className="hidden h-6 w-px bg-apice-stone/20 md:block" aria-hidden />
          <FilterGroup
            label="Tipo"
            options={TIPO_OPTIONS}
            current={currentTipo}
            onSelect={(value) => updateFilter("tipo", value)}
          />
        </div>

        <div className="flex items-center justify-between gap-4 md:justify-end">
          <p
            className="font-sans text-[11px] uppercase tracking-widest-2 text-apice-stone"
            aria-live="polite"
          >
            <span className="font-medium text-apice-ink">{filtrados}</span>{" "}
            {filtrados === 1 ? "empreendimento" : "empreendimentos"}
            {filtrados !== total && (
              <span className="text-apice-stone/60"> · de {total}</span>
            )}
          </p>
          {hasFilter && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-widest-2 text-apice-stone transition-colors duration-300 hover:text-apice-champagne"
            >
              <X size={14} aria-hidden />
              Limpar filtros
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

type FilterGroupProps = {
  label: string;
  options: { label: string; value: FilterValue }[];
  current: string | null;
  onSelect: (value: FilterValue) => void;
};

function FilterGroup({ label, options, current, onSelect }: FilterGroupProps) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
      <span className="font-sans text-[10px] uppercase tracking-widest-3 text-apice-stone/70">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = current === opt.value || (current === null && opt.value === null);
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => onSelect(opt.value)}
              aria-pressed={active}
              className={cn(
                "inline-flex items-center px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-widest transition-all duration-300 md:px-5 md:py-2.5",
                active
                  ? "border border-apice-ink bg-apice-ink text-apice-cream"
                  : "border border-apice-stone/30 text-apice-stone hover:border-apice-champagne hover:text-apice-ink",
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
