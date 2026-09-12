"use client";

import Image from "next/image";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useHydratedReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 24 });
  const rotateY = useTransform(smoothX, [0, 1], [-2, 2]);
  const rotateX = useTransform(smoothY, [0, 1], [1.5, -1.5]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -35]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  }

  return (
    <div className="seller-product-photo" ref={ref}>
      <motion.div className="seller-product-photo__scene"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => { pointerX.set(0.5); pointerY.set(0.5); }}
        style={reduced ? undefined : { rotateX, rotateY, y }}>
        <Image
          alt="Mockup realista de notebook e celular exibindo os PDFs da Base do Seller"
          src="/images/editorial-2026/hero-devices.webp"
          width={1536} height={1024} priority
          sizes="(max-width: 800px) 100vw, 60vw"
        />
      </motion.div>
      <div className="seller-product-photo__caption"><span>PDF para PC · 34 páginas</span><span>PDF Mobile · 89 páginas</span></div>
    </div>
  );
}
