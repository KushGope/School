import { useNavigate } from "react-router-dom";

function Academics() {
  const navigate = useNavigate();
  const classes = [
    {
      title: "Play Group",
      age: "2.5 – 3.5 Years",
      description:
        "A fun and engaging environment where children begin learning through play, activities and interaction.",
    },
    {
      title: "Nursery",
      age: "3.5 – 4.5 Years",
      description:
        "Children develop early literacy, numeracy, communication and social skills through creative activities.",
    },
    {
      title: "LKG",
      age: "4.5 – 5.5 Years",
      description:
        "A balanced learning program focused on language, numbers, creativity, confidence and basic concepts.",
    },
    {
      title: "UKG",
      age: "5.5 – 6.5 Years",
      description:
        "Children strengthen their academic foundation and prepare for the transition to primary education.",
    },
  ];

  const subjects = [
    "English",
    "Mathematics",
    "Environmental Studies",
    "General Knowledge",
    "Art & Craft",
    "Rhymes & Storytelling",
  ];

  const features = [
    {
      icon: "📚",
      title: "Strong Foundation",
      text: "We focus on building strong academic fundamentals from an early age.",
    },
    {
      icon: "🎨",
      title: "Creative Learning",
      text: "Art, craft, activities and storytelling make learning enjoyable.",
    },
    {
      icon: "🧠",
      title: "Activity Based",
      text: "Children learn concepts through practical and interactive activities.",
    },
    {
      icon: "❤️",
      title: "Child Friendly",
      text: "Our classrooms encourage confidence, curiosity and positive learning.",
    },
  ];

  return (
    <div className=" bg-[#F8F5EF] text-slate-800">
      {/* Hero Section */}
      <section className="bg-accent-green px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em]">
            Learning & Development
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">Our Academics</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            We provide a joyful and nurturing learning environment where
            children develop knowledge, creativity, confidence and essential
            life skills.
          </p>
        </div>
      </section>

      {/* Academic Introduction */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-widest text-amber-700">
              Our Approach
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Learning That Inspires Young Minds
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              At Sumitra Devi Children’s Academy, we believe that every child
              learns differently. Our academic program combines classroom
              learning with activities, creativity, communication and
              exploration.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our teachers encourage children to ask questions, explore new
              ideas and learn through meaningful experiences.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold">Our Learning Goals</h3>

            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <span>✓</span>
                <span>Develop strong communication skills</span>
              </li>

              <li className="flex gap-3">
                <span>✓</span>
                <span>Build early reading and mathematical skills</span>
              </li>

              <li className="flex gap-3">
                <span>✓</span>
                <span>Encourage creativity and imagination</span>
              </li>

              <li className="flex gap-3">
                <span>✓</span>
                <span>Develop confidence and social skills</span>
              </li>

              <li className="flex gap-3">
                <span>✓</span>
                <span>Prepare children for future academic learning</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-widest text-amber-700">
              Classes
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Our Academic Classes
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Age-appropriate learning programs designed to support every stage
              of your child's early development.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {classes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-[#F8F5EF] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4C5AB] text-xl font-bold">
                  {item.title.charAt(0)}
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-2 text-sm font-semibold text-amber-700">
                  {item.age}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-widest text-amber-700">
                Curriculum
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Areas of Learning
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Our curriculum introduces children to important academic
                concepts while giving them opportunities to explore their
                creativity and interests.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {subjects.map((subject) => (
                <div
                  key={subject}
                  className="rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <span className="mr-2 text-amber-700">◆</span>
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-widest text-[#D4C5AB]">
              Teaching Method
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              How We Make Learning Fun
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-4xl">{feature.icon}</div>

                <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#D4C5AB] px-8 py-14 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Give Your Child a Strong Start
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-700">
            Discover a caring learning environment where children can learn,
            explore, create and grow with confidence.
          </p>

          <button
            onClick={() => navigate("/admission#")}
            className="mt-8 rounded-full bg-slate-900 px-8 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            Apply for Admission
          </button>
        </div>
      </section>
    </div>
  );
}

export default Academics;
