import { POOL } from "@/data/unsplash-pool";

export type EmpreendimentoTipo = "residencial" | "comercial";
export type EmpreendimentoStatus = "lancamento" | "em-obra" | "entregue";

// Blueprint key — usada pelo PlantaSVG pra escolher o layout técnico.
export type BlueprintKey =
  | "STUDIO"
  | "1Q"
  | "2Q"
  | "3Q"
  | "4Q"
  | "COBERTURA"
  | "GARDEN"
  | "LOJA"
  | "SALA"
  | "HOTEL_SUITE";

export type FichaTecnicaItem = {
  label: string;
  valor: string;
};

export type Planta = {
  tipo: string;
  area: string;
  descricao: string;
  tipologia: BlueprintKey;
};

export type Tipologia = {
  tipo: string;
  area: string;
  descricao: string;
  tipologia: BlueprintKey;
};

export type AndamentoHistoricoItem = {
  data: string;
  etapa: string;
  foto?: string;
};

export type AndamentoObra = {
  percentual: number;
  etapaAtual: string;
  proximaEntrega: string;
  historico: AndamentoHistoricoItem[];
};

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
  destaque: boolean;

  // Imagens (URLs Unsplash via data/unsplash-pool.ts)
  heroImage: string;
  cardImage: string;
  galeria: string[];

  // SEO + ficha
  metaTitle: string;
  metaDescription: string;
  precoApartirDe?: string;
  area_min?: string;
  area_max?: string;
  vagasGaragem?: string;
  pontosInteresse: string[];
  fichaTecnica: FichaTecnicaItem[];
  plantas?: Planta[];
  tipologias?: Tipologia[];
  andamentoObra?: AndamentoObra;
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
    heroImage: POOL.res_facade_1,
    cardImage: POOL.res_facade_1,
    galeria: [
      POOL.res_int_1,
      POOL.res_int_2,
      POOL.res_amen_1,
      POOL.res_amen_2,
      POOL.res_int_3,
      POOL.res_facade_1,
    ],
    destaque: true,
    metaTitle:
      "Vértice Sudoeste — Apartamentos de alto padrão no Sudoeste, Brasília",
    metaDescription:
      "Lançamento residencial Ápice no Sudoeste com apartamentos de 92 a 184m², lazer completo em dois pavimentos e fachada em concreto pigmentado. Entrega Dez/2028.",
    precoApartirDe: "A partir de R$ 1.180.000",
    area_min: "92 m²",
    area_max: "184 m²",
    vagasGaragem: "2 a 3 vagas",
    pontosInteresse: [
      "Park Shopping — 1,2 km",
      "Aeroporto JK — 6 km",
      "Esplanada dos Ministérios — 8 km",
      "Hospital Sírio-Libanês — 4 km",
      "Colégio Sigma — 600 m",
    ],
    fichaTecnica: [
      { label: "Área do terreno", valor: "4.200 m²" },
      { label: "Total de unidades", valor: "48 apartamentos" },
      { label: "Pavimentos", valor: "12 + cobertura" },
      { label: "Pé direito", valor: "2,85 m" },
      { label: "Vagas por unidade", valor: "2 a 3" },
      {
        label: "Lazer",
        valor:
          "Piscina, academia, salão de festas, espaço gourmet, brinquedoteca, espaço pet",
      },
      { label: "Entrega prevista", valor: "Dez/2027" },
      {
        label: "Construção",
        valor: "Concreto armado, estrutura sismorresistente",
      },
    ],
    plantas: [
      {
        tipo: "3 quartos · 1 suíte",
        area: "92 m²",
        descricao:
          "Living integrado à varanda gourmet, cozinha americana e área de serviço separada.",
        tipologia: "3Q",
      },
      {
        tipo: "4 quartos · 2 suítes",
        area: "142 m²",
        descricao:
          "Layout amplo com home office integrado, lavabo e suíte master com closet.",
        tipologia: "4Q",
      },
      {
        tipo: "Cobertura duplex",
        area: "184 m²",
        descricao:
          "Cobertura com 4 suítes, terraço privativo de 60m² e piscina individual.",
        tipologia: "COBERTURA",
      },
    ],
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
    heroImage: POOL.com_facade_2,
    cardImage: POOL.com_facade_2,
    galeria: [
      POOL.com_facade_2,
      POOL.com_int_2,
      POOL.com_int_1,
      POOL.res_amen_2,
      POOL.com_facade_1,
      POOL.com_int_2,
    ],
    destaque: false,
    metaTitle:
      "Marco Setor Hoteleiro — Lajes corporativas LEED Gold no Plano Piloto",
    metaDescription:
      "Edifício corporativo Ápice no Setor Hoteleiro Sul com lajes de 850m² livres, certificação LEED Gold em projeto e heliporto homologado. Entrega Jun/2028.",
    precoApartirDe: "A partir de R$ 480.000",
    pontosInteresse: [
      "Esplanada dos Ministérios — 800 m",
      "Conjunto Nacional — 1 km",
      "Hotel Nacional — 200 m",
      "Setor Bancário Sul — 1,5 km",
      "Aeroporto JK — 9 km",
    ],
    fichaTecnica: [
      { label: "Área construída", valor: "22.500 m²" },
      { label: "Total de salas", valor: "32 conjuntos comerciais" },
      { label: "Pavimentos", valor: "18 + heliporto" },
      { label: "Lajes livres", valor: "850 m² por andar" },
      { label: "Modulação", valor: "1,25 m com piso elevado" },
      { label: "Vagas", valor: "1 vaga / 35 m² + valet" },
      { label: "Entrega prevista", valor: "Jun/2028" },
      { label: "Certificação", valor: "LEED Gold (em projeto)" },
    ],
    tipologias: [
      {
        tipo: "Sala compacta — 36 m²",
        area: "36 m²",
        descricao:
          "Sala individual com banheiro privativo e ponto de copa. Ideal para profissional liberal.",
        tipologia: "HOTEL_SUITE",
      },
      {
        tipo: "Sala média — 48 m²",
        area: "48 m²",
        descricao:
          "Sala com sala de espera, posição executiva e copa equipada. Para escritórios de até 6 postos.",
        tipologia: "SALA",
      },
      {
        tipo: "Conjunto — 72 m²",
        area: "72 m²",
        descricao:
          "Junção de duas salas com layout flexível. Suporta 10 a 12 postos de trabalho.",
        tipologia: "SALA",
      },
      {
        tipo: "Andar corporativo — 280 m²",
        area: "280 m²",
        descricao:
          "Meio andar dedicado com recepção independente, copa profissional e até 24 postos.",
        tipologia: "SALA",
      },
    ],
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
    heroImage: POOL.lago_1,
    cardImage: POOL.lago_2,
    galeria: [
      POOL.lago_1,
      POOL.res_facade_2,
      POOL.res_int_4,
      POOL.res_amen_1,
      POOL.res_int_5,
      POOL.lago_2,
    ],
    destaque: true,
    metaTitle:
      "Solar Lago Norte — Condomínio de casas de alto padrão no Lago Norte",
    metaDescription:
      "Condomínio horizontal Ápice com 18 casas de 380 a 520m², lotes a partir de 800m² e sistema fotovoltaico integrado. Em obra · Entrega Out/2026.",
    precoApartirDe: "A partir de R$ 2.450.000",
    area_min: "380 m²",
    area_max: "520 m²",
    vagasGaragem: "4 vagas cobertas",
    pontosInteresse: [
      "Iate Clube de Brasília — 1 km",
      "Pier 21 — 3 km",
      "Esplanada dos Ministérios — 12 km",
      "Aeroporto JK — 15 km",
      "Shopping Iguatemi — 8 km",
    ],
    fichaTecnica: [
      { label: "Área total do condomínio", valor: "32.000 m²" },
      { label: "Total de unidades", valor: "18 casas" },
      { label: "Lotes", valor: "800 m² a 1.200 m²" },
      { label: "Pé direito", valor: "3,00 m em todos os ambientes" },
      { label: "Vagas por casa", valor: "4 vagas cobertas" },
      {
        label: "Energia",
        valor: "Sistema fotovoltaico de 18 kWp por unidade",
      },
      { label: "Entrega prevista", valor: "Out/2026" },
      { label: "Construção", valor: "Estrutura mista metálica" },
    ],
    plantas: [
      {
        tipo: "Casa 4 suítes",
        area: "380 m²",
        descricao:
          "Térreo com living integrado, cozinha gourmet e suíte máster. Piso superior com 3 suítes adicionais.",
        tipologia: "4Q",
      },
      {
        tipo: "Casa 5 suítes",
        area: "520 m²",
        descricao:
          "Tipologia premium com home theater, adega climatizada, piscina privativa e área de gourmet completa.",
        tipologia: "COBERTURA",
      },
    ],
    andamentoObra: {
      percentual: 67,
      etapaAtual: "Acabamentos internos — 2ª fase",
      proximaEntrega: "Out/2026",
      historico: [
        { data: "Jan/2025", etapa: "Início das obras" },
        { data: "Mai/2025", etapa: "Fundação concluída" },
        { data: "Set/2025", etapa: "Estrutura concluída" },
        { data: "Fev/2026", etapa: "Vedação e instalações" },
        { data: "Abr/2026", etapa: "Acabamentos internos iniciados" },
      ],
    },
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
    heroImage: POOL.com_facade_1,
    cardImage: POOL.com_facade_1,
    galeria: [
      POOL.com_facade_1,
      POOL.com_int_1,
      POOL.com_int_2,
      POOL.com_facade_2,
      POOL.com_int_1,
      POOL.com_facade_1,
    ],
    destaque: false,
    metaTitle:
      "Evolution Corporate — Retrofit corporativo no Setor Comercial Sul",
    metaDescription:
      "Edifício corporativo Ápice em retrofit completo com lajes de 620m², fachada unitizada e BMS integral. Em obra · Entrega Mar/2027.",
    precoApartirDe: "A partir de R$ 850.000",
    pontosInteresse: [
      "Esplanada dos Ministérios — 1,2 km",
      "Conjunto Nacional — 800 m",
      "Setor Bancário Sul — 600 m",
      "Aeroporto JK — 10 km",
    ],
    fichaTecnica: [
      { label: "Área construída", valor: "18.700 m²" },
      { label: "Total de unidades", valor: "44 conjuntos comerciais" },
      { label: "Pavimentos", valor: "22 corporativos + 2 subsolos" },
      { label: "Lajes livres", valor: "620 m² por andar" },
      { label: "Elevadores", valor: "3 linhas Schindler 5500" },
      { label: "Vagas", valor: "1 vaga / 30 m² + 12 vagas valet" },
      { label: "Entrega prevista", valor: "Mar/2027" },
      {
        label: "Energia",
        valor: "Subestação dedicada de 1.250 kVA + gerador full",
      },
    ],
    tipologias: [
      {
        tipo: "Sala — 42 m²",
        area: "42 m²",
        descricao:
          "Unidade individual com sanitário privativo e ponto para copa.",
        tipologia: "SALA",
      },
      {
        tipo: "Sala dupla — 84 m²",
        area: "84 m²",
        descricao:
          "Conjunto de duas salas integradas com sala de reunião dedicada.",
        tipologia: "SALA",
      },
      {
        tipo: "Andar corporativo — 620 m²",
        area: "620 m²",
        descricao:
          "Andar inteiro com recepção privativa, copa profissional e até 56 postos de trabalho.",
        tipologia: "SALA",
      },
    ],
    andamentoObra: {
      percentual: 42,
      etapaAtual: "Estrutura — 8º pavimento de 18",
      proximaEntrega: "Mar/2027",
      historico: [
        { data: "Mai/2024", etapa: "Demolição interna concluída" },
        { data: "Set/2024", etapa: "Reforço estrutural concluído" },
        { data: "Jan/2025", etapa: "Início da nova estrutura" },
        { data: "Out/2025", etapa: "Estrutura — 4º pavimento" },
        { data: "Mar/2026", etapa: "Estrutura — 8º pavimento" },
      ],
    },
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
    heroImage: POOL.res_facade_3,
    cardImage: POOL.res_facade_3,
    galeria: [
      POOL.res_facade_3,
      POOL.res_int_6,
      POOL.res_amen_3,
      POOL.res_int_7,
      POOL.res_amen_2,
      POOL.res_int_8,
    ],
    destaque: false,
    metaTitle:
      "Horizonte Noroeste — Quatro torres residenciais no Noroeste, Brasília",
    metaDescription:
      "Empreendimento Ápice com quatro torres residenciais, 256 apartamentos de 89 a 156m² e lazer de 3.200m² integrado ao Parque Burle Marx. Em obra · Entrega Set/2027.",
    precoApartirDe: "A partir de R$ 980.000",
    area_min: "89 m²",
    area_max: "156 m²",
    vagasGaragem: "1 a 3 vagas",
    pontosInteresse: [
      "Parque Burle Marx — 200 m",
      "Shopping Noroeste — 1 km",
      "Aeroporto JK — 14 km",
      "Esplanada dos Ministérios — 9 km",
      "Hospital Brasília — 5 km",
    ],
    fichaTecnica: [
      { label: "Área do terreno", valor: "12.800 m²" },
      { label: "Total de unidades", valor: "256 apartamentos" },
      { label: "Torres", valor: "4 torres de 16 pavimentos" },
      { label: "Lazer", valor: "3.200 m² em embasamento comum" },
      { label: "Pé direito", valor: "2,80 m" },
      { label: "Vagas por unidade", valor: "1 a 3" },
      { label: "Entrega prevista", valor: "Set/2027" },
      {
        label: "Eficiência",
        valor: "Painéis solares e medição individualizada",
      },
    ],
    plantas: [
      {
        tipo: "2 quartos · 1 suíte",
        area: "89 m²",
        descricao:
          "Apartamento compacto com varanda integrada à sala e cozinha americana.",
        tipologia: "2Q",
      },
      {
        tipo: "3 quartos · 2 suítes",
        area: "126 m²",
        descricao: "Layout com home office, lavabo e suíte máster com closet.",
        tipologia: "3Q",
      },
    ],
    andamentoObra: {
      percentual: 28,
      etapaAtual: "Estrutura — 3º pavimento de 16",
      proximaEntrega: "Set/2027",
      historico: [
        { data: "Jul/2025", etapa: "Sondagem e terraplenagem" },
        { data: "Out/2025", etapa: "Fundação iniciada" },
        { data: "Jan/2026", etapa: "Fundação concluída" },
        { data: "Mar/2026", etapa: "Estrutura — 1º pavimento" },
        { data: "Mai/2026", etapa: "Estrutura — 3º pavimento" },
      ],
    },
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
    heroImage: POOL.res_facade_2,
    cardImage: POOL.res_facade_2,
    galeria: [
      POOL.res_facade_2,
      POOL.res_int_3,
      POOL.res_int_4,
      POOL.res_int_5,
      POOL.res_amen_3,
      POOL.res_int_2,
    ],
    destaque: false,
    metaTitle:
      "Residencial Granja do Torto — Casas térreas de alto padrão entregues em 2023",
    metaDescription:
      "Condomínio Ápice com 12 casas térreas de 320m² em estrutura mista. Premiado em 2024, 100% comercializado, NPS 78 no pós-entrega.",
    area_min: "320 m²",
    area_max: "320 m²",
    vagasGaragem: "3 vagas cobertas",
    pontosInteresse: [
      "Universidade de Brasília — 1,5 km",
      "Parque da Cidade — 4 km",
      "Esplanada dos Ministérios — 7 km",
      "Aeroporto JK — 13 km",
      "Hospital Sarah — 3 km",
    ],
    fichaTecnica: [
      { label: "Área total do condomínio", valor: "8.400 m²" },
      { label: "Total de unidades", valor: "12 casas térreas" },
      { label: "Área por casa", valor: "320 m² em terreno de 600 m²" },
      { label: "Pé direito", valor: "3,00 m" },
      { label: "Vagas por casa", valor: "3 vagas cobertas" },
      {
        label: "Sistema construtivo",
        valor: "Estrutura metálica + alvenaria",
      },
      { label: "Entrega", valor: "Out/2023 (no prazo)" },
      { label: "Reconhecimento", valor: "Prêmio Master Imobiliário 2024" },
    ],
    plantas: [
      {
        tipo: "Casa térrea — modelo A",
        area: "320 m²",
        descricao:
          "Layout linear com living, cozinha gourmet e 4 suítes em um único piso. Garagem coberta para 3 carros.",
        tipologia: "4Q",
      },
      {
        tipo: "Casa térrea — modelo B",
        area: "320 m²",
        descricao:
          "Layout em L com pátio interno, escritório integrado e suíte máster com banheira de imersão.",
        tipologia: "GARDEN",
      },
    ],
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
    heroImage: POOL.com_facade_2,
    cardImage: POOL.com_facade_1,
    galeria: [
      POOL.com_facade_1,
      POOL.com_int_1,
      POOL.com_int_2,
      POOL.com_facade_2,
      POOL.res_amen_2,
      POOL.com_int_1,
    ],
    destaque: false,
    metaTitle:
      "Centro Empresarial Águas Claras — Edifício corporativo entregue em 2022",
    metaDescription:
      "Edifício corporativo Ápice em Águas Claras com 20 pavimentos e 38 mil m². 100% ocupado, gestão Cushman & Wakefield, entrega 2022.",
    pontosInteresse: [
      "Estação Águas Claras Metrô — 400 m",
      "Shopping Águas Claras — 600 m",
      "Park Shopping — 6 km",
      "Aeroporto JK — 18 km",
      "Hospital Águas Claras — 1,2 km",
    ],
    fichaTecnica: [
      { label: "Área construída", valor: "38.000 m²" },
      { label: "Total de unidades", valor: "60 conjuntos comerciais" },
      { label: "Pavimentos", valor: "20 corporativos + 5 garagem" },
      { label: "Lajes", valor: "720 m² por andar" },
      { label: "Ar condicionado", valor: "VRF Daikin centralizado" },
      { label: "Vagas", valor: "560 vagas + 30 valet" },
      { label: "Entrega", valor: "Jul/2022 (no prazo)" },
      { label: "Operação atual", valor: "100% ocupação · gestão CW" },
    ],
    tipologias: [
      {
        tipo: "Sala — 38 m²",
        area: "38 m²",
        descricao:
          "Unidade individual com banheiro privativo. Mobília opcional.",
        tipologia: "SALA",
      },
      {
        tipo: "Conjunto — 96 m²",
        area: "96 m²",
        descricao:
          "Conjunto de salas com sala de espera e área técnica de servidor.",
        tipologia: "SALA",
      },
      {
        tipo: "Andar corporativo — 720 m²",
        area: "720 m²",
        descricao:
          "Andar inteiro com até 64 postos, copa industrial e duas salas de reunião dedicadas.",
        tipologia: "SALA",
      },
    ],
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
    heroImage: POOL.res_facade_4,
    cardImage: POOL.res_facade_4,
    galeria: [
      POOL.res_facade_4,
      POOL.res_int_1,
      POOL.res_int_3,
      POOL.res_amen_1,
      POOL.res_int_5,
      POOL.res_int_8,
    ],
    destaque: true,
    metaTitle: "Edifício Lúmen Lago Sul — Boutique residencial entregue em 2024",
    metaDescription:
      "Edifício boutique Ápice no Lago Sul com 12 unidades de 320m², uma por andar, elevador privativo e personalização integral. Entregue 45 dias antes do prazo.",
    area_min: "320 m²",
    area_max: "320 m²",
    vagasGaragem: "4 vagas cobertas",
    pontosInteresse: [
      "Pontão do Lago Sul — 1 km",
      "Iate Clube — 2 km",
      "Esplanada dos Ministérios — 9 km",
      "Aeroporto JK — 6 km",
      "Hospital DF Star — 4 km",
    ],
    fichaTecnica: [
      { label: "Área construída", valor: "4.800 m²" },
      { label: "Total de unidades", valor: "12 apartamentos" },
      { label: "Pavimentos", valor: "12 (1 unidade por andar)" },
      { label: "Pé direito", valor: "3,00 m com living de 3,40 m" },
      { label: "Vagas por unidade", valor: "4 vagas cobertas" },
      { label: "Elevadores", valor: "2 elevadores privativos" },
      { label: "Entrega", valor: "Mai/2024 (45 dias antes do prazo)" },
      { label: "Construção", valor: "Concreto armado de alta resistência" },
    ],
    plantas: [
      {
        tipo: "Apartamento padrão",
        area: "320 m²",
        descricao:
          "Andar inteiro com 4 suítes, living de 80m², lavabo, cozinha integrada e área de serviço.",
        tipologia: "4Q",
      },
      {
        tipo: "Cobertura duplex",
        area: "640 m²",
        descricao:
          "Cobertura ocupando dois pavimentos com terraço privativo, piscina e churrasqueira.",
        tipologia: "COBERTURA",
      },
      {
        tipo: "Personalização integral",
        area: "varia",
        descricao:
          "Estrutura preparada para junção de unidades, mudança de layout e especificação cliente-a-cliente.",
        tipologia: "GARDEN",
      },
    ],
  },
];

export function getEmpreendimentoBySlug(
  slug: string,
): Empreendimento | undefined {
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

export function getEmpreendimentosRelacionados(
  slug: string,
  limit = 3,
): Empreendimento[] {
  const atual = getEmpreendimentoBySlug(slug);
  if (!atual) return [];

  const mesmoTipo = EMPREENDIMENTOS.filter(
    (e) => e.slug !== slug && e.tipo === atual.tipo,
  );

  if (mesmoTipo.length >= limit) {
    return mesmoTipo.slice(0, limit);
  }

  const complementar = EMPREENDIMENTOS.filter(
    (e) => e.slug !== slug && e.tipo !== atual.tipo,
  );

  return [...mesmoTipo, ...complementar].slice(0, limit);
}
