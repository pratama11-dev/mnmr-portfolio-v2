import React from "react";
import Link from "next/link";

export type MetaValue = string | string[] | { label: string; href: string }[];

export interface ProjectMetaProps {
  items: Record<string, MetaValue | undefined>;
}

export function ProjectMeta({ items }: ProjectMetaProps) {
  const entries = Object.entries(items).filter(([, v]) => v && (Array.isArray(v) ? v.length : true));
  if (!entries.length) return null;

  return (
    <dl className="divide-y divide-border rounded-lg border border-border bg-card">
      {entries.map(([key, value]) => (
        <div key={key} className="grid grid-cols-3 gap-3 px-4 py-3 text-sm">
          <dt className="col-span-1 font-medium capitalize text-muted-foreground">{key}</dt>
          <dd className="col-span-2">
            {renderValue(value as MetaValue)}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function renderValue(value: MetaValue) {
  if (typeof value === "string") return <span>{value}</span>;
  if (Array.isArray(value)) {
    if (value.length && typeof value[0] === "string") {
      return (
        <ul className="flex flex-wrap gap-2">
          {(value as string[]).map((v) => (
            <li key={v} className="rounded-md border border-border px-2 py-1 text-xs">{v}</li>
          ))}
        </ul>
      );
    }
    const links = value as { label: string; href: string }[];
    return (
      <ul className="flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} target="_blank" className="underline underline-offset-4 hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  return null;
}
