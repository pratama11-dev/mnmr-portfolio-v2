import React from "react";

export interface ProjectSectionProps {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  children?: React.ReactNode;
}

export function ProjectSection({ title, paragraphs, bullets, children }: ProjectSectionProps) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {paragraphs?.length ? (
        <div className="mt-3 space-y-3 text-muted-foreground">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ) : null}
      {bullets?.length ? (
        <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      ) : null}
      {children}
    </section>
  );
}
