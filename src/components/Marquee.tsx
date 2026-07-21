"use client";

import { useEffect, useRef } from "react";

const items = [
  "Compassion",
  "Unity",
  "Direct Support",
  "Transparency",
  "Medical Aid",
  "Community First",
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(-25); // Start centered in the quadrupled set
  const lastScrollY = useRef(0);
  const directionRef = useRef(-1); // -1 = Right to Left (default & scroll down), 1 = Left to Right (scroll up)

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (delta > 0) {
        // Scrolling DOWN -> move Right to Left
        directionRef.current = -1;
      } else if (delta < 0) {
        // Scrolling UP -> move Left to Right
        directionRef.current = 1;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let animationFrameId: number;

    const animate = () => {
      const baseSpeed = 0.010; // Slower, calmer constant speed
      positionRef.current += baseSpeed * directionRef.current;

      // Keep position within [-50%, 0%] seamless range
      if (positionRef.current >= 0) {
        positionRef.current -= 25;
      } else if (positionRef.current <= -50) {
        positionRef.current += 25;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${positionRef.current}%, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="overflow-hidden bg-forest py-5 whitespace-nowrap select-none">
      <div
        ref={trackRef}
        className="inline-flex gap-14 will-change-transform"
        style={{ transform: "translate3d(-25%, 0, 0)" }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[14px] font-display text-[22px] text-white/85 italic"
          >
            {item}
            <span className="h-[7px] w-[7px] rounded-full bg-saffron-light" />
          </span>
        ))}
      </div>
    </div>
  );
}

