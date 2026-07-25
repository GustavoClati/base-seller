import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/LegalPage";
import { legalContent } from "@/content/legal-content";

export const metadata: Metadata = {
  title: "Termos de uso — Base do Seller",
};

export default function TermsPage() {
  return <LegalPage document={legalContent.termos} />;
}
