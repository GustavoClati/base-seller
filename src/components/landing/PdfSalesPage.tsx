import {
  Check,
  FileText,
  LockKeyhole,
  Minus,
  Monitor,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AmbientLight } from "@/components/landing/AmbientLight";
import { FormatPreview } from "@/components/landing/FormatPreview";
import { MobileMenu } from "@/components/landing/MobileMenu";
import { MotionToggle } from "@/components/landing/MotionToggle";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { Accordion } from "@/components/ui/Accordion";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { Reveal } from "@/components/ui/Reveal";
import { TrackedCta } from "@/components/ui/TrackedCta";
import {
  getFaqItems,
  navigationItems,
  offerItems,
  supplierCategories,
} from "@/content/site-content";
import { getCheckoutHref, siteConfig } from "@/lib/site-config";

const proofStats = [
  { value: siteConfig.supplierCount, label: "registros" },
  { value: 8, label: "segmentos" },
  { value: siteConfig.contactCount, label: "contatos" },
  { value: siteConfig.catalogCount, label: "catálogos" },
] as const;

const consultationSteps = [
  {
    number: "01",
    title: "Escolha uma categoria",
    text: "Comece por um segmento simples de comparar.",
  },
  {
    number: "02",
    title: "Abra os canais",
    text: "Use os links de contato, perfil, site e catálogo.",
  },
  {
    number: "03",
    title: "Analise o produto",
    text: "Confira margem, concorrência, frete, demanda e pedido mínimo.",
  },
  {
    number: "04",
    title: "Faça um teste pequeno",
    text: "Valide fornecedor e produto antes de comprar em volume.",
  },
] as const;

const productFacts = [
  { value: siteConfig.supplierCount, label: "registros organizados" },
  { value: 8, label: "segmentos" },
  { value: siteConfig.contactCount, label: "contatos ou WhatsApp" },
  { value: siteConfig.catalogCount, label: "links de catálogo" },
] as const;

