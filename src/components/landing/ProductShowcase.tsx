"use client";

import Image from "next/image";
import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useHydratedReducedMotion();
  const inView = useInView(ref, { amount: 0.3 });
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 85, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 85, damping: 22 });
  const rotateY = useTransform(smoothX, [0, 1], [-5, 5]);
  const rotateX = useTransform(smoothY, [0, 1], [3, -3]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const laptopY = useTransform(scrollYProgress, [0, 1], [45, -80]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [85, -135]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [7, -8]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  }

  return (
    <div className="seller-cutouts" ref={ref} onPointerMove={handlePointerMove}
      onPointerLeave={() => { pointerX.set(0.5); pointerY.set(0.5); }}>
      <motion.div className="seller-cutouts__scene" style={reduced ? undefined : { rotateX, rotateY }}>
        <motion.div className="seller-cutouts__laptop" style={reduced ? undefined : { y: laptopY }}>
          <motion.div animate={reduced || !inView ? { y: 0 } : { y: [0, -20, 0, -12, 0] }} transition={{ duration: reduced ? 0 : 4.8, ease: "easeInOut" }}>
            <Image alt="Notebook recortado com fundo transparente exibindo o PDF para PC da Base do Seller"
              src="/images/editorial-2026/laptop-transparent.webp" width={1536} height={1024} priority sizes="(max-width: 800px) 90vw, 48vw" />
          </motion.div>
        </motion.div>
        <motion.div className="seller-cutouts__phone" style={reduced ? undefined : { y: phoneY, rotate: phoneRotate }}>
          <motion.div animate={reduced || !inView ? { y: 0 } : { y: [0, -32, 0, -20, 0] }} transition={{ duration: reduced ? 0 : 4.8, ease: "easeInOut" }}>
            <Image alt="Celular recortado com fundo transparente exibindo o PDF Mobile da Base do Seller"
              src="/images/editorial-2026/phone-transparent.webp" width={1024} height={1536} priority sizes="(max-width: 800px) 30vw, 17vw" />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="seller-cutouts__captions"><span>PDF para PC · 34 páginas</span><span>PDF Mobile · 89 páginas</span></div>
    </div>
  );
}
