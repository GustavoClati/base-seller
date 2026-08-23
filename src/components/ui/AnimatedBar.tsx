"use client";

import { motion, useReducedMotion } from "motion/react";

type AnimatedBarProps = {
  /** 0–100 percentage width */
  widthPercent: number;
  className?: string;
};

export function AnimatedBar({ widthPercent, className }: AnimatedBarProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <i className={className} style={{ width: `${widthPercent}%` }} />
    );
  }

  return (
    <motion.i
      className={className}
      initial={{ width: 0 }}
      style={{ display: "block", height: "100%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      whileInView={{ width: `${widthPercent}%` }}
    />
  );
}
