"use client";

import { useScrollY } from "@/lib/hooks";

export default function BackToTop() {
  const show = useScrollY() > 600;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-7 bottom-7 z-150 flex h-13 w-13 items-center justify-center rounded-full bg-saffron text-xl text-white shadow-[0_8px_28px_rgba(232,93,4,0.4)] transition duration-300 hover:scale-110 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      ↑
    </button>
  );
}
