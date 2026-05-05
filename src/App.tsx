import "./App.css";
import { useState, useMemo } from "react";
import { useStats } from "./hooks/useStats";
import {
  calculateCritDamage,
  calculatePenDamage,
} from "./utils/damageCalculator";

import StatsForm from "./components/StatsForm";
import DamageResult from "./components/DamageResult";

type Mode = "pen" | "crit";

export default function App() {
  const [mode, setMode] = useState<Mode>("pen");
  const { stats, update } = useStats();

  const config = {
    pen: {
      title: "Penetration Damage Stats",
      calculate: calculatePenDamage,
    },
    crit: {
      title: "Critical Damage Stats",
      calculate: calculateCritDamage,
    },
  };

  const { title, calculate } = config[mode];

  const damage = useMemo(() => calculate(stats), [stats, calculate]);

  return (
    <div className="App">
      <img
        className="h-48 w-96 object-cover mx-auto my-4 rounded-lg"
        src="src/assets/images/rox_logo.webp"
        alt="ROX Logo"
      />

      {/* Mode Switch */}
      <span className="text-gray">Please select mode:</span>
      <div className="flex gap-2 mb-4 justify-center">
        {/* <span className="text-gray-400">Select Mode:</span> */}
        <button
          onClick={() => setMode("pen")}
          className={`w-64 px-4 py-2 rounded ${
            mode === "pen" ? "bg-[#152a4b] text-white" : "bg-gray-200"
          }`}
        >
          Pen
        </button>

        <button
          onClick={() => setMode("crit")}
          className={`w-64 px-4 py-2 rounded ${
            mode === "crit" ? "bg-[#152a4b] text-white" : "bg-gray-200"
          }`}
        >
          Crit
        </button>
      </div>
      <h2>{title}</h2>
      <hr />
      <div className="mt-2">
        <StatsForm stats={stats} update={update} mode={mode} />

        <DamageResult {...damage} />
      </div>
    </div>
  );
}
