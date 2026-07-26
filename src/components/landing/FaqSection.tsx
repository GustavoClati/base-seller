import { getFaqItems } from "@/content/site-content";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck } from "lucide-react";

export function FaqSection() {
  return (
    <section className="section faq" id="duvidas">
      <div className="container faq__layout">
        <Reveal className="faq__heading">
          <h2>
            <span className="faq__title-line">Antes de decidir,</span>
            <strong className="faq__title-line heading-accent">
              deixe tudo claro.
            </strong>
          </h2>
          <p>
            O que precisa estar claro antes de você decidir se essa base faz
            sentido para o seu momento.
          </p>
          <div className="faq__signal">
            <ShieldCheck aria-hidden="true" size={22} strokeWidth={1.8} />
            <span>Sem letra miúda. Sem promessa escondida.</span>
          </div>
        </Reveal>
        <Reveal className="faq__accordion" delay={0.06}>
          <Accordion items={getFaqItems()} />
        </Reveal>
      </div>
    </section>
  );
}
