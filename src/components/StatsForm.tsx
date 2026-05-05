import { useState } from "react";
import { statGroups } from "../config/statsFields";
import type { Stats } from "../types/stats";
import StatField from "./StatField";

type Mode = "pen" | "crit";
type Side = "attacker" | "defender";

type Props = {
  stats: Stats;
  update: (key: keyof Stats, value: number) => void;
  mode: Mode;
};

export default function StatsForm({ stats, update, mode }: Props) {
  const [activeTab, setActiveTab] = useState<Side>("attacker");

  const buildGroups = (side: Side) =>
    statGroups
      .map((group) => ({
        ...group,
        fields: group.fields.filter((field) => {
          if (field.side !== side) return false;
          if (!field.tags) return true;
          return field.tags.includes(mode);
        }),
      }))
      .filter((group) => group.fields.length > 0);

  const groups = buildGroups(activeTab);

  const renderGroups = (groups: typeof statGroups) =>
    groups.map((group) => (
      <div key={group.label}>
        <h3 className="font-semibold mb-2">{group.label}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {group.fields.map(({ label, key, suffix }) => (
            <StatField
              key={key}
              label={label}
              value={stats[key]}
              statKey={key}
              suffix={suffix}
              onChange={update}
            />
          ))}
        </div>
      </div>
    ));

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("attacker")}
          className={`px-4 py-2 rounded-lg font-medium shadow-sm ${
            activeTab === "attacker" ? "bg-[#fa774a] text-white" : "bg-gray-200"
          }`}
        >
          Attacker
        </button>

        <button
          onClick={() => setActiveTab("defender")}
          className={`px-4 py-2 rounded-lg font-medium shadow-sm ${
            activeTab === "defender" ? "bg-[#152a4b] text-white" : "bg-gray-200"
          }`}
        >
          Defender
        </button>
      </div>

      {/* Content */}
      <div className="space-y-6">{renderGroups(groups)}</div>
    </div>
  );
}
