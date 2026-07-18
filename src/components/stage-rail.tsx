"use client";

import { useEffect, useState } from "react";

const STOPS = [
  { id: "problem", n: "01" },
  { id: "trap", n: "02" },
  { id: "approach", n: "03" },
  { id: "builder", n: "04" },
  { id: "method", n: "05" },
  { id: "contact", n: "06" },
];

export function StageRail() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    for (const stop of STOPS) {
      const el = document.getElementById(stop.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Journey stages"
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 xl:flex"
    >
      {STOPS.map((stop) => (
        <a
          key={stop.id}
          href={`#${stop.id}`}
          aria-current={active === stop.id ? "true" : undefined}
          className={`flex size-8 items-center justify-center border font-mono text-[10px] font-bold transition-all duration-300 ${
            active === stop.id
              ? "border-signal bg-signal/10 text-signal shadow-[0_0_16px_-4px_var(--signal)]"
              : "border-border bg-background/70 text-muted-foreground backdrop-blur hover:border-foreground/40 hover:text-foreground"
          }`}
        >
          {stop.n}
        </a>
      ))}
    </nav>
  );
}
