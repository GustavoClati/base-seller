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
                Comece pela base.
                <br />
                {" "}
                <strong className="heading-accent">
                  Não comece do zero.
                </strong>
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
                alt="Ilustração de um carrinho com caixas da Base do Seller"
                assetSrc={siteConfig.media.finalCtaImage}
                assetType="image"
                aspectRatio="1 / 1"
                description="Adicione uma composição real quando ela estiver pronta."
                id="imagem-cta-final"
                label="Adicionar imagem do CTA final"
                siteMode={siteConfig.siteMode}
              />
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
