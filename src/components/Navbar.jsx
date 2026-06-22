import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Gallery", to: "/gallery" },
  { label: "Commission", to: "/commission" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [prevKey, setPrevKey] = useState(location.key);

  // Close the mobile menu when navigation occurs, without setState-in-effect
  // cascades: this mirrors React's "adjust state during render" pattern.
  if (location.key !== prevKey) {
    setPrevKey(location.key);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-emerald-deep/95 backdrop-blur-md border-b border-gold/15 py-3"
          : "bg-gradient-to-b from-ink/60 to-transparent py-5"
      }`}
    >
      <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-20">
        <Logo />

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="text-sm tracking-wide text-cream-dim hover:text-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/commission"
          className="hidden lg:inline-flex btn-gold !py-2.5 !px-6 text-xs"
        >
          Book Commission
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-cream p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-emerald-deep border-t border-gold/15"
          >
            <ul className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="block py-3 text-cream-dim hover:text-gold transition-colors text-base border-b border-gold/10"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link to="/contact" className="btn-gold w-full !py-3">
                  Book Commission
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
