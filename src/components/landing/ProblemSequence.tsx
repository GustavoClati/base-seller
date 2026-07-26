"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import { problemStatements } from "@/content/site-content";

export function ProblemSequence() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 92,
    damping: 26,
    mass: 0.34,
    restDelta: 0.001,
  });

  const firstOpacity = useTransform(
    smoothProgress,
    [0, 0.08, 0.27, 0.34],
    [0, 1, 1, 0],
  );
  const firstY = useTransform(
    smoothProgress,
    [0, 0.08, 0.27, 0.34],
    [28, 0, 0, -28],
  );
  const secondOpacity = useTransform(
    smoothProgress,
    [0.32, 0.39, 0.61, 0.68],
    [0, 1, 1, 0],
  );
  const secondY = useTransform(
    smoothProgress,
    [0.32, 0.39, 0.61, 0.68],
    [28, 0, 0, -28],
  );
  const thirdOpacity = useTransform(
    smoothProgress,
    [0.66, 0.73, 1],
    [0, 1, 1],
  );
  const thirdY = useTransform(
    smoothProgress,
    [0.66, 0.73, 1],
    [28, 0, 0],
  );
  const lineScale = useTransform(smoothProgress, [0, 1], [0.04, 1]);

  return (
    <section className="problem-sequence" ref={ref}>
      <div className="container problem-sequence__sticky">
        <div className="problem-sequence__intro">
          <h2>
            Contato encontrado
            <br />
            {" "}
            <strong className="heading-accent">
              ainda não <span className="title-keep">é oportunidade.</span>
            </strong>
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
            style={{
              opacity: reduceMotion ? 1 : firstOpacity,
              y: reduceMotion ? 0 : firstY,
            }}
          >
            {problemStatements[0]}
          </motion.p>
          <motion.p
            className="problem-sequence__statement problem-sequence__statement--two"
            style={{
              opacity: reduceMotion ? 1 : secondOpacity,
              y: reduceMotion ? 0 : secondY,
            }}
          >
            {problemStatements[1]}
          </motion.p>
          <motion.p
            className="problem-sequence__statement problem-sequence__statement--three"
            style={{
              opacity: reduceMotion ? 1 : thirdOpacity,
              y: reduceMotion ? 0 : thirdY,
            }}
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
