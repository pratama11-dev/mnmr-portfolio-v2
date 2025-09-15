import React from "react";
import type { Education } from "@/types";

export function EducationList({ items }: { items: Education[] }) {
  if (!items?.length) return null;

  return (
    <ul className="mt-4 space-y-4">
      {items.map((e) => (
        <li key={`${e.institution}-${e.program}`} className="rounded-lg border border-border p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="font-medium leading-none">
                {e.link ? (
                  <a href={e.link} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">
                    {e.institution}
                  </a>
                ) : (
                  e.institution
                )}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.program}</p>
              {e.location ? (
                <p className="mt-1 text-xs text-muted-foreground/80">{e.location}</p>
              ) : null}
            </div>
            <div className="text-xs text-muted-foreground/80">
              {e.start || e.end ? (
                <span>
                  {e.start ? e.start : ""}
                  {e.start && e.end ? " – " : ""}
                  {e.end ? e.end : "Present"}
                </span>
              ) : null}
            </div>
          </div>
          {e.notes?.length ? (
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              {e.notes.map((n, idx) => (
                <li key={idx}>{n}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
