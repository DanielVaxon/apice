"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-apice-stone/10 transition-all duration-300",
          scrolled
            ? "bg-apice-cream/85 backdrop-blur-md"
            : "bg-apice-cream",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10 md:py-6 lg:px-16">
          <Link href="/" className="group flex flex-col">
            <span className="font-display text-2xl font-bold uppercase tracking-widest leading-none text-apice-ink transition-colors group-hover:text-apice-stone md:text-3xl">
              ÁPICE
            </span>
            <span className="mt-1 font-sans text-[10px] uppercase tracking-widest-3 text-apice-stone">
              Construtora · Brasília
            </span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-xs font-medium uppercase tracking-widest text-apice-stone transition-colors duration-300 hover:text-apice-champagne"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/area-do-cliente" variant="secondary" size="sm">
              Área do Cliente
            </Button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
            className="flex h-10 w-10 items-center justify-center text-apice-ink transition-colors hover:text-apice-champagne md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 transform bg-apice-cream transition-all duration-500 md:hidden",
          menuOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0",
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-6" aria-label="Navegação móvel">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl font-medium text-apice-ink transition-colors hover:text-apice-champagne"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            <div className="h-px w-full bg-apice-stone/15" aria-hidden />
            <Button
              href="/area-do-cliente"
              variant="primary"
              size="md"
              onClick={() => setMenuOpen(false)}
            >
              Área do Cliente
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
