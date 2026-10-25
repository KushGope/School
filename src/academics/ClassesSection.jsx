import { classes } from "../data/academicData";
import SectionHeading from "./SectionHeading";
import ClassCard from "./ClassCard";

function ClassesSection() {
  return (
    <section className="rounded-3xl border border-black/5 bg-surface px-5 py-10 md:px-8 md:py-12">
      <SectionHeading
        eyebrow="Classes"
        title="Our Academic Classes"
        description="Age-appropriate learning programs designed to support every stage of your child's early development."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {classes.map((item) => (
          <ClassCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ClassesSection;
