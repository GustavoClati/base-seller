import { ArrowDown, Check, LockKeyhole, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { AmbientLight } from "@/components/landing/AmbientLight";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { BuyingClarity } from "@/components/landing/BuyingClarity";
import { ReadingProgress } from "@/components/landing/ReadingProgress";
import { CategoryExplorer } from "@/components/landing/CategoryExplorer";
import { FormatPreview } from "@/components/landing/FormatPreview";
import { MobileMenu } from "@/components/landing/MobileMenu";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { Accordion } from "@/components/ui/Accordion";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { Reveal } from "@/components/ui/Reveal";
import { TrackedCta } from "@/components/ui/TrackedCta";
import { getFaqItems, navigationItems } from "@/content/site-content";
import { getCheckoutHref, siteConfig } from "@/lib/site-config";

const steps = [
  { title: "Escolha", text: "Encontre um segmento que faz sentido para você." },
  { title: "Compare", text: "Abra os contatos e catálogos. Confira as condições." },
  { title: "Valide", text: "Converse com o fornecedor e comece com um pedido pequeno." },
];

export function PdfSalesPage() {
  const checkoutHref = getCheckoutHref();

  return (
    <div className="seller-page">
      <header className="seller-header">
        <ReadingProgress />
        <div className="seller-container seller-header__inner">
          <BrandWordmark className="seller-header__brand" />
          <nav aria-label="Navegação principal" className="seller-header__nav">
            {navigationItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>
          <div className="seller-header__actions">
            <Link className="seller-header__access" href="#oferta">Quero minha base <span aria-hidden="true">↗</span></Link>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main id="conteudo-principal">
        <section className="seller-hero" id="hero">
          <AmbientLight className="seller-hero__ambient" />
          <div className="seller-container seller-hero__grid">
            <div className="seller-hero__copy">
              <span className="seller-eyebrow">Base de fornecedores · Edição 2026</span>
              <h1>Encontre fornecedores.<strong>Comece com<br />uma base.</strong></h1>
              <p>Contatos e catálogos em um só lugar.<br />Dois PDFs, para consultar no PC ou no celular.</p>
              <TrackedCta className="seller-hero__cta" href={checkoutHref} location="hero">Quero receber os PDFs</TrackedCta>
              <span className="seller-trust-line"><LockKeyhole aria-hidden="true" size={15} /> Compra segura · {siteConfig.offer.guaranteeDays} dias de garantia</span>
            </div>
            <div className="seller-hero__visual"><ProductShowcase /></div>
          </div>
          <div className="seller-container seller-hero__bottom">
            <p><strong>{siteConfig.supplierCount}</strong> registros <span aria-hidden="true">/</span> <strong>8</strong> segmentos</p>
            <Link className="seller-scroll-cue" href="#antes-depois">Veja o que muda <ArrowDown aria-hidden="true" size={17} /></Link>
          </div>
        </section>

        <BeforeAfter />

        <section className="seller-material" id="material">
          <div className="seller-container seller-material__grid">
            <Reveal className="seller-heading">
              <span className="seller-eyebrow">Feita para consultar</span>
              <h2>Sua próxima busca.<br /><strong>Mais simples.</strong></h2>
              <p>Escolha a versão e veja uma página real do material.</p>
              <div className="seller-material__facts">
                <span><strong>{siteConfig.contactCount}</strong> contatos ou WhatsApp</span>
                <span><strong>{siteConfig.catalogCount}</strong> links de catálogo</span>
              </div>
            </Reveal>
            <Reveal className="seller-material__preview" delay={0.12}><FormatPreview /></Reveal>
          </div>
          <div className="seller-container seller-consult" id="como-consultar">
            <Reveal><h3>Da busca ao primeiro contato.</h3></Reveal>
            <ol className="seller-process">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <Reveal delay={index * 0.14}>
                    <span className="seller-process__number">0{index + 1}</span>
                    <h4>{step.title}</h4><p>{step.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="seller-categories" id="categorias">
          <div className="seller-container">
            <Reveal className="seller-heading seller-heading--center">
              <span className="seller-eyebrow">Explore a base</span>
              <h2>Qual é o seu próximo <strong>segmento?</strong></h2>
              <p>Selecione uma categoria para conhecer o que está incluído.</p>
            </Reveal>
            <Reveal delay={0.1}><CategoryExplorer /></Reveal>
          </div>
        </section>

        <BuyingClarity />

        <section className="seller-offer" id="oferta">
          <div className="seller-container seller-offer__frame">
            <Reveal className="seller-offer__intro">
              <span className="seller-eyebrow">Sua base começa aqui</span>
              <h2>Menos tempo buscando.<br /><strong>Mais tempo comparando.</strong></h2>
              <p>Para quem vende ou quer começar a vender e prefere pesquisar antes de investir.</p>
              <p className="seller-offer__caution">Esta edição não inclui nova verificação dos fornecedores. Confirme os canais e as condições antes de comprar. O material não garante lucro ou vendas.</p>
            </Reveal>
            <Reveal className="seller-offer__copy" delay={0.12}>
              <h3>Base do Seller 2026</h3>
              <p>As duas versões. Um único acesso.</p>
              <ul>
                <li><Check aria-hidden="true" size={17} /> PDF para PC · 34 páginas</li>
                <li><Check aria-hidden="true" size={17} /> PDF Mobile · 89 páginas</li>
              </ul>
              <div className="seller-offer__price">
                <span>De <s>{siteConfig.offer.compareAtPrice}</s> por</span>
                <strong>{siteConfig.offer.price}</strong>
                {siteConfig.offer.installments ? <small>{siteConfig.offer.installments}</small> : null}
                <small>{siteConfig.offer.paymentNote}</small>
              </div>
              <TrackedCta className="seller-offer__cta" href={checkoutHref} location="offer">Quero receber os PDFs</TrackedCta>
              <span className="seller-trust-line"><ShieldCheck aria-hidden="true" size={17} /> {siteConfig.offer.guaranteeDays} dias de garantia · Uso individual</span>
            </Reveal>
          </div>
        </section>

        <section className="seller-faq" id="duvidas">
          <div className="seller-container seller-faq__grid">
            <Reveal className="seller-heading"><span className="seller-eyebrow">Tudo às claras</span><h2>Ficou alguma<br /><strong>dúvida?</strong></h2></Reveal>
            <Reveal delay={0.1}><Accordion items={getFaqItems()} initialOpenIndex={null} /></Reveal>
          </div>
        </section>
      </main>

      <footer className="seller-footer" id="site-footer">
        <div className="seller-container seller-footer__inner">
          <div><BrandWordmark /><p>Produto independente, sem vínculo com o Mercado Livre.</p></div>
          <nav aria-label="Links legais"><Link href="/termos">Termos</Link><Link href="/privacidade">Privacidade</Link><Link href="/reembolso">Reembolso</Link></nav>
          <p>© {new Date().getFullYear()} Base do Seller.</p>
        </div>
      </footer>
    </div>
  );
}
