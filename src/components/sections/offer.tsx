"use client";

import { Gift, HandshakeIcon, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { useCopy } from "@/context/LocaleContext";

const ICONS = [Gift, HandshakeIcon, ShieldCheck];

export function Offer() {
  const copy = useCopy();

  return (
    <section className="border-y border-border bg-muted/25">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading kicker={copy.offer.kicker} title={copy.offer.title} body={copy.offer.body} />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {copy.offer.columns.map((column, index) => {
            const Icon = ICONS[index];
            return (
              <article key={column.title} className="border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center border border-border bg-background text-signal">
                    <Icon className="size-4.5" />
                  </span>
                  <h3 className="text-base font-bold">{column.title}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {column.items.map((item) => (
                    <li key={item} className="border-l-2 border-border pl-3 text-sm/6 text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
