import React from "react";
import type { Certification } from "@/types";

export function CertificationsList({ items }: { items: Certification[] }) {
  if (!items?.length) return null;

  return (
    <ul className="mt-4 space-y-4">
      {items.map((c) => (
        <li key={`${c.name}-${c.issuer}`} className="rounded-lg border border-border p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-medium leading-none">
                {c.credentialUrl ? (
                  <a href={c.credentialUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">
                    {c.name}
                  </a>
                ) : (
                  c.name
                )}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              {c.issueDate ? (
                <p className="mt-1 text-xs text-muted-foreground/80">Issued {c.issueDate}{c.credentialId ? ` · ID ${c.credentialId}` : ""}</p>
              ) : null}
            </div>
          </div>
          {c.skills?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {c.skills.map((s) => (
                <span key={s} className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
