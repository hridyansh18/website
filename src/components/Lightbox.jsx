import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/siteConfig";

const Lightbox = ({ artwork, artworks, onClose, onNavigate }) => {
  const currentIndex = artwork
    ? artworks.findIndex((a) => a.id === artwork.id)
    : -1;

  const goNext = useCallback(() => {
    if (currentIndex === -1) return;
    const next = artworks[(currentIndex + 1) % artworks.length];
    onNavigate(next);
  }, [currentIndex, artworks, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex === -1) return;
    const prev =
      artworks[(currentIndex - 1 + artworks.length) % artworks.length];
    onNavigate(prev);
  }, [currentIndex, artworks, onNavigate]);

  useEffect(() => {
    if (!artwork) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [artwork, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${artwork.title} preview`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-gold/40 text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300 z-30 bg-black/40"
          >
            <X size={20} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous artwork"
            className="absolute left-2 sm:left-5 lg:left-10 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/50 border border-gold/30 text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300 z-20"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next artwork"
            className="absolute right-2 sm:right-5 lg:right-10 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/50 border border-gold/30 text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300 z-20"
          >
            <ChevronRight size={20} />
          </button>

          {/* Main Content */}
          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl h-[92vh] lg:h-auto max-h-[95vh] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] bg-emerald-rich border border-gold/20 shadow-frame overflow-hidden rounded-lg"
          >
            {/* Image Section */}
            <div className="relative bg-ink flex items-center justify-center h-[42vh] sm:h-[50vh] lg:h-auto lg:max-h-[88vh]">
              <img
                src={artwork.image}
                alt={`${artwork.title} — full preview`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details Section */}
            <div className="p-4 sm:p-8 flex flex-col gap-4 overflow-y-auto max-h-[50vh] lg:max-h-none">
              <div className="flex items-center gap-3">
                <span className="gold-line" />
                <span className="eyebrow">{artwork.categoryLabel}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl text-cream leading-tight">
                {artwork.title}
              </h3>

              <p className="text-cream-faint font-light leading-relaxed text-sm sm:text-base">
                {artwork.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gold/10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest2 text-gold">
                    Medium
                  </p>
                  <p className="text-cream-dim text-sm mt-1">
                    {artwork.medium}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest2 text-gold">
                    Year
                  </p>
                  <p className="text-cream-dim text-sm mt-1">
                    {artwork.year}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest2 text-gold">
                    Size
                  </p>
                  <p className="text-cream-dim text-sm mt-1">
                    {artwork.size}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest2 text-gold">
                    Status
                  </p>
                  <p className="text-cream-dim text-sm mt-1">
                    Available on Request
                  </p>
                </div>
              </div>

              <a
                href={whatsappLink(
                  `Hello Sandeep, I'm interested in "${artwork.title}". Could you share more details?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-2 w-full"
              >
                <MessageCircle size={16} />
                Enquire on WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;