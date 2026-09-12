"use client";

import { AnimatePresence, motion } from "motion/react";
import { Monitor, Smartphone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const formats = {
  pc: {
    label: "Versão PC",
    meta: "34 páginas em formato 16:10",
    image: "/images/pdf-2026/pc-method.webp",
    alt: "Página real da versão PC mostrando como consultar a base",
  },
  mobile: {
    label: "Versão Mobile",
    meta: "89 páginas em formato vertical",
    image: "/images/pdf-2026/mobile-method.webp",
    alt: "Página real da versão Mobile mostrando como consultar a base",
  },
} as const;

type FormatKey = keyof typeof formats;

export function FormatPreview() {
  const [active, setActive] = useState<FormatKey>("pc");
  const reduceMotion = useHydratedReducedMotion();
  const current = formats[active];

  return (
    <div className="seller-format">
      <div aria-label="Escolha a prévia do PDF" className="seller-format__tabs" role="tablist">
        {(Object.keys(formats) as FormatKey[]).map((key) => {
          const selected = active === key;
          const Icon = key === "pc" ? Monitor : Smartphone;

          return (
            <button
              aria-controls="seller-format-panel"
              aria-selected={selected}
              className={selected ? "is-active" : ""}
              id={`seller-format-tab-${key}`}
              key={key}
              onClick={() => setActive(key)}
              role="tab"
              type="button"
            >
              <Icon aria-hidden="true" size={19} />
              <span>{formats[key].label}</span>
            </button>
          );
        })}
      </div>

      <div
        aria-labelledby={`seller-format-tab-${active}`}
        className="seller-format__panel"
        id="seller-format-panel"
        role="tabpanel"
      >
        <div className="seller-format__frame" data-format={active}>
          <div className="seller-format__toolbar">
            <span />
            <b>Base_do_Seller_2026_{active === "pc" ? "PC" : "MOBILE"}.pdf</b>
            <small>{active === "pc" ? "02 / 34" : "02 / 89"}</small>
          </div>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="seller-format__image"
              exit={{ opacity: 0, scale: 0.985, y: 8 }}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.985, y: 8 }}
              key={active}
              transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                alt={current.alt}
                fill
                sizes={active === "pc" ? "(max-width: 820px) 92vw, 62vw" : "(max-width: 820px) 72vw, 28vw"}
                src={current.image}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="seller-format__meta">{current.meta}</p>
      </div>
    </div>
  );
}
