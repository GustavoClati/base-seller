import { audience } from "@/content/site-content";
import { Reveal } from "@/components/ui/Reveal";

function AudienceList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="audience__column">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AudienceSection() {
  return (
    <section className="section audience" id="para-quem-e">
      <div className="container">
        <Reveal>
          <h2>
            Para quem quer começar
            <br />
            {" "}com mais critério.
          </h2>
        </Reveal>

        <div className="audience__layout">
          <Reveal>
            <AudienceList items={audience.forYou} title="É para você que:" />
          </Reveal>
          <Reveal delay={0.08}>
            <AudienceList
              items={audience.notForYou}
              title="Não é para você que:"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
