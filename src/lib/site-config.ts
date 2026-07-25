import { legalContent } from "@/content/legal-content";
import { siteContent } from "@/content/site-content";
import { validateSiteConfiguration } from "@/lib/validation";

validateSiteConfiguration(siteContent, legalContent);

export const siteConfig = siteContent;

export function getCheckoutHref() {
  return siteConfig.siteMode === "live" && siteConfig.checkoutUrl
    ? siteConfig.checkoutUrl
    : "#oferta";
}

export function isLiveSite() {
  return siteConfig.siteMode === "live";
}
