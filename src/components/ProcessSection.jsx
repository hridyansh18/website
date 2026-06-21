import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/content";

const ProcessSection = () => {
  return (
    <section id="process" className="section-pad bg-emerald-deep relative">
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
      <div className="relative flex flex-col gap-16">
        <SectionHeading
          eyebrow="The Artistic Process"
          title="From First Sketch to Final Frame"
          description="Every piece moves through the same five disciplined stages — slow, deliberate, and built around your involvement at each step."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col gap-4 relative"
              >
                <div className="relative w-14 h-14 rounded-full border border-gold/40 bg-emerald-rich flex items-center justify-center z-10">
                  <span className="font-display text-xl text-gold">
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-cream">
                  {step.title}
                </h3>
                <p className="text-cream-faint text-sm font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
