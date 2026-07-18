import type { ModuleId, PainId, RoadmapModuleId } from "./types";

export interface ModuleDef {
  id: ModuleId;
  /** Indicative build effort in mandays (from real scoping, generalized). */
  mandays: number;
  /** Pain points this module directly addresses. */
  solves: PainId[];
  /** Module that must be selected for this one to make sense. */
  requires?: ModuleId;
  /** Order along the operational flow, used for connector lines. */
  flowOrder: number;
}

export const MODULES: ModuleDef[] = [
  { id: "crm", mandays: 15, solves: ["followup", "quotation"], flowOrder: 0 },
  { id: "purchasing", mandays: 8, solves: ["procurement"], flowOrder: 1 },
  { id: "warehouse", mandays: 25, solves: ["stock"], flowOrder: 2 },
  { id: "mobile", mandays: 10, solves: ["stock"], requires: "warehouse", flowOrder: 3 },
  { id: "delivery", mandays: 12, solves: ["schedule"], flowOrder: 4 },
  { id: "finance", mandays: 15, solves: ["profit"], flowOrder: 5 },
  { id: "dashboard", mandays: 6, solves: ["overview"], flowOrder: 6 },
];

export const ROADMAP_MODULES: RoadmapModuleId[] = ["bom", "workorder", "qc"];

export const PAINS: PainId[] = [
  "stock",
  "followup",
  "quotation",
  "procurement",
  "schedule",
  "profit",
  "overview",
];

/** Design, QA, deployment, documentation — always part of a build. */
export const BASELINE_MANDAYS = 10;

/** Effort dots on a 1–5 scale for quick visual comparison. */
export function effortDots(mandays: number): number {
  if (mandays <= 6) return 1;
  if (mandays <= 10) return 2;
  if (mandays <= 15) return 3;
  if (mandays <= 20) return 4;
  return 5;
}

export interface Plan {
  phase1: ModuleId[];
  phase2: ModuleId[];
  mandaysMin: number;
  mandaysMax: number;
  monthsMin: number;
  monthsMax: number;
}

/**
 * Phase split: modules that address a selected pain go first (highest
 * impact), ordered along the operational flow; the rest follow in phase 2.
 * Dependent modules never precede their prerequisite.
 */
export function buildPlan(selected: Set<ModuleId>, pains: Set<PainId>): Plan | null {
  const chosen = MODULES.filter((m) => selected.has(m.id));
  if (chosen.length === 0) return null;

  const phase1: ModuleId[] = [];
  const phase2: ModuleId[] = [];
  for (const m of chosen) {
    const hitsPain = m.solves.some((p) => pains.has(p));
    const prereqInPhase1 = !m.requires || !selected.has(m.requires) || phase1.includes(m.requires);
    if (pains.size === 0 || (hitsPain && prereqInPhase1)) phase1.push(m.id);
    else phase2.push(m.id);
  }
  // Nothing matched the pains — highest-impact module still leads.
  if (phase1.length === 0) phase1.push(phase2.shift() as ModuleId);

  const total = BASELINE_MANDAYS + chosen.reduce((sum, m) => sum + m.mandays, 0);
  const mandaysMin = Math.round((total * 0.9) / 5) * 5;
  const mandaysMax = Math.round((total * 1.2) / 5) * 5;
  // ~18 effective build days per elapsed month on a phased, parallel rollout.
  const monthsMin = Math.max(1, Math.round(mandaysMin / 20));
  const monthsMax = Math.max(monthsMin + 1, Math.round(mandaysMax / 16));

  return { phase1, phase2, mandaysMin, mandaysMax, monthsMin, monthsMax };
}
