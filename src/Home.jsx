import Features from "./Feature/Features";
import Hero from "./utils/Hero";

const Home = () => {
  return (
    <main className="max-w-6xl w-full mx-auto mt-6 flex-1 flex flex-col gap-6">
      <Hero />
      <Features />
    </main>
  );
};

export default Home;
