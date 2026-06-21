import { motion } from "framer-motion";
import { Expand } from "lucide-react";

const aspectMap = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

const ArtworkCard = ({ artwork, onOpen, index = 0 }) => {
  return (
    <motion.button
      onClick={() => onOpen(artwork)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.07, ease: "easeOut" }}
      className="group relative w-full text-left frame-corners"
      aria-label={`View ${artwork.title}`}
    >
      <div
        className={`relative overflow-hidden bg-emerald-rich border border-gold/10 ${
          aspectMap[artwork.orientation] || "aspect-[3/4]"
        }`}
      >
        <img
          src={artwork.image}
          alt={`${artwork.title} — ${artwork.medium} by Sandeep Singh Parmar`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <span className="w-12 h-12 rounded-full border border-gold/70 flex items-center justify-center bg-ink/40 backdrop-blur-sm scale-90 group-hover:scale-100 transition-transform duration-400">
            <Expand size={18} className="text-gold" />
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
          <span className="text-[10px] tracking-widest2 uppercase text-gold font-medium">
            {artwork.categoryLabel}
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-cream mt-1 leading-tight">
            {artwork.title}
          </h3>
          <p className="text-cream-faint text-xs mt-1 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
            {artwork.medium} · {artwork.year}
          </p>
        </div>
      </div>
    </motion.button>
  );
};

export default ArtworkCard;
