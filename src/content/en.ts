import type { Copy } from "./types";

export const en: Copy = {
  nav: {
    problem: "The Problem",
    approach: "Our Approach",
    builder: "Build Your System",
    method: "Method",
    contact: "Contact",
  },
  hud: {
    label: "Operational Health",
    hint: "Fix the operation as you go — reach 100%.",
    complete: "System online",
  },
  hero: {
    badge: "MAKIR by M.I.N.O — All-in-one ERP",
    title: "Our system adapts to your business — not the other way around.",
    tagline: "ERP for growing operations, from quotation to cash.",
    body: "We build systems that connect CRM, sales, procurement, warehousing, and finance into a single workflow — designed from your actual process, not from a software template.",
    ctaPrimary: "Start the journey",
    ctaSecondary: "Assemble your system",
    scroll: "Scroll to enter the operation",
    facts: [
      { label: "Ownership", value: "Code & data are 100% yours" },
      { label: "Rollout", value: "Module by module, never big-bang" },
      { label: "Support", value: "Direct core team, no resellers" },
    ],
  },
  chaos: {
    kicker: "Stage 01 — Diagnosis",
    title: "Business is running. The data is a mess.",
    body: "This is what daily operations look like for most growing businesses: spreadsheets, chat threads, and paper notes doing the work of a system. Tap each fragment to diagnose what is really going wrong.",
    instruction: "Tap the fragments to diagnose them",
    diagnosedLabel: "diagnosed",
    artifacts: [
      {
        id: "stock",
        scrap: "stock_FINAL_v3 (2).xlsx",
        title: "Inventory doesn't match reality",
        body: "Stock counts live in competing spreadsheets. What the warehouse holds and what the file says drift apart a little more every week.",
      },
      {
        id: "followup",
        scrap: "\u201cSorry, who was handling this lead?\u201d",
        title: "Follow-ups slip through",
        body: "Prospects live in personal chats. No reminders, no owner, no history — deals quietly die in someone's unread messages.",
      },
      {
        id: "quotation",
        scrap: "Quotation_rev7_USE-THIS-ONE.pdf",
        title: "Quotations are hand-built and fragile",
        body: "Every quote is copied from the last one. One stale price or missed line and the margin is gone before the project starts.",
      },
      {
        id: "procurement",
        scrap: "PO sent... I think?",
        title: "Purchasing is disconnected",
        body: "Purchase orders don't know what sales promised. Materials arrive late, twice, or not at all — and nobody can trace why.",
      },
      {
        id: "schedule",
        scrap: "\u201cInstall team is WHERE today?\u201d",
        title: "Delivery lives in people's heads",
        body: "Installation schedules and project progress exist only in a few key people's memory. When they're out, the operation is blind.",
      },
      {
        id: "profit",
        scrap: "profit = ??? (ask finance next month)",
        title: "Profit is discovered too late",
        body: "Whether a project made money is only known after it ends — when it's too late to fix anything.",
      },
    ],
    done: "Diagnosis complete. These aren't six separate problems — they're one problem: nothing is connected.",
  },
  barriers: {
    kicker: "Stage 02 — The Trap",
    title: "\u201cJust buy an ERP\u201d — so why does it keep failing?",
    body: "Conventional ERP could be the answer. In practice, three barriers stop it from ever serving growing mid-size operations.",
    items: [
      {
        title: "Expensive & license-heavy",
        body: "Enterprise licensing and implementation costs are built for corporations — routinely out of reach for mid-size operations.",
      },
      {
        title: "Rigid & vendor-first",
        body: "One vendor controls the license, the support, and every customization. Hard to negotiate, harder to leave.",
      },
      {
        title: "High-risk migration",
        body: "The classic rollout is big-bang: stop the old system, pray the new one works. For a running operation, that gamble is unacceptable.",
      },
    ],
    bridge: "We don't sell finished software. We build the system around you.",
  },
  principles: {
    kicker: "Stage 03 — The Repair",
    title: "Reconnect the flow, one link at a time.",
    body: "This is your operation as one pipeline. Every joint marked below is broken in most businesses. Repair each one to see how we work.",
    instruction: "Tap a broken link to repair it",
    repairLabel: "Broken",
    repairedLabel: "Flowing",
    stages: ["Lead", "Quotation", "Order", "Warehouse", "Invoice"],
    items: [
      {
        title: "Your process, not a template",
        body: "The workflow is designed from mapping your real business process — not from whatever the software ships with.",
      },
      {
        title: "Modular & phased",
        body: "Build only the modules you need now. Expand step by step as the business grows — never pay for shelf-ware.",
      },
      {
        title: "Direct core-team support",
        body: "Built and supported by the core team itself — never handed off to a reseller. Fast communication, fast decisions.",
      },
      {
        title: "Fully yours",
        body: "System and data belong entirely to you — open code, open access, open data formats. No lock-in, no hidden subscription.",
      },
    ],
    done: "Flow restored. One connected line from first contact to cash in the bank.",
  },
  builder: {
    kicker: "Stage 04 — Assembly",
    title: "Assemble your system.",
    body: "No two operations are the same, so no two builds are the same. Pick what hurts, toggle the modules you need, and get an indicative phased plan — the same way we scope a real project.",
    step1Title: "1 · Where does it hurt?",
    step1Body: "Select your pain points. We'll highlight the modules that address them.",
    step2Title: "2 · Assemble the modules",
    step2Body: "Toggle modules on and off. Connected modules share one database — no double entry anywhere.",
    step3Title: "3 · Your phased plan",
    step3Body: "An indicative rollout, generated from your selection.",
    pains: {
      stock: "Stock never matches reality",
      followup: "Leads & follow-ups slip through",
      quotation: "Quotations are manual & error-prone",
      procurement: "Purchasing is disconnected from sales",
      schedule: "No visibility into delivery & installation",
      profit: "Profit is only known after the project ends",
      overview: "No single picture of the whole operation",
    },
    modules: {
      crm: {
        name: "CRM & Sales",
        desc: "Customer database, prospect follow-up, quotations & cost estimates, sales orders.",
      },
      purchasing: {
        name: "Purchasing",
        desc: "Purchase orders to suppliers, approval flow, tied directly to what sales promised.",
      },
      warehouse: {
        name: "Warehouse",
        desc: "Multi-location stock, goods receiving, transfers, stock opname, stock cards, allocation to projects.",
      },
      mobile: {
        name: "Mobile Warehouse",
        desc: "Scan, receive, transfer, and count stock from a phone on the warehouse floor.",
      },
      delivery: {
        name: "Delivery & Installation",
        desc: "Delivery notes, installation scheduling, project progress tracking.",
      },
      finance: {
        name: "Finance & Invoicing",
        desc: "Invoices & payment terms, profit monitoring per project, financial reports.",
      },
      dashboard: {
        name: "Dashboard",
        desc: "One real-time operational picture across every module you run.",
      },
    },
    roadmapModules: {
      bom: "Production & BOM",
      workorder: "Work Order",
      qc: "Quality Control",
    },
    roadmapLabel: "Roadmap",
    roadmapNote: "Built together with early partners, from real needs on the ground.",
    recommendedLabel: "Recommended for your pains",
    requiresLabel: "Requires Warehouse",
    effortLabel: "Build effort",
    generateCta: "Generate my plan",
    resetCta: "Reset",
    emptyPlan: "Select at least one module to generate a plan.",
    plan: {
      title: "Your indicative rollout",
      phase1: "Phase 1 — highest impact first",
      phase2: "Phase 2 — expand the flow",
      baseline: "Always included: UI/UX design, testing, deployment, documentation.",
      parallelNote: "Runs in parallel with your current system — operations never stop.",
      effortTitle: "Indicative build effort",
      effortUnit: "mandays",
      elapsedTitle: "Indicative duration",
      elapsedUnit: "months, with parallel run",
      disclaimer: "Indicative only. A real number comes from a real assessment of your process — that part is on us.",
      cta: "Get a real assessment",
    },
  },
  method: {
    kicker: "Stage 05 — The Method",
    title: "Phased rollout. Operations never stop.",
    body: "Five steps, no big-bang. Your production and deliveries keep running normally through the entire process.",
    steps: [
      {
        title: "Assessment",
        body: "We map your actual business process and existing data. The system is designed from this — not from a template.",
      },
      {
        title: "Priority modules",
        body: "We build the modules with the fastest impact first, so value lands in weeks, not years.",
      },
      {
        title: "Parallel run",
        body: "Old system and new system run side by side. Nothing is switched off until the numbers agree.",
      },
      {
        title: "Phased cutover",
        body: "You move module by module, at your pace — never everything at once.",
      },
      {
        title: "Optimization",
        body: "Continuous adjustment as your business evolves. The system keeps adapting to you.",
      },
    ],
    principle: "Core principle: no big-bang migration. Ever.",
  },
  comparison: {
    kicker: "Positioning",
    title: "Why not SAP? Why not Odoo?",
    body: "A fair comparison with the alternatives you should consider.",
    aspects: ["Process fit", "Cost model", "Migration", "Support", "Vendor lock-in"],
    columns: {
      legacy: {
        name: "SAP / legacy ERP",
        rows: [
          "Your business adapts to the system",
          "Expensive licenses & subscriptions",
          "Big-bang, high risk",
          "Large vendor, bureaucratic",
          "High — locked in",
        ],
      },
      openSource: {
        name: "Odoo / ERPNext",
        rows: [
          "Needs third-party module customization",
          "Cheap at first, customization costs pile up",
          "Depends on the implementation partner",
          "Community / third-party partners",
          "Medium",
        ],
      },
      makir: {
        name: "MAKIR",
        rows: [
          "Built from your process, from day one",
          "Transparent project — the system is fully yours",
          "Phased, parallel with the old system",
          "Direct core team",
          "Low — code & data in your hands",
        ],
      },
    },
  },
  vision: {
    kicker: "Vision",
    title: "From project to platform.",
    body: "Every early-partner project builds the foundation of MAKIR as an ERP platform — and early partners hold a privileged position inside it.",
    milestones: [
      {
        label: "Milestone 1",
        body: "First partners live: priority modules running in parallel with the old system.",
      },
      {
        label: "Milestone 2",
        body: "Complete core: purchasing through invoicing connected in one flow.",
      },
      {
        label: "Milestone 3",
        body: "Full cutover for early partners, unified operational dashboard.",
      },
      {
        label: "Milestone 4",
        body: "MAKIR as a platform: Production & BOM, new clients onboarding.",
      },
    ],
    perksTitle: "Early-partner advantages",
    perks: [
      "Locked pricing for every future module",
      "Priority support, straight from the core team",
      "A real say in the platform's direction",
      "The most mature system in your industry — because it's built from your process",
    ],
  },
  offer: {
    kicker: "The Deal",
    title: "Minimal risk, privileged position.",
    body: "The early-partner offer is deliberately asymmetric — in your favor.",
    columns: [
      {
        title: "What you get",
        items: [
          "Priority modules at early-partner terms",
          "Runs alongside your current system — zero disruption",
          "Direct core-team support for the first 12 months",
          "Locked terms for every next module",
        ],
      },
      {
        title: "What we ask",
        items: [
          "Regular input during development (±2 hours a month)",
          "Permission to become a case study once the system proves itself",
          "Data & access for the initial process assessment",
        ],
      },
      {
        title: "What you risk",
        items: [
          "Almost nothing — your data exports any time, in open formats",
          "No long-term subscription commitment",
          "The old system keeps running until you are fully convinced",
        ],
      },
    ],
  },
  contact: {
    kicker: "Final Stage",
    title: "Let's make anything and everything easier, together.",
    body: "Tell us how your operation actually runs. We'll tell you — honestly — what's worth building first.",
    cta: "Talk to the core team",
    email: "adithyanuzpratamaputra@gmail.com",
    lockedTitle: "System check incomplete",
    lockedBody: "You can contact us any time — but the full picture is above. Diagnose the chaos, repair the flow, assemble your system.",
    onlineTitle: "SYSTEM ONLINE — 100%",
    onlineBody: "You've seen the whole loop: chaos diagnosed, flow repaired, system assembled. That's exactly what working with us feels like — minus the confetti.",
  },
  footer: {
    tagline: "Our system adapts to your business — not the other way around.",
    rights: "MAKIR by M.I.N.O. All rights reserved.",
  },
};
