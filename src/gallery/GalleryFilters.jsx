export default function GalleryFilters({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div
      className="mb-12 flex flex-wrap justify-center gap-3"
      aria-label="Filter gallery by category"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            aria-pressed={isActive}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "bg-foreground text-surface shadow-lg"
                : "bg-surface text-foreground/80 hover:bg-primary hover:text-surface"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
