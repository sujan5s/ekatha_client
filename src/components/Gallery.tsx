import Image from "next/image";
import SectionHeading from "./SectionHeading";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?w=600&q=80",
    cap: "Health camp · Mangaluru",
    span: "row-span-2",
    delay: "",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    cap: "Volunteer meet · Bengaluru",
    span: "col-span-2",
    delay: "d1",
  },
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&q=80",
    cap: "Medicine drive",
    span: "",
    delay: "d2",
  },
  {
    src: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=500&q=80",
    cap: "Elder care visit",
    span: "",
    delay: "d1",
  },
  {
    src: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80",
    cap: "Fundraiser gathering",
    span: "col-span-2",
    delay: "d2",
  },
  {
    src: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=500&q=80",
    cap: "Blood donation camp",
    span: "",
    delay: "d3",
  },
];

export default function Gallery() {
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
          {shots.map((shot) => (
            <div
              key={shot.cap}
              data-cap={shot.cap}
              className={`g-item reveal ${shot.delay} ${shot.span} group relative cursor-pointer overflow-hidden rounded-[18px]`}
            >
              <Image
                src={shot.src}
                alt={shot.cap}
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
