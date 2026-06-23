import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ChevronRight, MessageCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import PricingLightbox from "../components/PricingLightbox";
import { artTypes } from "../data/pricingData";
import { whatsappLink } from "../data/siteConfig";
import { processSteps } from "../data/content";

const inclusions = [
  "Free initial consultation call",
  "Reference photo guidance & sketch approval",
  "Choice of medium: Pencil, Blood or Oil",
  "Two rounds of revisions included",
  "Signed & ready to frame",
  "Insured delivery across India",
  "Custom background available",
  "Timely delivery guaranteed",
];

const whyChoose = [
  "100% Handmade Artwork",
  "High Quality & Premium Materials",
  "Perfect for Gifting",
  "Custom Background Available",
  "Timely Delivery",
];

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
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.5]">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeLinecap="round" strokeWidth="2.5" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  );
};

const Commission = () => {
  const [openArt, setOpenArt] = useState(null);

  return (
    <>
      <PageHeader
        eyebrow="Custom Sketch & Commission"
        title="Commission Your Artwork"
        description="Choose your art style, pick size and faces — get an instant price and book directly on WhatsApp."
      />

      {/* 3 Art Type Cards */}
      <section className="section-pad !pt-14 bg-emerald-deep relative">
        <div className="absolute inset-0 bg-radial-glow opacity-40" />
        <div className="relative flex flex-col gap-10">
          <div className="flex items-center gap-3 justify-center">
            <span className="gold-line" />
            <span className="eyebrow">Select Your Art Style</span>
            <span className="gold-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {artTypes.map((art, i) => (
              <motion.button
                key={art.id}
                onClick={() => setOpenArt(art)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative text-left overflow-hidden border border-gold/20 hover:border-gold/60 transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`Select ${art.name} size and get price`}
              >
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.name}
                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-emerald-deep/80 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-gold">
                    <ArtTypeIcon id={art.id} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="eyebrow text-gold/80 text-[10px]">Tap to get price</p>
                    <h3 className="font-display text-2xl text-cream mt-1 leading-tight">{art.name}</h3>
                    <p className="text-cream-faint text-xs mt-1 font-light">{art.tagline}</p>
                    <span className="inline-flex items-center gap-1.5 mt-3 text-xs text-gold border border-gold/40 px-3 py-1.5 group-hover:bg-gold group-hover:text-emerald-deep transition-all duration-300">
                      Select Size &amp; Get Price <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          <p className="text-center text-cream-faint/60 text-sm font-light -mt-8">
            Tap any style → select size &amp; faces → see price → book on WhatsApp
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-pad !py-16 bg-emerald-rich relative">
        <div className="bg-noise absolute inset-0 pointer-events-none" />
        <div className="relative flex flex-col gap-10">
          <div className="flex items-center gap-3 justify-center">
            <span className="gold-line" />
            <span className="eyebrow">Every Commission Includes</span>
            <span className="gold-line" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto w-full">
            {inclusions.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-3 border border-gold/15 p-4 bg-emerald-deep/50 hover:border-gold/35 transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="text-gold" />
                </span>
                <span className="text-cream-dim text-sm font-light leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad !py-16 bg-emerald-deep relative">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="relative flex flex-col gap-10">
          <div className="flex items-center gap-3 justify-center">
            <span className="gold-line" />
            <span className="eyebrow">How It Works</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-cream text-center">
            From First Message to Final Frame
          </h2>
          <div className="relative max-w-4xl mx-auto w-full">
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-14 h-14 rounded-full border border-gold/40 bg-emerald-rich flex items-center justify-center z-10">
                    <span className="font-display text-xl text-gold">{String(step.id).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-xl text-cream">{step.title}</h3>
                  <p className="text-cream-faint text-sm font-light leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-pad !py-16 bg-emerald-rich relative overflow-hidden">
        <div className="bg-noise absolute inset-0 pointer-events-none" />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto w-full">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="gold-line" />
              <span className="eyebrow">Why Choose Sandeep Arts?</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-cream leading-tight">
              Handmade Artworks,<br />
              <span className="italic text-gold">Memories Forever</span>
            </h2>
            <ul className="flex flex-col gap-3 mt-2">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-gold" />
                  </span>
                  <span className="text-cream-dim text-sm font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {artTypes.slice(0, 2).map((art) => (
              <div key={art.id} className="aspect-[3/4] overflow-hidden border border-gold/15 frame-corners">
                <img src={art.image} alt={art.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
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
          <span className="eyebrow">Ready to Begin?</span>
          <h2 className="font-display text-4xl sm:text-5xl text-cream max-w-2xl leading-tight">
            Every memory deserves to be drawn by hand.
          </h2>
          <p className="text-cream-faint font-light max-w-md">
            Reach out on WhatsApp or fill the contact form — Sandeep personally responds to every enquiry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={whatsappLink("Hello Sandeep! I'd like to commission a custom artwork.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn-outline group">
              Send an Enquiry
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-cream-faint/50 text-xs font-light mt-2">
            Note: Advance payment required. Delivery charges extra. Urgent orders chargeable.
          </p>
        </motion.div>
      </section>

      <PricingLightbox artType={openArt} onClose={() => setOpenArt(null)} />
    </>
  );
};

export default Commission;
