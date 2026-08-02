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

const defaultCheckoutUrl = "https://pay.kiwify.com.br/FpCSKye";

export const siteContent = {
  brandName: "Base do Seller",
  supplierCount: 168,
  contactCount: 127,
  catalogCount: 147,
  researchedChannelCount: 166,
  pdfPageCount: 31,
  researchDate: "agosto de 2026",
  authorName: "Gustavo",

  siteMode,

  checkoutUrl:
    process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL?.trim() || defaultCheckoutUrl,
  memberAreaUrl: process.env.NEXT_PUBLIC_MEMBER_AREA_URL?.trim() ?? "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ?? "",

  offer: {
    compareAtPrice: "R$ 119,89",
    price: process.env.NEXT_PUBLIC_OFFER_PRICE?.trim() || "R$ 59,89",
    installments: process.env.NEXT_PUBLIC_OFFER_INSTALLMENTS?.trim() ?? "",
    paymentNote:
      process.env.NEXT_PUBLIC_OFFER_PAYMENT_NOTE?.trim() ||
      "Pagamento processado pela Kiwify.",
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
  { label: "O que vem no PDF", href: "#o-que-vem-no-pdf" },
  { label: "Categorias", href: "#categorias" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

export const supplierCategories = [
  { label: "Utilidades domésticas", count: 40 },
  { label: "Eletrônicos", count: 34 },
  { label: "Pets", count: 24 },
  { label: "Moda e maquiagem", count: 20 },
  { label: "Base do Seller", count: 18 },
  { label: "Ferramentas", count: 17 },
  { label: "Brinquedos", count: 13 },
  { label: "Diversos", count: 2 },
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
    title: "PDF com 31 páginas",
    description:
      "Um arquivo organizado para consultar fornecedores por segmento.",
  },
  {
    number: "02",
    title: "168 registros organizados",
    description:
      "Nomes, contatos, catálogos, sites e perfis reunidos em um único lugar.",
  },
  {
    number: "03",
    title: "8 grupos de fornecedores",
    description:
      "Pets, moda e maquiagem, casa, ferramentas, eletrônicos, brinquedos, diversos e registros complementares.",
  },
  {
    number: "04",
    title: "Links para consulta",
    description:
      "127 registros com contato, 147 com catálogo e 166 com site ou Instagram pesquisado.",
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
    question: "E se eu ainda não souber qual segmento escolher?",
    answer:
      "O PDF separa os registros em oito grupos para facilitar a consulta por categoria.",
  },
  {
    question: "E se os fornecedores mudarem as condições?",
    answer:
      "Você aprende a confirmar catálogo, estoque, pedido mínimo, envio, nota fiscal e condições comerciais diretamente antes de comprar.",
  },
  {
      question: "168 registros são todos iguais?",
      answer:
      "Não. A lista reúne fornecedores de diferentes segmentos e informa os canais que foram localizados para cada registro.",
  },
  {
    question: "E se eu estiver começando agora?",
    answer:
      "O conteúdo segue uma sequência direta: encontrar, validar, analisar e testar com uma quantidade menor antes de aumentar o investimento.",
  },
] as const;

export const offerItems = [
  "Base de Fornecedores 2026 em PDF",
  "{supplierCount} registros organizados",
  "8 grupos de fornecedores",
  "Contatos, catálogos, sites e perfis pesquisados",
  "31 páginas para consulta",
] as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export function getFaqItems(): FaqItem[] {
  const { supplierCount, offer, researchDate } = siteContent;

  return [
    {
      question: "O que exatamente eu vou receber?",
      answer: `Você receberá a Base de Fornecedores 2026 em PDF, com ${supplierCount} registros organizados por segmento e links de contato, catálogo, site ou Instagram quando localizados. Não há aulas ou treinamento incluídos.`,
    },
    {
      question: "Quando recebo o PDF?",
      answer:
        offer.accessFaqAnswer ||
        "O acesso ao PDF é enviado após a confirmação do pagamento, conforme as instruções exibidas pela Kiwify no checkout.",
    },
    {
      question: "Os fornecedores estão ativos?",
      answer: `Os canais foram pesquisados em ${researchDate}, mas a internet e as condições comerciais mudam. Confirme CNPJ, estoque, preço, pedido mínimo, nota fiscal, prazo e dados de pagamento diretamente com cada empresa antes de comprar.`,
    },
    {
      question: "O PDF garante margem ou resultado?",
      answer:
        "Não. O arquivo é um ponto de partida para a sua pesquisa. Margem e resultado dependem do produto, custo, frete, impostos, comissões, demanda, concorrência e da sua própria validação comercial.",
    },
    {
      question: "Preciso ter CNPJ?",
      answer:
        "As condições variam de fornecedor para fornecedor. Alguns podem vender para pessoa física e outros podem exigir CNPJ. Confirme essa informação diretamente com a empresa.",
    },
    {
      question: "Os catálogos e contatos são clicáveis?",
      answer:
        "O PDF reúne 127 registros com contato clicável e 147 com catálogo clicável. Quando um canal não foi localizado com segurança, isso é informado no próprio arquivo.",
    },
    {
      question: "É uma plataforma de dropshipping?",
      answer:
        "Não. A Base do Seller é um arquivo PDF com uma lista de fornecedores. Ela não publica anúncios, sincroniza estoque nem realiza envios automáticos.",
    },
    {
      question: "Posso compartilhar ou revender o arquivo?",
      answer:
        "Não. O acesso e os materiais são destinados ao uso individual do comprador. A redistribuição, publicação ou revenda não é permitida.",
    },
    {
      question: "A Base do Seller tem vínculo com o Mercado Livre?",
      answer:
        "Não. A Base do Seller é um produto digital independente e não possui vínculo, patrocínio ou afiliação oficial com o Mercado Livre.",
    },
  ];
}
