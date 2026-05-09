export const APICE_INFO = {
  razaoSocial: "ÁPICE EMPREENDIMENTOS E CONSTRUÇÕES LTDA",
  nomeFantasia: "Construtora Ápice",
  tagline: "Construímos o que permanece.",
  cnpj: "38.421.097/0001-65",
  crea: "12345-D",
  fundacao: 2008,
  anosMercado: 17,
  endereco: {
    logradouro: "SCS Quadra 02, Bloco A",
    complemento: "Edifício Empire Center, Sala 1204",
    bairro: "Asa Sul",
    cidade: "Brasília",
    uf: "DF",
    cep: "70302-008",
    full: "SCS Quadra 02, Bloco A, Edifício Empire Center, Sala 1204 — Asa Sul, Brasília/DF — CEP 70302-008",
  },
  telefone: "(61) 3034-9166",
  telefoneRaw: "+556130349166",
  email: "contato@construtoraapice.com.br",
  horario: "Seg–Sex · 9h às 18h",
  numeros: {
    totalEmpreendimentos: 38,
    metrosQuadradosEntregues: 2_400_000,
    familiasAtendidas: 4_200,
  },
  redes: {
    instagram: "https://instagram.com/construtoraapice",
    linkedin: "https://linkedin.com/company/construtora-apice",
  },
  url: "https://apice.vaxon.com.br",
} as const;

export const NAV_ITEMS = [
  { label: "Empreendimentos", href: "/empreendimentos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Processo", href: "/processo-construtivo" },
  { label: "Sustentabilidade", href: "/sustentabilidade" },
  { label: "Imprensa", href: "/imprensa" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
] as const;
