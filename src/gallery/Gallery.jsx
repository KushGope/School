import { useState } from "react";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", "Classroom", "Events", "Activities", "Sports"];

  const images = [
    {
      id: 1,
      title: "Happy Classroom",
      category: "Classroom",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "School Activity",
      category: "Activities",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Annual Function",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Outdoor Sports",
      category: "Sports",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      title: "Creative Learning",
      category: "Activities",
      image:
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      title: "Learning Together",
      category: "Classroom",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 7,
      title: "School Celebration",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 8,
      title: "Fun & Games",
      category: "Sports",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 9,
      title: "Art & Creativity",
      category: "Activities",
      image:
        "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-slate-800">
      {/* Hero Section */}
      <section className="bg-[#D4C5AB] px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">
            Memories & Moments
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            School Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Explore the memorable moments, activities, celebrations and learning
            experiences of our students.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Category Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-[#D4C5AB]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Images */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-bottom from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="p-6 text-white">
                      <p className="text-sm font-medium text-[#D4C5AB]">
                        {item.category}
                      </p>

                      <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Description */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4C5AB]">
            Every Moment Matters
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Learning, Growing & Creating Memories
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            From classroom activities to celebrations and outdoor games, every
            moment at our school is an opportunity for children to learn,
            explore and create wonderful memories.
          </p>
        </div>
      </section>

      {/* Image Popup / Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-black"
            >
              ✕
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] w-full object-contain"
            />

            <div className="p-5">
              <p className="text-sm text-amber-700">{selectedImage.category}</p>

              <h3 className="mt-1 text-2xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
