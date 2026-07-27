import { Check, ShieldCheck } from "lucide-react";

import { offerItems } from "@/content/site-content";
import { getCheckoutHref, siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { TrackedCta } from "@/components/ui/TrackedCta";

export function OfferSection() {
  const isPreview = siteConfig.siteMode === "preview";

  return (
    <section className="section offer" id="oferta">
      <div aria-hidden="true" className="offer__halo" />
      <div className="container offer__layout">
        <Reveal className="offer__copy">
          <h2>
            Comece pela base. <strong>Continue pelo método.</strong>
          </h2>
          <p className="offer__decision">
            Em vez de abrir mais uma busca do zero, entre na área de membros,
            siga as aulas e use a Base do Seller para iniciar sua pesquisa com
            um caminho mais claro.
          </p>

          <ul aria-label="Conteúdo incluído">
            {offerItems.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" size={18} strokeWidth={2} />
                <span>
                  {item.replace(
                    "{supplierCount}",
                    String(siteConfig.supplierCount),
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="offer__panel" delay={0.08}>
          <p className="offer__brand">{siteConfig.brandName}</p>
          <p className="offer__summary">
            <strong>{siteConfig.supplierCount} fornecedores</strong> +
            treinamento prático
          </p>

          <div className="offer__price">
            <span>Investimento</span>
            <div className="offer__price-stack">
              <p className="offer__compare-price">
                <span>De</span>
                <s>{siteConfig.offer.compareAtPrice}</s>
              </p>
              <p className="offer__current-price">
                <span>por</span>
                <strong>
                  {siteConfig.offer.price || "Preço a configurar"}
                </strong>
              </p>
            </div>
            {siteConfig.offer.installments ? (
              <small>{siteConfig.offer.installments}</small>
            ) : null}
          </div>

          <div className="offer__access">
            <span>Acesso</span>
            <p>
              {siteConfig.offer.accessNote ||
                "Informação de acesso a configurar"}
            </p>
          </div>

          <TrackedCta
            className="offer__cta"
            href={getCheckoutHref()}
            location="offer"
          >
            Quero acessar a Base do Seller
          </TrackedCta>
          <p className="offer__payment-note">{siteConfig.offer.paymentNote}</p>
          {isPreview ? (
            <p className="offer__preview-note">
              Modo preview: checkout desativado.
            </p>
          ) : null}

          <div className="offer__guarantee">
            <span aria-hidden="true" className="offer__guarantee-icon">
              <ShieldCheck size={27} strokeWidth={1.8} />
            </span>
            <div>
              <h3>{siteConfig.offer.guaranteeDays} dias de garantia</h3>
              <p>
                Caso decida não continuar, você poderá solicitar o cancelamento
                dentro do prazo e das condições informadas no checkout e nos
                termos de compra.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
