const Intro = () => {
  return (
    <section className="rounded-3xl border border-black/5 bg-surface p-8 md:p-12">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Little Minds, Big Magic ✨
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Skip the Snooze.
            <br />
            Spark the "Whoa!"
          </h2>

          <p className="mt-5 leading-7 text-foreground/70">
            At KamiSama Academy, curiosity is encouraged, questions are
            celebrated, and even little mistakes lead to big discoveries.
          </p>

          <p className="mt-4 leading-7 text-foreground/70">
            Through play, creativity, and hands-on learning, we turn tiny "Why?"
            moments into wonderful "Aha!" moments.
          </p>
        </div>

        <div className="rounded-card border border-border bg-background p-6 md:p-8">
          <h3 className="text-xl font-bold text-foreground">
            Growing Awesome Humans 🌱
          </h3>

          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary">✓</span>
              <span className="text-sm leading-6 text-foreground/80">
                Little voices, big conversations
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-bold text-primary">✓</span>
              <span className="text-sm leading-6 text-foreground/80">
                ABCs, 123s, and "I did it!" moments
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-bold text-primary">✓</span>
              <span className="text-sm leading-6 text-foreground/80">
                Imaginations with no off switch
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-bold text-primary">✓</span>
              <span className="text-sm leading-6 text-foreground/80">
                Kind hearts and confident minds
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-bold text-primary">✓</span>
              <span className="text-sm leading-6 text-foreground/80">
                Little steps toward big adventures
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
