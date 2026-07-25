import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export function BaseReveal() {
  return (
    <section className="section base-reveal" id="como-funciona">
      <div className="container">
        <div className="base-reveal__layout">
          <Reveal className="base-reveal__copy">
            <h2>
              O caminho fica mais curto
              <br />
              {" "}quando você sabe onde olhar.
            </h2>
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
              alt="Prévia real da planilha Base do Seller com dados sensíveis ocultos"
              assetSrc={siteConfig.media.spreadsheetPreview}
              assetType="image"
              aspectRatio="4 / 5"
              description="Use uma captura real com contatos e dados sensíveis ocultos."
              id="screenshot-planilha"
              label="Adicionar print real da planilha"
              siteMode={siteConfig.siteMode}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
