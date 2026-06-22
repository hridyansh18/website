import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Info } from "lucide-react";
import { getSizes, getFaces, getPrice } from "../data/pricingData";
import { whatsappLink } from "../data/siteConfig";

const SWIPE_THRESHOLD = 50;

// Inner component receives a guaranteed-non-null artType.
// It is re-mounted (key=artType.id) each time the art type changes,
// so all state automatically resets — no effects needed.
const PricingSelector = ({ artType, onClose }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedFace, setSelectedFace] = useState("");

  const sizes = getSizes(artType.id);
  const availableFaces = selectedSize ? getFaces(artType.id, selectedSize) : [];
  const price =
    selectedSize && selectedFace
      ? getPrice(artType.id, selectedSize, selectedFace)
      : null;

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setSelectedFace("");
  };

  const buildMessage = useCallback(() => [
    `Hello Sandeep! I'd like to commission a *${artType.name}*.`,
    "",
    `🎨 Art Type: ${artType.name}`,
    `📐 Size: ${selectedSize}`,
    `👤 Faces: ${selectedFace}`,
    `💰 Quoted Price: ₹${price?.toLocaleString("en-IN")}`,
    "",
    "Please confirm availability and next steps.",
  ].join("\n"), [artType, selectedSize, selectedFace, price]);

  const touchStartY = useRef(null);
  const handleTouchStart = (e) => { touchStartY.current = e.touches[0].clientY; };
  const handleTouchEnd = (e) => {
    if (touchStartY.current === null) return;
    if (e.changedTouches[0].clientY - touchStartY.current > SWIPE_THRESHOLD) onClose();
    touchStartY.current = null;
  };

  return (
    <motion.div
      key={artType.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full max-w-xl bg-emerald-rich border-t sm:border border-gold/25 shadow-frame overflow-hidden rounded-t-2xl sm:rounded-none max-h-[94svh] sm:max-h-[88vh] flex flex-col"
    >
      {/* Mobile drag handle */}
      <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
        <div className="w-10 h-1 rounded-full bg-gold/30" />
      </div>

      {/* Header */}
      <div className="relative h-32 sm:h-40 shrink-0 overflow-hidden">
        <img src={artType.image} alt={artType.name} className="w-full h-full object-cover" draggable={false} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
          <span className="eyebrow text-gold/80 text-[10px]">Commission Charges</span>
          <h2 className="font-display text-2xl sm:text-3xl text-cream mt-0.5 leading-tight">{artType.name}</h2>
          <p className="text-cream-faint text-xs mt-0.5 font-light">{artType.tagline}</p>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="overflow-y-auto flex-1 p-5 sm:p-7 flex flex-col gap-5">

        {/* Step 1 — Size */}
        <div className="flex flex-col gap-3">
          <p className="text-xs tracking-widest2 uppercase text-gold font-medium">Step 1 — Select Size</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`py-2.5 px-3 text-sm font-medium border transition-all duration-200 ${
                  selectedSize === size
                    ? "bg-gold text-emerald-deep border-gold"
                    : "border-gold/25 text-cream-dim hover:border-gold/60 hover:text-gold"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 — Faces */}
        <AnimatePresence>
          {selectedSize && availableFaces.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-3 overflow-hidden"
            >
              <p className="text-xs tracking-widest2 uppercase text-gold font-medium">Step 2 — Number of Faces</p>
              <div className="grid grid-cols-2 gap-2">
                {availableFaces.map((face) => (
                  <button
                    key={face}
                    onClick={() => setSelectedFace(face)}
                    className={`py-3 px-4 text-sm font-medium border transition-all duration-200 text-left ${
                      selectedFace === face
                        ? "bg-gold text-emerald-deep border-gold"
                        : "border-gold/25 text-cream-dim hover:border-gold/60 hover:text-gold"
                    }`}
                  >
                    {face}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Prompt hints */}
        {!selectedSize && (
          <div className="border border-gold/10 p-4 text-center">
            <p className="text-cream-faint/60 text-sm font-light">Select a size above to continue</p>
          </div>
        )}
        {selectedSize && !selectedFace && (
          <div className="border border-gold/10 p-4 text-center">
            <p className="text-cream-faint/60 text-sm font-light">Now select the number of faces</p>
          </div>
        )}

        {/* Price + Book CTA */}
        <AnimatePresence>
          {price !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="border border-gold/30 bg-emerald-deep p-5 sm:p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-cream-faint text-xs font-light">{artType.name} · {selectedSize} · {selectedFace}</p>
                  <p className="font-display text-5xl text-gold mt-1">₹{price.toLocaleString("en-IN")}</p>
                </div>
                <span className="text-3xl mt-1">{artType.icon}</span>
              </div>
              <div className="flex items-start gap-2 border-t border-gold/10 pt-3">
                <Info size={12} className="text-gold/60 shrink-0 mt-0.5" />
                <p className="text-cream-faint/70 text-xs font-light leading-relaxed">
                  Advance payment required for booking. Delivery charges extra. Urgent orders chargeable.
                </p>
              </div>
              <a
                href={whatsappLink(buildMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center text-base"
              >
                <MessageCircle size={18} />
                Book This on WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Outer wrapper handles the backdrop + keyboard/body-scroll management
const PricingLightbox = ({ artType, onClose }) => {
  const handleKeyDown = useCallback(
    (e) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (!artType) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
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
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${artType.name} pricing`}
        >
          <button
            onClick={onClose}
            aria-label="Close pricing"
            className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center border border-gold/40 bg-ink/80 text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300 z-20"
          >
            <X size={18} />
          </button>

          <AnimatePresence mode="wait">
            <PricingSelector key={artType.id} artType={artType} onClose={onClose} />
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingLightbox;
