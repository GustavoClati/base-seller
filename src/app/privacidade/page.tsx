import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/LegalPage";
import { legalContent } from "@/content/legal-content";

export const metadata: Metadata = {
  title: "Política de privacidade — Base do Seller",
};

export default function PrivacyPage() {
  return <LegalPage document={legalContent.privacidade} />;
}
