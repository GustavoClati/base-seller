import Link from "next/link";

import type { LegalDocument } from "@/content/legal-content";
import { siteConfig } from "@/lib/site-config";
import { BrandWordmark } from "@/components/ui/BrandWordmark";

export function LegalPage({ document }: { document: LegalDocument }) {
  const isPreview = siteConfig.siteMode === "preview";

  return (
    <main className="legal-page" id="conteudo-principal">
      <header className="legal-page__header">
        <BrandWordmark />
        <Link className="legal-page__back" href="/">
          Voltar para a página principal
        </Link>
      </header>

      <article className="legal-page__article">
        <p className="legal-page__status">
          {isPreview ? "Documento em preparação" : "Documento legal"}
        </p>
        <h1>{document.title}</h1>
        <p className="legal-page__description">{document.description}</p>

        {document.sections.length > 0 ? (
          <div className="legal-page__sections">
            {document.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        ) : (
          <div className="legal-page__placeholder">
            <strong>Conteúdo sujeito a revisão jurídica.</strong>
            <p>
              Este documento é apenas um scaffold estrutural no modo preview.
              A publicação em modo live permanece bloqueada até a inclusão e
              revisão do texto jurídico definitivo.
            </p>
          </div>
        )}
      </article>
    </main>
  );
}
