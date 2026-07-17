"use client";

import { useEffect } from "react";

/**
 * Adds `.visible` to every `.reveal*` element as it enters the viewport, so
 * static sections can opt into reveal animations without becoming Client
 * Components. Mounted once, at the page root.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "-40px 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
