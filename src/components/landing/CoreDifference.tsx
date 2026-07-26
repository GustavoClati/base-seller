"use client";

import { Database, Route } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function CoreDifference() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section core-difference" id="base-e-processo">
      <div className="container">
        <div className="core-difference__layout">
          <h2>
            <motion.span
              className="core-difference__title-line"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              viewport={{ amount: 0.65, once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              A base abre o caminho.
            </motion.span>
            <motion.strong
              className="core-difference__title-line heading-accent"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              transition={{ delay: 0.14 }}
              viewport={{ amount: 0.65, once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              O método melhora a decisão.
            </motion.strong>
          </h2>
          <p>
            Você aprende a encontrar novos fornecedores, confirmar condições,
            solicitar catálogos e analisar produtos por conta própria. A base é
            o ponto de partida — não uma dependência.
          </p>
        </div>

        <div aria-hidden="true" className="base-to-process">
          <div className="base-to-process__endpoint">
            <Database size={22} strokeWidth={1.8} />
            <span>Base</span>
          </div>
          <div className="base-to-process__track">
            <div className="base-to-process__steps">
              <span>Encontrar</span>
              <span>Validar</span>
              <span>Analisar</span>
            </div>
            <motion.i
              className="base-to-process__beam"
              animate={reduceMotion ? { scaleX: 1 } : { scaleX: [0, 1, 1] }}
              transition={{
                duration: 3.4,
                ease: "easeInOut",
                repeat: reduceMotion ? 0 : Infinity,
                repeatDelay: 1,
                times: [0, 0.82, 1],
              }}
            />
            <motion.span
              className="base-to-process__marker"
              animate={
                reduceMotion
                  ? { left: "calc(100% - 0.62rem)" }
                  : { left: ["0%", "calc(100% - 0.62rem)"] }
              }
              transition={{
                duration: 3.4,
                ease: "easeInOut",
                repeat: reduceMotion ? 0 : Infinity,
                repeatDelay: 1,
              }}
            />
          </div>
          <div className="base-to-process__endpoint base-to-process__endpoint--process">
            <Route size={22} strokeWidth={1.8} />
            <span>Processo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
