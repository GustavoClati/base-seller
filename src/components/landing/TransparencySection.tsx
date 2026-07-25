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
          <Reveal>
            <p>
              Nenhum fornecedor transforma um produto em oportunidade sozinho.
              O resultado depende de custo, frete, tarifas, impostos,
              concorrência e execução.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p>
              A Base do Seller reduz o tempo de pesquisa e ajuda você a tomar
              decisões com mais critério. Ela não substitui o trabalho de
              analisar e testar.
            </p>
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
