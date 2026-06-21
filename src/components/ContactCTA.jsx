import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="relative bg-emerald-rich overflow-hidden">
      <div className="bg-noise absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative section-pad !py-20 flex flex-col items-center text-center gap-6"
      >
        <span className="eyebrow">Let's Begin</span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream font-medium leading-[1.1] max-w-3xl">
          Ready to commission a piece that lasts generations?
        </h2>
        <p className="text-cream-faint font-light max-w-xl">
          Reach out for pricing, availability, or to discuss a custom idea —
          Sandeep replies to every enquiry personally.
        </p>
        <Link to="/contact" className="btn-gold group mt-2">
          Get in Touch
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
