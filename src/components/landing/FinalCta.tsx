import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { TrackedCta } from "@/components/ui/TrackedCta";
import { getCheckoutHref, siteConfig } from "@/lib/site-config";

export function FinalCta() {
  const hasMedia =
    siteConfig.siteMode === "preview" || Boolean(siteConfig.media.finalCtaImage);

  return (
    <section className="section final-cta">
      <div className="container">
        <Reveal>
          <div
            className={`final-cta__panel ${
              hasMedia ? "" : "final-cta__panel--text-only"
            }`}
          >
            <div className="final-cta__copy">
              <h2>
                Você não precisa começar
                <br />{" "}a pesquisa do zero.
              </h2>
              <p>
                Use uma base construída na prática e aprenda a encontrar as
                próximas oportunidades por conta própria.
              </p>
              <TrackedCta
                href={getCheckoutHref()}
                location="final_cta"
              >
                Quero acessar a Base do Seller
              </TrackedCta>
            </div>

            {hasMedia ? (
              <MediaSlot
                alt="Composição real dos materiais da Base do Seller"
                assetSrc={siteConfig.media.finalCtaImage}
                assetType="image"
                aspectRatio="4 / 3"
                description="Use uma foto ou composição real dos materiais."
                id="imagem-cta-final"
                label="Adicionar imagem real do CTA final"
                siteMode={siteConfig.siteMode}
              />
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
