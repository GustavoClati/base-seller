"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const reduceMotion = useHydratedReducedMotion();

  return (
    <motion.div
      className={`seller-reveal ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: false, amount: 0.12 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
