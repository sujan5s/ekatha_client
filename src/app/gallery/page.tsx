"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import SpecularButton from "@/components/SpecularButton";
import { type GalleryContent } from "@/lib/content";


export default function DedicatedGalleryPage() {
  const [photos, setPhotos] = useState<GalleryContent[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
    fetch(`${API_URL}/api/public/home`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.gallery && Array.isArray(data.gallery)) {
          setPhotos(data.gallery);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch gallery from DB:", err);
      });
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedPhoto === null) return;
    if (e.key === "Escape") setSelectedPhoto(null);
    if (e.key === "ArrowLeft") setSelectedPhoto((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
    if (e.key === "ArrowRight") setSelectedPhoto((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, photos]);

  return (
    <div className="min-h-screen bg-cream text-dark">
      <ScrollProgress />
      <Navbar />

      <main className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted transition-colors hover:text-saffron"
          >
            ← Back to Home
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-saffron bg-saffron/10 px-3.5 py-1.5 rounded-full">
            {photos.length} Community Moments
          </span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-saffron/10 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-saffron uppercase mb-4">
            Team Ekata Gallery
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-dark mb-5">
            Moments of <em className="text-saffron italic">Hope & Unity</em>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            A visual timeline of our community initiatives, medical aid distribution drives, volunteer meets, and direct beneficiary support across Karnataka.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id || index}
              onClick={() => setSelectedPhoto(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#EFEAE4] shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl break-inside-avoid"
            >
              <div className="relative w-full">
                <img
                  src={photo.imageUrl}
                  alt={photo.caption || "Community photo"}
                  className="w-full h-auto block object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay with Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5">
                  <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="inline-block bg-saffron/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2 shadow-sm">
                      Photo #{index + 1}
                    </span>
                    <p className="text-white text-sm font-semibold leading-snug drop-shadow-md">
                      {photo.caption || "Community Support"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at Bottom of Gallery */}
        <div className="mt-20 text-center rounded-3xl bg-surface p-12 shadow-sm border border-black/5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-dark mb-3">
            Want to contribute to our next drive?
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8 text-base">
            Every contribution directly funds medical treatment and hospitalization for community members in need.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <SpecularButton
              href="/#apply"
              size="lg"
              radius={9999}
              tint="#e85d04"
              tintOpacity={1}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#c44900"
              intensity={1.2}
              autoAnimate
              speed={0.4}
            >
              ♡ Contribute Now
            </SpecularButton>
          </div>
        </div>
      </main>

      {/* Interactive Lightbox Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-200 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close modal"
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-bold p-2 z-210 cursor-pointer transition-transform hover:scale-110"
          >
            ✕
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
            }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-4.5 text-xl transition-all cursor-pointer backdrop-blur-sm"
          >
            ←
          </button>

          {/* Main Lightbox Content */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={photos[selectedPhoto].imageUrl}
                alt={photos[selectedPhoto].caption || "Full photo"}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center text-white">
              <p className="text-lg font-semibold mb-1">
                {photos[selectedPhoto].caption || "Community Moment"}
              </p>
              <span className="text-xs text-white/60">
                Image {selectedPhoto + 1} of {photos.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0));
            }}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-4.5 text-xl transition-all cursor-pointer backdrop-blur-sm"
          >
            →
          </button>
        </div>
      )}

      <Footer />
      <BackToTop />
    </div>
  );
}
