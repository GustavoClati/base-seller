"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

export function MotionToggle() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "running";

    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [paused]);

  return (
    <button
      aria-label={paused ? "Retomar animações" : "Pausar animações"}
      className="seller-motion-toggle"
      onClick={() => setPaused((value) => !value)}
      title={paused ? "Retomar animações" : "Pausar animações"}
      type="button"
    >
      {paused ? <Play aria-hidden="true" size={15} /> : <Pause aria-hidden="true" size={15} />}
    </button>
  );
}
