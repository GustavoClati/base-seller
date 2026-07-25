"use client";

import { motion, useReducedMotion } from "motion/react";

const nodePositions = [
  [12, 68],
  [23, 50],
  [35, 60],
  [48, 42],
  [61, 55],
  [74, 34],
  [87, 46],
] as const;

export function AbstractBaseVisual({ variant = "hero" }: { variant?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`abstract-base abstract-base--${variant}`}
    >
      <motion.div
        animate={
          reduceMotion ? undefined : { y: [0, -7, 0], rotateX: [58, 56, 58] }
        }
        className="abstract-base__plane abstract-base__plane--one"
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
      >
        <span />
        <span />
        <span />
        <span />
        <span />
      </motion.div>
      <motion.div
        animate={
          reduceMotion ? undefined : { y: [0, 8, 0], rotateX: [58, 60, 58] }
        }
        className="abstract-base__plane abstract-base__plane--two"
        transition={{
          duration: 11,
          delay: 0.7,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <span />
        <span />
        <span />
        <span />
      </motion.div>
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        className="abstract-base__plane abstract-base__plane--three"
        transition={{
          duration: 10,
          delay: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <span />
        <span />
        <span />
        <span />
      </motion.div>

      <svg
        className="abstract-base__route"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <motion.path
          animate={reduceMotion ? undefined : { pathLength: [0.18, 1, 0.18] }}
          d="M 8 76 C 24 72, 29 48, 45 58 S 65 30, 91 39"
          fill="none"
          initial={{ pathLength: 0.18 }}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="0.7"
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        {nodePositions.map(([x, y], index) => (
          <motion.circle
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0.35, 1, 0.35], r: [0.65, 1.1, 0.65] }
            }
            cx={x}
            cy={y}
            fill={index === 3 || index === 5 ? "#D6A84F" : "#778397"}
            key={`${x}-${y}`}
            r="0.75"
            transition={{
              duration: 3.5,
              delay: index * 0.18,
              repeat: Infinity,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
