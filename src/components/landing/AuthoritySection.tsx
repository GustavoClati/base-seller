import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export function AuthoritySection() {
  const media = siteConfig.media;
  const hasMedia = Boolean(media.salesDashboard || media.ordersProof);

  return (
    <section className="section authority" id="autoridade">
      <div className="container">
        <div className="authority__intro">
          <Reveal>
            <h2>
              Essa base nasceu
              <br />{" "}
              <strong className="heading-accent">
                dentro da operação.
              </strong>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="authority__copy">
              <p>
                Eu sou {siteConfig.authorName} e trabalho com e-commerce
                dentro do Mercado Livre. Durante a minha operação, fui
                acumulando contatos, pedindo catálogos, comparando preços e
                testando fornecedores.
              </p>
              <p>
                A Base do Seller nasceu para organizar esse caminho e ensinar o
                processo que eu gostaria de ter recebido quando comecei.
              </p>
            </div>
          </Reveal>
        </div>

        {hasMedia ? (
          <div className="authority__media-grid">
            <figure className="authority-proof authority-proof--summary">
              <MediaSlot
                alt="Captura real do painel da operação com vendas, unidades e visitas"
                assetSrc={media.salesDashboard}
                assetType="image"
                aspectRatio="1106 / 284"
                className="authority-proof__image"
                id="print-painel-vendas"
                label="Adicionar print real do painel"
                siteMode={siteConfig.siteMode}
              />
              <figcaption>
                <span>01</span>
                <div>
                  <strong>Painel real da operação</strong>
                  <p>
                    Visão consolidada de vendas, unidades, visitas e conversão.
                  </p>
                </div>
              </figcaption>
            </figure>

            <figure className="authority-proof authority-proof--live">
              <MediaSlot
                alt="Captura real do painel de vendas do dia no Mercado Livre"
                assetSrc={media.ordersProof}
                assetType="image"
                aspectRatio="1185 / 768"
                className="authority-proof__image"
                id="print-vendas-ao-vivo"
                label="Adicionar print real de vendas"
                siteMode={siteConfig.siteMode}
              />
              <figcaption>
                <span>02</span>
                <div>
                  <strong>Vendas do dia acompanhadas ao vivo</strong>
                  <p>
                    Um recorte real da rotina de análise dentro do marketplace.
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        ) : null}
      </div>
    </section>
  );
}
