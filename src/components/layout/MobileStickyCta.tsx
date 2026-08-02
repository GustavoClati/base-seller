"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { getCheckoutHref } from "@/lib/site-config";
import { TrackedCta } from "@/components/ui/TrackedCta";

export function MobileStickyCta() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [offerVisible, setOfferVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const hero = document.getElementById("hero");
    const offer = document.getElementById("oferta");

    if (!hero || !offer) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );

    const offerObserver = new IntersectionObserver(
      ([entry]) => setOfferVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );

    heroObserver.observe(hero);
    offerObserver.observe(offer);

    return () => {
      heroObserver.disconnect();
      offerObserver.disconnect();
    };
  }, []);

  const visible = !heroVisible && !offerVisible;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mobile-sticky-cta"
          exit={{ opacity: 0, y: 24 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
        >
          <TrackedCta
            className="mobile-sticky-cta__button"
            href={getCheckoutHref()}
            location="mobile_sticky"
            variant="primary"
          >
            Quero receber o PDF
          </TrackedCta>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
