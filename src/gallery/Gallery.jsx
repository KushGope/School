import { useState, useMemo } from "react";

import GalleryGrid from "./GalleryGrid";
import GalleryLightbox from "./GalleryLightbox";

import {
  galleryCategories,
  galleryImages,
  galleryContent,
} from "../data/galleryData";
import GalleryFilters from "./GalleryFilters";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }

    return galleryImages.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  const openImage = (image) => {
    setSelectedImage(image);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Gallery Section */}
      {/* <GalleryHero /> */}

      <section className="px-6 py-20" aria-label="School photo gallery">
        <div className="mx-auto max-w-7xl">
          <GalleryFilters
            categories={galleryCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <GalleryGrid images={filteredImages} onImageSelect={openImage} />
        </div>
      </section>

      {/* Gallery Description */}
      {/* <GalleryDescription content={galleryContent.description} /> */}

      {/* <GalleryFooter content={galleryContent.footer} /> */}

      {/* Image Popup / Lightbox */}
      <GalleryLightbox image={selectedImage} onClose={closeImage} />
    </div>
  );
}

export default Gallery;
