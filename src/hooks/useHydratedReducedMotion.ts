"use client";

import { useEffect, useState } from "react";

export function useHydratedReducedMotion() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches || document.documentElement.dataset.motion === "paused");
    const observer = new MutationObserver(updatePreference);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
      observer.disconnect();
    };
  }, []);

  return reduceMotion;
}
