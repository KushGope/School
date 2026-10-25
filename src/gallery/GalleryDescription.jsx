import React from "react";

const GalleryDescription = ({ content }) => {
  return (
    <section
      className="bg-foreground px-6 py-20 text-surface"
      aria-labelledby="gallery-description-title"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {content.eyebrow}
        </p>

        <h2
          id="gallery-description-title"
          className="mt-4 text-3xl font-bold md:text-4xl"
        >
          {content.title}
        </h2>

        <p className="mt-6 leading-8 text-surface/80">{content.text}</p>
      </div>
    </section>
  );
};

export default GalleryDescription;
