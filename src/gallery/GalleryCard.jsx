export default function GalleryCard({ image, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(image)}
      aria-label={`View ${image.title}`}
      className="group block w-full overflow-hidden rounded-2xl bg-surface text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={image.image}
          alt={image.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
          <div className="p-6 text-white">
            <p className="text-sm font-medium text-[#b8d5bb]">
              {image.category}
            </p>

            <h3 className="mt-1 text-xl font-bold">{image.title}</h3>
          </div>
        </div>
      </div>
    </button>
  );
}
