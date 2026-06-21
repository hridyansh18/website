import { motion } from "framer-motion";

const PageHeader = ({ eyebrow, title, description }) => {
  return (
    <section className="relative bg-emerald-deep pt-36 pb-20 sm:pt-44 sm:pb-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="bg-noise absolute inset-0 pointer-events-none" />
      <div className="absolute inset-4 sm:inset-8 border border-gold/10 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex flex-col gap-5 max-w-2xl"
      >
        <div className="flex items-center gap-3">
          <span className="gold-line" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl text-cream font-medium leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="text-cream-faint text-base sm:text-lg font-light leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default PageHeader;
