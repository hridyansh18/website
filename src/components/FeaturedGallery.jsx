import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import GalleryFilter from "./GalleryFilter";
import ArtworkCard from "./ArtworkCard";
import Lightbox from "./Lightbox";
import { categories, getArtworksByCategory } from "../data/artworks";

const FeaturedGallery = () => {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => getArtworksByCategory(active).slice(0, 6),
    [active]
  );

  return (
    <section className="section-pad bg-emerald-deep relative" id="gallery">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="relative flex flex-col gap-12">
        <SectionHeading
          eyebrow="The Collection"
          title="A Gallery Wall, Built Slowly"
          description="A curated selection across five disciplines — from devotional canvases to unconventional mediums. Filter by category to explore the full range of the studio's work."
        />

        <GalleryFilter
          categories={categories}
          active={active}
          onChange={setActive}
        />

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

        <div className="flex justify-center pt-4">
          <Link to="/gallery" className="btn-outline group">
            View Full Gallery
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      <Lightbox
        artwork={selected}
        artworks={filtered}
        onClose={() => setSelected(null)}
        onNavigate={setSelected}
      />
    </section>
  );
};

export default FeaturedGallery;
