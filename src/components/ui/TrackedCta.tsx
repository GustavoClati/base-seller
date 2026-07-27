"use client";

import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import type { CtaLocation } from "@/lib/analytics";
import { trackEvent } from "@/lib/analytics";

type TrackedCtaProps = {
  children: ReactNode;
  href: string;
  location: CtaLocation;
  variant?: "primary" | "secondary" | "compact";
  className?: string;
};

export function TrackedCta({
  children,
  href,
  location,
  variant = "primary",
  className = "",
}: TrackedCtaProps) {
  function handleClick() {
    trackEvent("cta_click", { location, label: String(children) });

    if (href.startsWith("http")) {
      trackEvent("begin_checkout", { location });
    }
  }

  return (
    <a
      className={`button button--${variant} ${className}`}
      href={href}
      onClick={handleClick}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" className="button__icon" size={18} />
    </a>
  );
}
