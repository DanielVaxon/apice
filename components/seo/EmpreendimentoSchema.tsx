import type { Empreendimento } from "@/lib/empreendimentos";
import { APICE_INFO } from "@/lib/constants";

type SchemaNode = Record<string, unknown>;

export function EmpreendimentoSchema({
  empreendimento,
}: {
  empreendimento: Empreendimento;
}) {
  const baseUrl = APICE_INFO.url.replace(/\/$/, "");
  const isResidencial = empreendimento.tipo === "residencial";

  const orgSchema: SchemaNode = {
    "@type": "RealEstateAgent",
    "@id": `${baseUrl}/#organization`,
    name: APICE_INFO.razaoSocial,
    url: baseUrl,
    telephone: APICE_INFO.telefone,
    email: APICE_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: APICE_INFO.endereco.logradouro,
      addressLocality: APICE_INFO.endereco.cidade,
      addressRegion: APICE_INFO.endereco.uf,
      postalCode: APICE_INFO.endereco.cep,
      addressCountry: "BR",
    },
  };

  const placeSchema: SchemaNode = {
    "@type": "Place",
    "@id": `${baseUrl}/empreendimentos/${empreendimento.slug}#place`,
    name: empreendimento.nome,
    description: empreendimento.descricaoCurta,
    url: `${baseUrl}/empreendimentos/${empreendimento.slug}`,
    image: empreendimento.heroImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: empreendimento.endereco,
      addressLocality: APICE_INFO.endereco.cidade,
      addressRegion: APICE_INFO.endereco.uf,
      addressCountry: "BR",
    },
  };

  const buildingSchema: SchemaNode = {
    "@type": isResidencial ? "Residence" : "CommercialBuilding",
    "@id": `${baseUrl}/empreendimentos/${empreendimento.slug}#building`,
    name: empreendimento.nome,
    description: empreendimento.descricaoLonga,
    url: `${baseUrl}/empreendimentos/${empreendimento.slug}`,
    ...(empreendimento.quartos && { numberOfRooms: empreendimento.quartos }),
    amenityFeature: empreendimento.diferenciais.map((d) => ({
      "@type": "LocationFeatureSpecification",
      name: d,
    })),
  };

  const graph: SchemaNode[] = [orgSchema, placeSchema, buildingSchema];

  if (empreendimento.precoApartirDe) {
    const lowPriceDigits = empreendimento.precoApartirDe.replace(/\D/g, "");
    const productSchema: SchemaNode = {
      "@type": "Product",
      "@id": `${baseUrl}/empreendimentos/${empreendimento.slug}#product`,
      name: empreendimento.nome,
      description: empreendimento.descricaoCurta,
      image: empreendimento.heroImage,
      brand: { "@type": "Brand", name: APICE_INFO.nomeFantasia },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "BRL",
        ...(lowPriceDigits && { lowPrice: lowPriceDigits }),
        availability:
          empreendimento.status === "entregue"
            ? "https://schema.org/SoldOut"
            : empreendimento.status === "lancamento"
              ? "https://schema.org/PreOrder"
              : "https://schema.org/InStock",
        seller: { "@id": `${baseUrl}/#organization` },
      },
    };
    graph.push(productSchema);
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
