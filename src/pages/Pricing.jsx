import { motion } from "framer-motion";
import { MessageCircle, Info } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { artTypes } from "../data/pricingData";
import { whatsappLink, siteConfig } from "../data/siteConfig";

// Icon SVG for each art type
const ArtIcon = ({ id }) => {
  if (id === "pencil")
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.5]">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    );
  if (id === "blood")
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.5]">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.5]">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeLinecap="round" strokeWidth="2.5" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  );
};

// One rate card column
const RateCard = ({ art, index }) => {
  const startingPrice = Math.min(...art.pricing.map((p) => p.price));

  const orderMessage = [
    `Hello Sandeep! I'd like to order a *${art.name}*.`,
    "",
    `🎨 Art Type: ${art.name}`,
    "Please let me know the available sizes and guide me further.",
  ].join("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col border border-gold/20 bg-emerald-rich overflow-hidden"
    >
      {/* Card header */}
      <div className="p-5 sm:p-6 border-b border-gold/15">
        <div className="flex items-center gap-3 mb-1">
          <span className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0">
            <ArtIcon id={art.id} />
          </span>
          <h2 className="font-display text-xl sm:text-2xl text-cream leading-tight">
            {art.name}
          </h2>
        </div>
        <p className="text-cream-faint text-xs font-light mt-1 ml-12">
          — Charges —
        </p>
      </div>

      {/* Rate table */}
      <div className="flex-1 px-5 sm:px-6 py-4">
        {/* Table header */}
        <div className="grid grid-cols-3 pb-2 border-b border-gold/20 mb-1">
          <span className="text-[10px] uppercase tracking-widest2 text-gold font-medium">
            Size
          </span>
          <span className="text-[10px] uppercase tracking-widest2 text-gold font-medium text-center">
            Faces
          </span>
          <span className="text-[10px] uppercase tracking-widest2 text-gold font-medium text-right">
            Charges
          </span>
        </div>

        {/* Rows */}
        {art.pricing.map((row, i) => (
          <div
            key={`${row.size}-${row.faces}`}
            className={`grid grid-cols-3 py-2.5 border-b border-gold/8 last:border-0 ${
              i % 2 === 0 ? "" : "bg-emerald-deep/30"
            }`}
          >
            <span className="text-cream-dim text-xs sm:text-sm font-light">
              {row.size}
            </span>
            <span className="text-cream-dim text-xs sm:text-sm font-light text-center">
              {row.faces}
            </span>
            <span className="text-gold font-medium text-xs sm:text-sm text-right">
              ₹{row.price.toLocaleString("en-IN")}
            </span>
          </div>
        ))}
      </div>

      {/* Starting price + WhatsApp button */}
      <div className="p-5 sm:p-6 border-t border-gold/15 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-cream-faint text-xs font-light">Starting at</span>
          <span className="font-display text-2xl text-gold">
            ₹{startingPrice.toLocaleString("en-IN")}
          </span>
        </div>
        <a
          href={whatsappLink(orderMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full justify-center"
        >
          <MessageCircle size={15} />
          Order on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

// Main page
const Pricing = () => {
  const generalMessage = [
    "Hello Sandeep! I'd like to place an order.",
    "",
    "Please share the available options and guide me.",
  ].join("\n");

  return (
    <>
      <PageHeader
        eyebrow="Commission Charges"
        title="Pricing & Rate Card"
        description="Simple, transparent pricing across all three art styles. Pick your type and order directly on WhatsApp."
      />

      {/* 3 Rate Cards */}
      <section className="section-pad !pt-14 bg-emerald-deep relative">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />

        <div className="relative flex flex-col gap-10">
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artTypes.map((art, i) => (
              <RateCard key={art.id} art={art} index={i} />
            ))}
          </div>

          {/* Fine print */}
          <div className="flex items-start gap-3 border border-gold/15 p-4 sm:p-5 bg-emerald-rich max-w-3xl mx-auto w-full">
            <Info size={15} className="text-gold shrink-0 mt-0.5" />
            <p className="text-cream-faint/80 text-xs sm:text-sm font-light leading-relaxed">
              <span className="text-cream font-medium">Note:</span> Advance payment
              required for booking. Delivery charges extra. Urgent orders are
              chargeable. Custom background available on request.
            </p>
          </div>

          {/* Contact strip */}
          <div className="border border-gold/20 bg-emerald-rich p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto w-full">
            <div className="text-center sm:text-left">
              <p className="eyebrow mb-1">Any questions?</p>
              <p className="font-display text-2xl sm:text-3xl text-cream">
                Chat directly with Sandeep
              </p>
              <p className="text-cream-faint text-sm font-light mt-1">
                {siteConfig.instagramHandle} &nbsp;|&nbsp; {siteConfig.phones[0].display}
              </p>
            </div>
            <a
              href={whatsappLink(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold shrink-0"
            >
              <MessageCircle size={16} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
