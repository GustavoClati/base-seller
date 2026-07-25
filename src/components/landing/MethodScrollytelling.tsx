"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { methodSteps } from "@/content/site-content";
import { getCheckoutHref } from "@/lib/site-config";
import { TrackedCta } from "@/components/ui/TrackedCta";

type MethodStepProps = {
  index: number;
  onActive: (index: number) => void;
};

function MethodStep({ index, onActive }: MethodStepProps) {
  const step = methodSteps[index];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    amount: 0.55,
    margin: "-12% 0px -32% 0px",
  });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <div className="method-step" ref={ref}>
      <span className="method-step__number">{step.number}</span>
      <div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
      <MethodMiniVisual state={index} />
    </div>
  );
}

function MethodMiniVisual({ state }: { state: number }) {
  return (
    <div
      aria-hidden="true"
      className={`method-mini method-mini--${state}`}
    >
      <i />
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

function MethodVisual({ active }: { active: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className={`method-visual is-state-${active}`}>
      <div className="method-visual__field">
        {Array.from({ length: 14 }).map((_, index) => (
          <motion.i
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity:
                      active === 0
                        ? [0.25, 0.72, 0.25]
                        : active === 3 && index === 10
                          ? [0.4, 1, 0.4]
                          : 0.62,
                    scale:
                      active === 3 && index === 10 ? [1, 1.8, 1] : 1,
                  }
            }
            key={index}
            transition={{
              duration: 2.4,
              delay: index * 0.07,
              repeat: Infinity,
            }}
          />
        ))}
        <span className="method-visual__filter" />
        <span className="method-visual__route" />
        <span className="method-visual__columns">
          <i />
          <i />
          <i />
        </span>
      </div>
      <p>
        <span>{methodSteps[active].number}</span>
        {methodSteps[active].title}
      </p>
    </div>
  );
}

export function MethodScrollytelling() {
  const [active, setActive] = useState(0);

  return (
    <section className="section method" id="metodo">
      <div className="container">
        <div className="method__heading">
          <h2>Da pesquisa ao primeiro teste.</h2>
          <p>
            Um processo simples para evitar que a decisão comece e termine no
            preço do fornecedor.
          </p>
        </div>

        <div className="method__layout">
          <div className="method__steps">
            {methodSteps.map((step, index) => (
              <MethodStep index={index} key={step.number} onActive={setActive} />
            ))}

            <TrackedCta
              className="method__cta"
              href={getCheckoutHref()}
              location="method"
            >
              Quero acessar a Base
            </TrackedCta>
          </div>

          <div className="method__visual-column">
            <MethodVisual active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
