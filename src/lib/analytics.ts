export type AnalyticsEvent =
  | "page_view"
  | "cta_click"
  | "begin_checkout"
  | "nav_click"
  | "faq_open"
  | "vsl_play"
  | "vsl_25"
  | "vsl_50"
  | "vsl_75"
  | "vsl_complete";

export type CtaLocation =
  | "header"
  | "hero"
  | "method"
  | "offer"
  | "mobile_sticky"
  | "final_cta";

export type AnalyticsPayload = {
  location?: CtaLocation | string;
  label?: string;
  value?: string | number | boolean;
};

/**
 * Camada intencionalmente silenciosa até a integração oficial.
 * Não envia requisições e não cria identificadores fictícios.
 */
export function trackEvent(
  event: AnalyticsEvent,
  payload: AnalyticsPayload = {},
) {
  void event;
  void payload;
  return;
}
