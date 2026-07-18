import Image from "next/image";
import SectionHeading from "./SectionHeading";
import type { GalleryContent } from "@/lib/content";

const spanClass: Record<GalleryContent["span"], string> = {
  NORMAL: "",
  TALL: "row-span-2",
  WIDE: "col-span-2",
};

export default function Gallery({ gallery }: { gallery: GalleryContent[] }) {
  return (
    <section id="gallery" className="bg-cream px-8 py-28">
      <div className="mx-auto max-w-320">
        <div className="reveal">
          <SectionHeading
            centered
            tag="Moments"
            heading={
              <>
                Community in <em className="text-saffron italic">action</em>
              </>
            }
          />
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 min-[900px]:grid-cols-4">
          {gallery.filter((shot) => shot.imageUrl).map((shot) => (
            <div
              key={shot.id}
              data-cap={shot.caption}
              className={`g-item reveal ${spanClass[shot.span]} group relative cursor-pointer overflow-hidden rounded-[18px]`}
            >
              <Image
                src={shot.imageUrl}
                alt={shot.caption}
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
