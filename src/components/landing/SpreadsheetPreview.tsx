import {
  Camera,
  Globe2,
  IdCard,
  Link2,
  MessageCircle,
  Search,
  Tags,
} from "lucide-react";

import { spreadsheetFields } from "@/content/site-content";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";

const fieldIcons = [IdCard, Tags, MessageCircle, Camera, Globe2, Link2];

export function SpreadsheetPreview() {
  return (
    <section className="section spreadsheet-preview" id="planilha">
      <div className="container">
        <Reveal className="spreadsheet-preview__heading">
          <h2 className="centered-title">
            <span className="centered-title__line">
              {siteConfig.supplierCount} fornecedores.
            </span>
            <strong className="centered-title__line heading-accent">
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
          {spreadsheetFields.map((field, index) => {
            const FieldIcon = fieldIcons[index];

            return (
              <li key={field}>
                <span aria-hidden="true" className="spreadsheet-preview__field-icon">
                  <FieldIcon size={24} strokeWidth={1.8} />
                </span>
                <strong>{field}</strong>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </li>
            );
          })}
        </ul>

        <p className="spreadsheet-preview__closing">
          <Search aria-hidden="true" size={30} strokeWidth={1.8} />
          <span>Abra, escolha uma categoria e comece sua pesquisa.</span>
        </p>
      </div>
    </section>
  );
}
