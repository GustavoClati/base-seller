"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { supplierCategories } from "@/content/site-content";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function CategoryExplorer() {
  const [active, setActive] = useState(0);
  const reduceMotion = useHydratedReducedMotion();
  const category = supplierCategories[active];

  return (
    <div className="seller-explorer">
      <div aria-label="Categorias da base" className="seller-explorer__choices" role="group">
        {supplierCategories.map((item, index) => (
          <button aria-pressed={index === active} aria-controls="category-detail" key={item.label} onClick={() => setActive(index)} type="button">
            {index === active ? <motion.span aria-hidden="true" className="seller-explorer__selection" layoutId="category-selection" transition={{ duration: reduceMotion ? 0 : 0.3 }} /> : null}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="seller-explorer__detail" id="category-detail" aria-live="polite" aria-atomic="true">
        <AnimatePresence initial={false} mode="wait">
          <motion.div key={category.label} initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }} transition={{ duration: reduceMotion ? 0 : 0.18 }}>
            <div className="seller-explorer__count"><strong>{category.count}</strong><span>registros na base</span></div>
            <div><h3>{category.label}</h3><p>{category.description}</p><small>Páginas {category.pcPages} na versão PC</small></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
