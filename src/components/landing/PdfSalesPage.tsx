import {
  AlertCircle,
  Check,
  FileText,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  getFaqItems,
  navigationItems,
  offerItems,
  supplierCategories,
} from "@/content/site-content";
import { getCheckoutHref, siteConfig } from "@/lib/site-config";
import { Accordion } from "@/components/ui/Accordion";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { TrackedCta } from "@/components/ui/TrackedCta";

const proofStats = [
  { value: siteConfig.supplierCount, label: "registros" },
  { value: siteConfig.contactCount, label: "com contato" },
  { value: siteConfig.catalogCount, label: "com catálogo" },
  {
    value: siteConfig.researchedChannelCount,
    label: "com site ou Instagram",
  },
] as const;

const validationSteps = [
  {
    number: "01",
    title: "Confirme a empresa",
    text: "Valide CNPJ, razão social, nota fiscal e dados bancários.",
  },
  {
    number: "02",
    title: "Compare o custo total",
    text: "Some produto, imposto, frete, embalagem e comissão.",
  },
  {
    number: "03",
    title: "Teste antes de escalar",
    text: "Faça um pedido pequeno e confirme prazo, qualidade e suporte.",
  },
  {
    number: "04",
    title: "Pague no canal certo",
    text: "Confirme o destinatário pelo site, Instagram ou contato comercial.",
  },
] as const;

function ProductStack({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`pdf-product-stack${compact ? " is-compact" : ""}`}>
      <div className="pdf-product-stack__sample" aria-hidden="true">
        <Image
          alt=""
          height={910}
          loading={compact ? "lazy" : "eager"}
          src="/images/pdf-sample-table.webp"
          width={1287}
        />
      </div>
      <div className="pdf-product-stack__index" aria-hidden="true">
        <Image
          alt=""
          height={910}
          loading={compact ? "lazy" : "eager"}
          src="/images/pdf-categories.webp"
          width={1287}
        />
      </div>
      <div className="pdf-product-stack__cover">
        <Image
          alt="Capa da Base de Fornecedores 2026 da Base do Seller"
          height={910}
          loading={compact ? "lazy" : "eager"}
          src="/images/pdf-cover.webp"
          width={1287}
        />
      </div>
    </div>
  );
}

