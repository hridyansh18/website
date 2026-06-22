import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import PricingLightbox from "./PricingLightbox";
import FeaturedGallery from "./FeaturedGallery";
import { artTypes } from "../data/pricingData";

const inclusions = [
  "Free initial consultation",
  "Reference photo guidance",
  "Sketch approval before final work",
  "Signed & ready to frame",
  "Insured delivery across India",
];

// Icon SVGs for each art type (no lucide brand icons needed)
const ArtTypeIcon = ({ id }) => {
  if (id === "pencil")
    return (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.5]">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    );
  if (id === "blood")
    return (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.5]">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" />
        <path d="M12 8v4l3 3" />
        <circle cx="18" cy="5" r="3" />
      </svg>
    );
  // oil
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.5]">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeLinecap="round" strokeWidth="2.5" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  );
};

const CommissionSection = () => {
  const [openArt, setOpenArt] = useState(null);

  return (
    <>
      {/* ── COMMISSION SECTION ── */}
      <section id="commission" className="section-pad bg-emerald-rich relative overflow-hidden">
        <div className="bg-noise absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-40" />

        <div className="relative flex flex-col gap-14">
          {/* Heading */}
          <SectionHeading
            eyebrow="Custom Sketch & Commission"
            title="Turn a Memory Into Art"
            description="Choose your art style below, select size and number of faces — get an instant price and book directly on WhatsApp."
          />

          {/* 3 Art Type Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {artTypes.map((art, i) => (
              <motion.button
                key={art.id}
                onClick={() => setOpenArt(art)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative text-left overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`View ${art.name} pricing`}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.name}
                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-emerald-deep/80 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-gold">
                    <ArtTypeIcon id={art.id} />
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="eyebrow text-gold/80 text-[10px]">Tap to see pricing</p>
                    <h3 className="font-display text-2xl sm:text-xl lg:text-2xl text-cream mt-1 leading-tight">
                      {art.name}
                    </h3>
                    <p className="text-cream-faint text-xs mt-1 font-light">
                      {art.tagline}
                    </p>

                    {/* CTA pill */}
                    <span className="inline-flex items-center gap-1.5 mt-3 text-xs text-gold border border-gold/40 px-3 py-1.5 group-hover:bg-gold group-hover:text-emerald-deep transition-all duration-300">
                      View Charges
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* What's included strip */}
          <div className="border border-gold/15 p-6 sm:p-8 bg-emerald-deep/60">
            <p className="eyebrow mb-5 text-center sm:text-left">Every commission includes</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {inclusions.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-gold" />
                  </span>
                  <span className="text-cream-dim text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct contact CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold group">
              Start Your Commission
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/919202325750"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Pricing lightbox */}
        <PricingLightbox artType={openArt} onClose={() => setOpenArt(null)} />
      </section>

      {/* ── GALLERY SECTION (directly below commission) ── */}
      <FeaturedGallery />
    </>
  );
};

export default CommissionSection;
