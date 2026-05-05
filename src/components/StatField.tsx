import { useState } from "react";
import type { Stats } from "../types/stats";

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

    // allow only numbers + decimal
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
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm text-gray-500 text-left">{label}</label>

      <div
        className="
          flex items-center w-full
          rounded border border-gray-400
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
            w-full px-4 py-3 sm:px-3 sm:py-2
            text-center
            bg-transparent text-black
            outline-none
          "
        />

        {suffix && (
          <span className="px-3 text-black border-l border-gray-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
