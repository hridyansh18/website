import { Link } from "react-router-dom";
import logoImg from "../assets/logo.webp";

const Logo = ({ light = true }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 group"
      aria-label="Sandeep Art Gallery — Home"
    >
      {/* Logo image — white bg wala rounded square */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden shrink-0 border border-gold/20 group-hover:border-gold/50 transition-colors duration-300">
        <img
          src={logoImg}
          alt="Sandeep Art Gallery Logo"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Text wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl sm:text-2xl tracking-wide ${
            light ? "text-cream" : "text-emerald-deep"
          }`}
        >
          Sandeep Art
        </span>
        <span className="eyebrow text-[10px] sm:text-xs">Gallery</span>
      </span>
    </Link>
  );
};

export default Logo;
