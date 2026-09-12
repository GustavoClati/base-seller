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

const defaultCheckoutUrl = "https://pay.cakto.com.br/32jdpov_1058392";

export const siteContent = {
  brandName: "Base do Seller",
  supplierCount: 168,
  contactCount: 127,
  catalogCount: 147,
  researchedChannelCount: 166,
  pdfPageCount: 34,
  desktopPdfPageCount: 34,
  mobilePdfPageCount: 89,
  researchDate: "edição 2026",
  authorName: "Gustavo",

  siteMode,

  checkoutUrl:
    process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL?.trim() || defaultCheckoutUrl,
  memberAreaUrl: process.env.NEXT_PUBLIC_MEMBER_AREA_URL?.trim() ?? "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ?? "",

  offer: {
    compareAtPrice: "R$ 69,89",
    price: process.env.NEXT_PUBLIC_OFFER_PRICE?.trim() || "R$ 29,89",
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
  { label: "O material", href: "#material" },
  { label: "O que muda", href: "#antes-depois" },
  { label: "Categorias", href: "#categorias" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

export const supplierCategories = [
  {
    label: "Pets",
    count: 24,
    description: "Acessórios, brinquedos, higiene e utilidades para animais.",
    pcPages: "04 a 07",
  },
  {
    label: "Moda & Maquiagem",
    count: 20,
    description: "Moda, beleza, cosméticos e itens de cuidado pessoal.",
    pcPages: "08 a 11",
  },
  {
    label: "Utilidades Domésticas",
    count: 42,
    description: "Casa, cozinha, organização, limpeza e decoração.",
    pcPages: "12 a 18",
  },
  {
    label: "Ferramentas",
    count: 17,
    description: "Ferramentas manuais, elétricas e acessórios profissionais.",
    pcPages: "19 a 21",
  },
  {
    label: "Eletrônicos",
    count: 42,
    description: "Eletrônicos, informática, acessórios mobile e smartwatches.",
    pcPages: "22 a 28",
  },
  {
    label: "Brinquedos",
    count: 16,
    description: "Brinquedos tradicionais, educativos, infantis e geek.",
    pcPages: "29 a 31",
  },
  {
    label: "Importados & Variedades",
    count: 5,
    description: "Importados, presentes e fornecedores multicategoria.",
    pcPages: "32",
  },
  {
    label: "Diversos",
    count: 2,
    description: "Fornecedores gerais e canais fora dos demais grupos.",
    pcPages: "33",
  },
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
  "PDF para PC · 34 páginas",
  "PDF Mobile · 89 páginas",
  "{supplierCount} registros organizados",
  "8 segmentos para explorar",
  "127 contatos ou WhatsApp",
  "147 links de catálogo",
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
      answer: `Você receberá duas edições da Base de Fornecedores 2026: um PDF de ${siteContent.desktopPdfPageCount} páginas para computador e um PDF de ${siteContent.mobilePdfPageCount} páginas para celular. Os dois trazem a mesma base, com ${supplierCount} registros organizados em oito segmentos, 127 contatos ou WhatsApp e 147 links de catálogo.`,
    },
    {
      question: "Quando recebo os PDFs?",
      answer:
        offer.accessFaqAnswer ||
        "O acesso aos dois PDFs é enviado após a confirmação do pagamento, conforme as instruções exibidas no checkout.",
    },
    {
      question: "Os fornecedores estão ativos?",
      answer: `Esta ${researchDate} não inclui uma nova verificação dos fornecedores. Canais e condições comerciais mudam; confirme CNPJ, estoque, preço, pedido mínimo, nota fiscal, prazo e dados de pagamento diretamente com cada empresa antes de comprar.`,
    },
    {
      question: "Os PDFs garantem margem ou resultado?",
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
        "Sim. As duas edições reúnem 127 registros com telefone ou WhatsApp e 147 links de catálogo. Quando um canal não consta na base, a ausência é informada no próprio arquivo.",
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
