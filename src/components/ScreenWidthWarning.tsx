import { useEffect, useState } from "react";

export default function ScreenWidthWarning({ minWidth = 320 }) {
  const [tooSmall, setTooSmall] = useState(false);

  useEffect(() => {
    const check = () => setTooSmall(window.innerWidth < minWidth);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [minWidth]);

  if (!tooSmall) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-center p-4">
      <div>
        <h2 className="text-lg font-bold mb-2">Screen Too Small</h2>
        <p className="text-sm">Minimum supported width is {minWidth}px.</p>
      </div>
    </div>
  );
}
