import { spreadsheetFields } from "@/content/site-content";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export function SpreadsheetPreview() {
  const hasMedia =
    siteConfig.siteMode === "preview" ||
    Boolean(siteConfig.media.spreadsheetPreview);

  return (
    <section className="section spreadsheet-preview">
      <div className="container">
        <Reveal className="spreadsheet-preview__heading">
          <h2>
            Uma base limpa.
            <br />
            {" "}Sem contatos espalhados.
          </h2>
          <p>
            Em vez de procurar fornecedores em conversas antigas, favoritos e
            anotações, você terá os contatos organizados em um único arquivo.
          </p>
        </Reveal>

        {hasMedia ? (
          <Reveal>
            <MediaSlot
              alt="Prévia real da planilha Base do Seller com dados sensíveis ocultos"
              assetSrc={siteConfig.media.spreadsheetPreview}
              assetType="image"
              description="A captura publicada deve ocultar contatos e dados sensíveis."
              id="screenshot-planilha"
              label="Adicionar print real da planilha"
              siteMode={siteConfig.siteMode}
            />
          </Reveal>
        ) : null}

        <ul
          aria-label="Informações organizadas na planilha"
          className="spreadsheet-preview__fields"
        >
          {spreadsheetFields.map((field) => (
            <li key={field}>{field}</li>
          ))}
        </ul>

        <p className="spreadsheet-preview__closing">
          Abra, escolha uma categoria e comece sua pesquisa.
        </p>
      </div>
    </section>
  );
}
