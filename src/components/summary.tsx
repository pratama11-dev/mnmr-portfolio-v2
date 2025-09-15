import React from "react";

export function Summary({ paragraphs }: { paragraphs: string[] }) {
  if (!paragraphs?.length) return null;
  return (
    <div className="mt-3 space-y-3 text-muted-foreground">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
