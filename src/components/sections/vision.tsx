"use client";

import { Star } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { useCopy } from "@/context/LocaleContext";

export function Vision() {
  const copy = useCopy();

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading kicker={copy.vision.kicker} title={copy.vision.title} body={copy.vision.body} />

      <ol className="mt-10 grid gap-5 md:grid-cols-4">
        {copy.vision.milestones.map((milestone, index) => (
          <li key={milestone.label} className="relative border border-border bg-card p-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-signal">{milestone.label}</span>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-[linear-gradient(90deg,var(--signal),transparent)]"
                style={{ opacity: 1 - index * 0.2 }}
              />
            </div>
            <p className="mt-3 text-sm/6 text-muted-foreground">{milestone.body}</p>
          </li>
        ))}
      </ol>

      <div className="ribbed mt-10 border border-border bg-card/60 p-6 sm:p-8">
        <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-signal">
          <Star className="size-4" />
          {copy.vision.perksTitle}
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {copy.vision.perks.map((perk) => (
            <li key={perk} className="border-l-2 border-signal/60 pl-3 text-sm/6">
              {perk}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
