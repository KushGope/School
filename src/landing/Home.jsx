import Features from "../Feature/Features";
import Hero from "./Hero";
import { useEffect } from "react";

export default function Home() {
  // Call gotoHome automatically when Navbar loads
  useEffect(() => {
    const gotoHome = async () => {
      try {
        const response = await fetch("/school/home", {
          method: "GET",
        });

        const data = await response.text();
        if (response.ok) console.log("Backend connection successful:", data);
        else console.error("Backend connection error:", response.status, data);
      } catch (error) {
        console.error("Backend connection failed:", error);
      }
    };

    gotoHome();
  }, []);
  return (
    <main className="max-w-6xl w-full mx-auto mt-6 flex-1 flex flex-col gap-6">
      <Hero />
      <Features />
    </main>
  );
}
