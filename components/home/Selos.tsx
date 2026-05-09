import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

const SELOS = [
  {
    sigla: "CREA-DF",
    numero: "12345-D",
    label: "Conselho Regional de Engenharia",
  },
  {
    sigla: "ABNT",
    numero: "NBR",
    label: "Normas Técnicas Brasileiras",
  },
  {
    sigla: "ISO",
    numero: "9001",
    label: "Sistema de Gestão da Qualidade",
  },
  {
    sigla: "PBQP-H",
    numero: "Habitação",
    label: "Qualidade na Habitação",
  },
  {
    sigla: "IGBC",
    numero: "GREEN",
    label: "Construção Sustentável",
  },
];

export function Selos() {
  return (
    <Section theme="light" className="!py-16 md:!py-20">
      <FadeIn>
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
            <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
            <span>Garantia técnica</span>
            <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
          </div>
          <h2 className="font-display text-3xl font-medium leading-tight text-apice-ink md:text-4xl">
            Auditados, certificados, registrados.
          </h2>
        </div>
      </FadeIn>

      <div className="mt-12 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-5 md:gap-6">
        {SELOS.map((selo, i) => (
          <FadeIn key={selo.sigla} delay={i * 0.06}>
            <div className="group flex h-full flex-col items-center justify-center gap-2 border border-apice-stone/30 p-6 transition-colors duration-500 hover:border-apice-champagne md:p-8">
              <p className="font-display text-2xl font-medium text-apice-stone transition-colors duration-500 group-hover:text-apice-champagne md:text-[26px]">
                {selo.sigla}
              </p>
              <p className="font-display text-base text-apice-stone/70 transition-colors duration-500 group-hover:text-apice-champagne">
                {selo.numero}
              </p>
              <p className="mt-3 max-w-[18ch] text-center font-sans text-[10px] uppercase tracking-widest text-apice-stone/70">
                {selo.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
