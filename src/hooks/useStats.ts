import { useState } from "react";
import type { Stats } from "../types/stats";

export function useStats() {
  const [stats, setStats] = useState<Stats>({
    patk: 0,
    penPct: 0,
    defPct: 0,
    critRatePct: 0,
    critResistPct: 0,
    critDamageBonusPct: 0,
    critDamageReductionPct: 0,
    bDmgFlat: 0,
    bDmgBonusPct: 0,
    rDmgFlat: 0,
    sizeBonusPct: 0,
    sizeReductionPct: 0,
    raceBonusPct: 0,
    raceReductionPct: 0,
    finalPDmgBonusPct: 0,
    finalPDmgReductionPct: 0,
    elementCounterPct: 0,
    elementEnhancePct: 0,
    elementResistPct: 0,
    finalDmgBonusPct: 0,
    finalDmgReductionPct: 0,
    pvpFinalBonusPct: 0,
    pvpFinalReductionPct: 0,
    pvpFlat: 0,
  });

  const update = (key: keyof Stats, value: number) => {
    setStats((prev) => ({ ...prev, [key]: value }));
  };

  return { stats, update };
}
