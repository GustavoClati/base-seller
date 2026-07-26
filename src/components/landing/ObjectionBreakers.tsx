import { CircleHelp, ShieldCheck } from "lucide-react";

import { objectionBreakers } from "@/content/site-content";
import { getCheckoutHref } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { TrackedCta } from "@/components/ui/TrackedCta";

export function ObjectionBreakers() {
  return (
    <section className="section objection-breakers" id="antes-de-decidir">
      <div aria-hidden="true" className="objection-breakers__halo" />
      <div className="container">
        <div className="objection-breakers__heading">
          <Reveal>
            <p className="objection-breakers__label">Antes de decidir</p>
            <h2>
              Você pode continuar do zero.
              <br />
              {" "}
              <strong>
                Ou começar com{" "}
                <span className="title-keep">base e processo.</span>
              </strong>
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="objection-breakers__assurance">
              <ShieldCheck aria-hidden="true" size={24} strokeWidth={1.8} />
              <p>
                Sem promessa de lucro ou produto vencedor. A proposta é reduzir
                o tempo de pesquisa e melhorar o critério antes de investir.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="objection-breakers__list">
          {objectionBreakers.map((item, index) => (
            <Reveal delay={index * 0.045} key={item.question}>
              <article className="objection-breaker">
                <span className="objection-breaker__icon">
                  <CircleHelp
                    aria-hidden="true"
                    size={25}
                    strokeWidth={1.7}
                  />
                </span>
                <div>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="objection-breakers__action">
            <p>Não é só uma planilha. É um ponto de partida com método.</p>
            <TrackedCta
              href={getCheckoutHref()}
              location="objection_breakers"
            >
              Quero começar com uma base
            </TrackedCta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
