import { spreadsheetFields } from "@/content/site-content";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";

export function SpreadsheetPreview() {
  return (
    <section className="section spreadsheet-preview">
      <div className="container">
        <Reveal className="spreadsheet-preview__heading">
          <h2>
            {siteConfig.supplierCount} fornecedores.
            <br />
            {" "}
            <strong className="heading-accent">
              Um só lugar <span className="title-keep">para começar.</span>
            </strong>
          </h2>
          <p>
            Em vez de procurar fornecedores em conversas antigas, favoritos e
            anotações, você terá os contatos organizados em um único arquivo.
          </p>
        </Reveal>

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
