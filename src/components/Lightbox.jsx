import { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/siteConfig";

const Lightbox = ({ artwork, artworks, onClose, onNavigate }) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const currentIndex = artwork
    ? artworks.findIndex((a) => a.id === artwork.id)
    : -1;

  const totalArtworks = artworks?.length || 0;

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    )
      return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 60;

    if (distance > minSwipeDistance) {
      goNext();
    } else if (distance < -minSwipeDistance) {
      goPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

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
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${artwork.title} preview`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/15 text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300 shadow-xl"
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-40 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-cream text-xs sm:text-sm tracking-wide">
            {currentIndex + 1} / {totalArtworks}
          </div>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous artwork"
            className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/15 text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300 shadow-xl"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next artwork"
            className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/15 text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300 shadow-xl"
          >
            <ChevronRight size={22} />
          </button>

          {/* Main Card */}
          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full max-w-7xl h-[96vh] sm:h-[94vh] bg-emerald-rich/95 backdrop-blur-xl border border-gold/15 rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-[1.45fr_0.95fr]"
          >
            {/* Image Area */}
            <div className="relative bg-ink flex items-center justify-center p-3 sm:p-5 md:p-8 h-[45vh] sm:h-[52vh] lg:h-full">
              <img
                src={artwork.image}
                alt={`${artwork.title} — full preview`}
                loading="eager"
                className="max-w-full max-h-full object-contain select-none"
                draggable="false"
              />
            </div>

            {/* Details Panel */}
            <div
              className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-7 lg:px-8 lg:py-8 flex flex-col"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>
                {`
                  .lightbox-scroll::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>

              <div className="lightbox-scroll flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="gold-line" />
                  <span className="eyebrow">
                    {artwork.categoryLabel}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-cream leading-tight">
                  {artwork.title}
                </h3>

                <p className="mt-4 text-cream-faint font-light leading-relaxed text-sm sm:text-base">
                  {artwork.description}
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-6 pt-6 border-t border-gold/10">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                      Medium
                    </p>
                    <p className="text-cream-dim text-sm mt-1.5 leading-relaxed">
                      {artwork.medium}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                      Year
                    </p>
                    <p className="text-cream-dim text-sm mt-1.5">
                      {artwork.year}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                      Size
                    </p>
                    <p className="text-cream-dim text-sm mt-1.5">
                      {artwork.size}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                      Status
                    </p>
                    <p className="text-cream-dim text-sm mt-1.5">
                      Available on Request
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={whatsappLink(
                      `Hello Sandeep, I'm interested in "${artwork.title}". Could you share more details?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full min-h-[52px] flex items-center justify-center gap-2 text-center shadow-lg"
                    aria-label={`Enquire about ${artwork.title} on WhatsApp`}
                  >
                    <MessageCircle size={18} />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;