"use client";

import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function ProductShowcase() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useHydratedReducedMotion();
  const isInView = useInView(sceneRef, { amount: 0.12 });
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24 });
  const rotateY = useTransform(smoothX, [0, 1], [-2.5, 2.5]);
  const rotateX = useTransform(smoothY, [0, 1], [2, -2]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  }

  function resetPointer() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <motion.div
      className={`seller-product-scene${isInView ? " is-active" : ""}`}
      onPointerLeave={resetPointer}
      onPointerMove={handlePointerMove}
      ref={sceneRef}
      style={reduceMotion ? undefined : { rotateX, rotateY }}
    >
      <div className="seller-product-scene__glow" />
      <div className="seller-device seller-device--pc">
        <div className="seller-device__camera" />
        <div className="seller-device__screen">
          <Image
            alt="Primeira página real do PDF Base do Seller para computador"
            fill
            priority
            sizes="(max-width: 820px) 88vw, 52vw"
            src="/images/pdf-2026/pc-cover.webp"
          />
        </div>
        <div className="seller-device__base" />
      </div>
      <div className="seller-device seller-device--mobile">
        <div className="seller-device__notch" />
        <div className="seller-device__screen">
          <Image
            alt="Página real do PDF Base do Seller para celular com registros e links"
            fill
            priority
            sizes="(max-width: 820px) 32vw, 16vw"
            src="/images/pdf-2026/mobile-sample.webp"
          />
        </div>
      </div>
      <span className="seller-device-label seller-device-label--pc">
        <i aria-hidden="true" /> PC · 34 páginas
      </span>
      <span className="seller-device-label seller-device-label--mobile">
        <i aria-hidden="true" /> Mobile · 89 páginas
      </span>
    </motion.div>
  );
}
