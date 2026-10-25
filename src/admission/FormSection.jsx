const SECTION_TITLE_CLASS =
  "mb-6 border-b border-border pb-3 text-xl font-bold text-foreground md:text-2xl";

function FormSection({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className={SECTION_TITLE_CLASS}>{title}</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">{children}</div>
    </section>
  );
}

export default FormSection;
