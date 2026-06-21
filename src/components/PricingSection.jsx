import { motion } from "framer-motion";
import { Pencil, Droplet, Palette, Info, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { pricingPlans, pricingNotes, formatRupees } from "../data/pricing";

const iconMap = {
  pencil: Pencil,
  droplet: Droplet,
  palette: Palette,
};

const accentMap = {
  neutral: {
    badge: "bg-cream/10 text-cream",
    iconWrap: "border-gold/40 text-gold",
  },
  red: {
    badge: "bg-red-500/10 text-red-300",
    iconWrap: "border-red-400/40 text-red-300",
  },
  gold: {
    badge: "bg-gold/15 text-gold",
    iconWrap: "border-gold/50 text-gold",
  },
};

const PricingCard = ({ plan, index }) => {
  const Icon = iconMap[plan.icon] ?? Pencil;
  const accent = accentMap[plan.accent] ?? accentMap.neutral;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col bg-emerald-rich border border-gold/15 hover:border-gold/35 transition-colors duration-300"
    >
      <div className="flex items-center gap-3 p-5 sm:p-6 border-b border-gold/10">
        <span
          className={`w-11 h-11 shrink-0 rounded-full border flex items-center justify-center ${accent.iconWrap}`}
        >
          <Icon size={18} />
        </span>
        <h3 className="font-display text-xl sm:text-2xl text-cream leading-tight">
          {plan.title}
        </h3>
      </div>

      {/* Desktop / tablet: table layout */}
      <div className="hidden sm:block px-6 pt-4">
        <div className="grid grid-cols-3 gap-2 pb-2 text-[10px] uppercase tracking-widest2 text-gold/80">
          <span>Size</span>
          <span>Faces</span>
          <span className="text-right">Charges</span>
        </div>
      </div>
      <ul className="flex flex-col px-5 sm:px-6 pb-6 divide-y divide-gold/10">
        {plan.rows.map((row, i) => (
          <li
            key={`${row.size}-${row.faces}-${i}`}
            className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-3 items-center gap-3 sm:gap-2 py-3 text-sm"
          >
            <span className="text-cream-dim shrink-0">{row.size}</span>
            <span className="text-cream-faint font-light text-xs sm:text-sm min-w-0 truncate sm:whitespace-normal">
              {row.faces}
            </span>
            <span className="text-gold font-medium sm:text-right shrink-0">
              {formatRupees(row.price)}
            </span>
          </li>
        ))}
      </ul>

      <div className={`mt-auto mx-5 sm:mx-6 mb-5 sm:mb-6 px-3 py-2 text-center text-xs ${accent.badge}`}>
        Starting at {formatRupees(plan.rows[0].price)}
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="section-pad bg-emerald-deep relative">
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
      <div className="relative flex flex-col gap-12">
        <SectionHeading
          eyebrow="Commission Charges"
          title="Pricing for Every Medium"
          description="Transparent, size-based pricing across pencil sketches, the studio's signature blood sketch technique, and full-colour oil painting portraits."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full">
          {pricingNotes.map((note) => (
            <div
              key={note}
              className="flex items-start gap-3 text-cream-faint text-sm font-light"
            >
              <Info size={15} className="text-gold mt-0.5 shrink-0" />
              <span>{note}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Link to="/contact" className="btn-gold group">
            Get a Custom Quote
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
