"use client";

import { Ban, Landmark, Link2Off } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { useCopy } from "@/context/LocaleContext";

const ICONS = [Landmark, Link2Off, Ban];

export function Barriers() {
  const copy = useCopy();

  return (
    <section id="trap" className="scroll-mt-20 border-y border-border bg-muted/25">
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading kicker={copy.barriers.kicker} title={copy.barriers.title} body={copy.barriers.body} stage="02" />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {copy.barriers.items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <article key={item.title} className="border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center border border-border bg-background text-destructive">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm/6 text-muted-foreground">{item.body}</p>
              </article>
            );
          })}
        </div>

        <p className="ribbed font-display mt-12 border border-border bg-background/60 p-8 text-center text-xl font-black tracking-tight sm:text-3xl">
          {copy.barriers.bridge}
        </p>
      </div>
    </section>
  );
}
