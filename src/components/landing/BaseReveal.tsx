import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export function BaseReveal() {
  return (
    <section className="section base-reveal" id="como-funciona">
      <div className="container">
        <Reveal>
          <SectionHeading
            align="center"
            className="base-reveal__heading"
            title={
              <>
                Comece com uma base.
                <br />{" "}
                <strong className="heading-accent">
                  Avance com <span className="title-keep">mais critério.</span>
                </strong>
              </>
            }
          />
        </Reveal>

        <div className="base-reveal__layout">
          <Reveal className="base-reveal__copy">
            <p className="base-reveal__description">
              A Base do Seller reúne os fornecedores que fizeram parte da minha
              operação e organiza o essencial em um único lugar: nome,
              categoria, WhatsApp, Instagram e site.
            </p>

            <div className="base-reveal__number">
              <strong>{siteConfig.supplierCount}</strong>
              <span>fornecedores utilizados na edição atual</span>
            </div>

            <p className="base-reveal__note">
              Preços, contatos, estoques, pedidos mínimos, fretes e condições
              comerciais podem mudar. Confirme as informações diretamente com
              cada fornecedor antes de comprar.
            </p>
          </Reveal>

          <Reveal className="base-reveal__media" delay={0.08}>
            <MediaSlot
              alt="Ilustração da planilha Base do Seller em um notebook e celular"
              aspectRatio="1 / 1"
              assetSrc={siteConfig.media.spreadsheetPreview}
              assetType="image"
              description="Use uma captura real quando ela estiver pronta."
              id="screenshot-planilha"
              label="Adicionar imagem da planilha"
              siteMode={siteConfig.siteMode}
            />
            {siteConfig.media.spreadsheetPreview ? (
              <p className="base-reveal__media-note">
                Imagem ilustrativa. Os nomes e contatos exibidos na arte são
                fictícios.
              </p>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