export function PdfSalesPage() {
  const checkoutHref = getCheckoutHref();
  const faqItems = getFaqItems();

  return (
    <div className="pdf-sales-page">
      <header className="pdf-header">
        <div className="pdf-container pdf-header__inner">
          <BrandWordmark className="pdf-header__brand" />
          <nav aria-label="Navegação principal" className="pdf-header__nav">
            {navigationItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <TrackedCta
            className="pdf-header__cta"
            href={checkoutHref}
            location="header"
            variant="compact"
          >
            Quero a lista
          </TrackedCta>
        </div>
      </header>

      <main id="conteudo-principal">
        <section className="pdf-hero" id="hero">
          <div className="pdf-container pdf-hero__grid">
            <div className="pdf-hero__copy">
              <h1>
                Pare de procurar <strong>fornecedores no escuro.</strong>
              </h1>
              <p>
                Receba uma lista organizada com contatos, catálogos, sites e
                perfis pesquisados para você começar sua validação.
              </p>
              <TrackedCta
                className="pdf-hero__cta"
                href={checkoutHref}
                location="hero"
              >
                Quero acessar o PDF
              </TrackedCta>
              <span className="pdf-trust-line">
                <LockKeyhole aria-hidden="true" size={17} />
                Compra segura <i aria-hidden="true" /> Acesso ao PDF após a
                confirmação
              </span>
            </div>

            <div className="pdf-hero__visual">
              <ProductStack />
            </div>
          </div>

          <div className="pdf-container pdf-proof-rail" aria-label="Números da base">
            {proofStats.map((stat) => (
              <div className="pdf-proof-rail__item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pdf-content-section" id="o-que-vem-no-pdf">
          <div className="pdf-container">
            <div className="pdf-section-heading">
              <h2>
                Uma base pronta para abrir <strong>caminhos.</strong>
              </h2>
              <p>
                Em vez de começar com dezenas de abas abertas, você recebe os
                registros organizados em um único PDF.
              </p>
            </div>

            <div className="pdf-content-section__grid">
              <div className="pdf-viewer">
                <div className="pdf-viewer__bar">
                  <span />
                  <span>Base do Seller - Lista de Fornecedores.pdf</span>
                  <b>{siteConfig.pdfPageCount} páginas</b>
                </div>
                <Image
                  alt="Amostra de uma página do PDF com fornecedores, contatos, sites, Instagram e catálogos"
                  height={910}
                  src="/images/pdf-sample-table.webp"
                  width={1287}
                />
              </div>

              <ul className="pdf-content-list">
                <li>
                  <FileText aria-hidden="true" />
                  <div>
                    <strong>{siteConfig.pdfPageCount} páginas organizadas</strong>
                    <span>Conteúdo separado por segmento.</span>
                  </div>
                </li>
                <li>
                  <FileText aria-hidden="true" />
                  <div>
                    <strong>Contatos clicáveis</strong>
                    <span>{siteConfig.contactCount} registros com contato.</span>
                  </div>
                </li>
                <li>
                  <FileText aria-hidden="true" />
                  <div>
                    <strong>Catálogos clicáveis</strong>
                    <span>{siteConfig.catalogCount} registros com catálogo.</span>
                  </div>
                </li>
                <li>
                  <FileText aria-hidden="true" />
                  <div>
                    <strong>Sites e perfis pesquisados</strong>
                    <span>
                      {siteConfig.researchedChannelCount} registros com site ou
                      Instagram pesquisado.
                    </span>
                  </div>
                </li>
                <li className="pdf-content-list__note">
                  Pesquisa digital concluída em {siteConfig.researchDate}.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pdf-categories" id="categorias">
          <div className="pdf-container">
            <div className="pdf-section-heading">
              <h2>
                8 grupos para você <strong>explorar.</strong>
              </h2>
              <p>
                Vá direto ao segmento mais próximo do seu público e comece a
                comparar as opções.
              </p>
            </div>

            <div className="pdf-category-list">
              {supplierCategories.map((category, index) => (
                <div className="pdf-category-list__row" key={category.label}>
                  <span className="pdf-category-list__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{category.label}</strong>
                  <span className="pdf-category-list__bar" aria-hidden="true">
                    <i style={{ width: `${(category.count / 40) * 100}%` }} />
                  </span>
                  <b>{category.count}</b>
                </div>
              ))}
            </div>

            <div className="pdf-category-total">
              <strong>{siteConfig.supplierCount}</strong>
              <span>registros organizados</span>
            </div>
          </div>
        </section>

        <section className="pdf-mid-cta">
          <div className="pdf-container pdf-mid-cta__inner">
            <FileText aria-hidden="true" />
            <h2>Escolha um segmento. Abra os contatos. Comece sua validação.</h2>
            <TrackedCta href={checkoutHref} location="method">
              Quero a lista de fornecedores
            </TrackedCta>
          </div>
        </section>

        <section className="pdf-validation">
          <div className="pdf-container">
            <div className="pdf-section-heading pdf-section-heading--center">
              <h2>
                A lista abre o caminho. <strong>A validação protege sua compra.</strong>
              </h2>
            </div>

            <ol className="pdf-validation__steps">
              {validationSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="pdf-validation__note">
              <AlertCircle aria-hidden="true" size={20} />
              A internet muda. Confirme as condições diretamente antes de comprar.
            </p>
          </div>
        </section>

        <section className="pdf-offer" id="oferta">
          <div className="pdf-container pdf-offer__grid">
            <div className="pdf-offer__visual">
              <ProductStack compact />
            </div>
            <div className="pdf-offer__copy">
              <h2>Sua lista de fornecedores começa aqui.</h2>
              <ul>
                {offerItems.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" size={18} />
                    {item.replace(
                      "{supplierCount}",
                      String(siteConfig.supplierCount),
                    )}
                  </li>
                ))}
              </ul>

              <div className="pdf-offer__price">
                <span>De <s>{siteConfig.offer.compareAtPrice}</s> por</span>
                <strong>{siteConfig.offer.price}</strong>
                {siteConfig.offer.installments ? (
                  <small>{siteConfig.offer.installments}</small>
                ) : null}
                <small>{siteConfig.offer.paymentNote}</small>
              </div>

              <TrackedCta
                className="pdf-offer__cta"
                href={checkoutHref}
                location="offer"
              >
                Quero receber o PDF
              </TrackedCta>

              <span className="pdf-offer__trust">
                <ShieldCheck aria-hidden="true" size={18} />
                Compra segura <i aria-hidden="true" /> {siteConfig.offer.guaranteeDays}
                dias de garantia <i aria-hidden="true" /> Uso individual
              </span>
            </div>
          </div>
        </section>

        <section className="pdf-faq" id="duvidas">
          <div className="pdf-container pdf-faq__grid">
            <div className="pdf-faq__heading">
              <h2>Dúvidas antes de comprar?</h2>
              <p>Veja os pontos mais importantes antes de acessar o PDF.</p>
            </div>
            <Accordion items={faqItems} />
          </div>
        </section>
      </main>

      <footer className="pdf-footer">
        <div className="pdf-container pdf-footer__inner">
          <div>
            <BrandWordmark />
            <p>Lista digital de fornecedores para uso individual.</p>
          </div>
          <nav aria-label="Links legais">
            <Link href="/termos">Termos de uso</Link>
            <Link href="/privacidade">Política de privacidade</Link>
            <Link href="/reembolso">Política de reembolso</Link>
            {siteConfig.supportEmail ? (
              <a href={`mailto:${siteConfig.supportEmail}`}>Suporte</a>
            ) : null}
          </nav>
          <p>© {new Date().getFullYear()} Base do Seller.</p>
        </div>
      </footer>
    </div>
  );
}
