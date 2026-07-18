"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, Lock, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { useCopy } from "@/context/LocaleContext";
import { useGame } from "@/context/GameContext";
import {
  BASELINE_MANDAYS,
  MODULES,
  PAINS,
  ROADMAP_MODULES,
  buildPlan,
  effortDots,
} from "@/content/modules";
import type { ModuleId, PainId } from "@/content/types";

function EffortDots({ mandays }: { mandays: number }) {
  const filled = effortDots(mandays);
  return (
    <span className="flex items-center gap-1" aria-label={`${mandays} mandays`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`size-1.5 rounded-full ${i < filled ? "bg-signal" : "bg-border"}`}
        />
      ))}
    </span>
  );
}

export function Builder() {
  const copy = useCopy();
  const { setPlanModules } = useGame();
  const [pains, setPains] = useState<Set<PainId>>(new Set());
  const [selected, setSelected] = useState<Set<ModuleId>>(new Set());
  const [generated, setGenerated] = useState(false);

  const togglePain = (pain: PainId) =>
    setPains((prev) => {
      const next = new Set(prev);
      if (next.has(pain)) next.delete(pain);
      else next.add(pain);
      return next;
    });

  const toggleModule = (id: ModuleId) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        // Dependents fall with their prerequisite.
        for (const m of MODULES) if (m.requires === id) next.delete(m.id);
      } else {
        next.add(id);
      }
      return next;
    });

  const reset = () => {
    setPains(new Set());
    setSelected(new Set());
    setGenerated(false);
    setPlanModules(null);
  };

  const generate = () => {
    setGenerated(true);
    setPlanModules(selected.size > 0 ? [...selected] : null);
  };

  const plan = useMemo(
    () => (generated ? buildPlan(selected, pains) : null),
    [generated, selected, pains]
  );

  const flowModules = MODULES.filter((m) => selected.has(m.id)).sort(
    (a, b) => a.flowOrder - b.flowOrder
  );

  return (
    <section id="builder" className="scroll-mt-20 border-y border-border bg-muted/25">
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading kicker={copy.builder.kicker} title={copy.builder.title} body={copy.builder.body} stage="04" />

        {/* Step 1 — pains */}
        <div className="mt-12">
          <h3 className="text-lg font-bold">{copy.builder.step1Title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{copy.builder.step1Body}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {PAINS.map((pain) => {
              const active = pains.has(pain);
              return (
                <button
                  key={pain}
                  type="button"
                  onClick={() => togglePain(pain)}
                  aria-pressed={active}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "border-signal bg-signal/15 text-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {copy.builder.pains[pain]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 — modules */}
        <div className="mt-12">
          <h3 className="text-lg font-bold">{copy.builder.step2Title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{copy.builder.step2Body}</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const info = copy.builder.modules[module.id];
              const active = selected.has(module.id);
              const recommended = !active && module.solves.some((p) => pains.has(p));
              const blocked = module.requires ? !selected.has(module.requires) : false;
              return (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => !blocked && toggleModule(module.id)}
                  aria-pressed={active}
                  disabled={blocked}
                  className={`relative flex min-h-36 flex-col border p-5 text-left transition-all duration-200 ${
                    active
                      ? "border-signal bg-card shadow-[0_0_0_1px_color-mix(in_oklab,var(--signal)_40%,transparent)]"
                      : blocked
                        ? "cursor-not-allowed border-dashed border-border bg-muted/30 opacity-60"
                        : "cursor-pointer border-border bg-background hover:-translate-y-0.5 hover:border-foreground/40"
                  } ${recommended ? "border-signal/50" : ""}`}
                >
                  {recommended ? (
                    <span className="absolute -top-2.5 left-4 inline-flex items-center gap-1 rounded-full border border-signal/50 bg-background px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-signal">
                      <Sparkles className="size-2.5" />
                      {copy.builder.recommendedLabel}
                    </span>
                  ) : null}
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-bold">{info.name}</h4>
                    <span
                      className={`flex size-5 shrink-0 items-center justify-center border transition-colors ${
                        active ? "border-signal bg-signal text-primary-foreground" : "border-border"
                      }`}
                    >
                      {active ? <Check className="size-3.5" /> : null}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm/6 text-muted-foreground">{info.desc}</p>
                  <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    <span>{copy.builder.effortLabel}</span>
                    <EffortDots mandays={module.mandays} />
                  </div>
                  {blocked ? (
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                      {copy.builder.requiresLabel}
                    </p>
                  ) : null}
                </button>
              );
            })}
          </div>

          {/* Roadmap modules */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {ROADMAP_MODULES.map((id) => (
              <div
                key={id}
                className="flex items-center justify-between border border-dashed border-border bg-muted/30 p-4"
              >
                <div>
                  <p className="text-sm font-bold text-muted-foreground">
                    {copy.builder.roadmapModules[id]}
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/70">
                    {copy.builder.roadmapLabel}
                  </p>
                </div>
                <Lock className="size-4 text-muted-foreground/60" />
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{copy.builder.roadmapNote}</p>

          {/* Flow strip — the selected system as one connected line */}
          {flowModules.length > 1 ? (
            <div className="mt-6 flex flex-wrap items-center gap-y-3 border border-signal/40 bg-card/70 p-4">
              {flowModules.map((module, index) => (
                <div key={module.id} className="flex items-center">
                  {index > 0 ? (
                    <svg aria-hidden="true" viewBox="0 0 40 8" className="mx-1 h-2 w-8">
                      <line
                        x1="0"
                        y1="4"
                        x2="40"
                        y2="4"
                        strokeWidth="2"
                        className="flow-line stroke-[color:var(--signal)]"
                      />
                    </svg>
                  ) : null}
                  <span className="border border-border bg-background px-2.5 py-1 font-mono text-xs font-semibold">
                    {copy.builder.modules[module.id].name}
                  </span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Step 3 — plan */}
        <div className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold">{copy.builder.step3Title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{copy.builder.step3Body}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={reset}>
                <RotateCcw className="size-3.5" />
                {copy.builder.resetCta}
              </Button>
              <Button
                size="sm"
                onClick={generate}
                disabled={selected.size === 0}
                className="bg-signal text-[oklch(0.18_0.01_265)] shadow-[0_0_24px_-6px_var(--signal)] hover:bg-signal/90"
              >
                {copy.builder.generateCta}
              </Button>
            </div>
          </div>

          {generated && !plan ? (
            <p className="mt-4 text-sm text-muted-foreground">{copy.builder.emptyPlan}</p>
          ) : null}

          {plan ? (
            <div className="mt-6 animate-in fade-in slide-in-from-bottom-2 border border-signal/50 bg-card p-6 duration-500 sm:p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-signal">
                {copy.builder.plan.title}
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-bold">{copy.builder.plan.phase1}</h4>
                  <ul className="mt-3 space-y-2">
                    {plan.phase1.map((id) => (
                      <li key={id} className="flex items-center gap-2 text-sm">
                        <span className="size-1.5 bg-signal" />
                        {copy.builder.modules[id].name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold">{copy.builder.plan.phase2}</h4>
                  {plan.phase2.length > 0 ? (
                    <ul className="mt-3 space-y-2">
                      {plan.phase2.map((id) => (
                        <li key={id} className="flex items-center gap-2 text-sm">
                          <span className="size-1.5 border border-signal" />
                          {copy.builder.modules[id].name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm text-muted-foreground">—</p>
                  )}
                </div>
              </div>

              <div className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {copy.builder.plan.effortTitle}
                  </p>
                  <p className="mt-1 text-2xl font-black tabular-nums">
                    {plan.mandaysMin}–{plan.mandaysMax}{" "}
                    <span className="text-sm font-semibold text-muted-foreground">
                      {copy.builder.plan.effortUnit}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {copy.builder.plan.elapsedTitle}
                  </p>
                  <p className="mt-1 text-2xl font-black tabular-nums">
                    {plan.monthsMin}–{plan.monthsMax}{" "}
                    <span className="text-sm font-semibold text-muted-foreground">
                      {copy.builder.plan.elapsedUnit}
                    </span>
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-1.5 text-xs text-muted-foreground">
                <li>+ {BASELINE_MANDAYS} md — {copy.builder.plan.baseline}</li>
                <li>{copy.builder.plan.parallelNote}</li>
                <li>{copy.builder.plan.disclaimer}</li>
              </ul>

              <Button asChild className="group mt-6">
                <a href="#contact">
                  {copy.builder.plan.cta}
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
