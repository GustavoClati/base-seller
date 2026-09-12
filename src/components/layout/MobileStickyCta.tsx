"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { getCheckoutHref } from "@/lib/site-config";
import { TrackedCta } from "@/components/ui/TrackedCta";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function MobileStickyCta() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [offerVisible, setOfferVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const reduceMotion = useHydratedReducedMotion();

  useEffect(() => {
    const hero = document.getElementById("hero");
    const offer = document.getElementById("oferta");
    const faq = document.getElementById("duvidas");
    const footer = document.getElementById("site-footer");

    if (!hero || !offer || !faq || !footer) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );

    const offerObserver = new IntersectionObserver(
      ([entry]) => setOfferVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );

    const faqObserver = new IntersectionObserver(
      ([entry]) => setFaqVisible(entry.isIntersecting),
      { threshold: 0.04 },
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.04 },
    );

    heroObserver.observe(hero);
    offerObserver.observe(offer);
    faqObserver.observe(faq);
    footerObserver.observe(footer);

    return () => {
      heroObserver.disconnect();
      offerObserver.disconnect();
      faqObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const visible = !heroVisible && !offerVisible && !faqVisible && !footerVisible;

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
            Quero receber os PDFs
          </TrackedCta>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
