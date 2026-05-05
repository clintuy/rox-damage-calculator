import { statGroups } from "../config/statsFields";
import type { Stats } from "../types/stats";
import StatField from "./StatField";

type Mode = "pen" | "crit";

type Props = {
  stats: Stats;
  update: (key: keyof Stats, value: number) => void;
  mode: Mode;
};

export default function StatsForm({ stats, update, mode }: Props) {
  const filteredGroups = statGroups.filter((group) => {
    if (mode === "crit") return true;
    if (mode === "pen") return group.label !== "Crit Modifiers";
    return true;
  });

  return (
    <div className="space-y-6">
      {filteredGroups.map((group) => (
        <div key={group.label}>
          <h3 className="font-semibold mb-2">{group.label}</h3>

          <div className="grid grid-cols-2 gap-4">
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
      ))}
    </div>
  );
}
