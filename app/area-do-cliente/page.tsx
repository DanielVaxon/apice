import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Área do Cliente",
  description:
    "Acompanhe sua obra, acesse boletos, contratos e a documentação do seu empreendimento.",
  robots: { index: false, follow: false },
};

export default function AreaDoClientePage() {
  return (
    <main className="min-h-[calc(100vh-200px)] pb-20 pt-32">
      <Container>
        <div className="mx-auto max-w-md">
          <p className="mb-6 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
            <span className="block h-px w-10 bg-apice-champagne" aria-hidden />
            Área restrita
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
            Acesso de clientes
          </h1>
          <p className="mt-4 font-sans text-sm text-apice-stone">
            Acompanhe sua obra, acesse boletos e documentação contratual.
          </p>

          <form
            className="mt-10 flex flex-col gap-5"
            aria-label="Formulário de login (mockup)"
          >
            <label className="flex flex-col gap-2">
              <span className="font-sans text-[11px] uppercase tracking-widest-2 text-apice-stone">
                CPF ou E-mail
              </span>
              <input
                type="text"
                name="usuario"
                autoComplete="username"
                className="border border-apice-stone/25 bg-transparent px-4 py-3 font-sans text-sm text-apice-ink outline-none transition-colors focus:border-apice-ink"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-sans text-[11px] uppercase tracking-widest-2 text-apice-stone">
                Senha
              </span>
              <input
                type="password"
                name="senha"
                autoComplete="current-password"
                className="border border-apice-stone/25 bg-transparent px-4 py-3 font-sans text-sm text-apice-ink outline-none transition-colors focus:border-apice-ink"
              />
            </label>
            <Button type="submit" variant="primary" size="md" className="mt-2">
              Entrar
            </Button>
            <p className="text-center font-sans text-xs text-apice-stone/70">
              Mockup institucional · integração no Prompt #4.
            </p>
          </form>
        </div>
      </Container>
    </main>
  );
}
