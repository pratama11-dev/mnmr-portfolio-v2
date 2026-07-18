export type Locale = "en" | "id";

export type ModuleId =
  | "crm"
  | "purchasing"
  | "warehouse"
  | "mobile"
  | "delivery"
  | "finance"
  | "dashboard";

export type RoadmapModuleId = "bom" | "workorder" | "qc";

export type PainId =
  | "stock"
  | "followup"
  | "quotation"
  | "procurement"
  | "schedule"
  | "profit"
  | "overview";

export interface ChaosArtifact {
  id: string;
  /** Short text shown on the scattered artifact before diagnosis. */
  scrap: string;
  /** Diagnosis card revealed on click. */
  title: string;
  body: string;
}

export interface Copy {
  nav: {
    problem: string;
    approach: string;
    builder: string;
    method: string;
    contact: string;
  };
  hud: {
    label: string;
    hint: string;
    complete: string;
  };
  hero: {
    badge: string;
    title: string;
    tagline: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
    facts: { label: string; value: string }[];
  };
  chaos: {
    kicker: string;
    title: string;
    body: string;
    instruction: string;
    diagnosedLabel: string;
    artifacts: ChaosArtifact[];
    done: string;
  };
  barriers: {
    kicker: string;
    title: string;
    body: string;
    items: { title: string; body: string }[];
    bridge: string;
  };
  principles: {
    kicker: string;
    title: string;
    body: string;
    instruction: string;
    repairLabel: string;
    repairedLabel: string;
    stages: string[];
    items: { title: string; body: string }[];
    done: string;
  };
  builder: {
    kicker: string;
    title: string;
    body: string;
    step1Title: string;
    step1Body: string;
    step2Title: string;
    step2Body: string;
    step3Title: string;
    step3Body: string;
    pains: Record<PainId, string>;
    modules: Record<ModuleId, { name: string; desc: string }>;
    roadmapModules: Record<RoadmapModuleId, string>;
    roadmapLabel: string;
    roadmapNote: string;
    recommendedLabel: string;
    requiresLabel: string;
    effortLabel: string;
    generateCta: string;
    resetCta: string;
    emptyPlan: string;
    plan: {
      title: string;
      phase1: string;
      phase2: string;
      baseline: string;
      parallelNote: string;
      effortTitle: string;
      effortUnit: string;
      elapsedTitle: string;
      elapsedUnit: string;
      disclaimer: string;
      cta: string;
    };
  };
  method: {
    kicker: string;
    title: string;
    body: string;
    steps: { title: string; body: string }[];
    principle: string;
  };
  comparison: {
    kicker: string;
    title: string;
    body: string;
    aspects: string[];
    columns: {
      legacy: { name: string; rows: string[] };
      openSource: { name: string; rows: string[] };
      makir: { name: string; rows: string[] };
    };
  };
  vision: {
    kicker: string;
    title: string;
    body: string;
    milestones: { label: string; body: string }[];
    perksTitle: string;
    perks: string[];
  };
  offer: {
    kicker: string;
    title: string;
    body: string;
    columns: { title: string; items: string[] }[];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
    email: string;
    lockedTitle: string;
    lockedBody: string;
    onlineTitle: string;
    onlineBody: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}
