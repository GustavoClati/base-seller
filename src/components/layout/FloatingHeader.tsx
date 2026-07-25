"use client";

import { motion, useScroll, useTransform } from "motion/react";

import { navigationItems } from "@/content/site-content";
import { trackEvent } from "@/lib/analytics";
import { getCheckoutHref } from "@/lib/site-config";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { TrackedCta } from "@/components/ui/TrackedCta";

export function FloatingHeader() {
  const { scrollY, scrollYProgress } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(9, 13, 18, 0.22)", "rgba(9, 13, 18, 0.82)"],
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(168, 179, 199, 0.08)", "rgba(168, 179, 199, 0.18)"],
  );

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.header
        className="floating-header"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          backgroundColor: headerBackground,
          borderColor,
        }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <BrandWordmark />

        <nav aria-label="Navegação principal" className="floating-nav">
          {navigationItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() =>
                trackEvent("nav_click", {
                  label: item.label,
                  location: "header",
                })
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <TrackedCta
          href={getCheckoutHref()}
          location="header"
          variant="compact"
        >
          Quero acessar
        </TrackedCta>
      </motion.header>
    </>
  );
}
