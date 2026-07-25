"use client";

import { FileImage, Film } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { trackEvent } from "@/lib/analytics";
import type { SiteMode } from "@/content/site-content";

type MediaSlotProps = {
  id: string;
  label: string;
  description?: string;
  aspectRatio?: string;
  assetSrc: string | null;
  assetType: "image" | "video";
  poster?: string | null;
  alt?: string;
  priority?: boolean;
  className?: string;
  siteMode: SiteMode;
  videoMode?: "background" | "player";
};

export function MediaSlot({
  id,
  label,
  description,
  aspectRatio = "16 / 9",
  assetSrc,
  assetType,
  poster,
  alt = "",
  priority = false,
  className = "",
  siteMode,
  videoMode = "player",
}: MediaSlotProps) {
  const milestones = useRef(new Set<number>());

  if (!assetSrc && siteMode === "live") return null;

  function handleTimeUpdate(event: React.SyntheticEvent<HTMLVideoElement>) {
    const video = event.currentTarget;
    if (!video.duration) return;

    const progress = (video.currentTime / video.duration) * 100;

    for (const milestone of [25, 50, 75]) {
      if (progress >= milestone && !milestones.current.has(milestone)) {
        milestones.current.add(milestone);
        trackEvent(`vsl_${milestone}` as "vsl_25" | "vsl_50" | "vsl_75", {
          value: milestone,
        });
      }
    }
  }

  if (assetSrc && assetType === "video") {
    const isBackground = videoMode === "background";

    return (
      <div
        className={`media-slot media-slot--asset ${className}`}
        style={{ aspectRatio }}
      >
        <video
          aria-label={alt || label}
          autoPlay={isBackground}
          controls={!isBackground}
          loop={isBackground}
          muted={isBackground}
          onEnded={() => trackEvent("vsl_complete")}
          onPlay={() => trackEvent("vsl_play")}
          onTimeUpdate={handleTimeUpdate}
          playsInline
          poster={poster ?? undefined}
          preload={isBackground ? "metadata" : "none"}
        >
          <source src={assetSrc} />
        </video>
      </div>
    );
  }

  if (assetSrc && assetType === "image") {
    return (
      <div
        className={`media-slot media-slot--asset ${className}`}
        style={{ aspectRatio }}
      >
        <Image
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 1200px"
          src={assetSrc}
        />
      </div>
    );
  }

  const Icon = assetType === "video" ? Film : FileImage;

  return (
    <div
      aria-label={`Placeholder de desenvolvimento: ${label}`}
      className={`media-slot media-slot--placeholder ${className}`}
      data-media-slot={id}
      role="img"
      style={{ aspectRatio }}
    >
      <span className="media-slot__technical">MediaSlot · {id}</span>
      <div className="media-slot__center">
        <Icon aria-hidden="true" size={28} strokeWidth={1.4} />
        <strong>{label}</strong>
        {description ? <span>{description}</span> : null}
      </div>
    </div>
  );
}
