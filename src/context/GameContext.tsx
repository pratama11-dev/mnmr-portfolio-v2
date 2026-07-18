"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import type { ModuleId } from "@/content/types";

/**
 * Journey game state. Operational Health is derived, never stored:
 *   base 10%
 * + 6 chaos diagnoses   x 7  = 42%
 * + 4 pipeline repairs  x 8  = 32%
 * + plan generated           = 16%   -> 100%
 */
const BASE_HEALTH = 10;
const DIAGNOSIS_WEIGHT = 7;
const REPAIR_WEIGHT = 8;
const PLAN_WEIGHT = 16;
export const TOTAL_DIAGNOSES = 6;
export const TOTAL_REPAIRS = 4;

interface GameContextType {
  diagnosed: Set<string>;
  diagnose: (id: string) => void;
  repaired: Set<number>;
  repair: (index: number) => void;
  planModules: ModuleId[] | null;
  setPlanModules: (modules: ModuleId[] | null) => void;
  health: number;
  complete: boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [diagnosed, setDiagnosed] = useState<Set<string>>(new Set());
  const [repaired, setRepaired] = useState<Set<number>>(new Set());
  const [planModules, setPlanModules] = useState<ModuleId[] | null>(null);

  const diagnose = (id: string) =>
    setDiagnosed((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
  const repair = (index: number) =>
    setRepaired((prev) => (prev.has(index) ? prev : new Set(prev).add(index)));

  const health = useMemo(() => {
    const score =
      BASE_HEALTH +
      Math.min(diagnosed.size, TOTAL_DIAGNOSES) * DIAGNOSIS_WEIGHT +
      Math.min(repaired.size, TOTAL_REPAIRS) * REPAIR_WEIGHT +
      (planModules && planModules.length > 0 ? PLAN_WEIGHT : 0);
    return Math.min(100, score);
  }, [diagnosed, repaired, planModules]);

  return (
    <GameContext.Provider
      value={{
        diagnosed,
        diagnose,
        repaired,
        repair,
        planModules,
        setPlanModules,
        health,
        complete: health >= 100,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
}
