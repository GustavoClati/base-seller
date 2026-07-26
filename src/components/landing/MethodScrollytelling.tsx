"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { methodSteps } from "@/content/site-content";
import { getCheckoutHref } from "@/lib/site-config";
import { TrackedCta } from "@/components/ui/TrackedCta";

const methodVisuals = [
  "/images/method-find-suppliers.webp",
  "/images/method-validate-order.webp",
  "/images/method-analyze-products.webp",
  "/images/method-test-small.webp",
] as const;

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
    <div aria-hidden="true" className="method-mini">
      <Image
        alt=""
        fill
        sizes="(max-width: 1023px) calc(100vw - 3rem), 1px"
        src={methodVisuals[state]}
      />
    </div>
  );
}

function MethodVisual({ active }: { active: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="method-visual">
      {methodVisuals.map((src, index) => (
        <motion.div
          animate={{
            opacity: index === active ? 1 : 0,
            scale: index === active ? 1 : 1.035,
          }}
          className="method-visual__image"
          initial={false}
          key={src}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            alt=""
            fill
            priority={index === 0}
            sizes="(max-width: 1023px) 1px, min(48vw, 38rem)"
            src={src}
          />
        </motion.div>
      ))}
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
          <h2>
            Encontre. Valide. Analise.
            <br />{" "}
            <strong className="heading-accent">E só então teste.</strong>
          </h2>
          <p>
            Quatro etapas para que a decisão não comece e termine no preço do
            fornecedor.
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
