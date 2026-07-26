import {
  ArrowRight,
  CircleCheckBig,
  CircleX,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

import { audience } from "@/content/site-content";
import { Reveal } from "@/components/ui/Reveal";

function AudienceList({
  title,
  items,
  variant,
}: {
  title: string;
  items: readonly string[];
  variant: "positive" | "negative";
}) {
  const ItemIcon = variant === "positive" ? CircleCheckBig : CircleX;

  return (
    <div className={`audience__column audience__column--${variant}`}>
      <div className="audience__column-top">
        <span>
          {variant === "positive" ? "Perfil alinhado" : "Expectativa desalinhada"}
        </span>
        {variant === "positive" ? (
          <Sparkles aria-hidden="true" size={27} strokeWidth={1.8} />
        ) : (
          <TriangleAlert aria-hidden="true" size={27} strokeWidth={1.8} />
        )}
      </div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <ItemIcon aria-hidden="true" size={19} strokeWidth={1.8} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {variant === "positive" ? (
        <div className="audience__column-note">
          <span>Mais direção para pesquisar. Menos impulso para comprar.</span>
          <ArrowRight aria-hidden="true" size={21} strokeWidth={1.8} />
        </div>
      ) : null}
    </div>
  );
}

export function AudienceSection() {
  return (
    <section className="section audience" id="para-quem-e">
      <div className="container">
        <Reveal>
          <h2>
            <span className="audience__title-line">
              Critério antes do estoque.
            </span>
            <strong className="audience__title-line heading-accent">
              Método antes da aposta.
            </strong>
          </h2>
        </Reveal>

        <div className="audience__layout">
          <Reveal>
            <AudienceList
              items={audience.forYou}
              title="É para você que:"
              variant="positive"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <AudienceList
              items={audience.notForYou}
              title="Não é para você que:"
              variant="negative"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
