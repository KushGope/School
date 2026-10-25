function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-12 text-center">
      <p
        className={`font-semibold uppercase tracking-widest ${
          light ? "text-surface/80" : "text-primary"
        }`}
      >
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl ${
            light ? "text-surface/80" : "text-foreground/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
