import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const changes = [
  { before: "Horas procurando contatos", after: "168 registros para iniciar sua pesquisa" },
  { before: "Busca espalhada em várias abas", after: "127 contatos ou WhatsApp reunidos" },
  { before: "Dificuldade para encontrar catálogos", after: "147 links para explorar produtos" },
  { before: "Sem direção para escolher um nicho", after: "8 segmentos para comparar oportunidades" },
  { before: "Sem saber se o preço deixa margem", after: "Canais para cotar e comparar custos" },
  { before: "Anotações perdidas entre dispositivos", after: "PDFs próprios para PC e celular" },
];

export function BeforeAfter() {
  return (
    <section className="seller-comparison" id="antes-depois" aria-labelledby="comparison-title">
      <div className="seller-container">
        <Reveal className="seller-heading seller-heading--center">
          <h2 id="comparison-title">Menos busca no escuro.<br /><strong>Mais caminhos para decidir.</strong></h2>
          <p>Você não compra uma promessa. Compra um ponto de partida organizado.</p>
        </Reveal>
        <div className="seller-comparison__matrix">
          <table>
            <caption className="sr-only">Comparação da pesquisa sem uma base e com a Base do Seller</caption>
            <thead><tr>
              <th scope="col">Sem uma base</th>
              <th scope="col">Com a Base do Seller<span>Seu próximo passo, mais claro.</span></th>
            </tr></thead>
            <tbody>{changes.map((item, index) => (
              <tr key={item.before}>
                <td><Reveal delay={index * 0.06}><Minus aria-hidden="true" size={18} /><span>{item.before}</span></Reveal></td>
                <td><Reveal delay={0.12 + index * 0.06}><Check aria-hidden="true" size={18} /><span>{item.after}</span></Reveal></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p className="seller-comparison__note">Organização para pesquisar. A escolha e a validação continuam com você.</p>
      </div>
    </section>
  );
}
