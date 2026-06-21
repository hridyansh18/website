import { Link } from "react-router-dom";

const Logo = ({ light = true }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 group"
      aria-label="Sandeep Art Gallery — Home"
    >
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
