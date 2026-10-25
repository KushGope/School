import { useEffect } from "react";

export default function GalleryLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-lightbox-title"
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-surface text-foreground shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          ✕
        </button>

        <img
          src={image.image}
          alt={image.title}
          className="max-h-[75vh] w-full object-contain"
        />

        <div className="p-5">
          <p className="text-sm font-medium text-primary">{image.category}</p>

          <h2 id="gallery-lightbox-title" className="mt-1 text-2xl font-bold">
            {image.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
