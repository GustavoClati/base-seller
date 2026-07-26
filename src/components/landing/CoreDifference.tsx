"use client";

import { motion, useReducedMotion } from "motion/react";

export function CoreDifference() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section core-difference">
      <div className="container">
        <div className="core-difference__layout">
          <h2>
            A base acelera o começo.
            <br />
            {" "}
            <strong className="heading-accent">
              O método melhora a decisão.
            </strong>
          </h2>
          <p>
            Você aprende a encontrar novos fornecedores, confirmar condições,
            solicitar catálogos e analisar produtos por conta própria. A base é
            o ponto de partida — não uma dependência.
          </p>
        </div>

        <div aria-hidden="true" className="base-to-process">
          <span>Base</span>
          <div className="base-to-process__track">
            <motion.span
              animate={reduceMotion ? { x: "100%" } : { x: ["0%", "100%"] }}
              transition={{
                duration: 3.4,
                ease: "easeInOut",
                repeat: reduceMotion ? 0 : Infinity,
                repeatDelay: 1,
              }}
            />
          </div>
          <span>Processo</span>
        </div>
      </div>
    </section>
  );
}
