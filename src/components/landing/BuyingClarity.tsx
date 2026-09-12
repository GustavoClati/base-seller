import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollImage } from "@/components/landing/ScrollImage";

const questions = [
  {
    question: "Vou encontrar um produto campeão?",
    answer: "Você recebe caminhos para procurar: oito segmentos com fornecedores e catálogos. Compare demanda, concorrência e custos para escolher o que testar. Um produto campeão se confirma na prática; a lista ajuda você a começar essa pesquisa.",
  },
  {
    question: "E se o preço não deixar margem?",
    answer: "Ter mais opções permite comparar cotações e descartar o que não fecha a conta. Antes de comprar, inclua custo do produto, frete, taxas e impostos na sua análise. Os contatos reunidos na base facilitam a consulta de preços e condições diretamente com cada fornecedor.",
  },
  {
    question: "Não dá para pesquisar tudo sozinho?",
    answer: "Dá, sim. O que você compra aqui é organização: 168 registros separados por categoria, com 127 contatos ou WhatsApp e 147 links de catálogo. Você parte dessa seleção para comparar as opções, em vez de montar uma lista do zero.",
  },
  {
    question: "E se eu estiver começando agora?",
    answer: "Os PDFs trazem orientações de consulta e cuidados antes do primeiro pedido. Comece por uma categoria, confira os canais, converse com o fornecedor e teste uma quantidade pequena. As versões PC e Mobile permitem consultar o mesmo conteúdo onde for mais confortável.",
  },
];

export function BuyingClarity() {
  return (
    <section className="seller-clarity" id="por-que-a-base">
      <div className="seller-container seller-clarity__grid">
        <div>
          <Reveal className="seller-heading">
            <span className="seller-eyebrow">Antes de investir</span>
            <h2>Uma boa compra<br /><strong>começa com clareza.</strong></h2>
            <p>Preço, produto e fornecedor: tire essas dúvidas antes do primeiro pedido.</p>
          </Reveal>
          <Reveal delay={0.12} className="seller-clarity__visual">
            <ScrollImage src="/images/editorial-2026/validate-costs.webp" alt="Ilustração fotográfica de análise de custos com calculadora, caderno e amostra de produto" />
          </Reveal>
        </div>
        <Reveal className="seller-clarity__answers" delay={0.15}>
          <Accordion items={questions} initialOpenIndex={0} />
          <Link className="seller-clarity__link" href="#oferta">Quero começar minha pesquisa <ArrowUpRight aria-hidden="true" size={18} /></Link>
        </Reveal>
      </div>
    </section>
  );
}
