import React, { useRef } from "react";

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const services = [
    { title: "Land Clearing", image: "/assets/land-clearing.jpg" },
    { title: "Road Cutting", image: "/assets/road-cutting.jpg" },
    { title: "Forestry Mulching", image: "/assets/forest-mulching.jpg" },
    { title: "Dirt Work", image: "/assets/dirt-work.jpg" },
    { title: "Driveways", image: "/assets/driveways.jpg" },
    { title: "Bush Hogging", image: "/assets/bush-hogging.jpg" },
  ];

  return (
    <section className="py-20 px-4 md:px-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 tracking-tight">
        Our Services
      </h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Scroll Buttons for Desktop */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 z-10"
          aria-label="Scroll left"
        >
          &larr;
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 z-10"
          aria-label="Scroll right"
        >
          &rarr;
        </button>
        {/* Services Container */}
        <div
          ref={scrollRef}
          className="flex md:overflow-x-auto md:snap-x md:snap-mandatory scrollbar-hide md:flex-row flex-col gap-6 md:gap-8 py-4 overflow-hidden"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 md:snap-center md:w-80 w-full bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-center text-gray-800">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Additional Paragraph with CTA */}
      <div className="mt-10 text-center max-w-5xl mx-auto">
        <p className="text-lg text-gray-700 mb-4">
          And anything in between!{" "}
          <span className="font-semibold text-amber-600">
            Call today for a free estimate!
          </span>
        </p>
        <a
          href="#contact"
          className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          Get Your Free Estimate
        </a>
      </div>
    </section>
  );
}
