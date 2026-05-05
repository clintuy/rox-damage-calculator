import type { Stats } from "../types/stats";

type Field = { label: string; key: keyof Stats; suffix?: string };

type FieldGroup = {
  label: string;
  fields: Field[];
};
export const statGroups: FieldGroup[] = [
  {
    label: "Base Damage Modifiers",
    fields: [
      { label: "ATK", key: "patk" },
      { label: "DMG BONUS", key: "bDmgFlat" },
      { label: "DMG BONUS %", key: "bDmgBonusPct", suffix: "%" },
      { label: "DAMAGE REDUCTION", key: "rDmgFlat" },
    ],
  },
  {
    label: "Size Modifiers",
    fields: [
      { label: "SIZE BONUS %", key: "sizeBonusPct", suffix: "%" },
      { label: "SIZE REDUCTION %", key: "sizeReductionPct" },
    ],
  },
  {
    label: "Race Modifiers",
    fields: [
      { label: "RACE BONUS %", key: "raceBonusPct", suffix: "%" },
      { label: "RACE REDUCTION %", key: "raceReductionPct", suffix: "%" },
    ],
  },
  {
    label: "Final Damage Modifiers",
    fields: [
      {
        label: "FINAL M/P. DMG BONUS %",
        key: "finalPDmgBonusPct",
        suffix: "%",
      },
      {
        label: "FINAL M/P. DMG REDUCTION %",
        key: "finalPDmgReductionPct",
        suffix: "%",
      },
      { label: "FINAL DMG BONUS %", key: "finalDmgBonusPct", suffix: "%" },
      {
        label: "FINAL DMG REDUCTION %",
        key: "finalDmgReductionPct",
        suffix: "%",
      },
    ],
  },
  {
    label: "Element Modifiers",
    fields: [
      { label: "ELEM COUNTER %", key: "elementCounterPct", suffix: "%" },
      { label: "ELEM ENHANCE %", key: "elementEnhancePct", suffix: "%" },
      { label: "ELEM RESIST %", key: "elementResistPct", suffix: "%" },
    ],
  },
  {
    label: "PvP Modifiers",
    fields: [
      { label: "FINAL PVP DMG %", key: "pvpFinalBonusPct", suffix: "%" },
      {
        label: "FINAL PVP REDUCTION %",
        key: "pvpFinalReductionPct",
        suffix: "%",
      },
      { label: "PVP DMG", key: "pvpFlat" },
    ],
  },
  {
    label: "Penetration Modifiers",
    fields: [
      { label: "PEN %", key: "penPct", suffix: "%" },
      { label: "DEF %", key: "defPct", suffix: "%" },
    ],
  },
  {
    label: "Crit Modifiers",
    fields: [
      { label: "CRIT DMG BONUS %", key: "critDamageBonusPct", suffix: "%" },
      {
        label: "CRIT DMG REDUCTION %",
        key: "critDamageReductionPct",
        suffix: "%",
      },
    ],
  },
];
