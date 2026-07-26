"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import type { FaqItem } from "@/content/site-content";
import { trackEvent } from "@/lib/analytics";

type AccordionProps = {
  items: FaqItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const reduceMotion = useReducedMotion();

  function toggle(index: number) {
    const nextIndex = openIndex === index ? null : index;
    setOpenIndex(nextIndex);

    if (nextIndex !== null) {
      trackEvent("faq_open", { label: items[index].question });
    }
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            className={`accordion__item${isOpen ? " is-open" : ""}`}
            key={item.question}
          >
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="accordion__trigger"
                id={triggerId}
                onClick={() => toggle(index)}
                type="button"
              >
                <span className="accordion__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="accordion__question">{item.question}</span>
                <motion.span
                  className="accordion__chevron"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  aria-hidden="true"
                  transition={{ duration: reduceMotion ? 0 : 0.25 }}
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  animate={{ height: "auto", opacity: 1 }}
                  aria-labelledby={triggerId}
                  className="accordion__panel"
                  exit={{ height: 0, opacity: 0 }}
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  role="region"
                  transition={{ duration: reduceMotion ? 0 : 0.28 }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
