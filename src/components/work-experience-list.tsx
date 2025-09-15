import React from "react";
import type { Experience } from "@/types";

export function WorkExperienceList({ items }: { items: Experience[] }) {
  if (!items?.length) return null;

  return (
    <ul className="mt-4 space-y-4">
      {items.map((e, idx) => (
        <li key={`${e.company}-${e.role}-${idx}`} className="rounded-lg border border-border p-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                {e.type ? (
                  <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                    {e.type}
                  </span>
                ) : null}
                <h3 className="font-medium leading-none">{e.company}</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
              {e.location ? (
                <p className="mt-1 text-xs text-muted-foreground/80">{e.location}</p>
              ) : null}
            </div>
            <div className="text-xs text-muted-foreground/80 whitespace-nowrap">
              <span>
                {e.start}
                {" "}
                {e.end ? `– ${e.end}` : "– Present"}
              </span>
            </div>
          </div>
          {e.bullets?.length ? (
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
