import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export function AuthoritySection() {
  const media = siteConfig.media;
  const hasMedia =
    siteConfig.siteMode === "preview" ||
    Boolean(
      media.authorPortrait ||
        media.salesDashboard ||
        media.ordersProof ||
        media.supplierConversation,
    );

  return (
    <section className="section authority">
      <div className="container">
        <div className="authority__intro">
          <Reveal>
            <h2>
              Construída na operação.
              <br />
              {" "}Não em uma pesquisa de um dia.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="authority__copy">
              <p>
                Eu sou o {siteConfig.authorName} e trabalho com e-commerce
                dentro de marketplaces. Durante a minha operação, fui
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
            <MediaSlot
              alt="Foto real de Gustavo"
              assetSrc={media.authorPortrait}
              assetType="image"
              aspectRatio="3 / 4"
              id="foto-gustavo"
              label="Adicionar foto real do Gustavo"
              siteMode={siteConfig.siteMode}
            />
            <MediaSlot
              alt="Print real do painel de vendas com dados sensíveis ocultos"
              assetSrc={media.salesDashboard}
              assetType="image"
              aspectRatio="16 / 9"
              id="print-painel-vendas"
              label="Adicionar print real do painel"
              siteMode={siteConfig.siteMode}
            />
            <MediaSlot
              alt="Fotografia real de um pedido da operação"
              assetSrc={media.ordersProof}
              assetType="image"
              aspectRatio="4 / 3"
              id="prova-pedidos"
              label="Adicionar prova real de pedido"
              siteMode={siteConfig.siteMode}
            />
            <MediaSlot
              alt="Conversa real com fornecedor com dados pessoais ocultos"
              assetSrc={media.supplierConversation}
              assetType="image"
              aspectRatio="4 / 3"
              id="conversa-fornecedor"
              label="Adicionar conversa real com fornecedor"
              siteMode={siteConfig.siteMode}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
