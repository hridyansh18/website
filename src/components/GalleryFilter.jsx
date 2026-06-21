const GalleryFilter = ({ categories, active, onChange }) => {
  return (
    <div
      className="flex items-center gap-3 overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      role="tablist"
      aria-label="Filter artworks by category"
    >
      {categories.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat.id)}
            className={`shrink-0 px-5 py-2.5 text-xs sm:text-sm tracking-wide border transition-all duration-300 whitespace-nowrap ${
              isActive
                ? "bg-gold text-emerald-deep border-gold font-medium"
                : "border-gold/25 text-cream-dim hover:border-gold/60 hover:text-gold"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};

export default GalleryFilter;
