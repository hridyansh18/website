import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import GalleryFilter from "../components/GalleryFilter";
import ArtworkCard from "../components/ArtworkCard";
import Lightbox from "../components/Lightbox";
import { categories, getArtworksByCategory } from "../data/artworks";

const Gallery = () => {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => getArtworksByCategory(active), [active]);

  return (
    <>
      <PageHeader
        eyebrow="The Full Collection"
        title="Artwork Gallery"
        description="Browse the complete body of work across portraiture, devotional art, and experimental mediums. Click any piece for a closer look."
      />

      <section className="section-pad !pt-16 bg-emerald-deep">
        <div className="flex flex-col gap-12">
          <GalleryFilter
            categories={categories}
            active={active}
            onChange={setActive}
          />

          <motion.p
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-cream-faint text-sm font-light -mt-6"
          >
            Showing {filtered.length}{" "}
            {filtered.length === 1 ? "artwork" : "artworks"}
          </motion.p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((art, i) => (
                <ArtworkCard
                  key={art.id}
                  artwork={art}
                  index={i}
                  onOpen={setSelected}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-cream-faint font-light">
                No artworks found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <Lightbox
        artwork={selected}
        artworks={filtered}
        onClose={() => setSelected(null)}
        onNavigate={setSelected}
      />
    </>
  );
};

export default Gallery;
