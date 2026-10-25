export default function GalleryFooter({ content }) {
  return (
    <section className="bg-foreground px-6 py-20 text-surface">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {content.eyebrow}
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-4xl">{content.title}</h2>

        <p className="mt-6 leading-8 text-surface/80">{content.description}</p>
      </div>
    </section>
  );
}
