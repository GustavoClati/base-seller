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
              onKeyDown={(event) => {
                if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
                event.preventDefault();
                const next = event.key === "Home" ? "pc" : event.key === "End" ? "mobile" : active === "pc" ? "mobile" : "pc";
                setActive(next);
                document.getElementById(`seller-format-tab-${next}`)?.focus();
              }}
              role="tab"
              tabIndex={selected ? 0 : -1}
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
        <div className="seller-format__stage">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              className="seller-format__frame"
              data-format={active}
              key={active}
              initial={reduceMotion ? false : { opacity: 0, x: active === "pc" ? -28 : 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: active === "pc" ? -28 : 28 }}
              transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
            >
              <div className="seller-format__toolbar">
                <b>Base do Seller · {active === "pc" ? "PC" : "Mobile"}</b>
                <small>{active === "pc" ? "02 / 34" : "02 / 89"}</small>
              </div>
              <div className="seller-format__image">
                <Image
                  alt={current.alt}
                  fill
                  sizes={active === "pc" ? "(max-width: 820px) 92vw, 62vw" : "(max-width: 820px) 72vw, 28vw"}
                  src={current.image}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="seller-format__meta">{current.meta}</p>
      </div>
    </div>
  );
}
