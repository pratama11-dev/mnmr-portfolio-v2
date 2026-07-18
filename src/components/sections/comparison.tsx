"use client";

import { SectionHeading } from "@/components/sections/section-heading";
import { useCopy } from "@/context/LocaleContext";

export function Comparison() {
  const copy = useCopy();
  const columns = [
    { data: copy.comparison.columns.legacy, highlight: false },
    { data: copy.comparison.columns.openSource, highlight: false },
    { data: copy.comparison.columns.makir, highlight: true },
  ];

  return (
    <section className="border-y border-border bg-muted/25">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading kicker={copy.comparison.kicker} title={copy.comparison.title} body={copy.comparison.body} />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {columns.map(({ data, highlight }) => (
            <article
              key={data.name}
              className={`border p-6 ${
                highlight
                  ? "border-signal bg-card shadow-[0_0_0_1px_color-mix(in_oklab,var(--signal)_40%,transparent)]"
                  : "border-border bg-background"
              }`}
            >
              <h3 className={`text-lg font-black tracking-tight ${highlight ? "text-signal" : ""}`}>
                {data.name}
              </h3>
              <dl className="mt-5 space-y-4">
                {copy.comparison.aspects.map((aspect, row) => (
                  <div key={aspect}>
                    <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {aspect}
                    </dt>
                    <dd className={`mt-1 text-sm/6 ${highlight ? "font-semibold" : "text-muted-foreground"}`}>
                      {data.rows[row]}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
