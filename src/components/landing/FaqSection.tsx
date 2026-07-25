import { getFaqItems } from "@/content/site-content";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

export function FaqSection() {
  return (
    <section className="section faq" id="duvidas">
      <div className="container faq__layout">
        <Reveal className="faq__heading">
          <h2>
            Dúvidas,
            <br />
            {" "}com respostas diretas.
          </h2>
          <p>
            O que precisa estar claro antes de você decidir se essa base faz
            sentido para o seu momento.
          </p>
        </Reveal>
        <Reveal className="faq__accordion" delay={0.06}>
          <Accordion items={getFaqItems()} />
        </Reveal>
      </div>
    </section>
  );
}
