"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

type NumeroItemProps = {
  end: number;
  format: (n: number) => string;
  suffix?: string;
  label: string;
  delay?: number;
  className?: string;
};

function NumeroItem({
  end,
  format,
  suffix,
  label,
  delay = 0,
  className,
}: NumeroItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, end, {
      duration: 1.5,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, end, delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center gap-5 px-6 py-10 text-center md:py-2",
        className,
      )}
    >
      <div className="flex items-baseline justify-center gap-2">
        <p className="font-display text-6xl font-medium leading-none text-apice-ink md:text-7xl">
          {format(value)}
        </p>
        {suffix && (
          <span className="font-display text-2xl font-normal text-apice-champagne md:text-3xl">
            {suffix}
          </span>
        )}
      </div>
      <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
      <p className="font-sans text-[11px] uppercase tracking-widest-2 text-apice-stone">
        {label}
      </p>
    </div>
  );
}

const ITEMS: Array<Omit<NumeroItemProps, "className">> = [
  {
    end: 17,
    format: (n) => Math.round(n).toString(),
    suffix: "anos",
    label: "De mercado",
    delay: 0,
  },
  {
    end: 38,
    format: (n) => Math.round(n).toString(),
    label: "Empreendimentos",
    delay: 0.15,
  },
  {
    end: 2.4,
    format: (n) => n.toFixed(1),
    suffix: "M m²",
    label: "Entregues",
    delay: 0.3,
  },
  {
    end: 4200,
    format: (n) => Math.round(n).toLocaleString("pt-BR"),
    label: "Famílias atendidas",
    delay: 0.45,
  },
];

export function Numeros() {
  return (
    <Section theme="light">
      <FadeIn>
        <SectionHeading
          eyebrow="Construtora Ápice em números"
          title="Confiança construída ao longo de 17 anos."
          subtitle="Cada empreendimento entregue reforça nosso compromisso com Brasília."
          align="center"
          className="mx-auto"
        />
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:mt-20 md:grid-cols-4">
        {ITEMS.map((it, i) => (
          <NumeroItem
            key={it.label}
            {...it}
            className={cn(i > 0 && "md:border-l md:border-apice-stone/20")}
          />
        ))}
      </div>
    </Section>
  );
}
