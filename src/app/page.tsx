import { PdfSalesPage } from "@/components/landing/PdfSalesPage";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { PageAnalytics } from "@/components/layout/PageAnalytics";

export default function Home() {
  return (
    <>
      <PageAnalytics />
      <PdfSalesPage />
      <MobileStickyCta />
    </>
  );
}
