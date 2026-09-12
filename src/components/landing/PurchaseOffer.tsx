import { Check, Database, LockKeyhole, MonitorSmartphone, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TrackedCta } from "@/components/ui/TrackedCta";
import { getCheckoutHref, siteConfig } from "@/lib/site-config";

export function PurchaseOffer() {
  const { offer } = siteConfig;
  const parsePrice = (value: string) => Number(value.replace(/[^\d,]/g, "").replace(",", "."));
  const savings = parsePrice(offer.compareAtPrice) - parsePrice(offer.price);
  const savingsLabel = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(savings);

  return (
    <section className="seller-offer" id="oferta">
      <div className="seller-container seller-offer__frame">
        <Reveal className="seller-offer__intro">
          <h2>Sua próxima pesquisa<br /><strong>começa por <span className="seller-price-inline">{offer.price}</span>.</strong></h2>
          <p>Dois PDFs. Uma base organizada para encontrar contatos, explorar catálogos e comparar oportunidades.</p>
          <ul className="seller-offer__benefits">
            <li><Database aria-hidden="true" /><span>168 registros em 8 segmentos</span></li>
            <li><Users aria-hidden="true" /><span>Contatos e catálogos reunidos</span></li>
            <li><MonitorSmartphone aria-hidden="true" /><span>Versões PC e Mobile incluídas</span></li>
          </ul>
          <p className="seller-offer__caution">Esta edição não inclui nova verificação dos fornecedores. Confirme os canais e as condições antes de comprar. O material não garante lucro ou vendas.</p>
        </Reveal>
        <Reveal className="seller-offer__copy" delay={0.15}>
          <span className="seller-offer__ribbon">Oferta especial</span>
          <h3>Base do Seller 2026</h3>
          <p>O pacote completo. Pagamento único.</p>
          <div className="seller-offer__price">
            <span>De <s>{offer.compareAtPrice}</s> por</span>
            <strong>{offer.price}</strong>
            {Number.isFinite(savings) && savings > 0 ? <span className="seller-offer__savings">Você economiza {savingsLabel}</span> : null}
            {offer.installments ? <small>{offer.installments}</small> : null}
          </div>
          <ul className="seller-offer__includes">
            <li><Check aria-hidden="true" size={18} /> PDF para PC · 34 páginas</li>
            <li><Check aria-hidden="true" size={18} /> PDF Mobile · 89 páginas</li>
          </ul>
          <TrackedCta className="seller-offer__cta" href={getCheckoutHref()} location="offer">Quero receber os PDFs</TrackedCta>
          <div className="seller-offer__security">
            <span><LockKeyhole aria-hidden="true" size={16} /> {offer.paymentNote}</span>
            <span><ShieldCheck aria-hidden="true" size={16} /> {offer.guaranteeDays} dias de garantia</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
