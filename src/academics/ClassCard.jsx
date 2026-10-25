function ClassCard({ item }) {
  return (
    <div className="rounded-card border border-border bg-background p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-surface">
        {item.title.charAt(0)}
      </div>

      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>

      <p className="mt-2 text-sm font-semibold text-primary">{item.age}</p>

      <p className="mt-3 text-sm leading-6 text-foreground/70">
        {item.description}
      </p>
    </div>
  );
}

export default ClassCard;
