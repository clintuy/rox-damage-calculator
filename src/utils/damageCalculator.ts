import type { Stats } from "../types/stats";

interface DamageResultType {
  baseDmg: number;
  elementFactor: number;
  coreDmg: number;
  finalDmg: number;
}

const pct = (v: number) => v / 100;

export function calculatePenDamage(s: Stats): DamageResultType {
  const baseDmg =
    s.patk * (1 + pct(s.penPct) - pct(s.defPct)) +
    (s.bDmgFlat * (1 + pct(s.bDmgBonusPct)) - s.rDmgFlat);

  const elementFactor =
    1 +
    pct(s.elementCounterPct) +
    pct(s.elementEnhancePct) -
    pct(s.elementResistPct);

  const coreDmg =
    baseDmg *
    (1 + pct(s.sizeBonusPct) - pct(s.sizeReductionPct)) *
    (1 + pct(s.raceBonusPct) - pct(s.raceReductionPct)) *
    (1 + pct(s.finalPDmgBonusPct) - pct(s.finalPDmgReductionPct)) *
    (1 + pct(s.finalDmgBonusPct) - pct(s.finalDmgReductionPct)) *
    elementFactor;

  const finalDmg =
    8 *
      Math.pow(Math.max(0, coreDmg), 0.6) *
      (1 + pct(s.pvpFinalBonusPct) - pct(s.pvpFinalReductionPct)) +
    s.pvpFlat;

  return { baseDmg, elementFactor, coreDmg, finalDmg };
}

export function calculateCritDamage(s: Stats): DamageResultType {
  const critMultiplier =
    2 + pct(s.critDamageBonusPct) - pct(s.critDamageReductionPct);

  const baseDmg =
    s.patk * critMultiplier +
    (s.bDmgFlat * (1 + pct(s.bDmgBonusPct)) - s.rDmgFlat);

  const elementFactor =
    1 +
    pct(s.elementCounterPct) +
    pct(s.elementEnhancePct) -
    pct(s.elementResistPct);

  const coreDmg =
    baseDmg *
    (1 + pct(s.sizeBonusPct) - pct(s.sizeReductionPct)) *
    (1 + pct(s.raceBonusPct) - pct(s.raceReductionPct)) *
    (1 + pct(s.finalPDmgBonusPct) - pct(s.finalPDmgReductionPct)) *
    (1 + pct(s.finalDmgBonusPct) - pct(s.finalDmgReductionPct)) *
    elementFactor;

  const finalDmg =
    8 *
      Math.pow(Math.max(0, coreDmg), 0.6) *
      (1 + pct(s.pvpFinalBonusPct) - pct(s.pvpFinalReductionPct)) +
    s.pvpFlat;

  return { baseDmg, elementFactor, coreDmg, finalDmg };
}
