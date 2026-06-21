import { motion } from "framer-motion";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) => {
  const alignClass =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col gap-5 max-w-2xl ${alignClass}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {align === "center" && <span className="gold-line" />}
          <span className="eyebrow">{eyebrow}</span>
          {align === "center" && <span className="gold-line" />}
        </div>
      )}
      <h2
        className={`font-display ${
          light ? "text-cream" : "text-cream"
        } text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1]`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-cream-faint text-base sm:text-lg leading-relaxed font-light">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
