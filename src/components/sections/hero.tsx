"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowDown, ArrowRight, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/context/LocaleContext";
import { gsap, MOTION_OK } from "@/lib/gsap";
import type { ModuleId } from "@/content/types";

const CHIPS: { id: ModuleId; right: string; top: string; delay: string }[] = [
  { id: "crm", right: "6%", top: "22%", delay: "0s" },
  { id: "purchasing", right: "19%", top: "38%", delay: "1.3s" },
  { id: "warehouse", right: "5%", top: "54%", delay: "2.2s" },
  { id: "finance", right: "16%", top: "70%", delay: "0.8s" },
];

export function Hero() {
  const copy = useCopy();
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(".hero-item", {
          opacity: 0,
          y: 24,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          delay: 1.6,
        });
        gsap.from(".hero-chip", {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          delay: 2.4,
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="ribbed relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_110%,color-mix(in_oklab,var(--signal)_18%,transparent),transparent_55%)]"
      />

      {/* Floating module chips — the system assembling itself */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden select-none lg:block">
        {CHIPS.map((chip) => (
          <span
            key={chip.id}
            className="hero-chip bob absolute flex items-center gap-2 border border-border bg-background/80 px-3 py-1.5 font-mono text-xs font-semibold backdrop-blur"
            style={{ right: chip.right, top: chip.top, animationDelay: chip.delay }}
          >
            <span className="size-1.5 rounded-full bg-signal" />
            {copy.builder.modules[chip.id].name}
          </span>
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl flex-col justify-center px-5 py-24 sm:px-8 sm:py-32 lg:min-h-[calc(100vh-3.5rem)]">
        <p className="hero-item inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <Boxes className="size-3.5 text-signal" />
          {copy.hero.badge}
        </p>
        <h1 className="hero-item font-display mt-8 max-w-4xl text-[2.6rem]/[1.05] font-black tracking-tight sm:text-7xl/[1.02]">
          {copy.hero.title}
        </h1>
        <p className="hero-item mt-6 max-w-2xl text-xl/8 font-semibold text-foreground/85 sm:text-2xl/9">
          {copy.hero.tagline}
        </p>
        <p className="hero-item mt-4 max-w-3xl text-base/7 text-muted-foreground sm:text-lg/8">
          {copy.hero.body}
        </p>

        <div className="hero-item mt-9 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group bg-signal text-[oklch(0.18_0.01_265)] shadow-[0_0_32px_-6px_var(--signal)] hover:bg-signal/90"
          >
            <a href="#problem">
              {copy.hero.ctaPrimary}
              <ArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </Button>
          <Button variant="outline" asChild size="lg" className="group">
            <a href="#builder">
              {copy.hero.ctaSecondary}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        <dl className="hero-item mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {copy.hero.facts.map((fact) => (
            <div key={fact.label} className="bg-background/90 p-4">
              <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm font-semibold">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <p className="hero-item mt-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="inline-block h-px w-10 animate-pulse bg-signal" />
          {copy.hero.scroll}
        </p>
      </div>
    </section>
  );
}
