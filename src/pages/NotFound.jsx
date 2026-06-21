import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Frame, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-[100svh] flex items-center justify-center bg-emerald-deep relative px-6 text-center">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="bg-noise absolute inset-0 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative flex flex-col items-center gap-6"
      >
        <Frame size={48} className="text-gold/60" />
        <h1 className="font-display text-7xl sm:text-8xl text-gold">404</h1>
        <h2 className="font-display text-2xl sm:text-3xl text-cream">
          This Frame is Empty
        </h2>
        <p className="text-cream-faint font-light max-w-sm">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to the gallery.
        </p>
        <Link to="/" className="btn-gold group mt-2">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
