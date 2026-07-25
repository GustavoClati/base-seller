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
import { ProblemSequence } from "@/components/landing/ProblemSequence";
import { SpreadsheetPreview } from "@/components/landing/SpreadsheetPreview";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { TransparencySection } from "@/components/landing/TransparencySection";
import { VslSection } from "@/components/landing/VslSection";
import { FloatingHeader } from "@/components/layout/FloatingHeader";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { PageAnalytics } from "@/components/layout/PageAnalytics";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <PageAnalytics />
      <FloatingHeader />
      <main id="conteudo-principal">
        <Hero />
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
        <TestimonialsSection testimonials={siteConfig.testimonials} />
        <OfferSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
