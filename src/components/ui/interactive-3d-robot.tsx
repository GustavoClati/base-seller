"use client";

import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

interface SplineApplicationWithBranding {
  requestRender?: () => void;
  _renderer?: {
    pipeline?: {
      setWatermark?: (texture: null) => void;
    };
  };
}

function RobotLoadingState() {
  return (
    <div aria-hidden="true" className="seller-bot__loading">
      <span className="seller-bot__loading-orbit" />
      <span className="seller-bot__loading-core" />
    </div>
  );
}

export function InteractiveRobotSpline({
  scene,
  className,
}: InteractiveRobotSplineProps) {
  function handleLoad(application: unknown) {
    const splineApplication =
      application as SplineApplicationWithBranding;

    splineApplication._renderer?.pipeline?.setWatermark?.(null);
    splineApplication.requestRender?.();
  }

  return (
    <Suspense fallback={<RobotLoadingState />}>
      <Spline className={className} onLoad={handleLoad} scene={scene} />
    </Suspense>
  );
}
