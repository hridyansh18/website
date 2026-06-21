import { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/siteConfig";

const SWIPE_THRESHOLD = 50;

const Lightbox = ({ artwork, artworks, onClose, onNavigate }) => {
  const touchStartX = useRef(null);

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        goPrev();
      } else {
        goNext();
      }
    }
    touchStartX.current = null;
  };

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-0 sm:p-6 lg:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${artwork.title} preview`}
        >
          {/* Close button — always reachable, sits above the image on mobile */}
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-3 right-3 sm:top-6 sm:right-6 lg:top-8 lg:right-8 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-gold/40 bg-ink/70 sm:bg-transparent text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300 z-20"
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </button>

          {/* Prev/Next — desktop: edges of screen. Mobile: handled by swipe + bottom dots */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous artwork"
            className="hidden md:flex absolute left-5 lg:left-10 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center border border-gold/30 text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300 z-10"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next artwork"
            className="hidden md:flex absolute right-5 lg:right-10 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center border border-gold/30 text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300 z-10"
          >
            <ChevronRight size={22} />
          </button>

          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full h-[100svh] sm:h-auto sm:max-h-[90vh] max-w-5xl grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] bg-emerald-rich sm:border border-gold/20 shadow-frame overflow-hidden"
          >
            {/* Image area */}
            <div className="relative bg-ink flex items-center justify-center h-[44svh] sm:h-auto sm:max-h-[55vh] lg:max-h-[90vh] shrink-0">
              <img
                src={artwork.image}
                alt={`${artwork.title} — full preview`}
                className="w-full h-full object-contain"
                draggable={false}
              />

              {/* Mobile-only nav controls, overlaid on the image */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous artwork"
                className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-ink/60 border border-gold/30 text-gold active:bg-gold active:text-emerald-deep transition-colors z-10"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next artwork"
                className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-ink/60 border border-gold/30 text-gold active:bg-gold active:text-emerald-deep transition-colors z-10"
              >
                <ChevronRight size={18} />
              </button>

              {/* Position dots — visible on all sizes, doubles as progress indicator on mobile */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 md:hidden">
                {artworks.map((a) => (
                  <span
                    key={a.id}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      a.id === artwork.id ? "w-5 bg-gold" : "w-1.5 bg-gold/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Details panel — scrolls independently if content is tall */}
            <div className="p-5 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 overflow-y-auto flex-1 min-h-0">
              <div className="flex items-center gap-3">
                <span className="gold-line" />
                <span className="eyebrow">{artwork.categoryLabel}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-cream leading-tight">
                {artwork.title}
              </h3>
              <p className="text-cream-faint font-light leading-relaxed text-sm sm:text-base">
                {artwork.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gold/10 mt-2">
                <div>
                  <p className="text-[10px] uppercase tracking-widest2 text-gold">
                    Medium
                  </p>
                  <p className="text-cream-dim text-sm mt-1">{artwork.medium}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest2 text-gold">
                    Year
                  </p>
                  <p className="text-cream-dim text-sm mt-1">{artwork.year}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest2 text-gold">
                    Size
                  </p>
                  <p className="text-cream-dim text-sm mt-1">{artwork.size}</p>
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
