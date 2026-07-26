"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

import { trackEvent } from "@/lib/analytics";

export type CampaignBarProps = {
  enabled: boolean;
  endsAt: string;
  previewMode: boolean;
  label: string;
  expiredText: string;
  ctaHref: string;
};

type ActiveCampaignBarProps = Omit<CampaignBarProps, "enabled" | "endsAt"> & {
  isDemo: boolean;
  suppliedTargetMs: number;
};

const DEMO_DURATION_MS = 15 * 60 * 1000;

function formatClock(remainingMs: number | null) {
  if (remainingMs === null) {
    return { hours: "--", minutes: "--", seconds: "--" };
  }

  const totalSeconds = Math.max(0, Math.floor(remainingMs / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function formatExactDate(targetMs: number) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "long",
  }).format(new Date(targetMs));
}

function ActiveCampaignBar({
  isDemo,
  suppliedTargetMs,
  previewMode,
  label,
  expiredText,
  ctaHref,
}: ActiveCampaignBarProps) {
  const [demoTargetMs, setDemoTargetMs] = useState<number | null>(null);
  const [nowMs, setNowMs] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const startedAt = Date.now();
    const updateNow = () => setNowMs(Date.now());
    const animationFrame = window.requestAnimationFrame(() => {
      setDemoTargetMs(isDemo ? startedAt + DEMO_DURATION_MS : null);
      updateNow();
    });
    const interval = window.setInterval(updateNow, 1000);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearInterval(interval);
    };
  }, [isDemo]);

  const targetMs = isDemo ? demoTargetMs : suppliedTargetMs;
  const remainingMs =
    targetMs === null || nowMs === null
      ? null
      : Math.max(0, targetMs - nowMs);
  const isExpired = remainingMs === 0;
  const clock = formatClock(remainingMs);
  const showHours =
    remainingMs === null ? !isDemo : remainingMs >= 60 * 60 * 1000;
  const visibleLabel = isDemo
    ? label
      ? `Prévia • ${label}`
      : "Prévia • contagem demonstrativa"
    : label;
  const exactDate =
    targetMs === null ? null : formatExactDate(targetMs);
  const targetIso =
    targetMs === null ? null : new Date(targetMs).toISOString();
  const resolvedExpiredText =
    expiredText.trim() || "Esta campanha terminou.";

  function handleCtaClick() {
    trackEvent("cta_click", {
      location: "campaign_bar",
      label: "Quero acessar",
    });

    if (ctaHref.startsWith("http")) {
      trackEvent("begin_checkout", { location: "campaign_bar" });
    }
  }

  return (
    <aside
      className="campaign-bar"
      data-expired={isExpired ? "true" : "false"}
      data-preview={previewMode ? "true" : "false"}
      data-reduced-motion={shouldReduceMotion ? "true" : "false"}
      aria-label={isDemo ? "Campanha em modo de demonstração" : "Campanha atual"}
    >
      <div className="campaign-bar__inner">
        <p className="campaign-bar__label">{visibleLabel}</p>

        {isExpired ? (
          <p
            className="campaign-bar__expired"
            role="status"
            aria-live="polite"
          >
            {resolvedExpiredText}
          </p>
        ) : (
          <div className="campaign-bar__timer" aria-hidden="true">
            {showHours ? (
              <>
                <span className="campaign-bar__time-unit">
                  <span className="campaign-bar__digits">{clock.hours}</span>
                </span>
                <span className="campaign-bar__separator">:</span>
              </>
            ) : null}
            <span className="campaign-bar__time-unit">
              <span className="campaign-bar__digits">{clock.minutes}</span>
            </span>
            <span className="campaign-bar__separator">:</span>
            <span className="campaign-bar__time-unit">
              <span className="campaign-bar__digits">{clock.seconds}</span>
            </span>
          </div>
        )}

        {exactDate && targetIso ? (
          <p className="sr-only">
            {isExpired
              ? "Esta campanha terminou exatamente em "
              : isDemo
                ? "Esta é uma demonstração. A contagem termina em "
                : "Esta campanha termina exatamente em "}
            <time dateTime={targetIso}>{exactDate}</time>
            .
          </p>
        ) : null}

        <a
          className="campaign-bar__cta"
          href={ctaHref}
          onClick={handleCtaClick}
        >
          <span>Quero acessar</span>
          <ArrowRight
            aria-hidden="true"
            className="campaign-bar__cta-icon"
            size={18}
          />
        </a>
      </div>
    </aside>
  );
}

export function CampaignBar({
  enabled,
  endsAt,
  previewMode,
  label,
  expiredText,
  ctaHref,
}: CampaignBarProps) {
  const normalizedEndsAt = endsAt.trim();
  const parsedTargetMs =
    normalizedEndsAt.length > 0 ? Date.parse(normalizedEndsAt) : Number.NaN;
  const hasValidTarget = Number.isFinite(parsedTargetMs);
  const isDemo = previewMode && normalizedEndsAt.length === 0;

  if (!enabled || (!hasValidTarget && !isDemo)) {
    return null;
  }

  return (
    <ActiveCampaignBar
      isDemo={isDemo}
      suppliedTargetMs={hasValidTarget ? parsedTargetMs : 0}
      previewMode={previewMode}
      label={label}
      expiredText={expiredText}
      ctaHref={ctaHref}
    />
  );
}