export function PdfSalesPage() {
  const checkoutHref = getCheckoutHref();
  const faqItems = getFaqItems();

  return (
    <div className="seller-page">
      <header className="seller-header">
        <div className="seller-container seller-header__inner">
          <BrandWordmark className="seller-header__brand" />
          <nav aria-label="Navegação principal" className="seller-header__nav">
            {navigationItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="seller-header__actions">
            <MotionToggle />
            <TrackedCta
              className="seller-header__cta"
              href={checkoutHref}
              location="header"
              variant="compact"
            >
              Quero receber os PDFs
            </TrackedCta>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main id="conteudo-principal">
        <section className="seller-hero" id="hero">
          <AmbientLight className="seller-hero__ambient" />
          <div className="seller-container seller-hero__grid">
            <div className="seller-hero__copy">
              <h1>
                Encontre fornecedores. <strong>Comece com uma base.</strong>
              </h1>
              <p>
                Receba duas versões do mesmo conteúdo em PDF — uma para
                computador e outra para celular — com contatos e catálogos
                clicáveis organizados por categoria.
              </p>
              <TrackedCta
                className="seller-hero__cta"
                href={checkoutHref}
                location="hero"
              >
                Quero receber os PDFs
              </TrackedCta>
              <span className="seller-trust-line">
                <LockKeyhole aria-hidden="true" size={17} />
                Compra segura <i aria-hidden="true" /> Acesso após a confirmação
              </span>
            </div>

            <div className="seller-hero__visual">
              <ProductShowcase />
            </div>
          </div>

          <div className="seller-container seller-proof-rail" aria-label="Resumo do material">
            {proofStats.map((stat) => (
              <div className="seller-proof-rail__item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="seller-material" id="material">
          <div className="seller-container">
            <Reveal className="seller-heading seller-heading--material">
              <span className="seller-section-index">01 · O material</span>
              <h2>
                O mesmo conteúdo. <strong>Duas formas de consultar.</strong>
              </h2>
              <p>
                No computador, compare com mais espaço. No celular, abra
                contatos e catálogos onde estiver.
              </p>
            </Reveal>

            <div className="seller-material__grid">
              <Reveal className="seller-material__preview" delay={0.08}>
                <FormatPreview />
              </Reveal>
              <Reveal className="seller-fact-list" delay={0.18}>
                {productFacts.map((fact) => (
                  <div className="seller-fact-list__item" key={fact.label}>
                    <strong>{fact.value}</strong>
                    <span>{fact.label}</span>
                  </div>
                ))}
                <p>
                  <FileText aria-hidden="true" size={18} />
                  Links ausentes são informados no próprio arquivo.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="seller-consult" id="como-consultar">
          <div className="seller-container">
            <Reveal className="seller-heading seller-heading--wide">
              <span className="seller-section-index">02 · Como consultar</span>
              <h2>Abra. Compare. Valide antes de comprar.</h2>
              <p>A base encurta a busca. A decisão continua sendo sua.</p>
            </Reveal>

            <ol className="seller-process">
              {consultationSteps.map((step, index) => (
                <Reveal delay={index * 0.07} key={step.number}>
                  <li>
                    <span className="seller-process__number">{step.number}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="seller-categories" id="categorias">
          <div className="seller-container">
            <Reveal className="seller-heading seller-categories__heading">
              <span className="seller-section-index">03 · Categorias</span>
              <h2>8 segmentos para explorar.</h2>
              <p>Contatos, catálogos e canais organizados por categoria.</p>
            </Reveal>

            <div className="seller-category-directory">
              {supplierCategories.map((category, index) => (
                <Reveal delay={(index % 4) * 0.055} key={category.label}>
                  <div className="seller-category-row">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{category.label}</strong>
                      <p>{category.description}</p>
                    </div>
                    <i aria-hidden="true">
                      <b style={{ width: `${Math.max(10, (category.count / 42) * 100)}%` }} />
                    </i>
                    <em>{category.count}</em>
                    <small>págs. {category.pcPages}</small>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="seller-audience">
          <AmbientLight className="seller-audience__ambient" />
          <div className="seller-container">
            <Reveal className="seller-heading seller-heading--audience">
              <span className="seller-section-index">04 · Para quem é</span>
              <h2>
                Para quem quer começar com pesquisa, <strong>não com promessa.</strong>
              </h2>
              <h3>Contato encontrado ainda não é oportunidade.</h3>
              <p>
                A Base do Seller faz sentido para quem quer reduzir o tempo de
                busca e ainda comparar, confirmar e testar antes de comprar.
              </p>
            </Reveal>

            <div className="seller-audience__grid">
              <Reveal className="seller-audience__lists" delay={0.08}>
                <div>
                  <h3>Faz sentido para quem:</h3>
                  <ul>
                    {[
                      "Vende ou quer vender em marketplaces",
                      "Procura fornecedores nacionais",
                      "Quer trabalhar com estoque próprio",
                      "Está disposto a comparar condições e testar pequeno",
                    ].map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Não é um atalho.</h3>
                  <ul>
                    {[
                      "Não garante lucro ou vendas",
                      "Não entrega anúncios prontos",
                      "Não automatiza dropshipping",
                      "Não substitui sua análise comercial",
                    ].map((item) => (
                      <li key={item}>
                        <Minus aria-hidden="true" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal className="seller-audience__proof" delay={0.16}>
                <div className="seller-audience__page">
                  <Image
                    alt="Página real do PDF para computador com os cuidados antes de comprar"
                    fill
                    sizes="(max-width: 820px) 86vw, 34vw"
                    src="/images/pdf-2026/pc-caution.webp"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal className="seller-audience__closing" delay={0.18}>
              A base abre o caminho. <strong>O método melhora a decisão.</strong>
            </Reveal>
          </div>
        </section>

        <section className="seller-offer" id="oferta">
          <AmbientLight className="seller-offer__ambient" />
          <div className="seller-container seller-offer__frame">
            <Reveal className="seller-offer__visual">
              <div className="seller-offer__pc">
                <Image
                  alt="Capa real da versão PC da Base do Seller"
                  fill
                  sizes="(max-width: 820px) 76vw, 41vw"
                  src="/images/pdf-2026/pc-cover.webp"
                />
              </div>
              <div className="seller-offer__mobile">
                <Image
                  alt="Capa real da versão Mobile da Base do Seller"
                  fill
                  sizes="(max-width: 820px) 28vw, 13vw"
                  src="/images/pdf-2026/mobile-cover.webp"
                />
              </div>
            </Reveal>

            <Reveal className="seller-offer__copy" delay={0.12}>
              <span className="seller-section-index">05 · O acesso</span>
              <h2>Sua base para começar a pesquisar.</h2>
              <p>Receba as duas edições completas no mesmo acesso.</p>
              <ul>
                {offerItems.map((item, index) => (
                  <li key={item}>
                    {index === 0 ? (
                      <Monitor aria-hidden="true" size={19} />
                    ) : index === 1 ? (
                      <Smartphone aria-hidden="true" size={19} />
                    ) : (
                      <Check aria-hidden="true" size={19} />
                    )}
                    {item.replace("{supplierCount}", String(siteConfig.supplierCount))}
                  </li>
                ))}
              </ul>

              <div className="seller-offer__price">
                <span>De <s>{siteConfig.offer.compareAtPrice}</s> por</span>
                <strong>{siteConfig.offer.price}</strong>
                {siteConfig.offer.installments ? <small>{siteConfig.offer.installments}</small> : null}
                <small>{siteConfig.offer.paymentNote}</small>
              </div>

              <TrackedCta
                className="seller-offer__cta"
                href={checkoutHref}
                location="offer"
              >
                Quero receber os PDFs
              </TrackedCta>
              <span className="seller-trust-line seller-offer__trust">
                <ShieldCheck aria-hidden="true" size={18} />
                Compra segura <i aria-hidden="true" /> {siteConfig.offer.guaranteeDays} dias de garantia
                <i aria-hidden="true" /> Uso individual
              </span>
            </Reveal>
          </div>
        </section>

        <section className="seller-faq" id="duvidas">
          <div className="seller-container seller-faq__grid">
            <Reveal className="seller-faq__heading">
              <span className="seller-section-index">06 · Dúvidas</span>
              <h2>Dúvidas antes de comprar?</h2>
              <p>Respostas objetivas para você comprar com tranquilidade.</p>
              <i aria-hidden="true" />
            </Reveal>
            <Reveal className="seller-faq__accordion" delay={0.1}>
              <Accordion items={faqItems} />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="seller-footer" id="site-footer">
        <div className="seller-container seller-footer__inner">
          <div>
            <BrandWordmark />
            <p>Produto digital independente, sem vínculo com o Mercado Livre.</p>
          </div>
          <nav aria-label="Links legais">
            <Link href="/termos">Termos de uso</Link>
            <Link href="/privacidade">Política de privacidade</Link>
            <Link href="/reembolso">Política de reembolso</Link>
          </nav>
          <p>© {new Date().getFullYear()} Base do Seller.</p>
        </div>
      </footer>
    </div>
  );
}
