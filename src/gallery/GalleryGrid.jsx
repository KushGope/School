import GalleryCard from "./GalleryCard";

export default function GalleryGrid({ images, onImageSelect }) {
  if (images.length === 0) {
    return (
      <p className="py-12 text-center text-muted">
        No images found in this category.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <GalleryCard key={image.id} image={image} onSelect={onImageSelect} />
      ))}
    </div>
  );

  // return (
  //   <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  //     {images.map((image) => (
  //       <GalleryCard
  //         key={image.id}
  //         image={image}
  //         onSelect={() => onImageSelect(image)}
  //       />
  //     ))}
  //   </div>
  // );
}
