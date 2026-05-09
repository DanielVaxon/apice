import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type {
  Empreendimento,
  EmpreendimentoStatus,
} from "@/lib/empreendimentos";
import { cardSize } from "@/data/unsplash-pool";
import { blurDataURL } from "@/lib/image-helpers";
import { cn } from "@/lib/utils";

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
      <div className="relative aspect-[4/3] overflow-hidden bg-apice-stone">
        <Image
          src={cardSize(empreendimento.cardImage)}
          alt={empreendimento.nome}
          width={800}
          height={600}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataURL(800, 600)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-apice-ink/60 via-apice-ink/10 to-transparent"
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
          <span className="inline-block border border-apice-cream/60 bg-apice-ink/40 px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-apice-cream backdrop-blur-sm">
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
