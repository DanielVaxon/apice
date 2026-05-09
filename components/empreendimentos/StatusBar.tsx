import { Construction } from "lucide-react";
import type { AndamentoObra } from "@/lib/empreendimentos";

export function StatusBar({
  andamentoObra,
}: {
  andamentoObra: AndamentoObra;
}) {
  return (
    <div className="sticky top-[88px] z-40 bg-apice-champagne text-apice-ink md:top-[100px]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-3 md:flex-row md:items-center md:justify-between md:gap-6 md:px-10 md:py-4 lg:px-16">
        <div className="flex items-center gap-3 font-sans text-xs font-medium uppercase tracking-widest">
          <Construction size={16} aria-hidden />
          <span>
            Em obra · {andamentoObra.percentual}% concluído
          </span>
        </div>
        <div
          className="hidden h-1 w-40 overflow-hidden bg-apice-ink/15 md:block"
          role="progressbar"
          aria-valuenow={andamentoObra.percentual}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progresso da obra"
        >
          <div
            className="h-full bg-apice-ink transition-all duration-700"
            style={{ width: `${andamentoObra.percentual}%` }}
          />
        </div>
        <p className="font-sans text-xs font-medium uppercase tracking-widest">
          Entrega prevista: {andamentoObra.proximaEntrega}
        </p>
      </div>
    </div>
  );
}
