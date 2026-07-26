import { deliverables } from "@/content/site-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DeliverablesSection() {
  return (
    <section className="section deliverables" id="o-que-voce-recebe">
      <div className="container">
        <Reveal>
          <SectionHeading
            align="center"
            description="Você recebe o necessário para pesquisar, analisar e agir — sem dezenas de horas de conteúdo ou bônus criados apenas para aumentar volume."
            title={
              <>
                Conteúdo para agir.
                <br />{" "}
                <strong className="heading-accent">
                  Não para acumular.
                </strong>
              </>
            }
          />
        </Reveal>

        <div className="deliverables__list">
          {deliverables.map((item, index) => (
            <Reveal delay={index * 0.05} key={item.number}>
              <article className="deliverable">
                <span className="deliverable__number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
