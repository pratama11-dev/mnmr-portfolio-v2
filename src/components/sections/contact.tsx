"use client";

import { Mail, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { useCopy } from "@/context/LocaleContext";
import { useGame } from "@/context/GameContext";

export function Contact() {
  const copy = useCopy();
  const { complete, health } = useGame();

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <div
        className={`ribbed relative overflow-hidden border p-8 transition-shadow duration-700 sm:p-14 ${
          complete
            ? "border-signal/60 shadow-[0_0_80px_-20px_var(--signal)]"
            : "border-border"
        } bg-card/60`}
      >
        {complete ? <div aria-hidden="true" className="scanline" /> : null}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_120%,color-mix(in_oklab,var(--signal)_14%,transparent),transparent_60%)]"
        />

        {/* Game completion status */}
        <div
          className={`mb-8 inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] ${
            complete
              ? "animate-in zoom-in-95 border-signal bg-signal/10 text-signal duration-500"
              : "border-border text-muted-foreground"
          }`}
        >
          <Radio className={`size-3.5 ${complete ? "animate-pulse" : ""}`} />
          {complete ? copy.contact.onlineTitle : `${copy.contact.lockedTitle} — ${health}%`}
        </div>

        <SectionHeading kicker={copy.contact.kicker} title={copy.contact.title} body={copy.contact.body} stage="06" />

        <p className="mt-4 max-w-2xl text-sm/6 text-muted-foreground">
          {complete ? copy.contact.onlineBody : copy.contact.lockedBody}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="bg-signal text-[oklch(0.18_0.01_265)] shadow-[0_0_32px_-6px_var(--signal)] hover:bg-signal/90"
          >
            <a href={`mailto:${copy.contact.email}`}>
              <Mail className="size-4" />
              {copy.contact.cta}
            </a>
          </Button>
          <span className="font-mono text-sm text-muted-foreground">{copy.contact.email}</span>
        </div>
      </div>
    </section>
  );
}
