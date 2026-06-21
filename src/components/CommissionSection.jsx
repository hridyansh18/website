import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { whatsappLink } from "../data/siteConfig";
import balKrishna from "../assets/images/artworks/bal-krishna.jpg";
import sariPortraitBloodArt from "../assets/images/artworks/sari-portrait-blood-art.jpg";

const inclusions = [
  "Free initial consultation call",
  "Reference photo guidance & sketch approval",
  "Choice of medium: charcoal, oil, acrylic, or graphite",
  "Two rounds of revisions included",
  "Signed, varnished, and ready to frame",
  "Insured shipping across India",
];

const CommissionSection = () => {
  return (
    <section
      id="commission"
      className="section-pad bg-emerald-rich relative overflow-hidden"
    >
      <div className="bg-noise absolute inset-0 pointer-events-none" />
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] mt-8 frame-corners">
              <img
                src={sariPortraitBloodArt}
                alt="Custom blood art portrait commission by Sandeep Singh Parmar"
                className="w-full h-full object-cover shadow-frame border border-gold/15"
              />
            </div>
            <div className="aspect-[3/4] frame-corners">
              <img
                src={balKrishna}
                alt="Finished religious art commission by Sandeep Singh Parmar"
                className="w-full h-full object-cover shadow-frame border border-gold/15"
              />
            </div>
          </div>
          <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-px h-16 bg-gold/30 hidden sm:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2"
        >
          <div className="flex items-center gap-3">
            <span className="gold-line" />
            <span className="eyebrow">Custom Sketch &amp; Commission</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-cream font-medium leading-[1.1]">
            Turn a memory into something you can hang on a wall.
          </h2>
          <p className="text-cream-faint font-light leading-relaxed">
            Send a photograph, describe a moment, or simply share an idea —
            Sandeep will translate it into a hand-made original, sized and
            styled for your space. Every commission is a one-on-one process
            from first sketch to final frame.
          </p>

          <ul className="flex flex-col gap-3 pt-2">
            {inclusions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-gold" />
                </span>
                <span className="text-cream-dim text-sm font-light">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contact" className="btn-gold group">
              Start Your Commission
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href={whatsappLink(
                "Hello Sandeep, I'd like to enquire about a custom commission."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommissionSection;
