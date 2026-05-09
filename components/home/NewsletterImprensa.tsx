import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { NewsletterForm } from "@/components/home/NewsletterForm";

const MENCOES = [
  {
    veiculo: "Correio Braziliense",
    titulo: "Construtora Ápice é destaque em pontualidade no DF",
    data: "Mar/2026",
  },
  {
    veiculo: "ZAP Imóveis",
    titulo: "Os 5 lançamentos mais aguardados em Brasília",
    data: "Jan/2026",
  },
  {
    veiculo: "Revista Construção",
    titulo: "Como a Ápice integrou ESG ao processo construtivo",
    data: "Out/2025",
  },
];

export function NewsletterImprensa() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-apice-ink px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
        <FadeIn>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
              <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
              <span>Acompanhe os lançamentos</span>
            </div>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-apice-cream md:text-5xl">
              Drop novo, primeiro aviso.
            </h2>
            <p className="max-w-md font-sans text-base text-apice-bone/80">
              Cadastre seu email para receber comunicação de novos empreendimentos antes do lançamento público.
            </p>
            <div className="mt-6 max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="bg-apice-cream px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
              <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
              <span>Imprensa e reconhecimento</span>
            </div>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-apice-ink md:text-5xl">
              Ápice na mídia.
            </h2>
            <ul className="mt-6 flex flex-col divide-y divide-apice-stone/15 border-y border-apice-stone/15">
              {MENCOES.map((m) => (
                <li key={m.titulo} className="py-5">
                  <p className="font-sans text-[11px] uppercase tracking-widest-2 text-apice-stone/70">
                    {m.veiculo} · {m.data}
                  </p>
                  <p className="mt-2 font-display text-lg italic leading-snug text-apice-ink md:text-xl">
                    &ldquo;{m.titulo}&rdquo;
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href="/imprensa"
              className="mt-6 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-apice-ink transition-all duration-300 hover:gap-4 hover:text-apice-champagne"
            >
              Ver sala de imprensa <span aria-hidden>→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
