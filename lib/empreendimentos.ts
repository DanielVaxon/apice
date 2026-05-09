export type EmpreendimentoTipo = "residencial" | "comercial";
export type EmpreendimentoStatus = "lancamento" | "em-obra" | "entregue";

export type Empreendimento = {
  slug: string;
  nome: string;
  tipo: EmpreendimentoTipo;
  status: EmpreendimentoStatus;
  localizacao: string;
  endereco: string;
  descricaoCurta: string;
  descricaoLonga: string;
  area: string;
  unidades: number;
  quartos?: string;
  vagas?: string;
  entrega?: string;
  ano?: number;
  diferenciais: string[];
  imagemHero: string;
  imagensGaleria: string[];
  destaque: boolean;
};

export const EMPREENDIMENTOS: Empreendimento[] = [
  {
    slug: "vertice-sudoeste",
    nome: "Vértice Sudoeste",
    tipo: "residencial",
    status: "lancamento",
    localizacao: "Sudoeste, Brasília/DF",
    endereco: "SQSW 305, Bloco H — Sudoeste",
    descricaoCurta:
      "Torre única residencial de alto padrão com 24 pavimentos e fachada em concreto aparente.",
    descricaoLonga:
      "Vértice Sudoeste eleva o padrão residencial da região com torre única de 24 pavimentos, planta de 142m² a 218m² e acabamento de fachada em concreto pigmentado. Projeto arquitetônico assinado por escritório premiado, com modulação estrutural pensada para flexibilidade de layout.\n\nO empreendimento prioriza eficiência operacional: medição individualizada de água, gás encanado, infraestrutura para automação residencial e gerador integral. Lazer completo distribuído em dois pavimentos, com piscina raia de 25 metros e espaços gourmet privativos.",
    area: "142m² a 218m²",
    unidades: 96,
    quartos: "3 e 4 suítes",
    vagas: "2 a 4 vagas",
    entrega: "Dezembro de 2028",
    diferenciais: [
      "Pé-direito de 3,20m nos living rooms",
      "Hall social com pé-direito duplo",
      "Lazer completo em dois pavimentos",
      "Piscina raia de 25 metros aquecida",
      "Espaço gourmet privativo por unidade",
      "Gerador full e infraestrutura para carga elétrica",
    ],
    imagemHero: "/images/empreendimentos/vertice-sudoeste/hero.jpg",
    imagensGaleria: [
      "/images/empreendimentos/vertice-sudoeste/galeria-01.jpg",
      "/images/empreendimentos/vertice-sudoeste/galeria-02.jpg",
      "/images/empreendimentos/vertice-sudoeste/galeria-03.jpg",
      "/images/empreendimentos/vertice-sudoeste/galeria-04.jpg",
      "/images/empreendimentos/vertice-sudoeste/galeria-05.jpg",
    ],
    destaque: true,
  },
  {
    slug: "marco-setor-hoteleiro",
    nome: "Marco Setor Hoteleiro",
    tipo: "comercial",
    status: "lancamento",
    localizacao: "Setor Hoteleiro Sul, Brasília/DF",
    endereco: "SHS Quadra 6, Conjunto A",
    descricaoCurta:
      "Edifício corporativo de uso misto com 18 pavimentos, certificação LEED Gold em projeto.",
    descricaoLonga:
      "Marco Setor Hoteleiro reposiciona um endereço estratégico no Plano Piloto. Torre corporativa com lajes de 850m² livres, modulação 1,25m e infraestrutura para data centers de pequeno porte por andar.\n\nProjeto desenvolvido com critério LEED Gold em fase de projeto, com captação de água pluvial, fachada ventilada e cortinas térmicas calculadas para a orientação solar de Brasília. Térreo de uso público com lobby duplo, café e espaço de convenções para 280 pessoas.",
    area: "Lajes de 850m² livres",
    unidades: 32,
    entrega: "Junho de 2028",
    diferenciais: [
      "Lajes corporativas de 850m² livres",
      "Modulação 1,25m com piso elevado",
      "Lobby duplo com pé-direito de 7m",
      "Certificação LEED Gold em projeto",
      "Centro de convenções para 280 pessoas",
      "Heliporto homologado no rooftop",
    ],
    imagemHero: "/images/empreendimentos/marco-setor-hoteleiro/hero.jpg",
    imagensGaleria: [
      "/images/empreendimentos/marco-setor-hoteleiro/galeria-01.jpg",
      "/images/empreendimentos/marco-setor-hoteleiro/galeria-02.jpg",
      "/images/empreendimentos/marco-setor-hoteleiro/galeria-03.jpg",
      "/images/empreendimentos/marco-setor-hoteleiro/galeria-04.jpg",
    ],
    destaque: false,
  },
  {
    slug: "solar-lago-norte",
    nome: "Solar Lago Norte",
    tipo: "residencial",
    status: "em-obra",
    localizacao: "Lago Norte, Brasília/DF",
    endereco: "SHIN QL 12, Conjunto 9",
    descricaoCurta:
      "Condomínio horizontal de 18 casas no Lago Norte com lotes a partir de 800m².",
    descricaoLonga:
      "Solar Lago Norte é a primeira incursão da Ápice em condomínio horizontal de alto padrão. São 18 casas projetadas em três tipologias arquitetônicas, todas com pé-direito de 3 metros, suítes em piso superior e living integrado ao paisagismo nativo do Cerrado.\n\nA obra avança em estágio de acabamento, com previsão de entrega para o segundo semestre de 2026. Infraestrutura de portaria com fluxo separado de moradores e prestadores, vias internas em concreto permeável e área de preservação permanente lindeira mantida integralmente.",
    area: "Casas de 380m² a 520m²",
    unidades: 18,
    quartos: "4 suítes",
    vagas: "4 vagas cobertas",
    entrega: "Outubro de 2026",
    diferenciais: [
      "Lotes de 800m² a 1.200m²",
      "Três tipologias arquitetônicas",
      "Sistema fotovoltaico residencial integrado",
      "Cisterna de reuso de águas pluviais",
      "Vias internas em concreto permeável",
      "APP do Cerrado preservada integralmente",
    ],
    imagemHero: "/images/empreendimentos/solar-lago-norte/hero.jpg",
    imagensGaleria: [
      "/images/empreendimentos/solar-lago-norte/galeria-01.jpg",
      "/images/empreendimentos/solar-lago-norte/galeria-02.jpg",
      "/images/empreendimentos/solar-lago-norte/galeria-03.jpg",
      "/images/empreendimentos/solar-lago-norte/galeria-04.jpg",
      "/images/empreendimentos/solar-lago-norte/galeria-05.jpg",
    ],
    destaque: true,
  },
  {
    slug: "evolution-corporate",
    nome: "Evolution Corporate",
    tipo: "comercial",
    status: "em-obra",
    localizacao: "Setor Comercial Sul, Brasília/DF",
    endereco: "SCS Quadra 9, Bloco B",
    descricaoCurta:
      "Edifício corporativo retrofitado de 22 pavimentos com lajes de 620m² e fachada unitizada.",
    descricaoLonga:
      "Evolution Corporate é um projeto de retrofit estrutural completo de um edifício dos anos 80 em endereço consolidado do SCS. A intervenção mantém apenas o esqueleto de concreto original, com substituição integral de fachada por sistema unitizado vidrado.\n\nO programa entrega 22 pavimentos corporativos com lajes de 620m², infraestrutura completa para BMS (Building Management System), gerador full, três linhas de elevadores e dois subsolos de garagem. Obra em fase de envidraçamento, com entrega prevista para o início de 2027.",
    area: "Lajes de 620m²",
    unidades: 44,
    entrega: "Março de 2027",
    diferenciais: [
      "Retrofit estrutural completo",
      "Fachada unitizada com vidro low-e",
      "Building Management System integral",
      "Três linhas de elevadores Schindler",
      "Dois subsolos de garagem",
      "Sistema de combate a incêndio classe A",
    ],
    imagemHero: "/images/empreendimentos/evolution-corporate/hero.jpg",
    imagensGaleria: [
      "/images/empreendimentos/evolution-corporate/galeria-01.jpg",
      "/images/empreendimentos/evolution-corporate/galeria-02.jpg",
      "/images/empreendimentos/evolution-corporate/galeria-03.jpg",
      "/images/empreendimentos/evolution-corporate/galeria-04.jpg",
    ],
    destaque: false,
  },
  {
    slug: "horizonte-noroeste",
    nome: "Horizonte Noroeste",
    tipo: "residencial",
    status: "em-obra",
    localizacao: "Noroeste, Brasília/DF",
    endereco: "SQNW 110, Bloco D",
    descricaoCurta:
      "Quatro torres residenciais com integração ao Parque Burle Marx e área de lazer de 3.200m².",
    descricaoLonga:
      "Horizonte Noroeste consolida a presença da Ápice em um dos bairros mais novos de Brasília. O projeto entrega quatro torres de 16 pavimentos sobre embasamento comum de lazer, com 3.200m² de áreas comuns e integração visual direta com o Parque Burle Marx.\n\nObra em estrutura ascendente, com a primeira torre na laje de cobertura. Plantas de 89m² a 156m², opções de garden e cobertura duplex. Foco em eficiência energética com painéis solares para áreas comuns e medição individualizada para todas as utilities.",
    area: "89m² a 156m²",
    unidades: 256,
    quartos: "2, 3 e 4 suítes",
    vagas: "1 a 3 vagas",
    entrega: "Setembro de 2027",
    diferenciais: [
      "Quatro torres com lazer integrado",
      "Área comum de 3.200m²",
      "Integração visual com Parque Burle Marx",
      "Coberturas duplex e gardens",
      "Painéis solares para áreas comuns",
      "Medição individualizada de água e gás",
    ],
    imagemHero: "/images/empreendimentos/horizonte-noroeste/hero.jpg",
    imagensGaleria: [
      "/images/empreendimentos/horizonte-noroeste/galeria-01.jpg",
      "/images/empreendimentos/horizonte-noroeste/galeria-02.jpg",
      "/images/empreendimentos/horizonte-noroeste/galeria-03.jpg",
      "/images/empreendimentos/horizonte-noroeste/galeria-04.jpg",
      "/images/empreendimentos/horizonte-noroeste/galeria-05.jpg",
    ],
    destaque: false,
  },
  {
    slug: "residencial-granja-do-torto",
    nome: "Residencial Granja do Torto",
    tipo: "residencial",
    status: "entregue",
    localizacao: "Granja do Torto, Brasília/DF",
    endereco: "Granja do Torto, Lote 04",
    descricaoCurta:
      "Condomínio de 12 casas térreas entregue em 2023 com paisagismo nativo do Cerrado.",
    descricaoLonga:
      "Entregue em outubro de 2023, o Residencial Granja do Torto é referência de integração entre arquitetura contemporânea e paisagismo nativo. As 12 casas térreas de 320m² foram concebidas em sistema construtivo misto, com estrutura metálica e fechamento em alvenaria estrutural, otimizando prazo de obra sem comprometer durabilidade.\n\nO projeto recebeu o Prêmio Master Imobiliário 2024 na categoria Residencial Horizontal de Alto Padrão. 100% das unidades comercializadas, com NPS de 78 entre proprietários ouvidos no pós-entrega.",
    area: "Casas de 320m²",
    unidades: 12,
    quartos: "4 suítes",
    vagas: "3 vagas cobertas",
    ano: 2023,
    diferenciais: [
      "Sistema construtivo misto metálico",
      "Paisagismo nativo do Cerrado",
      "Prêmio Master Imobiliário 2024",
      "NPS de 78 no pós-entrega",
      "Entrega no prazo contratual",
      "Manual do proprietário digital integrado",
    ],
    imagemHero: "/images/empreendimentos/residencial-granja-do-torto/hero.jpg",
    imagensGaleria: [
      "/images/empreendimentos/residencial-granja-do-torto/galeria-01.jpg",
      "/images/empreendimentos/residencial-granja-do-torto/galeria-02.jpg",
      "/images/empreendimentos/residencial-granja-do-torto/galeria-03.jpg",
      "/images/empreendimentos/residencial-granja-do-torto/galeria-04.jpg",
    ],
    destaque: false,
  },
  {
    slug: "centro-empresarial-aguas-claras",
    nome: "Centro Empresarial Águas Claras",
    tipo: "comercial",
    status: "entregue",
    localizacao: "Águas Claras, Brasília/DF",
    endereco: "Avenida das Araucárias, Lote 4205",
    descricaoCurta:
      "Edifício corporativo de 20 pavimentos entregue em 2022 com 100% de ocupação atual.",
    descricaoLonga:
      "Entregue em julho de 2022, o Centro Empresarial Águas Claras é o maior projeto comercial entregue pela Ápice fora do Plano Piloto. São 20 pavimentos corporativos sobre cinco pavimentos de garagem, totalizando 38 mil m² de área construída.\n\nO empreendimento atingiu 100% de ocupação 14 meses após a entrega, com locatários de longo prazo entre escritórios de advocacia, consultorias e operações regionais de empresas listadas. Operação predial sob gestão da Cushman & Wakefield desde a entrega.",
    area: "Lajes de 720m²",
    unidades: 60,
    ano: 2022,
    diferenciais: [
      "100% de ocupação após 14 meses",
      "Gestão Cushman & Wakefield",
      "Cinco pavimentos de garagem",
      "Heliporto homologado",
      "Sistema de ar condicionado VRF",
      "Subestação dedicada de 1.500 kVA",
    ],
    imagemHero: "/images/empreendimentos/centro-empresarial-aguas-claras/hero.jpg",
    imagensGaleria: [
      "/images/empreendimentos/centro-empresarial-aguas-claras/galeria-01.jpg",
      "/images/empreendimentos/centro-empresarial-aguas-claras/galeria-02.jpg",
      "/images/empreendimentos/centro-empresarial-aguas-claras/galeria-03.jpg",
      "/images/empreendimentos/centro-empresarial-aguas-claras/galeria-04.jpg",
    ],
    destaque: false,
  },
  {
    slug: "edificio-lumen-lago-sul",
    nome: "Edifício Lúmen Lago Sul",
    tipo: "residencial",
    status: "entregue",
    localizacao: "Lago Sul, Brasília/DF",
    endereco: "SHIS QI 5, Conjunto 12",
    descricaoCurta:
      "Edifício boutique residencial com 12 unidades exclusivas entregue em 2024.",
    descricaoLonga:
      "Edifício Lúmen é projeto residencial boutique de doze unidades, entregue em maio de 2024 no coração do Lago Sul. Cada andar abriga uma única unidade de 320m², com elevador privativo e hall social independente.\n\nA obra foi entregue 45 dias antes do prazo contratual, com 100% das unidades comercializadas durante a fase de obra. Acabamentos especificados linha-a-linha pelo cliente final, com estrutura preparada para personalizações em todos os pavimentos.",
    area: "Andares de 320m²",
    unidades: 12,
    quartos: "4 suítes",
    vagas: "4 vagas cobertas",
    ano: 2024,
    diferenciais: [
      "Uma unidade por andar",
      "Elevador privativo por unidade",
      "Hall social independente",
      "Entrega 45 dias antes do prazo",
      "100% comercializado em obra",
      "Personalização integral de acabamentos",
    ],
    imagemHero: "/images/empreendimentos/edificio-lumen-lago-sul/hero.jpg",
    imagensGaleria: [
      "/images/empreendimentos/edificio-lumen-lago-sul/galeria-01.jpg",
      "/images/empreendimentos/edificio-lumen-lago-sul/galeria-02.jpg",
      "/images/empreendimentos/edificio-lumen-lago-sul/galeria-03.jpg",
      "/images/empreendimentos/edificio-lumen-lago-sul/galeria-04.jpg",
      "/images/empreendimentos/edificio-lumen-lago-sul/galeria-05.jpg",
    ],
    destaque: true,
  },
];

export function getEmpreendimentoBySlug(slug: string): Empreendimento | undefined {
  return EMPREENDIMENTOS.find((e) => e.slug === slug);
}

export function getEmpreendimentosByStatus(
  status: EmpreendimentoStatus,
): Empreendimento[] {
  return EMPREENDIMENTOS.filter((e) => e.status === status);
}

export function getEmpreendimentosDestaque(): Empreendimento[] {
  return EMPREENDIMENTOS.filter((e) => e.destaque);
}
