"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { FileSpreadsheet, MessageCircle, StickyNote, Stethoscope } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { useCopy } from "@/context/LocaleContext";
import { useGame, TOTAL_DIAGNOSES } from "@/context/GameContext";
import { gsap, MOTION_OK } from "@/lib/gsap";

const TILTS = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3", "-rotate-1", "rotate-2"];
const SCRAP_ICONS = [FileSpreadsheet, MessageCircle, FileSpreadsheet, MessageCircle, MessageCircle, StickyNote];
/** sheet | chat | sheet | chat | chat | sticky */
const SHAPES = [
  "bg-muted/40",
  "rounded-2xl rounded-bl-none bg-muted/40",
  "bg-muted/40",
  "rounded-2xl rounded-br-none bg-muted/40",
  "rounded-2xl rounded-bl-none bg-muted/40",
  "bg-[color-mix(in_oklab,var(--signal)_10%,var(--muted))]",
];
const BOB_DELAYS = ["0s", "0.9s", "1.7s", "0.4s", "2.3s", "1.2s"];

export function Chaos() {
  const copy = useCopy();
  const { diagnosed, diagnose } = useGame();
  const container = useRef<HTMLElement | null>(null);
  const allDone = diagnosed.size >= TOTAL_DIAGNOSES;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(".chaos-grid", {
          opacity: 0,
          y: 36,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "opacity,transform",
          scrollTrigger: { trigger: container.current, start: "top 70%" },
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="problem"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <SectionHeading
        kicker={copy.chaos.kicker}
        title={copy.chaos.title}
        body={copy.chaos.body}
        stage="01"
      />

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-signal">
          <Stethoscope className="size-4" />
          {copy.chaos.instruction}
        </p>
        <p className="font-mono text-xs tabular-nums text-muted-foreground">
          {diagnosed.size}/{TOTAL_DIAGNOSES} {copy.chaos.diagnosedLabel}
        </p>
      </div>

      <div className="chaos-grid mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {copy.chaos.artifacts.map((artifact, index) => {
          const isDiagnosed = diagnosed.has(artifact.id);
          const Icon = SCRAP_ICONS[index];
          return (
            <button
              key={artifact.id}
              type="button"
              onClick={() => diagnose(artifact.id)}
              aria-pressed={isDiagnosed}
              style={isDiagnosed ? undefined : { animationDelay: BOB_DELAYS[index] }}
              className={`chaos-artifact group relative min-h-44 border p-5 text-left transition-all duration-300 ${
                isDiagnosed
                  ? "rotate-0 border-signal/60 bg-card shadow-[0_0_24px_-8px_var(--signal)]"
                  : `bob ${TILTS[index]} ${SHAPES[index]} cursor-pointer border-dashed border-border hover:rotate-0 hover:border-solid hover:bg-muted/70`
              }`}
            >
              {isDiagnosed ? (
                <div className="animate-in fade-in duration-300">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-signal">
                    {copy.chaos.diagnosedLabel} ✓
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug">{artifact.title}</h3>
                  <p className="mt-2 text-sm/6 text-muted-foreground">{artifact.body}</p>
                </div>
              ) : (
                <div className="flex h-full min-h-32 flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <Icon className="size-5 text-muted-foreground/70" />
                    {/* Fake window dots on sheet scraps */}
                    {index % 2 === 0 && index !== 5 ? (
                      <span className="flex gap-1" aria-hidden="true">
                        <span className="size-1.5 rounded-full bg-border" />
                        <span className="size-1.5 rounded-full bg-border" />
                        <span className="size-1.5 rounded-full bg-border" />
                      </span>
                    ) : null}
                  </div>
                  <p className="font-mono text-sm text-foreground/75 group-hover:text-foreground">
                    {artifact.scrap}
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground/60">
                    ???
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {allDone ? (
        <p className="mt-10 animate-in fade-in slide-in-from-bottom-2 border-l-2 border-signal bg-card p-5 text-base/7 font-semibold duration-500">
          {copy.chaos.done}
        </p>
      ) : null}
    </section>
  );
}
