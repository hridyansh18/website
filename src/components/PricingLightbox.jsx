import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Info, ChevronDown } from "lucide-react";
import { getSizes, getFaces, getPrice } from "../data/pricingData";
import { whatsappLink } from "../data/siteConfig";

const SWIPE_THRESHOLD = 60;

/* ─── Inner selector — re-mounts on artType change so state auto-resets ─── */
const PricingSelector = ({ artType, onClose }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedFace, setSelectedFace] = useState("");
  const touchStartY = useRef(null);

  const sizes       = getSizes(artType.id);
  const faces       = selectedSize ? getFaces(artType.id, selectedSize) : [];
  const price       = selectedSize && selectedFace
                        ? getPrice(artType.id, selectedSize, selectedFace)
                        : null;

  const handleSizeSelect = (s) => { setSelectedSize(s); setSelectedFace(""); };

  const buildMessage = useCallback(() => [
    `Hello Sandeep! 👋`,
    `I'd like to commission a *${artType.name}*.`,
    "",
    `🎨 Art Type : ${artType.name}`,
    `📐 Size     : ${selectedSize}`,
    `👤 Faces    : ${selectedFace}`,
    `💰 Price    : ₹${price?.toLocaleString("en-IN")}`,
    "",
    "Please confirm availability and next steps. Thank you!",
  ].join("\n"), [artType, selectedSize, selectedFace, price]);

  /* swipe-down to close on mobile */
  const onTouchStart = (e) => { touchStartY.current = e.touches[0].clientY; };
  const onTouchEnd   = (e) => {
    if (touchStartY.current === null) return;
    if (e.changedTouches[0].clientY - touchStartY.current > SWIPE_THRESHOLD) onClose();
    touchStartY.current = null;
  };

  return (
    <motion.div
      key={artType.id}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
      onClick={(e) => e.stopPropagation()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      /* ── layout:
         mobile  → full-screen column  (image tall + scroll-panel below)
         desktop → side-by-side row    (image left, panel right)          */
      className="
        relative w-full bg-emerald-rich shadow-frame overflow-hidden
        flex flex-col
        /* mobile: bottom sheet, full screen height */
        h-[100svh] rounded-none
        /* sm+: centred card, 2-col grid */
        sm:h-auto sm:max-h-[92vh] sm:max-w-4xl sm:rounded-none
        sm:grid sm:grid-cols-[1fr_420px]
      "
    >
      {/* ── drag handle (mobile only) ── */}
      <div className="sm:hidden absolute top-0 inset-x-0 flex justify-center pt-2.5 z-10 pointer-events-none">
        <div className="w-10 h-1 rounded-full bg-gold/40" />
      </div>

      {/* ════════════════════════════════
          LEFT / TOP — Full artwork image
          ════════════════════════════════ */}
      <div className="
        relative overflow-hidden shrink-0
        /* mobile: fixed tall band */
        h-[42svh]
        /* desktop: fills full modal height */
        sm:h-full
      ">
        <img
          src={artType.image}
          alt={artType.name}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* gradient — stronger at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

        {/* Art name overlay (bottom of image) */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <span className="eyebrow text-gold/80 text-[10px] sm:text-xs">
            Commission Charges
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-cream mt-1 leading-tight">
            {artType.name}
          </h2>
          <p className="text-cream-faint/80 text-xs sm:text-sm font-light mt-1">
            {artType.tagline}
          </p>
        </div>

        {/* scroll hint arrow — mobile only */}
        <div className="sm:hidden absolute bottom-20 right-4 flex flex-col items-center gap-1 text-gold/50 animate-bounce">
          <ChevronDown size={20} />
        </div>
      </div>

      {/* ═══════════════════════════════════
          RIGHT / BOTTOM — Selector panel
          ═══════════════════════════════════ */}
      <div className="
        overflow-y-auto flex-1 min-h-0
        flex flex-col gap-5
        p-5 sm:p-7
        border-t border-gold/15 sm:border-t-0 sm:border-l sm:border-gold/20
      ">

        {/* ── STEP 1: Size ── */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] sm:text-xs tracking-widest2 uppercase text-gold font-medium">
            Step 1 — Select Size
          </p>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`
                  py-3 px-2 text-xs sm:text-sm font-medium border
                  transition-all duration-200 active:scale-95
                  ${selectedSize === size
                    ? "bg-gold text-emerald-deep border-gold shadow-gold"
                    : "border-gold/25 text-cream-dim hover:border-gold/60 hover:text-gold"
                  }
                `}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* ── STEP 2: Faces ── */}
        <AnimatePresence>
          {selectedSize && faces.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-3 overflow-hidden"
            >
              <p className="text-[10px] sm:text-xs tracking-widest2 uppercase text-gold font-medium">
                Step 2 — Number of Faces
              </p>
              <div className="grid grid-cols-2 gap-2">
                {faces.map((face) => (
                  <button
                    key={face}
                    onClick={() => setSelectedFace(face)}
                    className={`
                      py-3 px-3 text-xs sm:text-sm font-medium border text-left
                      transition-all duration-200 active:scale-95
                      ${selectedFace === face
                        ? "bg-gold text-emerald-deep border-gold shadow-gold"
                        : "border-gold/25 text-cream-dim hover:border-gold/60 hover:text-gold"
                      }
                    `}
                  >
                    {face}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Prompt hints ── */}
        {!selectedSize && (
          <div className="border border-gold/10 rounded p-4 text-center bg-emerald-deep/40">
            <p className="text-cream-faint/50 text-xs font-light">
              Select a size to continue ↑
            </p>
          </div>
        )}
        {selectedSize && !selectedFace && (
          <div className="border border-gold/10 rounded p-4 text-center bg-emerald-deep/40">
            <p className="text-cream-faint/50 text-xs font-light">
              Now select the number of faces ↑
            </p>
          </div>
        )}

        {/* ── Price reveal + CTA ── */}
        <AnimatePresence>
          {price !== null && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0,  scale: 1    }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="border border-gold/35 bg-emerald-deep p-5 sm:p-6 flex flex-col gap-4"
            >
              {/* Price */}
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-cream-faint text-[10px] sm:text-xs font-light">
                    {artType.name} · {selectedSize} · {selectedFace}
                  </p>
                  <p className="font-display text-4xl sm:text-5xl text-gold mt-1 leading-none">
                    ₹{price.toLocaleString("en-IN")}
                  </p>
                </div>
                <span className="text-3xl sm:text-4xl">{artType.icon}</span>
              </div>

              {/* Fine print */}
              <div className="flex items-start gap-2 border-t border-gold/15 pt-3">
                <Info size={12} className="text-gold/50 shrink-0 mt-0.5" />
                <p className="text-cream-faint/60 text-[10px] sm:text-xs font-light leading-relaxed">
                  Advance payment required. Delivery charges extra.
                  Urgent orders chargeable.
                </p>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappLink(buildMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center text-sm sm:text-base py-4"
              >
                <MessageCircle size={18} />
                Book This on WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* spacer so last item isn't hidden behind safe-area */}
        <div className="h-2 sm:h-0 shrink-0" />
      </div>
    </motion.div>
  );
};


/* ─── Outer backdrop wrapper ─── */
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
          transition={{ duration: 0.22 }}
          /* 
            mobile  → full screen (no padding, no centering)
            desktop → centred with padding, max-width on inner card
          */
          className="
            fixed inset-0 z-[100]
            bg-ink/90 backdrop-blur-sm
            flex items-end sm:items-center justify-center
            p-0 sm:p-8
          "
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${artType.name} pricing`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="
              absolute z-20
              top-3 right-3
              sm:top-5 sm:right-5
              w-10 h-10
              flex items-center justify-center
              border border-gold/40 bg-ink/70 backdrop-blur-sm
              text-gold hover:bg-gold hover:text-emerald-deep
              transition-all duration-250
            "
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
