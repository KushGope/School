import AcademicHero from "./Hero";
import Intro from "./Intro";
import ClassesSection from "./ClassesSection";
import SubjectsSection from "./SubjectsSection";
import TeachingSection from "./TeachingSection";

function Academics() {
  return (
    <main className="mx-auto mt-6 flex w-full max-w-6xl flex-1 flex-col gap-6 bg-background px-4 font-sans text-foreground md:px-0">
      {/* Hero Section */}
      <AcademicHero />
      {/* Academic Introduction */}
      <Intro />
      <ClassesSection />

      <SubjectsSection />

      <TeachingSection />
    </main>
  );
}

export default Academics;
