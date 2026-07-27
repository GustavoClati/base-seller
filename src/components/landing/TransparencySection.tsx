import { ArrowRight, CircleAlert, Route } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";

export function TransparencySection() {
  return (
    <section className="section transparency">
      <div aria-hidden="true" className="transparency__line" />
      <div className="container">
        <Reveal>
          <h2>
            <span>Sem</span> produto campeão.
            <br />
            <span>Sem</span> margem garantida.
            <br />
            <span>Sem</span> atalho.
          </h2>
        </Reveal>

        <div className="transparency__body">
          <Reveal className="transparency__step transparency__step--reality">
            <span className="transparency__step-number">01</span>
            <CircleAlert aria-hidden="true" size={24} strokeWidth={1.8} />
            <div>
              <span className="transparency__eyebrow">O limite</span>
              <p>
                Nenhum fornecedor transforma um produto em{" "}
                <strong>oportunidade sozinho.</strong> O resultado depende de
                custo, frete, tarifas, impostos, concorrência e execução.
              </p>
            </div>
          </Reveal>
          <Reveal className="transparency__connector" delay={0.03}>
            <span>Por isso</span>
            <ArrowRight aria-hidden="true" size={26} strokeWidth={1.6} />
          </Reveal>
          <Reveal
            className="transparency__step transparency__step--path"
            delay={0.06}
          >
            <span className="transparency__step-number">02</span>
            <Route aria-hidden="true" size={24} strokeWidth={1.8} />
            <div>
              <span className="transparency__eyebrow">O caminho</span>
              <p>
                A Base do Seller reduz o tempo de pesquisa e ajuda você a tomar
                decisões com <strong>mais critério.</strong> Ela não substitui
                o trabalho de analisar e testar.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="transparency__closing">
            Você não compra uma promessa de lucro.
            <br />
            <strong>Você compra um caminho melhor para decidir.</strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
