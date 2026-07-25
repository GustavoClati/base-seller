"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

export function PageAnalytics() {
  useEffect(() => {
    trackEvent("page_view");
  }, []);

  return null;
}
