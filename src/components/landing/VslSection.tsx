import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export function VslSection() {
  if (siteConfig.siteMode === "live" && !siteConfig.media.vslVideo) {
    return null;
  }

  return (
    <section className="section vsl-section" id="vsl">
      <div className="container">
        <Reveal>
          <SectionHeading
            description="Em poucos minutos, entenda o problema que ela resolve, o que você recebe e como usar o processo antes de comprar estoque."
            title="Veja como a Base do Seller funciona."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <MediaSlot
            alt="Vídeo explicando como a Base do Seller funciona"
            assetSrc={siteConfig.media.vslVideo}
            assetType="video"
            className="vsl-section__frame"
            description="Vídeo de vendas com controles reais e poster configurável."
            id="vsl-principal"
            label="Adicionar vídeo principal"
            poster={siteConfig.media.vslPoster}
            siteMode={siteConfig.siteMode}
          />
        </Reveal>
      </div>
    </section>
  );
}
