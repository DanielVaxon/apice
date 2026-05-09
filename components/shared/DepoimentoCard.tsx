export type DepoimentoCardProps = {
  nome: string;
  empreendimento: string;
  texto: string;
};

export function DepoimentoCard({ nome, empreendimento, texto }: DepoimentoCardProps) {
  return (
    <article className="flex h-full flex-col gap-6 border border-apice-stone/40 bg-apice-stone/5 p-8 transition-colors duration-500 hover:border-apice-champagne/40 md:p-10">
      <span
        aria-hidden
        className="block font-display text-7xl font-medium leading-none text-apice-champagne"
      >
        &ldquo;
      </span>
      <p className="font-sans text-base leading-relaxed text-apice-cream md:text-[17px]">
        {texto}
      </p>
      <span aria-hidden className="mt-auto block h-px w-8 bg-apice-champagne" />
      <div className="flex flex-col gap-1">
        <p className="font-display text-lg font-medium text-apice-cream">{nome}</p>
        <p className="font-sans text-[11px] uppercase tracking-widest-2 text-apice-bone/60">
          {empreendimento}
        </p>
      </div>
    </article>
  );
}
