"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function AnimatedCount({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduced = useHydratedReducedMotion();

  useEffect(() => {
    if (!inView || reduced) {
      if (ref.current) ref.current.textContent = String(value);
      return;
    }
    const animation = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (current) => { if (ref.current) ref.current.textContent = String(Math.round(current)); },
    });
    return () => animation.stop();
  }, [inView, reduced, value]);

  return <span className="seller-count"><span aria-hidden="true" ref={ref}>{value}</span><span className="sr-only">{value}</span></span>;
}
