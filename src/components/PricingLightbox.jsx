import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Info } from "lucide-react";
import { getSizes, getFaces, getPrice } from "../data/pricingData";
import { whatsappLink } from "../data/siteConfig";

const SWIPE_THRESHOLD = 50;

const PricingSelector = ({ artType, onClose }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedFace, setSelectedFace] = useState("");

  const sizes = getSizes(artType.id);
  const availableFaces = selectedSize ? getFaces(artType.id, selectedSize) : [];
  const price =
    selectedSize && selectedFace
      ? getPrice(artType.id, selectedSize, selectedFace)
      : null;
  const isBookingReady = Boolean(selectedSize && selectedFace);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setSelectedFace("");
  };

  const buildMessage = useCallback(
    () =>
      [
        `Hello Sandeep! I'd like to commission a *${artType.name}*.`,
        "",
        ` Art Type: ${artType.name}`,
        ` Size: ${selectedSize || "N/A"}`,
        ` Faces: ${selectedFace || "N/A"}`,
        ` Quoted Price: ${price ? `₹${price.toLocaleString("en-IN")}` : "N/A"}`,
        "",
        "Please confirm availability and next steps.",
      ].join("\n"),
    [artType, selectedSize, selectedFace, price]
  );

  const touchStartY = useRef(null);
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartY.current === null) return;
    if (e.changedTouches[0].clientY - touchStartY.current > SWIPE_THRESHOLD) {
      onClose();
    }
    touchStartY.current = null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.98 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-full max-h-[100vh] sm:max-h-[88vh] overflow-hidden rounded-t-[28px] sm:rounded-[32px] bg-emerald-rich border border-gold/15 shadow-[0_35px_120px_rgba(7,38,32,0.45)] flex flex-col sm:grid sm:grid-cols-[60%_40%]"
    >
      <div className="sm:hidden relative h-[38vh] overflow-hidden">
        <img
          src={artType.image}
          alt={artType.name}
          className="w-full h-full object-contain object-center bg-ink/95"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-6">
          <span className="text-[10px] tracking-[0.5em] uppercase text-gold/70">
            Commission Charges
          </span>
          <h2 className="font-display text-3xl text-cream mt-3 leading-tight">
            {artType.name}
          </h2>
          <p className="text-cream-faint text-sm mt-2">{artType.tagline}</p>
        </div>
      </div>

      <div className="hidden sm:block relative overflow-hidden">
        <img
          src={artType.image}
          alt={artType.name}
          className="absolute inset-0 w-full h-full object-contain object-center bg-ink/95"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-10">
          <span className="text-[11px] tracking-[0.55em] uppercase text-gold/70">
            Commission Charges
          </span>
          <h2 className="font-display text-5xl text-cream mt-4 leading-tight">
            {artType.name}
          </h2>
          <p className="text-cream-faint text-sm mt-3 max-w-[18rem]">
            {artType.tagline}
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
        <div className="px-5 pb-5 pt-5 sm:px-8 sm:pt-8 sm:pb-6 space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs tracking-[0.45em] uppercase text-gold/70">
                Fine Art Commission
              </span>
              <h3 className="font-display text-3xl text-cream mt-3">
                Personalize your masterpiece
              </h3>
            </div>
            <div className="rounded-full border border-gold/20 bg-ink/70 px-4 py-2 text-sm text-cream-dim">
              Luxury collection
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs tracking-[0.45em] uppercase text-gold font-medium">
              Step 1 — Select Size
            </p>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`py-3 px-4 text-sm font-medium border transition-all duration-200 text-left rounded-lg ${
                    selectedSize === size
                      ? "bg-gold text-emerald-deep border-gold shadow-[0_0_0_1px_rgba(255,216,153,0.7)]"
                      : "border-gold/20 text-cream-dim hover:border-gold/60 hover:text-gold"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {selectedSize && availableFaces.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-3 overflow-hidden"
              >
                <p className="text-xs tracking-[0.45em] uppercase text-gold font-medium">
                  Step 2 — Number of Faces
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {availableFaces.map((face) => (
                    <button
                      key={face}
                      onClick={() => setSelectedFace(face)}
                      className={`py-4 px-4 text-sm font-medium border transition-all duration-200 text-left rounded-lg ${
                        selectedFace === face
                          ? "bg-gold text-emerald-deep border-gold shadow-[0_0_0_1px_rgba(255,216,153,0.7)]"
                          : "border-gold/20 text-cream-dim hover:border-gold/60 hover:text-gold"
                      }`}
                    >
                      {face}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!selectedSize && (
            <div className="rounded-3xl border border-gold/10 bg-ink/60 p-4 text-center">
              <p className="text-cream-faint/70 text-sm font-light">
                Select a size above to continue
              </p>
            </div>
          )}

          {selectedSize && !selectedFace && (
            <div className="rounded-3xl border border-gold/10 bg-ink/60 p-4 text-center">
              <p className="text-cream-faint/70 text-sm font-light">
                Now select the number of faces
              </p>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="border-t border-gold/15 bg-ink/95 backdrop-blur-sm p-5 sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-cream-faint text-sm">Price summary</p>
              <p className="font-display text-3xl text-gold mt-2">
                {price ? `₹${price.toLocaleString("en-IN")}` : "Select your options"}
              </p>
              {price && (
                <p className="text-cream-faint text-sm mt-1">
                  {artType.name} · {selectedSize} · {selectedFace}
                </p>
              )}
            </div>
            <a
              href={isBookingReady ? whatsappLink(buildMessage()) : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!isBookingReady}
              className={`btn-gold w-full justify-center text-base sm:w-auto transition-opacity duration-200 ${!isBookingReady ? "opacity-50 pointer-events-none" : ""}`}
            >
              <MessageCircle size={18} />
              {isBookingReady ? "Book This on WhatsApp" : "Select options to book"}
            </a>
          </div>
          <div className="mt-4 flex items-start gap-2 text-cream-faint/70 text-sm leading-relaxed">
            <Info size={14} className="mt-0.5 text-gold/70" />
            <p>
              Advance payment required for booking. Delivery charges extra. Urgent orders chargeable.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PricingLightbox = ({ artType, onClose }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!artType) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [artType, handleKeyDown]);

  return (
    <AnimatePresence>
      {artType && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${artType.name} pricing`}
        >
          <button
            onClick={onClose}
            aria-label="Close pricing"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-ink/80 text-gold transition-all duration-300 hover:bg-gold hover:text-emerald-deep"
          >
            <X size={20} />
          </button>

          <AnimatePresence mode="wait">
            <div className="w-full max-w-[1400px] min-h-[85vh] max-h-[100vh] h-full sm:h-auto">
              <PricingSelector key={artType.id} artType={artType} onClose={onClose} />
            </div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingLightbox;


