import { features } from "../data/academicData";
import SectionHeading from "./SectionHeading";

function TeachingSection() {
  return (
    <section className="rounded-3xl bg-primary p-8 text-surface md:p-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Teaching Method"
          title="How We Make Learning Fun"
          light
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-card border border-surface/20 bg-surface/10 p-6 backdrop-blur"
            >
              <div className="text-4xl">{feature.icon}</div>

              <h3 className="mt-5 text-xl font-bold text-surface">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-surface/80">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeachingSection;
