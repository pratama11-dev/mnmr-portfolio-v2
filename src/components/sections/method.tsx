"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/sections/section-heading";
import { useCopy } from "@/context/LocaleContext";
import { gsap, MOTION_OK } from "@/lib/gsap";

export function Method() {
  const copy = useCopy();
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          ".method-progress",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: ".method-steps",
              start: "top 65%",
              end: "bottom 60%",
              scrub: 0.4,
            },
          }
        );
        gsap.from(".method-step", {
          opacity: 0,
          x: -24,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".method-steps", start: "top 70%" },
        });
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} id="method" className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading kicker={copy.method.kicker} title={copy.method.title} body={copy.method.body} stage="05" />

      <div className="method-steps relative mt-12">
        {/* Track + scroll-drawn progress */}
        <div aria-hidden="true" className="absolute bottom-5 left-[23px] top-5 w-px bg-border" />
        <div
          aria-hidden="true"
          className="method-progress absolute bottom-5 left-[23px] top-5 w-px bg-signal"
        />

        <ol className="space-y-6">
          {copy.method.steps.map((step, index) => (
            <li key={step.title} className="method-step relative flex gap-6">
              <span className="z-10 flex size-12 shrink-0 items-center justify-center border border-border bg-background font-mono text-sm font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 border border-border bg-card p-5">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-1.5 text-sm/6 text-muted-foreground">{step.body}</p>
                {index === 2 ? (
                  /* Parallel run — both systems alive, side by side */
                  <div aria-hidden="true" className="mt-4 space-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="w-16 shrink-0">Legacy</span>
                      <span className="h-2 flex-1 bg-[linear-gradient(90deg,var(--border),var(--border)_55%,transparent)]" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-16 shrink-0 text-signal">MAKIR</span>
                      <span className="h-2 flex-1 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--signal)_35%,transparent),var(--signal))]" />
                    </div>
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p className="ribbed font-display mt-12 border border-signal/40 bg-card/60 p-6 text-center text-lg font-black tracking-tight sm:text-2xl">
        {copy.method.principle}
      </p>
    </section>
  );
}
