import { subjects } from "../data/academicData";

function SubjectsSection() {
  return (
    <section className="rounded-3xl border border-black/5 bg-surface p-8 md:p-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Curious Minds Club ✨
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A Little Bit of Everything!
            </h2>

            <p className="mt-5 max-w-md leading-7 text-foreground/70">
              From ABCs to masterpieces, every day brings something new to
              discover. Big questions welcome. Boredom not invited!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {subjects.map((subject) => (
              <div
                key={subject}
                className="flex items-start gap-2 rounded-card border border-border bg-background p-4 text-sm text-foreground transition hover:shadow-sm"
              >
                <span className="text-primary">✦</span>
                <span>{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubjectsSection;
