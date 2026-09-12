"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Blocks, Ellipsis, Globe, House, Monitor, PawPrint, Shirt, Wrench } from "lucide-react";
import { supplierCategories } from "@/content/site-content";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";
import { AnimatedCount } from "@/components/ui/AnimatedCount";
import { TrackedCta } from "@/components/ui/TrackedCta";

const categoryIcons = [PawPrint, Shirt, House, Wrench, Monitor, Blocks, Globe, Ellipsis];

export function CategoryExplorer() {
  const [active, setActive] = useState(0);
  const reduceMotion = useHydratedReducedMotion();
  const category = supplierCategories[active];
  const CategoryIcon = categoryIcons[active];

  return (
    <div className="seller-explorer">
      <div aria-label="Categorias da base" className="seller-explorer__choices" role="group">
        {supplierCategories.map((item, index) => {
          const Icon = categoryIcons[index];
          return (
          <button aria-pressed={index === active} aria-controls="category-detail" key={item.label} onClick={() => setActive(index)} type="button">
            {index === active ? <motion.span aria-hidden="true" className="seller-explorer__selection" layoutId="category-selection" transition={{ duration: reduceMotion ? 0 : 0.3 }} /> : null}
            <Icon aria-hidden="true" size={17} />
            <span>{item.label}</span>
          </button>
          );
        })}
      </div>
      <div className="seller-explorer__detail" id="category-detail" aria-live="polite" aria-atomic="true">
        <AnimatePresence initial={false} mode="wait">
          <motion.div key={category.label} initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }} transition={{ duration: reduceMotion ? 0 : 0.18 }}>
            <div className="seller-explorer__count">
              <strong><AnimatedCount value={category.count} /></strong>
              <span>registros na base</span>
              <small>Páginas {category.pcPages} · PDF para PC</small>
            </div>
            <div className="seller-explorer__summary">
              <h3>{category.label}</h3><p>{category.description}</p>
              <ul aria-label={`Tópicos de ${category.label}`} className="seller-explorer__topics">
                {category.topics.map(topic => <li key={topic}>{topic}</li>)}
              </ul>
            </div>
            <div className="seller-explorer__action">
              <CategoryIcon className="seller-explorer__symbol" aria-hidden="true" size={72} strokeWidth={1.3} />
              <TrackedCta href="#oferta" variant="secondary" location="method" className="seller-explorer__cta">Quero acessar a base</TrackedCta>
              <small>Incluído nas versões PC e Mobile</small>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
