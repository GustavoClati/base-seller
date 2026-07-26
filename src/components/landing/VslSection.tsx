import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export function VslSection() {
  const hasVideo = Boolean(siteConfig.media.vslVideo);
  const hasPoster = Boolean(siteConfig.media.vslPoster);

  if (siteConfig.siteMode === "live" && !hasVideo && !hasPoster) {
    return null;
  }

  return (
    <section className="section vsl-section" id="vsl">
      <div className="container">
        <Reveal>
          <SectionHeading
            align="center"
            description="Veja como a base, as aulas e o processo se conectam para você analisar com mais clareza antes do primeiro pedido."
            title={
              <>
                Entenda antes de colocar
                <br />{" "}
                <strong className="heading-accent">
                  dinheiro <span className="title-keep">em estoque.</span>
                </strong>
              </>
            }
          />
        </Reveal>
        <Reveal delay={0.1}>
          <MediaSlot
            alt={
              hasVideo
                ? "Vídeo explicando como a Base do Seller funciona"
                : "Ilustração das aulas e do processo da Base do Seller"
            }
            aspectRatio={hasVideo ? "16 / 9" : "4 / 3"}
            assetSrc={
              hasVideo
                ? siteConfig.media.vslVideo
                : siteConfig.media.vslPoster
            }
            assetType={hasVideo ? "video" : "image"}
            className={`vsl-section__frame${
              hasVideo ? "" : " vsl-section__frame--poster"
            }`}
            description="Adicione o vídeo principal quando ele estiver pronto."
            id="vsl-principal"
            label="Adicionar vídeo principal ou imagem de apresentação"
            poster={hasVideo ? siteConfig.media.vslPoster : null}
            siteMode={siteConfig.siteMode}
          />
        </Reveal>
      </div>
    </section>
  );
}
