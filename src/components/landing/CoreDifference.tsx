"use client";

import { Database, Route, SearchCheck } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

const journeyStages = [
  { label: "Base", icon: Database },
  { label: "Encontrar", icon: SearchCheck },
  { label: "Validar", icon: SearchCheck },
  { label: "Analisar", icon: SearchCheck },
  { label: "Processo", icon: Route },
] as const;

const confetti = [
  { x: -86, y: 76, rotate: 130, delay: 0.02 },
  { x: -62, y: 104, rotate: 240, delay: 0.1 },
  { x: -38, y: 68, rotate: 170, delay: 0.04 },
  { x: -14, y: 112, rotate: 310, delay: 0.14 },
  { x: 12, y: 84, rotate: 190, delay: 0 },
  { x: 34, y: 118, rotate: 280, delay: 0.08 },
  { x: 46, y: 72, rotate: 220, delay: 0.16 },
  { x: 52, y: 102, rotate: 340, delay: 0.06 },
  { x: -74, y: 88, rotate: 260, delay: 0.18 },
  { x: -26, y: 96, rotate: 210, delay: 0.2 },
  { x: 26, y: 74, rotate: 300, delay: 0.12 },
  { x: 48, y: 92, rotate: 180, delay: 0.22 },
] as const;

export function CoreDifference() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(reduceMotion ? 4 : 0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 62,
    damping: 28,
    mass: 0.52,
    restDelta: 0.001,
  });
  const lineScale = useTransform(smoothProgress, [0.05, 0.92], [0, 1]);
  const markerLeft = useTransform(
    smoothProgress,
    [0.05, 0.92],
    ["0%", "100%"],
  );

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (reduceMotion) {
      return;
    }

    const nextStage = Math.min(
      journeyStages.length - 1,
      Math.max(0, Math.floor(latest * journeyStages.length)),
    );
    setActiveStage((current) => (current === nextStage ? current : nextStage));
  });

  return (
    <section
      className="core-difference"
      id="base-e-processo"
      ref={sectionRef}
    >
      <div className="container core-difference__sticky">
        <div className="core-difference__layout">
          <h2 className="centered-title">
            <motion.span
              className="centered-title__line core-difference__title-line"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              viewport={{ amount: 0.65, once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              A base abre o caminho.
            </motion.span>
            <motion.strong
              className="centered-title__line core-difference__title-line heading-accent"
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

        <div
          aria-hidden="true"
          className={`base-to-process base-to-process--stage-${activeStage}`}
        >
          <div className="base-to-process__track">
            <div className="base-to-process__steps">
              {journeyStages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <span
                    className={
                      index === activeStage
                        ? "base-to-process__step is-active"
                        : index < activeStage
                          ? "base-to-process__step is-complete"
                          : "base-to-process__step"
                    }
                    key={stage.label}
                  >
                    <i>
                      <Icon size={19} strokeWidth={1.9} />
                    </i>
                    <b>{stage.label}</b>
                  </span>
                );
              })}
            </div>
            <motion.i
              className="base-to-process__beam"
              style={{ scaleX: reduceMotion ? 1 : lineScale }}
            />
            <motion.span
              className="base-to-process__marker"
              style={{
                left: reduceMotion ? "100%" : markerLeft,
              }}
            />
            <AnimatePresence>
              {!reduceMotion && activeStage === journeyStages.length - 1 ? (
                <motion.div
                  className="base-to-process__celebration"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  {confetti.map((piece, index) => (
                    <motion.i
                      className="base-to-process__confetti"
                      key={`${piece.x}-${piece.y}`}
                      initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        x: piece.x,
                        y: piece.y,
                        rotate: piece.rotate,
                      }}
                      transition={{
                        duration: 1.45,
                        delay: piece.delay,
                        ease: "easeOut",
                        repeat: 1,
                        repeatDelay: 0.35,
                      }}
                      style={{ borderRadius: index % 3 === 0 ? "50%" : "2px" }}
                    />
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>

        <p className="core-difference__closing">
          O que separa um fornecedor de{" "}
          <strong>uma boa decisão</strong> é <span>o processo.</span>
        </p>
      </div>
    </section>
  );
}
