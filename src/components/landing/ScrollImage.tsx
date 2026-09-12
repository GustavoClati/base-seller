"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

type ScrollImageProps = { src: string; alt: string; className?: string; sizes?: string };

export function ScrollImage({ src, alt, className = "", sizes = "(max-width: 800px) 92vw, 44vw" }: ScrollImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useHydratedReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <div className={`seller-scroll-image ${className}`} ref={ref}>
      <motion.div className="seller-scroll-image__layer" style={reduced ? undefined : { y }}>
        <Image alt={alt} src={src} fill sizes={sizes} />
      </motion.div>
    </div>
  );
}
