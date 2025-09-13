import React from "react";

export type Skill = { name: string; icon?: string };
export type SkillsGrouped = Record<string, Skill[]>;

function SkillItem({ s }: { s: Skill }) {
  return (
    <li className="flex items-center gap-2 rounded-md border border-border px-3 py-2 bg-card">
      {s.icon ? (
        <i className={`${s.icon} text-xl`} aria-hidden />
      ) : (
        <span
          aria-hidden
          className="inline-block h-2.5 w-2.5 rounded-full bg-muted-foreground/60"
        />
      )}
      <span className="text-sm">{s.name}</span>
    </li>
  );
}

export function SkillsGrid({ skills }: { skills: Skill[] | SkillsGrouped }) {
  if (Array.isArray(skills)) {
    // Backward compatible flat list
    return (
      <ul className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((s) => (
          <SkillItem key={s.name} s={s} />
        ))}
      </ul>
    );
  }

  // Grouped rendering
  const entries = Object.entries(skills as SkillsGrouped);
  return (
    <div className="mt-5 space-y-8">
      {entries.map(([group, items]) => (
        <section key={group}>
          <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            {group}
          </h3>
          <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {items.map((s) => (
              <SkillItem key={s.name} s={s} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
