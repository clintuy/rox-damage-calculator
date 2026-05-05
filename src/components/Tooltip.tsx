import { Info } from "lucide-react";

type Props = {
  text: string;
};

export default function InfoTooltip({ text }: Props) {
  return (
    <div className="relative group inline-flex items-center">
      {/* Icon */}
      <Info className="mx-1 w-4 h-4 text-gray-400 cursor-pointer" />

      {/* Tooltip */}
      <div
        className="
          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          opacity-0 group-hover:opacity-100
          pointer-events-none
          transition-opacity duration-200
          z-10
        "
      >
        <div className="relative bg-[#152a4b] text-white text-xs px-3 py-1.5 rounded-md shadow-lg max-w-xs text-center">
          {text}

          {/* Arrow */}
          <div className="absolute w-2 h-2 bg-[#152a4b] rotate-45 left-1/2 -translate-x-1/2 top-full -mt-1" />
        </div>
      </div>
    </div>
  );
}
