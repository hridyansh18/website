import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare } from "lucide-react";
import { whatsappLink } from "../data/siteConfig";

const initialState = {
  name: "",
  email: "",
  phone: "",
  category: "Portraits",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Tell us a little about your idea.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      "Hello Sandeep, I'd like to enquire about a commission.",
      "",
      `Name: ${form.name}`,
    ];
    if (form.email.trim()) lines.push(`Email: ${form.email}`);
    if (form.phone.trim()) lines.push(`Phone: ${form.phone}`);
    lines.push(`Interested In: ${form.category}`);
    lines.push("", `Message: ${form.message}`);
    return lines.join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // Opens WhatsApp with a pre-filled message containing the form details.
    // Triggered inside the click handler (not after the timeout) so the
    // browser doesn't block it as a popup.
    const href = whatsappLink(buildWhatsAppMessage());
    window.open(href, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialState);
    }, 600);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center gap-5 py-16 px-6 border border-gold/20 bg-emerald-rich"
      >
        <CheckCircle2 size={48} className="text-gold" />
        <h3 className="font-display text-3xl text-cream">
          Opening WhatsApp...
        </h3>
        <p className="text-cream-faint font-light max-w-sm">
          A WhatsApp tab has opened with your message pre-filled — just hit
          send. If it didn't open, message us directly using the floating
          WhatsApp button.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-outline mt-2"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs tracking-wide text-cream-dim">
            Full Name
          </label>
          <div className="relative">
            <User
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"
            />
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`w-full bg-emerald-deep border ${
                errors.name ? "border-red-400/60" : "border-gold/20"
              } pl-11 pr-4 py-3.5 text-sm text-cream placeholder:text-cream-faint/50 focus:border-gold outline-none transition-colors`}
            />
          </div>
          {errors.name && (
            <span className="text-red-300 text-xs">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs tracking-wide text-cream-dim">
            Email Address (Optional)
          </label>
          <div className="relative">
            <Mail
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"
            />
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full bg-emerald-deep border ${
                errors.email ? "border-red-400/60" : "border-gold/20"
              } pl-11 pr-4 py-3.5 text-sm text-cream placeholder:text-cream-faint/50 focus:border-gold outline-none transition-colors`}
            />
          </div>
          {errors.email && (
            <span className="text-red-300 text-xs">{errors.email}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs tracking-wide text-cream-dim">
            Phone Number (Optional)
          </label>
          <div className="relative">
            <Phone
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"
            />
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 00000 00000"
              className="w-full bg-emerald-deep border border-gold/20 pl-11 pr-4 py-3.5 text-sm text-cream placeholder:text-cream-faint/50 focus:border-gold outline-none transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-xs tracking-wide text-cream-dim">
            Interested In
          </label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full bg-emerald-deep border border-gold/20 px-4 py-3.5 text-sm text-cream focus:border-gold outline-none transition-colors appearance-none"
          >
            <option>Portraits</option>
            <option>Religious Art</option>
            <option>Blood Art</option>
            <option>Canvas Paintings</option>
            <option>Pencil Sketches</option>
            <option>Something Custom</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs tracking-wide text-cream-dim">
          Tell Us About Your Idea
        </label>
        <div className="relative">
          <MessageSquare size={16} className="absolute left-4 top-4 text-gold/60" />
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Reference photo, preferred size, occasion, timeline..."
            className={`w-full bg-emerald-deep border ${
              errors.message ? "border-red-400/60" : "border-gold/20"
            } pl-11 pr-4 py-3.5 text-sm text-cream placeholder:text-cream-faint/50 focus:border-gold outline-none transition-colors resize-none`}
          />
        </div>
        {errors.message && (
          <span className="text-red-300 text-xs">{errors.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-gold mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <AnimatePresence mode="wait">
          {submitting ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <span className="w-4 h-4 border-2 border-emerald-deep/40 border-t-emerald-deep rounded-full animate-spin" />
              Opening WhatsApp...
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Send size={16} />
              Send via WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
};

export default ContactForm;
