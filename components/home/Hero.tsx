import { Button } from "@/components/ui/Button";
import { ScrollIndicator } from "@/components/home/ScrollIndicator";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-apice-ink">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(14,14,12,0.92) 0%, rgba(58,56,51,0.85) 100%), radial-gradient(circle at 30% 20%, rgba(196,165,114,0.10) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(196,165,114,0.06) 0%, transparent 55%)",
        }}
      />
      {/* TODO: substituir gradient por <Image src="/images/hero/home-hero.jpg" alt="" fill priority className="object-cover" /> + overlay quando imagem estiver disponível */}

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-16 lg:py-48">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <span aria-hidden className="block h-px w-12 bg-apice-champagne md:w-14" />
            <span className="font-sans text-[10px] uppercase tracking-widest-3 text-apice-champagne md:text-xs">
              Desde 2008 em Brasília
            </span>
            <span aria-hidden className="block h-px w-12 bg-apice-champagne md:w-14" />
          </div>

          <h1 className="mt-10 max-w-5xl text-balance font-display text-5xl font-medium leading-[1.04] tracking-tight text-apice-cream md:text-7xl lg:text-8xl">
            Construímos
            <br />o que permanece.
          </h1>

          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-apice-bone/85 md:text-xl">
            Empreendimentos residenciais e comerciais de alto padrão em Brasília. Engenharia precisa, prazo cumprido, qualidade que atravessa décadas.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="/empreendimentos" variant="champagne" size="lg">
              Ver empreendimentos
            </Button>
            <Button
              href="/contato"
              variant="secondary"
              size="lg"
              className="border-apice-cream text-apice-cream hover:bg-apice-cream hover:text-apice-ink"
            >
              Fale com a Ápice
            </Button>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
