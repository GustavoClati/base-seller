export type LegalDocument = {
  slug: "termos" | "privacidade" | "reembolso";
  title: string;
  description: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

// TODO: conteúdo sujeito a revisão jurídica.
export const legalContent: Record<LegalDocument["slug"], LegalDocument> = {
  termos: {
    slug: "termos",
    title: "Termos de uso",
    description:
      "Estrutura reservada para os termos que regerão o acesso e o uso do produto.",
    sections: [],
  },
  privacidade: {
    slug: "privacidade",
    title: "Política de privacidade",
    description:
      "Estrutura reservada para informar como dados pessoais serão tratados.",
    sections: [],
  },
  reembolso: {
    slug: "reembolso",
    title: "Política de reembolso",
    description:
      "Estrutura reservada para as condições de cancelamento e reembolso.",
    sections: [],
  },
};
