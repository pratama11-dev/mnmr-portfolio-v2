"use client";

import { useEffect, useRef, useState } from "react";
import { useGame } from "@/context/GameContext";
import { useCopy } from "@/context/LocaleContext";

const SEGMENTS = 20;

export function Hud() {
  const { health, complete } = useGame();
  const copy = useCopy();
  const [pulse, setPulse] = useState(false);
  const previous = useRef(health);

  useEffect(() => {
    if (health > previous.current) {
      setPulse(true);
      const timer = window.setTimeout(() => setPulse(false), 600);
      previous.current = health;
      return () => window.clearTimeout(timer);
    }
    previous.current = health;
  }, [health]);

  const lit = Math.round((health / 100) * SEGMENTS);

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-4 right-4 z-50 w-44 select-none border border-border bg-background/85 p-2.5 font-mono shadow-lg backdrop-blur transition-all sm:w-56 sm:p-3 ${
        pulse ? "scale-[1.04] shadow-[0_0_28px_-8px_var(--signal)]" : "scale-100"
      }`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {copy.hud.label}
        </p>
        <p
          className={`text-sm font-bold tabular-nums ${
            complete ? "text-signal" : "text-foreground"
          }`}
        >
          {health}%
        </p>
      </div>
      <div className="mt-2 flex gap-[3px]" role="progressbar" aria-valuenow={health} aria-valuemin={0} aria-valuemax={100}>
        {Array.from({ length: SEGMENTS }, (_, i) => (
          <span
            key={i}
            className={`h-2.5 flex-1 transition-colors duration-300 ${
              i < lit ? "bg-signal" : "bg-border"
            }`}
          />
        ))}
      </div>
      <p className="mt-2 text-[10px] leading-tight text-muted-foreground">
        {complete ? copy.hud.complete : copy.hud.hint}
      </p>
    </div>
  );
}
