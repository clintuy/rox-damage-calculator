import { useState } from "react";
import type { Stats } from "../types/stats";
// import Tooltip from "./Tooltip";

type Props = {
  label: string;
  value: number;
  statKey: keyof Stats;
  onChange: (key: keyof Stats, value: number) => void;
  suffix?: string;
};

export default function StatField({
  label,
  value = 0,
  statKey,
  onChange,
  suffix,
}: Props) {
  const [input, setInput] = useState(String(value));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    if (!/^\d*\.?\d*$/.test(raw)) return;

    setInput(raw);

    if (raw === "" || raw === ".") {
      onChange(statKey, 0);
    } else {
      onChange(statKey, Number(raw));
    }
  };

  const handleBlur = () => {
    setInput(String(value));
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-400 flex items-center justify-center">
        {label}
        {/* <Tooltip text="Increases damage dealt when a critical hit occurs." /> */}
      </label>

      <div
        className="
            flex items-center
            rounded border border-gray-600
            overflow-hidden
            focus-within:border-blue-500
            focus-within:ring-1 focus-within:ring-blue-500
        "
      >
        <input
          type="text"
          inputMode="decimal"
          value={input}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={(e) => e.target.select()}
          className="
            w-full px-3 py-2
            text-center
            bg-transparent text-black
            outline-none
          "
        />

        {suffix && (
          <span className="px-3 text-black border-l border-gray-600">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
