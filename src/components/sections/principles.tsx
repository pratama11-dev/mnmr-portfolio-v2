"use client";

import { Lock, Wrench, Zap } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { useCopy } from "@/context/LocaleContext";
import { useGame, TOTAL_REPAIRS } from "@/context/GameContext";

function PipelineLink({
  repaired,
  onRepair,
  labels,
}: {
  repaired: boolean;
  onRepair: () => void;
  labels: { broken: string; flowing: string };
}) {
  return (
    <button
      type="button"
      onClick={onRepair}
      aria-pressed={repaired}
      aria-label={repaired ? labels.flowing : labels.broken}
      title={repaired ? labels.flowing : labels.broken}
      className={`group relative flex items-center justify-center self-stretch md:flex-1 ${
        repaired ? "cursor-default" : "cursor-pointer"
      }`}
    >
      {/* Horizontal on md+, vertical on mobile */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
        className="hidden h-8 w-full md:block"
      >
        <line
          x1="0"
          y1="16"
          x2="100"
          y2="16"
          strokeWidth="2"
          className={
            repaired
              ? "flow-line stroke-[color:var(--signal)]"
              : "stroke-[color:var(--destructive)] opacity-50 [stroke-dasharray:3_6]"
          }
        />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 100"
        preserveAspectRatio="none"
        className="h-12 w-8 md:hidden"
      >
        <line
          x1="16"
          y1="0"
          x2="16"
          y2="100"
          strokeWidth="2"
          className={
            repaired
              ? "flow-line stroke-[color:var(--signal)]"
              : "stroke-[color:var(--destructive)] opacity-50 [stroke-dasharray:3_6]"
          }
        />
      </svg>
      <span
        className={`absolute flex size-7 items-center justify-center rounded-full border transition-colors ${
          repaired
            ? "border-signal bg-background text-signal"
            : "border-destructive/60 bg-background text-destructive group-hover:scale-110"
        }`}
      >
        {repaired ? <Zap className="size-3.5" /> : <Wrench className="size-3.5" />}
      </span>
    </button>
  );
}

export function Principles() {
  const copy = useCopy();
  const { repaired, repair } = useGame();
  const allDone = repaired.size >= TOTAL_REPAIRS;

  return (
    <section id="approach" className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading kicker={copy.principles.kicker} title={copy.principles.title} body={copy.principles.body} stage="03" />

      <p className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-signal">
        <Wrench className="size-4" />
        {copy.principles.instruction}
      </p>

      {/* Pipeline */}
      <div className="mt-10 flex flex-col items-center border border-border bg-card/60 p-6 md:flex-row md:p-8">
        {copy.principles.stages.map((stage, index) => (
          <div key={stage} className="contents">
            <div className="flex min-w-24 flex-col items-center gap-2">
              <span
                className={`flex size-12 items-center justify-center border font-mono text-sm font-bold transition-colors ${
                  index === 0 || repaired.has(index - 1)
                    ? "border-signal/60 bg-background text-foreground"
                    : "border-border bg-muted/50 text-muted-foreground"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {stage}
              </span>
            </div>
            {index < copy.principles.stages.length - 1 ? (
              <PipelineLink
                repaired={repaired.has(index)}
                onRepair={() => repair(index)}
                labels={{ broken: copy.principles.repairLabel, flowing: copy.principles.repairedLabel }}
              />
            ) : null}
          </div>
        ))}
      </div>

      {/* Principle cards revealed by repairs */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {copy.principles.items.map((item, index) => {
          const unlocked = repaired.has(index);
          return (
            <article
              key={item.title}
              className={`border p-6 transition-all duration-300 ${
                unlocked ? "border-signal/50 bg-card" : "border-dashed border-border bg-muted/30"
              }`}
            >
              {unlocked ? (
                <div className="animate-in fade-in slide-in-from-bottom-1 duration-300">
                  <span className="font-mono text-xs font-semibold text-signal">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm/6 text-muted-foreground">{item.body}</p>
                </div>
              ) : (
                <div className="flex min-h-24 flex-col items-start justify-between">
                  <span className="font-mono text-xs font-semibold text-muted-foreground">
                    0{index + 1}
                  </span>
                  <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <Lock className="size-3.5" />
                    {copy.principles.repairLabel} — {copy.principles.instruction}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {allDone ? (
        <p className="mt-10 animate-in fade-in slide-in-from-bottom-2 border-l-2 border-signal bg-card p-5 text-base/7 font-semibold duration-500">
          {copy.principles.done}
        </p>
      ) : null}
    </section>
  );
}
