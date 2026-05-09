import type { MetadataRoute } from "next";
import { APICE_INFO } from "@/lib/constants";
import { EMPREENDIMENTOS } from "@/lib/empreendimentos";

const STATIC_ROUTES = [
  "/",
  "/empreendimentos",
  "/sobre",
  "/processo-construtivo",
  "/sustentabilidade",
  "/imprensa",
  "/blog",
  "/contato",
  "/politica-de-privacidade",
  "/termos-de-uso",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = APICE_INFO.url.replace(/\/$/, "");
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));

  const empreendimentoEntries: MetadataRoute.Sitemap = EMPREENDIMENTOS.map(
    (empreendimento) => ({
      url: `${base}/empreendimentos/${empreendimento.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: empreendimento.destaque ? 0.9 : 0.6,
    }),
  );

  const blogEntries: MetadataRoute.Sitemap = [];

  return [...staticEntries, ...empreendimentoEntries, ...blogEntries];
}
