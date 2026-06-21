import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../data/content";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="section-pad bg-emerald-rich relative overflow-hidden">
      <div className="bg-noise absolute inset-0 pointer-events-none" />
      <div className="relative flex flex-col gap-14 items-center">
        <SectionHeading
          eyebrow="Words From Collectors"
          title="Trusted by Families & Collectors"
        />

        <div className="w-full max-w-3xl relative">
          <Quote
            size={64}
            className="text-gold/15 absolute -top-6 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center gap-6 pt-10"
            >
              <div className="flex gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-display text-2xl sm:text-3xl text-cream italic leading-relaxed">
                "{current.quote}"
              </p>
              <div>
                <p className="text-cream font-medium text-sm tracking-wide">
                  {current.name}
                </p>
                <p className="text-gold text-xs mt-1">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 pt-12">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 flex items-center justify-center border border-gold/30 text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-gold" : "w-1.5 bg-gold/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 flex items-center justify-center border border-gold/30 text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
