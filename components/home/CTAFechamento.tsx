import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { APICE_INFO } from "@/lib/constants";

export function CTAFechamento() {
  return (
    <section className="bg-apice-ink py-32 md:py-40">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <FadeIn>
            <span aria-hidden className="block h-px w-14 bg-apice-champagne" />
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="mt-8 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
              Próximo passo
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-apice-cream md:text-6xl">
              Pronto para conhecer
              <br />o seu próximo endereço?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-apice-bone/80 md:text-lg">
              Nosso time de consultores está disponível para apresentar empreendimentos, agendar visitas e tirar dúvidas técnicas. Atendimento de segunda a sexta, 9h às 18h.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
              <Button href="/contato" variant="champagne" size="lg">
                Agendar visita
              </Button>
              <Button
                href="/empreendimentos"
                variant="secondary"
                size="lg"
                className="border-apice-cream text-apice-cream hover:bg-apice-cream hover:text-apice-ink"
              >
                Ver empreendimentos
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mt-16 font-sans text-sm text-apice-bone/70">
              Ou fale agora:{" "}
              <a
                href={`tel:${APICE_INFO.telefoneRaw}`}
                className="font-medium text-apice-champagne transition-colors duration-300 hover:text-apice-cream"
              >
                {APICE_INFO.telefone}
              </a>{" "}
              ·{" "}
              <a
                href={`mailto:${APICE_INFO.email}`}
                className="font-medium text-apice-champagne transition-colors duration-300 hover:text-apice-cream"
              >
                {APICE_INFO.email}
              </a>
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
