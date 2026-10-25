import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="bg-surface rounded-3xl p-8 md:p-12 border border-black/5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <HeroContent />
      <HeroIllustration />
    </section>
  );
}
