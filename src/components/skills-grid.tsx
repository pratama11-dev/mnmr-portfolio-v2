import React from "react";

type Skill = { name: string; icon: string };

export function SkillsGrid({ skills }: { skills: Skill[] }) {
  return (
    <ul className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
      {skills.map((s) => (
        <li
          key={s.name}
          className="flex items-center gap-2 rounded-md border border-border px-3 py-2 bg-card"
        >
          <i className={`${s.icon} text-xl`} aria-hidden />
          <span className="text-sm">{s.name}</span>
        </li>
      ))}
    </ul>
  );
}
