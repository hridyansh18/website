import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { siteConfig } from "../data/siteConfig";
import { categories } from "../data/artworks";

const socialLinks = [
  { Icon: InstagramIcon, label: "Instagram", href: siteConfig.instagramUrl },
  { Icon: YoutubeIcon, label: "YouTube", href: siteConfig.youtubeUrl },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-gold/15 relative">
      <div className="bg-noise absolute inset-0 pointer-events-none" />
      <div className="relative px-6 sm:px-10 lg:px-20 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-14 border-b border-gold/10">
          <div className="md:col-span-4 flex flex-col gap-5">
            <Logo />
            <p className="text-gold text-sm italic font-display tracking-wide -mt-2">
              {siteConfig.tagline}
            </p>
            <p className="text-cream-faint text-sm leading-relaxed font-light max-w-xs">
              Hand-rendered portraits, devotional art, and bespoke commissions
              by Sandeep Singh Parmar — built one careful stroke at a time.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-gold/30 text-gold hover:bg-gold hover:text-emerald-deep transition-all duration-300"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6 flex flex-col gap-4">
            <h4 className="eyebrow !text-cream">Explore</h4>
            <ul className="flex flex-col gap-3 text-sm text-cream-faint font-light">
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About the Artist
                </Link>
              </li>
              <li>
                <Link to="/commission" className="hover:text-gold transition-colors">
                  Commission a Piece
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-gold transition-colors">
                  Pricing & Rate Card
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="eyebrow !text-cream">Categories</h4>
            <ul className="flex flex-col gap-3 text-sm text-cream-faint font-light">
              {categories
                .filter((c) => c.id !== "all")
                .map((c) => (
                  <li key={c.id}>{c.label}</li>
                ))}
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="eyebrow !text-cream">Visit the Studio</h4>
            <ul className="flex flex-col gap-4 text-sm text-cream-faint font-light">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>{siteConfig.address.full}</span>
              </li>
              {siteConfig.phones.map((phone) => (
                <li key={phone.raw} className="flex items-center gap-3">
                  <Phone size={16} className="text-gold shrink-0" />
                  <a
                    href={`tel:+91${phone.raw}`}
                    className="hover:text-gold transition-colors"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-cream-faint/70 text-xs font-light text-center sm:text-left">
            © {year} {siteConfig.galleryName}. All artworks copyrighted to{" "}
            {siteConfig.artistName}.
          </p>
          <a
            href="#top"
            className="flex items-center gap-1.5 text-xs text-gold hover:text-gold-soft transition-colors group"
          >
            Back to top
            <ArrowUpRight
              size={14}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
