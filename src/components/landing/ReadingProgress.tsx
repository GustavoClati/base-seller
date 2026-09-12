"use client";

import { motion, useScroll } from "motion/react";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useHydratedReducedMotion();
  if (reduced) return null;
  return <motion.div aria-hidden="true" className="seller-reading-progress" style={{ scaleX: scrollYProgress }} />;
}
