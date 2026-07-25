import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/LegalPage";
import { legalContent } from "@/content/legal-content";

export const metadata: Metadata = {
  title: "Política de reembolso — Base do Seller",
};

export default function RefundPage() {
  return <LegalPage document={legalContent.reembolso} />;
}
