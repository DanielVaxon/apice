import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Empreendimento, EmpreendimentoStatus } from "@/lib/empreendimentos";
import { cn } from "@/lib/utils";

const statusConfig: Record<EmpreendimentoStatus, { label: string; className: string }> = {
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

type EmpreendimentoCardProps = {
  empreendimento: Empreendimento;
};

export function EmpreendimentoCard({ empreendimento }: EmpreendimentoCardProps) {
  const status = statusConfig[empreendimento.status];

  return (
    <Link
      href={`/empreendimentos/${empreendimento.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-apice-stone/40 bg-apice-stone/10 transition-all duration-500 hover:-translate-y-1 hover:border-apice-champagne/60 hover:bg-apice-stone/20"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden bg-apice-stone"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(58,56,51,0.95) 0%, rgba(14,14,12,0.85) 100%), radial-gradient(circle at 30% 30%, rgba(196,165,114,0.12) 0%, transparent 60%)",
        }}
      >
        {/* TODO: substituir placeholder por <Image src={empreendimento.imagemHero} fill /> quando imagens estiverem disponíveis */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundImage: "linear-gradient(135deg, rgba(196,165,114,0.18) 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
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
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <h3 className="font-display text-2xl font-medium leading-tight text-apice-cream transition-colors duration-300 group-hover:text-apice-champagne">
          {empreendimento.nome}
        </h3>
        <div className="flex items-center gap-2 font-sans text-xs text-apice-bone/70">
          <MapPin size={14} aria-hidden />
          <span>{empreendimento.localizacao}</span>
        </div>
        <p className="line-clamp-3 font-sans text-sm leading-relaxed text-apice-bone/80">
          {empreendimento.descricaoCurta}
        </p>
        <div className="mt-auto inline-flex items-center gap-2 pt-2 font-sans text-xs uppercase tracking-widest text-apice-champagne transition-all duration-300 group-hover:gap-4">
          Ver empreendimento
          <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
}
