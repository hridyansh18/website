import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brush, Heart, Sparkle, GraduationCap } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { stats } from "../data/content";

const milestones = [
  {
    year: "2018",
    title: "First Brush",
    text: "Began formal training in fine art and portraiture under a local master after years of self-taught sketching.",
  },
  {
    year: "2019",
    title: "First Solo Exhibition",
    text: "Showcased a 30-piece portrait series, selling out within the opening week.",
  },
  {
    year: "2021",
    title: "Devotional Art Series",
    text: "Began the religious art practice that would define a signature body of devotional canvases.",
  },
  {
    year: "2023",
    title: "Experimental Mediums",
    text: "Introduced the studio's blood art series, exploring mortality and devotion through unconventional pigment.",
  },
  {
    year: "2024",
    title: "Sandeep Art Gallery",
    text: "Opened the dedicated studio and gallery space to welcome collectors and commission clients directly.",
  },
];

const values = [
  {
    Icon: Brush,
    title: "Handmade, Always",
    text: "No prints, no shortcuts. Every piece is built stroke by stroke in the studio.",
  },
  {
    Icon: Heart,
    title: "Personal Process",
    text: "Each commission is a relationship — sketches are shared and approved before final work begins.",
  },
  {
    Icon: Sparkle,
    title: "Material Honesty",
    text: "From graphite to gold leaf to blood pigment, materials are chosen for meaning, not novelty.",
  },
  {
    Icon: GraduationCap,
    title: "Disciplined Training",
    text: "Six years of formal and independent study underpin every finished canvas.",
  },
];

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow="The Story"
        title="About Sandeep Singh Parmar"
        description="Six years of disciplined practice, told through portraits, devotion, and material experimentation."
      />

      <section className="section-pad !pt-16 bg-emerald-deep">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="aspect-[4/5] frame-corners">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=900&auto=format&fit=crop"
                alt="Sandeep Singh Parmar working in his art studio"
                className="w-full h-full object-cover shadow-frame border border-gold/15"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((s) => (
                <div
                  key={s.id}
                  className="border border-gold/15 p-5 text-center bg-emerald-rich"
                >
                  <p className="font-display text-3xl text-gold">{s.value}</p>
                  <p className="text-cream-faint text-xs mt-1 font-light">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h2 className="font-display text-3xl sm:text-4xl text-cream">
              A Studio Built on Patience
            </h2>
            <p className="text-cream-faint font-light leading-relaxed">
              Sandeep Singh Parmar's relationship with art began long before
              formal training — sketching family members on the back pages of
              school notebooks, learning to see before learning to render.
              That instinct for observation eventually became a six-year
              practice spanning realist portraiture, devotional canvases, and
              experimental mediums that few traditional galleries are willing
              to exhibit.
            </p>
            <p className="text-cream-faint font-light leading-relaxed">
              Today, the studio works directly with private collectors and
              families across India, producing everything from intimate
              graphite portraits to large-format devotional commissions
              finished in gold leaf. Each piece is approached the same way:
              slowly, attentively, and with the belief that a portrait's job
              is not to flatter but to remember.
            </p>
            <p className="text-cream-faint font-light leading-relaxed">
              Beyond commissioned work, Sandeep continues to push into newer
              territory — most notably the studio's blood art series, a
              meditation on mortality and devotion using an unconventional
              pigment process developed over several years of experimentation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6">
              {values.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="border border-gold/15 p-6 bg-emerald-rich hover:border-gold/40 transition-colors duration-300"
                >
                  <Icon size={22} className="text-gold mb-3" />
                  <h3 className="font-display text-lg text-cream mb-1.5">
                    {title}
                  </h3>
                  <p className="text-cream-faint text-sm font-light leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-emerald-rich relative overflow-hidden">
        <div className="bg-noise absolute inset-0 pointer-events-none" />
        <div className="relative flex flex-col gap-14">
          <div className="flex items-center gap-3 justify-center">
            <span className="gold-line" />
            <span className="eyebrow">The Journey</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-cream text-center max-w-2xl mx-auto">
            Six Years, Five Milestones
          </h2>

          <div className="max-w-3xl mx-auto w-full flex flex-col">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex gap-6 sm:gap-10 relative pb-12 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <span className="font-display text-gold text-xl shrink-0 w-16 text-right pr-2">
                    {m.year}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="w-3 h-3 rounded-full bg-gold shrink-0 mt-1.5" />
                  {i !== milestones.length - 1 && (
                    <span className="w-px flex-1 bg-gold/20 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-xl sm:text-2xl text-cream mb-2">
                    {m.title}
                  </h3>
                  <p className="text-cream-faint text-sm font-light leading-relaxed max-w-md">
                    {m.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad !py-20 bg-emerald-deep flex flex-col items-center text-center gap-6">
        <h2 className="font-display text-3xl sm:text-4xl text-cream max-w-xl">
          Want to see the work for yourself?
        </h2>
        <Link to="/gallery" className="btn-gold group">
          Explore the Gallery
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </section>
    </>
  );
};

export default About;
