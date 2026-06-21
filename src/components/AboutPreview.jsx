import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="section-pad bg-emerald-deep relative">
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[4/5] frame-corners relative">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=900&auto=format&fit=crop"
              alt="Sandeep Singh Parmar at work in his studio"
              className="w-full h-full object-cover shadow-frame border border-gold/15"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gold text-emerald-deep px-6 py-4 flex items-center gap-3 shadow-gold-lg">
            <Award size={22} />
            <div className="leading-tight">
              <p className="font-display text-lg font-semibold">6+ Years</p>
              <p className="text-xs">of Practice</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="gold-line" />
            <span className="eyebrow">About the Artist</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-cream font-medium leading-[1.1]">
            Sandeep Singh Parmar
          </h2>
          <p className="text-cream-faint font-light leading-relaxed">
            Born and trained in India, Sandeep has spent over six years
            developing a practice that spans realism, devotional art, and
            experimental mediums rarely seen in traditional galleries. His
            work has found homes in private collections, family shrines, and
            corporate offices across the country — each piece carrying the
            same unwavering attention to detail.
          </p>
          <p className="text-cream-faint font-light leading-relaxed">
            What distinguishes the studio's work isn't just technical
            precision — it's the willingness to sit with a subject until the
            likeness becomes a presence.
          </p>
          <Link to="/about" className="btn-outline w-fit group mt-2">
            Read the Full Story
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
