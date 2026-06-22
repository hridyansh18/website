import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { artTypes } from "../data/pricingData";

const PricingTable = ({ art }) => {
  const startingPrice = Math.min(...art.pricing.map((item) => item.price));

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border border-gold/20 bg-emerald-rich/40 overflow-hidden"
    >
      {/* Artwork Image */}

      {/* Header */}
      <div className="p-6 border-b border-gold/15">
        <h2 className="font-display text-2xl sm:text-3xl text-cream">
          {art.name}
        </h2>

        {art.tagline && (
          <p className="text-cream-faint text-sm mt-1">
            {art.tagline}
          </p>
        )}
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 px-6 py-4 border-b border-gold/10">
        <span className="eyebrow text-[10px]">SIZE</span>
        <span className="eyebrow text-[10px]">FACES</span>
        <span className="eyebrow text-[10px] text-right">CHARGES</span>
      </div>

      {/* Table Rows */}
      {art.pricing.map((row) => (
        <div
          key={`${row.size}-${row.faces}`}
          className="grid grid-cols-3 px-6 py-4 border-b border-gold/10 hover:bg-gold/5 transition-colors"
        >
          <span className="text-cream text-sm">{row.size}</span>

          <span className="text-cream-dim text-sm">{row.faces}</span>

          <span className="text-gold text-sm font-medium text-right">
            ₹{row.price.toLocaleString("en-IN")}
          </span>
        </div>
      ))}

      {/* Footer */}
      <div className="bg-gold/5 border-t border-gold/10 px-5 py-4 text-center">
        <p className="text-xs text-gold">
          Starting at ₹{startingPrice.toLocaleString("en-IN")}
        </p>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [openArt, setOpenArt] = useState(null);

  return (
    <>
      <PageHeader
        eyebrow="Sandeep Arts"
        title="Pricing for Every Medium"
        description="Transparent pricing across Pencil Sketches, Blood Art, and Oil Painting Portraits."
      />

      <section className="section-pad !pt-14 bg-emerald-deep relative">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />

        <div className="relative grid gap-8 lg:grid-cols-3">
          {artTypes.map((art) => (
            <PricingTable key={art.id} art={art} />
          ))}
        </div>
      </section>

      {/* Fine print */}
      <section className="bg-emerald-rich border-t border-gold/15 px-6 sm:px-10 lg:px-20 py-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[0.25em] uppercase mb-3">
            Important Information
          </p>

          <p className="text-cream-faint/70 text-sm font-light leading-relaxed">
            Advance payment required for booking. Delivery charges extra.
            Urgent orders are chargeable. All prices are inclusive of
            standard packaging.
          </p>
        </div>
      </section>


      {/* CTA */}
      <section className="section-pad !py-20 bg-emerald-deep relative">
        <div className="absolute inset-0 bg-radial-glow" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col items-center text-center gap-6"
        >
          <span className="eyebrow">Ready to Order?</span>
          <h2 className="font-display text-4xl sm:text-5xl text-cream max-w-xl leading-tight">
            Book your commission today.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link to="/commission" className="btn-outline group">
              Learn About the Process
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      <PricingLightbox artType={openArt} onClose={() => setOpenArt(null)} />
    </>
  );
};

// Simple lightbox/modal for showing a selected art type details
const PricingLightbox = ({ artType, onClose }) => {
  if (!artType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-emerald-rich border border-gold/20 w-full max-w-2xl p-6 rounded">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-display text-xl text-cream">{artType.name}</h3>
          <button onClick={onClose} className="text-cream-faint">Close</button>
        </div>

        <img src={artType.image} alt={artType.name} className="w-full h-48 object-cover mb-4" />

        {artType.tagline && <p className="text-cream-faint mb-3">{artType.tagline}</p>}

        <div className="grid grid-cols-3 gap-2">
          <span className="eyebrow text-[10px]">SIZE</span>
          <span className="eyebrow text-[10px]">FACES</span>
          <span className="eyebrow text-[10px] text-right">CHARGES</span>
        </div>

        <div className="mt-2">
          {artType.pricing.map((row) => (
            <div key={`${row.size}-${row.faces}`} className="grid grid-cols-3 py-2 border-b border-gold/10">
              <span className="text-cream">{row.size}</span>
              <span className="text-cream-dim">{row.faces}</span>
              <span className="text-gold text-right">₹{row.price.toLocaleString('en-IN')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;