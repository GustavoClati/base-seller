export type SiteMode = "preview" | "live";

export type MediaConfig = {
  heroVideo: string | null;
  heroPoster: string | null;
  vslVideo: string | null;
  vslPoster: string | null;
  spreadsheetPreview: string | null;
  authorPortrait: string | null;
  salesDashboard: string | null;
  ordersProof: string | null;
  supplierConversation: string | null;
  finalCtaImage: string | null;
  ogImage: string | null;
};

export type Testimonial = {
  name: string;
  photo?: string;
  text: string;
  specificResult?: string;
  resultType?: string;
  date?: string;
};

const siteMode: SiteMode =
  process.env.NEXT_PUBLIC_SITE_MODE === "live" ? "live" : "preview";

export const siteContent = {
  brandName: "Base do Seller",
  supplierCount: 18,
  authorName: "Gustavo",

  siteMode,

  checkoutUrl: process.env.NEXT_PUBLIC_CAKTO_CHECKOUT_URL?.trim() ?? "",
  memberAreaUrl: process.env.NEXT_PUBLIC_MEMBER_AREA_URL?.trim() ?? "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ?? "",

  offer: {
    compareAtPrice: "R$ 119,89",
    price: process.env.NEXT_PUBLIC_OFFER_PRICE?.trim() || "R$ 59,89",
    installments: process.env.NEXT_PUBLIC_OFFER_INSTALLMENTS?.trim() ?? "",
    paymentNote:
      process.env.NEXT_PUBLIC_OFFER_PAYMENT_NOTE?.trim() ||
      "Pagamento processado pela Cakto.",
    accessNote: process.env.NEXT_PUBLIC_OFFER_ACCESS_NOTE?.trim() ?? "",
    accessFaqAnswer:
      process.env.NEXT_PUBLIC_OFFER_ACCESS_FAQ_ANSWER?.trim() ?? "",
    guaranteeDays: 7,
  },

  promotion: {
    enabled: process.env.NEXT_PUBLIC_PROMOTION_ENABLED !== "false",
    endsAt: process.env.NEXT_PUBLIC_PROMOTION_END_AT?.trim() ?? "",
    label:
      process.env.NEXT_PUBLIC_PROMOTION_LABEL?.trim() ||
      "Condição especial da campanha",
    expiredText:
      process.env.NEXT_PUBLIC_PROMOTION_EXPIRED_TEXT?.trim() ||
      "Esta condição foi encerrada",
  },

  media: {
    heroVideo: null,
    heroPoster: null,
    vslVideo: null,
    vslPoster: "/images/training-process.webp",
    spreadsheetPreview: "/images/spreadsheet-illustration.webp",
    authorPortrait: null,
    salesDashboard: "/images/real-sales-dashboard.webp",
    ordersProof: "/images/real-live-sales-current.webp",
    supplierConversation: null,
    finalCtaImage: "/images/final-cta-start-with-base.webp",
    ogImage: null,
  } as MediaConfig,

  testimonials: [] as Testimonial[],
} as const;

