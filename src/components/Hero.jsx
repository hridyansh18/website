import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { stats } from "../data/content";
import { siteConfig } from "../data/siteConfig";
import heroVideo from "../assets/Hero.mp4";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center bg-emerald-deep overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="bg-noise absolute inset-0 pointer-events-none" />

      {/* Decorative frame border, museum-wall feel */}
      <div className="absolute inset-4 sm:inset-8 border border-gold/10 pointer-events-none" />

      <div className="relative w-full px-6 sm:px-10 lg:px-20 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-7"
        >
          <div className="flex items-center gap-3">
            <Sparkles size={15} className="text-gold" />
            <span className="eyebrow">{siteConfig.tagline}</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream font-medium leading-[1.05]">
            Every portrait
            <br />
            <span className="italic text-gold">begins with</span>
            <br />
            a single honest line.
          </h1>

          <p className="text-cream-faint text-base sm:text-lg font-light leading-relaxed max-w-xl">
            Sandeep Singh Parmar is a fine artist working across portraiture,
            religious devotion, and experimental mediums — each piece made by
            hand, in studio, for those who want art that remembers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-3">
            <Link to="/gallery" className="btn-gold group">
              View the Gallery
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link to="/contact" className="btn-outline">
              Commission a Piece
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-gold/10 mt-4">
            {stats.map((s) => (
              <div key={s.id}>
                <p className="font-display text-3xl sm:text-4xl text-gold">
                  {s.value}
                </p>
                <p className="text-cream-faint text-xs mt-1 font-light tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] frame-corners">
            <div className="absolute -inset-3 border border-gold/25" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="relative w-full h-full object-cover shadow-frame"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 ring-1 ring-gold/10" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-emerald-rich border border-gold/30 px-6 py-4 shadow-frame max-w-[210px]"
          >
            <p className="font-display text-gold text-lg italic leading-tight">
              "Where Every Stroke Tells a Story"
            </p>
            <p className="text-cream-faint text-xs mt-1 font-light">
              Explore Original Sketches, Portraits &amp; Fine Art
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
