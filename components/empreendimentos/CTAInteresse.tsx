"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import toast from "react-hot-toast";
import { Check, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { APICE_INFO } from "@/lib/constants";
import type { Empreendimento } from "@/lib/empreendimentos";

export type EmpreendimentoOption = {
  slug: string;
  nome: string;
};

type CTAInteresseProps = {
  empreendimento: Empreendimento;
  empreendimentosOptions: EmpreendimentoOption[];
};

type FormData = {
  nome: string;
  telefone: string;
  email: string;
  empreendimentoSlug: string;
  mensagem: string;
};

type ApiOk = {
  success: true;
  whatsappUrl: string;
  message: string;
};

type ApiErr = {
  success: false;
  message?: string;
  errors?: { message: string; path: (string | number)[] }[];
};

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function CTAInteresse({
  empreendimento,
  empreendimentosOptions,
}: CTAInteresseProps) {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    email: "",
    empreendimentoSlug: empreendimento.slug,
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>(
    "Recebido. Em breve nossa equipe entrará em contato.",
  );

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    if (formData.nome.trim().length < 2) {
      toast.error("Informe seu nome completo.");
      return;
    }
    if (!/.+@.+\..+/.test(formData.email)) {
      toast.error("Email inválido.");
      return;
    }
    if (formData.telefone.replace(/\D/g, "").length < 10) {
      toast.error("Telefone inválido — informe DDD e número.");
      return;
    }

    const selected = empreendimentosOptions.find(
      (opt) => opt.slug === formData.empreendimentoSlug,
    );
    const empreendimentoNome = selected?.nome ?? empreendimento.nome;

    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.nome.trim(),
          email: formData.email.trim(),
          telefone: formData.telefone.trim(),
          empreendimentoNome,
          empreendimentoSlug: formData.empreendimentoSlug,
          mensagem: formData.mensagem.trim() || undefined,
        }),
      });

      const json = (await res.json()) as ApiOk | ApiErr;
      if (!res.ok || !json.success) {
        const msg =
          (json as ApiErr).errors?.[0]?.message ||
          (json as ApiErr).message ||
          "Não foi possível enviar agora. Tente novamente.";
        toast.error(msg);
        return;
      }

      setWhatsappUrl(json.whatsappUrl);
      setSuccessMessage(json.message);
      setSuccess(true);
    } catch {
      toast.error("Falha de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="interesse"
      className="bg-apice-ink py-32 text-apice-bone md:py-40"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <FadeIn>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
                <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
                <span>Próximo passo</span>
              </div>
              <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-apice-cream md:text-5xl lg:text-6xl">
                Quero conhecer
                <br />
                {empreendimento.nome}.
              </h2>
              <p className="font-sans text-base leading-relaxed text-apice-bone/80 md:text-lg">
                Agende uma visita ao stand de vendas, solicite material completo
                ou fale diretamente com nossos consultores. Atendimento
                personalizado, sem pressão de venda.
              </p>
              <ul className="mt-4 flex flex-col gap-3 font-sans text-sm">
                <li className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-apice-bone/80">
                  <span className="w-20 font-sans text-[10px] uppercase tracking-widest-2 text-apice-champagne">
                    Telefone
                  </span>
                  <a
                    href={`tel:${APICE_INFO.telefoneRaw}`}
                    className="text-apice-cream transition-colors duration-300 hover:text-apice-champagne"
                  >
                    {APICE_INFO.telefone}
                  </a>
                </li>
                <li className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-apice-bone/80">
                  <span className="w-20 font-sans text-[10px] uppercase tracking-widest-2 text-apice-champagne">
                    Email
                  </span>
                  <a
                    href="mailto:vendas@construtoraapice.com.br"
                    className="break-all text-apice-cream transition-colors duration-300 hover:text-apice-champagne"
                  >
                    vendas@construtoraapice.com.br
                  </a>
                </li>
                <li className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-apice-bone/80">
                  <span className="w-20 font-sans text-[10px] uppercase tracking-widest-2 text-apice-champagne">
                    Horário
                  </span>
                  <span className="text-apice-cream">{APICE_INFO.horario}</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            {success && whatsappUrl ? (
              <SuccessBlock url={whatsappUrl} message={successMessage} />
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="flex flex-col gap-5 border border-apice-stone/40 bg-apice-stone/10 p-6 md:p-8 lg:p-10"
              >
                <Field label="Nome completo">
                  <input
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    value={formData.nome}
                    onChange={(e) => update("nome", e.target.value)}
                    className="w-full border-b border-apice-bone/30 bg-transparent px-0 py-3 font-sans text-base text-apice-cream placeholder-apice-bone/40 outline-none transition-colors duration-300 focus:border-apice-champagne"
                  />
                </Field>
                <Field label="Telefone">
                  <input
                    type="tel"
                    autoComplete="tel"
                    inputMode="numeric"
                    required
                    placeholder="(61) 90000-0000"
                    value={formData.telefone}
                    onChange={(e) =>
                      update("telefone", maskPhone(e.target.value))
                    }
                    className="w-full border-b border-apice-bone/30 bg-transparent px-0 py-3 font-sans text-base text-apice-cream placeholder-apice-bone/40 outline-none transition-colors duration-300 focus:border-apice-champagne"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full border-b border-apice-bone/30 bg-transparent px-0 py-3 font-sans text-base text-apice-cream placeholder-apice-bone/40 outline-none transition-colors duration-300 focus:border-apice-champagne"
                  />
                </Field>
                <Field label="Empreendimento de interesse">
                  <select
                    value={formData.empreendimentoSlug}
                    onChange={(e) =>
                      update("empreendimentoSlug", e.target.value)
                    }
                    className="w-full border-b border-apice-bone/30 bg-transparent px-0 py-3 font-sans text-base text-apice-cream outline-none transition-colors duration-300 focus:border-apice-champagne [&>option]:bg-apice-ink [&>option]:text-apice-cream"
                  >
                    {empreendimentosOptions.map((opt) => (
                      <option key={opt.slug} value={opt.slug}>
                        {opt.nome}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Mensagem (opcional)">
                  <textarea
                    rows={4}
                    maxLength={500}
                    value={formData.mensagem}
                    onChange={(e) => update("mensagem", e.target.value)}
                    className="w-full resize-none border-b border-apice-bone/30 bg-transparent px-0 py-3 font-sans text-base text-apice-cream placeholder-apice-bone/40 outline-none transition-colors duration-300 focus:border-apice-champagne"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex w-full items-center justify-center border border-apice-champagne bg-apice-champagne px-6 py-4 font-sans text-xs font-medium uppercase tracking-widest text-apice-ink transition-all duration-300 hover:border-apice-bronze hover:bg-apice-bronze hover:text-apice-cream disabled:pointer-events-none disabled:opacity-50"
                >
                  {loading ? "Enviando…" : "Enviar interesse"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function SuccessBlock({ url, message }: { url: string; message: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-start gap-6 border border-apice-champagne/40 bg-apice-stone/10 p-8 md:p-10 lg:p-12"
    >
      <span className="inline-flex h-16 w-16 items-center justify-center border-2 border-apice-champagne text-apice-champagne">
        <Check size={36} strokeWidth={2.5} aria-hidden />
      </span>
      <div className="flex flex-col gap-3">
        <p className="font-sans text-[10px] uppercase tracking-widest-3 text-apice-champagne">
          Status
        </p>
        <h3 className="font-display text-4xl font-medium leading-tight tracking-tight text-apice-cream md:text-5xl">
          Recebido
        </h3>
        <p className="font-sans text-base leading-relaxed text-apice-bone/85 md:text-lg">
          {message}
        </p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex w-full items-center justify-center gap-3 bg-[#25D366] px-6 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#1FAA52]"
      >
        <MessageCircle size={18} aria-hidden />
        Continuar no WhatsApp
      </a>
      <p className="font-sans text-xs text-apice-bone/60">
        Ou aguarde nosso contato em até 1 dia útil.
      </p>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans text-[10px] uppercase tracking-widest-2 text-apice-bone/60">
        {label}
      </span>
      {children}
    </label>
  );
}
