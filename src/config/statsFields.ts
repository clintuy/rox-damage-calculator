import type { Stats } from "../types/stats";

type Side = "attacker" | "defender";
type Mode = "pen" | "crit";

type Field = {
  label: string;
  key: keyof Stats;
  suffix?: string;
  side: Side;
  tags?: Mode[];
};

type FieldGroup = {
  label: string;
  fields: Field[];
};
export const statGroups: FieldGroup[] = [
  {
    label: "Base Damage Modifiers",
    fields: [
      { label: "ATK", key: "patk", side: "attacker" },
      { label: "DMG BONUS", key: "bDmgFlat", side: "attacker" },
      {
        label: "DMG BONUS %",
        key: "bDmgBonusPct",
        suffix: "%",
        side: "attacker",
      },
      { label: "DAMAGE REDUCTION", key: "rDmgFlat", side: "defender" },
    ],
  },
  {
    label: "Size Modifiers",
    fields: [
      {
        label: "SIZE BONUS %",
        key: "sizeBonusPct",
        suffix: "%",
        side: "attacker",
      },
      {
        label: "SIZE REDUCTION %",
        key: "sizeReductionPct",
        suffix: "%",
        side: "defender",
      },
    ],
  },
  {
    label: "Race Modifiers",
    fields: [
      {
        label: "RACE BONUS %",
        key: "raceBonusPct",
        suffix: "%",
        side: "attacker",
      },
      {
        label: "RACE REDUCTION %",
        key: "raceReductionPct",
        suffix: "%",
        side: "defender",
      },
    ],
  },
  {
    label: "Final Damage Modifiers",
    fields: [
      {
        label: "FINAL M/P. DMG BONUS %",
        key: "finalPDmgBonusPct",
        suffix: "%",
        side: "attacker",
      },
      {
        label: "FINAL M/P. DMG REDUCTION %",
        key: "finalPDmgReductionPct",
        suffix: "%",
        side: "defender",
      },
      {
        label: "FINAL DMG BONUS %",
        key: "finalDmgBonusPct",
        suffix: "%",
        side: "attacker",
      },
      {
        label: "FINAL DMG REDUCTION %",
        key: "finalDmgReductionPct",
        suffix: "%",
        side: "defender",
      },
    ],
  },
  {
    label: "Element Modifiers",
    fields: [
      {
        label: "ELEM COUNTER %",
        key: "elementCounterPct",
        suffix: "%",
        side: "attacker",
      },
      {
        label: "ELEM ENHANCE %",
        key: "elementEnhancePct",
        suffix: "%",
        side: "attacker",
      },
      {
        label: "ELEM RESIST %",
        key: "elementResistPct",
        suffix: "%",
        side: "defender",
      },
    ],
  },
  {
    label: "PvP Modifiers",
    fields: [
      {
        label: "FINAL PVP DMG %",
        key: "pvpFinalBonusPct",
        suffix: "%",
        side: "attacker",
      },
      {
        label: "FINAL PVP REDUCTION %",
        key: "pvpFinalReductionPct",
        suffix: "%",
        side: "defender",
      },
      { label: "PVP DMG", key: "pvpFlat", side: "attacker" },
    ],
  },
  {
    label: "Penetration Modifiers",
    fields: [
      {
        label: "PEN %",
        key: "penPct",
        suffix: "%",
        side: "attacker",
        tags: ["pen"],
      },
      {
        label: "DEF %",
        key: "defPct",
        suffix: "%",
        side: "defender",
        tags: ["pen"],
      },
    ],
  },
  {
    label: "Crit Modifiers",
    fields: [
      {
        label: "CRIT DMG BONUS %",
        key: "critDamageBonusPct",
        suffix: "%",
        side: "attacker",
        tags: ["crit"],
      },
      {
        label: "CRIT DMG REDUCTION %",
        key: "critDamageReductionPct",
        suffix: "%",
        side: "defender",
        tags: ["crit"],
      },
    ],
  },
];
