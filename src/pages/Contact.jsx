import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import { InstagramIcon, YoutubeIcon } from "../components/SocialIcons";
import { siteConfig, whatsappLink } from "../data/siteConfig";

const details = [
  {
    Icon: MapPin,
    title: "Studio Address",
    lines: [siteConfig.address.full],
  },
  {
    Icon: Phone,
    title: "Phone",
    lines: siteConfig.phones.map((p) => p.display),
  },
  {
    Icon: Mail,
    title: "Email",
    lines: [siteConfig.email],
  },
  {
    Icon: InstagramIcon,
    title: "Instagram",
    lines: [siteConfig.instagramHandle],
  },
  {
    Icon: YoutubeIcon,
    title: "YouTube",
    lines: ["@Sandeeparts01"],
  },
  {
    Icon: Clock,
    title: "Studio Hours",
    lines: siteConfig.hours,
  },
];

const Contact = () => {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact the Studio"
        description="Whether you're enquiring about a commission, an existing piece, or just want to say hello — Sandeep reads every message personally."
      />

      <section className="section-pad !pt-16 bg-emerald-deep">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 border border-gold/15 bg-emerald-rich p-6 sm:p-10"
          >
            <h2 className="font-display text-2xl sm:text-3xl text-cream mb-2">
              Send an Enquiry
            </h2>
            <p className="text-cream-faint text-sm font-light mb-8">
              Fill out the form below, then send it straight to the studio
              via WhatsApp or email — whichever you prefer.
            </p>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {details.map(({ Icon, title, lines }) => (
                <div
                  key={title}
                  className="border border-gold/15 p-6 bg-emerald-rich flex items-start gap-4 hover:border-gold/40 transition-colors duration-300"
                >
                  <span className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-gold" />
                  </span>
                  <div>
                    <h3 className="text-cream text-sm tracking-wide mb-1">
                      {title}
                    </h3>
                    {lines.map((line) => {
                      if (title === "Phone") {
                        const phone = siteConfig.phones.find(
                          (p) => p.display === line
                        );
                        return (
                          <a
                            key={line}
                            href={`tel:+91${phone?.raw}`}
                            className="block text-cream-faint text-sm font-light hover:text-gold transition-colors"
                          >
                            {line}
                          </a>
                        );
                      }
                      if (title === "Email") {
                        return (
                          <a
                            key={line}
                            href={`mailto:${line}`}
                            className="block text-cream-faint text-sm font-light hover:text-gold transition-colors"
                          >
                            {line}
                          </a>
                        );
                      }
                      if (title === "Instagram") {
                        return (
                          <a
                            key={line}
                            href={siteConfig.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-cream-faint text-sm font-light hover:text-gold transition-colors"
                          >
                            {line}
                          </a>
                        );
                      }
                      if (title === "YouTube") {
                        return (
                          <a
                            key={line}
                            href={siteConfig.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-cream-faint text-sm font-light hover:text-gold transition-colors"
                          >
                            {line}
                          </a>
                        );
                      }
                      return (
                        <p
                          key={line}
                          className="text-cream-faint text-sm font-light"
                        >
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink(
                "Hello Sandeep, I'd like to get in touch about your artwork."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-gold/30 bg-[#25D366]/10 hover:bg-[#25D366]/20 p-6 transition-colors duration-300 group"
            >
              <span className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle size={18} className="text-white" />
              </span>
              <div>
                <h3 className="text-cream text-sm tracking-wide mb-1">
                  Prefer WhatsApp?
                </h3>
                <p className="text-cream-faint text-sm font-light group-hover:text-gold transition-colors">
                  Chat with us directly →
                </p>
              </div>
            </a>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
