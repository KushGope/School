import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../components/Icons";

export default function HeroContent() {
  return (
    <div className="space-y-6">
      <p className="text-sm font-bold uppercase tracking-widest text-primary">
        Little learners, big adventures ✨
      </p>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
        Small shoes.
        <br />
        BIG dreams.
      </h1>

      <p className="text-base text-foreground/70 max-w-md leading-relaxed">
        Where curiosity runs wild, friendships grow, and asking "Why?" is always
        encouraged. Come learn, laugh, create, and make a little magic every
        single day.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          to="/admission"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-surface px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm"
        >
          Let the Adventure Begin!
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
