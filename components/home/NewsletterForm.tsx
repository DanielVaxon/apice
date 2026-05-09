"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  email: z.string().min(1, "Informe seu email.").email("Email inválido."),
});

type FormValues = z.infer<typeof schema>;

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // Mockup: simula request com setTimeout. Integração real virá em prompt posterior.
  const onSubmit = async (data: FormValues) => {
    if (process.env.NODE_ENV === "development") {
      // Mockup: payload chegaria aqui no integração real.
      console.info("[Newsletter mockup] payload:", data);
    }
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="seu melhor email"
          autoComplete="email"
          aria-invalid={errors.email ? true : undefined}
          {...register("email")}
          className="border-b border-apice-bone/40 bg-transparent px-0 py-3 font-sans text-base text-apice-cream placeholder-apice-bone/40 outline-none transition-colors duration-300 focus:border-apice-champagne"
        />
        {errors.email && (
          <p className="font-sans text-xs text-apice-champagne" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="champagne"
        size="md"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando…" : "Quero ser avisado"}
      </Button>

      {status === "success" && (
        <p
          role="status"
          aria-live="polite"
          className="font-sans text-sm text-apice-champagne"
        >
          Cadastro confirmado. Você receberá nosso próximo lançamento.
        </p>
      )}

      <p className="font-sans text-[10px] uppercase tracking-widest-2 text-apice-bone/45">
        Sem spam. Cancelamento em 1 clique. LGPD compliance.
      </p>
    </form>
  );
}
