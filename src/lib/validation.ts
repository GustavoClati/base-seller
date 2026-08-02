import type { LegalDocument } from "@/content/legal-content";
import type { siteContent as siteContentType } from "@/content/site-content";

type SiteConfig = typeof siteContentType;

type LegalMap = Record<LegalDocument["slug"], LegalDocument>;

function hasValidUrl(value: string) {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export function validateSiteConfiguration(
  config: SiteConfig,
  legal: LegalMap,
) {
  if (config.siteMode !== "live") return;

  const missing: string[] = [];

  if (!hasValidUrl(config.checkoutUrl)) {
    missing.push("NEXT_PUBLIC_KIWIFY_CHECKOUT_URL (URL válida)");
  }

  if (!config.offer.price) {
    missing.push("NEXT_PUBLIC_OFFER_PRICE");
  }

  if (!config.offer.accessNote) {
    missing.push("NEXT_PUBLIC_OFFER_ACCESS_NOTE");
  }

  if (!config.offer.accessFaqAnswer) {
    missing.push("NEXT_PUBLIC_OFFER_ACCESS_FAQ_ANSWER");
  }

  if (config.promotion.enabled) {
    const promotionEnd = Date.parse(config.promotion.endsAt);

    if (!config.promotion.endsAt || Number.isNaN(promotionEnd)) {
      missing.push(
        "NEXT_PUBLIC_PROMOTION_END_AT (data e hora absolutas válidas)",
      );
    } else if (promotionEnd <= Date.now()) {
      missing.push("NEXT_PUBLIC_PROMOTION_END_AT (data futura)");
    }
  }

  if (!config.supportEmail || !config.supportEmail.includes("@")) {
    missing.push("NEXT_PUBLIC_SUPPORT_EMAIL (e-mail válido)");
  }

  if (!hasValidUrl(config.siteUrl)) {
    missing.push("NEXT_PUBLIC_SITE_URL (URL válida)");
  }

  for (const document of Object.values(legal)) {
    const hasContent =
      document.sections.length > 0 &&
      document.sections.every(
        (section) =>
          section.heading.trim() &&
          section.paragraphs.length > 0 &&
          section.paragraphs.every((paragraph) => paragraph.trim()),
      );

    if (!hasContent) {
      missing.push(`conteúdo jurídico: ${document.slug}`);
    }
  }

  const mediaEntries = Object.entries(config.media);
  const configuredPlaceholders = mediaEntries.filter(
    ([, value]) => typeof value === "string" && value.includes("placeholder"),
  );

  for (const [key] of configuredPlaceholders) {
    missing.push(`mídia "${key}" contém um placeholder`);
  }

  if (missing.length > 0) {
    throw new Error(
      [
        "A Base do Seller não pode ser ativada em modo live.",
        "Preencha ou revise:",
        ...missing.map((item) => `- ${item}`),
        "Retorne NEXT_PUBLIC_SITE_MODE para preview enquanto a configuração estiver incompleta.",
      ].join("\n"),
    );
  }
}
