"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { HeroContent } from "@/lib/content";

/**
 * Stacked hero images that crossfade every 5s. One slide behaves exactly like
 * a single static hero (zoom on mount, no rotation). Pauses when the tab is
 * hidden; the first slide is priority-loaded.
 */
export default function HeroSlideshow({
  slides: allSlides,
}: {
  slides: HeroContent["slides"];
}) {
  // Guard against image-less rows: next/image throws on an empty src.
  const slides = allSlides.filter((s) => s.imageUrl);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <>
      {slides.map((slide, i) => (
        <Image
          key={slide.id}
          src={slide.imageUrl}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`hero-zoom object-cover object-[center_30%] transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}
