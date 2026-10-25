import React from "react";

const GalleryHero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary px-6 py-20 text-surface">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-surface/80">
            Memories & Moments
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            School Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-surface/90">
            Explore the memorable moments, activities, celebrations and learning
            experiences of our students.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GalleryHero;