export const navigationItems = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "O que você recebe", href: "#o-que-voce-recebe" },
  { label: "Para quem é", href: "#para-quem-e" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

export const problemStatements = [
  "Preço sem frete não é custo.",
  "Faturamento sem despesas não é margem.",
  "Contato sem análise não é oportunidade.",
] as const;

export const methodSteps = [
  {
    number: "01",
    title: "Encontrar",
    description:
      "Aprenda a pesquisar importadoras, distribuidoras e atacadistas sem depender apenas de listas prontas.",
  },
  {
    number: "02",
    title: "Validar",
    description:
      "Confirme catálogo, pedido mínimo, envio, nota fiscal e condições comerciais antes de fazer um pagamento.",
  },
  {
    number: "03",
    title: "Analisar",
    description:
      "Coloque custo, frete, tarifas, imposto, preço e concorrência dentro da mesma decisão.",
  },
  {
    number: "04",
    title: "Testar",
    description:
      "Comece com uma quantidade menor e aumente apenas o que demonstrar demanda e margem suficiente para a sua operação.",
  },
] as const;

export const deliverables = [
  {
    number: "01",
    title: "Treinamento direto ao ponto",
    description:
      "Aulas práticas sobre pesquisa de fornecedores, solicitação de catálogo, seleção de produtos, análise e primeiro teste.",
  },
  {
    number: "02",
    title: "Base de fornecedores em Excel",
    description:
      "Nome, categoria, WhatsApp, Instagram, site e links completos dos fornecedores utilizados na operação do autor.",
  },
  {
    number: "03",
    title: "Análise prática de produto",
    description:
      "Demonstração do processo de análise considerando custo, frete, tarifas, imposto, preço e concorrência.",
  },
  {
    number: "04",
    title: "Acesso organizado",
    description:
      "Conteúdo disponibilizado pela área de membros, em uma sequência pensada para levar da pesquisa até o uso da base.",
  },
] as const;

export const spreadsheetFields = [
  "Nome",
  "Categoria",
  "WhatsApp",
  "Instagram",
  "Site",
  "Links completos",
] as const;

export const audience = {
  forYou: [
    "Vende ou quer começar a vender em marketplaces",
    "Quer trabalhar com estoque próprio",
    "Está procurando fornecedores nacionais",
    "Quer aprender a encontrar novos contatos",
    "Quer analisar antes de investir",
    "Está disposto a pesquisar, comparar e testar",
    "Quer reduzir o tempo gasto procurando contatos",
    "Prefere confirmar condições antes do primeiro pedido",
  ],
  notForYou: [
    "Procura lucro garantido",
    "Quer um produto que venda sozinho",
    "Espera receber anúncios prontos",
    "Procura uma plataforma automatizada de dropshipping",
    "Não quer calcular custos",
    "Quer pular a etapa de pesquisa e análise",
  ],
} as const;

export const objectionBreakers = [
  {
    question: "E se eu ainda não souber analisar um produto?",
    answer:
      "As aulas mostram o processo de análise antes do primeiro teste, considerando custo, frete, tarifas, imposto, preço e concorrência.",
  },
  {
    question: "E se os fornecedores mudarem as condições?",
    answer:
      "Você aprende a confirmar catálogo, estoque, pedido mínimo, envio, nota fiscal e condições comerciais diretamente antes de comprar.",
  },
  {
    question: "18 fornecedores não é pouco?",
    answer:
      "A proposta não é entregar centenas de contatos desconhecidos. É começar com uma base menor, usada na operação, e aprender um processo para encontrar outros.",
  },
  {
    question: "E se eu estiver começando agora?",
    answer:
      "O conteúdo segue uma sequência direta: encontrar, validar, analisar e testar com uma quantidade menor antes de aumentar o investimento.",
  },
] as const;

export const offerItems = [
  "Treinamento Base do Seller",
  "Base em Excel com {supplierCount} fornecedores da edição atual",
  "Aulas para encontrar e validar novos fornecedores",
  "Demonstração prática de análise",
  "Acesso pela área de membros",
] as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export function getFaqItems(): FaqItem[] {
  const { supplierCount, authorName, offer } = siteContent;

  return [
    {
      question: "O que exatamente eu vou receber?",
      answer:
        "Você receberá acesso ao treinamento Base do Seller e ao arquivo Excel com os fornecedores organizados por nome, categoria, WhatsApp, Instagram, site e links completos.",
    },
    {
      question: "Quantos fornecedores existem na edição atual?",
      answer: `A edição atual reúne ${supplierCount} fornecedores que fizeram parte da operação do autor. O objetivo não é entregar centenas de contatos desconhecidos, mas uma base menor acompanhada de um processo para encontrar outros por conta própria.`,
    },
    {
      question: "Todos os fornecedores entregam e emitem nota fiscal?",
      answer: `Na experiência do ${authorName} com os fornecedores desta edição, sim. Como políticas e condições podem mudar, confirme entrega, nota fiscal, pedido mínimo, prazo e demais informações diretamente antes de realizar um pedido.`,
    },
    {
      question: "Todos os produtos dão margem?",
      answer:
        "Não. A margem depende do produto, frete, tarifas, impostos, publicidade, preço praticado e concorrência. O treinamento ensina justamente como analisar antes de investir.",
    },
    {
      question: "Preciso ter CNPJ?",
      answer:
        "As condições variam de fornecedor para fornecedor. Alguns podem vender para pessoa física e outros podem exigir CNPJ. Confirme essa informação diretamente com a empresa.",
    },
    {
      question: "A ferramenta de análise está incluída?",
      answer:
        "Não. Uma ferramenta externa poderá ser demonstrada durante as aulas. Eventuais planos, assinaturas e condições pertencem à empresa responsável pela ferramenta.",
    },
    {
      question: "É uma plataforma de dropshipping?",
      answer:
        "Não. A Base do Seller é um treinamento acompanhado de uma base de contatos. Ela não publica anúncios, sincroniza estoque ou realiza envio automático ao consumidor.",
    },
    {
      question: "Quando recebo acesso às aulas e à planilha?",
      answer:
        offer.accessFaqAnswer ||
        "Resposta pendente de configuração antes da publicação.",
    },
    {
      question: "Posso compartilhar ou revender a planilha?",
      answer:
        "Não. O acesso e os materiais são destinados ao uso individual do comprador. A redistribuição, publicação ou revenda não é permitida.",
    },
    {
      question: "A Base do Seller tem vínculo com o Mercado Livre?",
      answer:
        "Não. A Base do Seller é um produto educacional independente e não possui vínculo, patrocínio ou afiliação oficial com o Mercado Livre.",
    },
  ];
}
