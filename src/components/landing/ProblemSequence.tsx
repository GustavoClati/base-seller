"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { problemStatements } from "@/content/site-content";

export function ProblemSequence() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.82", "end 0.18"],
  });

  const firstOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.29, 0.38],
    [0, 1, 1, 0],
  );
  const secondOpacity = useTransform(
    scrollYProgress,
    [0.29, 0.4, 0.58, 0.67],
    [0, 1, 1, 0],
  );
  const thirdOpacity = useTransform(
    scrollYProgress,
    [0.58, 0.7, 0.9, 1],
    [0, 1, 1, 0.72],
  );
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

  return (
    <section className="problem-sequence" ref={ref}>
      <div className="container problem-sequence__sticky">
        <div className="problem-sequence__intro">
          <h2>
            Um contato não é
            <br />
            {" "}uma oportunidade.
          </h2>
          <p>
            Um preço pode parecer baixo até o frete entrar na conta. Uma margem
            pode parecer boa até aparecerem tarifas, impostos e concorrência. E
            um catálogo cheio não significa que existe um produto bom para
            começar.
          </p>
        </div>

        <div className="problem-sequence__statements">
          <motion.div
            aria-hidden="true"
            className="problem-sequence__progress"
            style={{ scaleY: reduceMotion ? 1 : lineScale }}
          />
          <motion.p
            className="problem-sequence__statement problem-sequence__statement--one"
            style={{ opacity: reduceMotion ? 1 : firstOpacity }}
          >
            {problemStatements[0]}
          </motion.p>
          <motion.p
            className="problem-sequence__statement problem-sequence__statement--two"
            style={{ opacity: reduceMotion ? 1 : secondOpacity }}
          >
            {problemStatements[1]}
          </motion.p>
          <motion.p
            className="problem-sequence__statement problem-sequence__statement--three"
            style={{ opacity: reduceMotion ? 1 : thirdOpacity }}
          >
            {problemStatements[2]}
          </motion.p>
        </div>

        <p className="problem-sequence__closing">
          O que separa um fornecedor de uma boa decisão é o processo.
        </p>
      </div>
    </section>
  );
}
