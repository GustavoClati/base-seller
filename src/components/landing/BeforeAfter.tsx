import { Check, Minus, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollImage } from "@/components/landing/ScrollImage";

const changes = [
  { before: "Sem saber se sobra margem", after: "Opções para comparar custos" },
  { before: "Sem um produto para testar", after: "Categorias para explorar e validar" },
  { before: "Horas procurando contatos", after: "Canais reunidos para consultar" },
];

export function BeforeAfter() {
  return (
    <section className="seller-comparison" id="antes-depois" aria-labelledby="comparison-title">
      <div className="seller-container">
        <Reveal className="seller-heading seller-heading--center">
          <h2 id="comparison-title">Sua pesquisa muda.<br /><strong>Sua decisão também.</strong></h2>
          <p>Veja o que muda quando você tem um ponto de partida.</p>
        </Reveal>
        <div className="seller-comparison__grid">
          <div className="seller-comparison__column seller-comparison__column--before">
            <Reveal><ScrollImage src="/images/editorial-2026/before-search.webp" alt="Cena ilustrativa de uma busca dispersa: abas abertas, anotações e amostras sobre a mesa" /></Reveal>
            <Reveal><h3>Antes · Busca no escuro</h3></Reveal>
            <ul>{changes.map((item, index) => <li key={item.before}><Reveal delay={index * 0.12}><Minus aria-hidden="true" size={19} /><span>{item.before}</span></Reveal></li>)}</ul>
          </div>
          <span className="seller-comparison__arrow" aria-hidden="true"><ArrowRight size={22} /></span>
          <div className="seller-comparison__column seller-comparison__column--after">
            <Reveal delay={0.15}><ScrollImage src="/images/editorial-2026/after-research.webp" alt="Cena ilustrativa de pesquisa organizada com o PDF da Base do Seller, calculadora e amostras" /></Reveal>
            <Reveal delay={0.1}><h3>Depois · Com a base em mãos</h3></Reveal>
            <ul>{changes.map((item, index) => <li key={item.after}><Reveal delay={0.1 + index * 0.12}><Check aria-hidden="true" size={19} /><span>{item.after}</span></Reveal></li>)}</ul>
          </div>
        </div>
        <Reveal><p className="seller-comparison__note">Cenas ilustrativas. A base organiza sua pesquisa. Margem e vendas dependem da sua análise.</p></Reveal>
      </div>
    </section>
  );
}
