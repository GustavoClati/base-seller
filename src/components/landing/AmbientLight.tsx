"use client";

import { useInView } from "motion/react";
import { useRef } from "react";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

type AmbientLightProps = {
  className?: string;
};

export function AmbientLight({ className = "" }: AmbientLightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.05 });
  const reduceMotion = useHydratedReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`seller-ambient${isInView && !reduceMotion ? " is-running" : ""} ${className}`}
      ref={ref}
    />
  );
}
