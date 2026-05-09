"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { galleryThumb } from "@/data/unsplash-pool";
import { blurDataURL } from "@/lib/image-helpers";
import { cn } from "@/lib/utils";
import type { Empreendimento } from "@/lib/empreendimentos";

export function Galeria({
  empreendimento,
}: {
  empreendimento: Empreendimento;
}) {
  const baseImages =
    empreendimento.galeria.length > 0
      ? empreendimento.galeria
      : [empreendimento.heroImage];

  const images =
    baseImages.length >= 6
      ? baseImages
      : [
          ...baseImages,
          ...Array(6 - baseImages.length).fill(empreendimento.heroImage),
        ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? null : Math.max(0, i - 1)));
      if (e.key === "ArrowRight")
        setOpenIndex((i) =>
          i === null ? null : Math.min(images.length - 1, i + 1),
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, images.length]);

  const aspectClasses = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[16/10]"];

  return (
    <section className="bg-apice-ink py-20 text-apice-bone md:py-28 lg:py-32">
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
              <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
              <span>Galeria</span>
            </div>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-apice-cream md:text-5xl">
              Imagens do empreendimento.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 columns-1 gap-4 md:columns-2 lg:columns-3">
          {images.map((src, i) => (
            <div key={i} className="mb-4 break-inside-avoid">
              <FadeIn delay={Math.min(i * 0.04, 0.2)}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Abrir imagem ${i + 1} em tela cheia`}
                  className={cn(
                    "group relative w-full overflow-hidden bg-apice-stone transition-all duration-500 hover:scale-[1.02]",
                    aspectClasses[i % aspectClasses.length],
                  )}
                >
                  <Image
                    src={galleryThumb(src)}
                    alt={`${empreendimento.nome} — imagem ${i + 1}`}
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL(600, 400)}
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgba(196,165,114,0.18) 0%, transparent 70%)",
                    }}
                  />
                </button>
              </FadeIn>
            </div>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-apice-ink/95 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpenIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Imagem ${openIndex + 1} de ${images.length}`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex(null);
              }}
              className="absolute right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center text-apice-cream transition-colors hover:text-apice-champagne"
              aria-label="Fechar"
            >
              <X size={28} />
            </button>
            {openIndex > 0 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex(openIndex - 1);
                }}
                className="absolute left-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-apice-cream transition-colors hover:text-apice-champagne"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={32} />
              </button>
            )}
            {openIndex < images.length - 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex(openIndex + 1);
                }}
                className="absolute right-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-apice-cream transition-colors hover:text-apice-champagne"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={32} />
              </button>
            )}
            <motion.div
              key={openIndex}
              className="relative aspect-[16/10] w-full max-w-5xl overflow-hidden bg-apice-stone"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[openIndex]}
                alt={`${empreendimento.nome} — imagem ampliada ${openIndex + 1}`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
                className="object-cover"
              />
              <p className="absolute bottom-4 right-4 inline-flex items-center bg-apice-ink/70 px-3 py-1.5 font-sans text-[10px] uppercase tracking-widest text-apice-cream backdrop-blur-sm">
                {openIndex + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
