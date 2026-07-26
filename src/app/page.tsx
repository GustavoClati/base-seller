import { AudienceSection } from "@/components/landing/AudienceSection";
import { AuthoritySection } from "@/components/landing/AuthoritySection";
import { BaseReveal } from "@/components/landing/BaseReveal";
import { CoreDifference } from "@/components/landing/CoreDifference";
import { DeliverablesSection } from "@/components/landing/DeliverablesSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { Hero } from "@/components/landing/Hero";
import { MethodScrollytelling } from "@/components/landing/MethodScrollytelling";
import { OfferSection } from "@/components/landing/OfferSection";
import { ObjectionBreakers } from "@/components/landing/ObjectionBreakers";
import { ProblemSequence } from "@/components/landing/ProblemSequence";
import { ProcessRail } from "@/components/landing/ProcessRail";
import { SpreadsheetPreview } from "@/components/landing/SpreadsheetPreview";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { TransparencySection } from "@/components/landing/TransparencySection";
import { VslSection } from "@/components/landing/VslSection";
import { CampaignBar } from "@/components/layout/CampaignBar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { PageAnalytics } from "@/components/layout/PageAnalytics";
import { getCheckoutHref, siteConfig } from "@/lib/site-config";

export default function Home() {
  const campaignEnabled = siteConfig.promotion.enabled;

  return (
    <div
      className={`site-shell${
        campaignEnabled ? " site-shell--campaign" : ""
      }`}
    >
      <PageAnalytics />
      <CampaignBar
        ctaHref={getCheckoutHref()}
        enabled={campaignEnabled}
        endsAt={siteConfig.promotion.endsAt}
        expiredText={siteConfig.promotion.expiredText}
        label={siteConfig.promotion.label}
        previewMode={siteConfig.siteMode === "preview"}
      />
      <main id="conteudo-principal">
        <Hero />
        <ProcessRail />
        <VslSection />
        <ProblemSequence />
        <BaseReveal />
        <CoreDifference />
        <MethodScrollytelling />
        <DeliverablesSection />
        <SpreadsheetPreview />
        <AuthoritySection />
        <TransparencySection />
        <AudienceSection />
        <ObjectionBreakers />
        <TestimonialsSection testimonials={siteConfig.testimonials} />
        <OfferSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
