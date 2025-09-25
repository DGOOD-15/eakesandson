import React, { useState } from "react";

export default function Gallery() {
  // Data array: Each "project" from a Facebook post (add your real images/captions here)
  const projects = [
    {
      caption:
        "Got this yard leveled back out, topped with some grass seed and straw!",
      images: [
        "/src/assets/gallery/yard-1.jpg",
        "/src/assets/gallery/yard-2.jpg",
        "/src/assets/gallery/yard-3.jpg",
        "/src/assets/gallery/yard-4.jpg",
        "/src/assets/gallery/yard-5.jpg",
      ],
    },
    {
      caption:
        "This property has been revitalized! We take care of the dirty work, freeing you from the hassle. Forestry mulching is the solution you need, and we're here to provide it",
      images: [
        "/src/assets/gallery/property-1.jpg",
        "/src/assets/gallery/property-2.jpg",
        "/src/assets/gallery/property-3.jpg",
        "/src/assets/gallery/property-4.jpg",
        "/src/assets/gallery/property-5.jpg",
        "/src/assets/gallery/property-6.jpg",
        "/src/assets/gallery/property-7.jpg",
        "/src/assets/gallery/property-8.jpg",
        "/src/assets/gallery/property-9.jpg",
      ],
    },
    {
      caption: "Did a little bushhogging for this customer! ",
      images: [
        "/src/assets/gallery/bushhogging-1.jpg",
        "/src/assets/gallery/bushhogging-2.jpg",
        "/src/assets/gallery/bushhogging-3.jpg",
        "/src/assets/gallery/bushhogging-4.jpg",
        "/src/assets/gallery/bushhogging-5.jpg",
        "/src/assets/gallery/bushhogging-6.jpg",
        "/src/assets/gallery/bushhogging-7.jpg",
      ],
    },
    {
      caption:
        "Successfully renovated this customer's driveway, providing a fresh new look with a newly installed drain tile, regraveling, and expanding the width for a more spacious parking area",
      images: [
        "/src/assets/gallery/driveway-1.jpg",
        "/src/assets/gallery/driveway-2.jpg",
      ],
    },
    {
      caption: "Got this customer bush-hogged",
      images: [
        "/src/assets/gallery/bushhogged-1.jpg",
        "/src/assets/gallery/bushhogged-2.jpg",
        "/src/assets/gallery/bushhogged-3.jpg",
      ],
    },
    {
      caption:
        "This client needed a creek filled in to access the other side of the field. We were delighted to assist one of our local farmers!",
      images: [
        "/src/assets/gallery/creek-1.jpg",
        "/src/assets/gallery/creek-2.jpg",
        "/src/assets/gallery/creek-3.jpg",
      ],
    },
    {
      caption: "We've been busy cutting in these two roads!",
      images: [
        "/src/assets/gallery/road-1.jpg",
        "/src/assets/gallery/road-2.jpg",
        "/src/assets/gallery/road-3.jpg",
        "/src/assets/gallery/road-4.jpg",
        "/src/assets/gallery/road-5.jpg",
        "/src/assets/gallery/road-6.jpg",
        "/src/assets/gallery/road-7.jpg",
        "/src/assets/gallery/road-8.jpg",
      ],
    },
    {
      caption:
        "Did this regrading job to provide customers with improved access to and around their shop. ",
      images: [
        "/src/assets/gallery/shop-1.jpg",
        "/src/assets/gallery/shop-2.jpg",
        "/src/assets/gallery/shop-3.jpg",
      ],
    },
    {
      caption:
        "We specialize in land clearing, providing a comprehensive range of services including mulching and bush hogging to meet all your dirt work requirements ",
      images: [
        "/src/assets/gallery/landclearing-1.jpg",
        "/src/assets/gallery/landclearing-2.jpg",
        "/src/assets/gallery/landclearing-3.jpg",
      ],
    },
    {
      caption:
        "Before and after photos. Land clearing and mulching efforts culminated in a refreshed backyard oasis, enabling the customer to maximize her outdoor living experience.",
      images: [
        "/src/assets/gallery/mulching-1.jpg",
        "/src/assets/gallery/mulching-2.jpg",
        "/src/assets/gallery/mulching-3.jpg",
        "/src/assets/gallery/mulching-4.jpg",
        "/src/assets/gallery/mulching-5.jpg",
        "/src/assets/gallery/mulching-6.jpg",
      ],
    },
    {
      caption:
        "Gave this driveway a brand new look and provided the owners with a refreshed appearance, providing top-notch service all around.",
      images: [
        "/src/assets/gallery/driveway2-1.jpg",
        "/src/assets/gallery/driveway2-2.jpg",
      ],
    },
    {
      caption:
        "We placed 650 tons of fill dirt to establish a backyard and added an underground drainage system for this house.",
      images: [
        "/src/assets/gallery/backyard-1.jpg",
        "/src/assets/gallery/backyard-2.jpg",
        "/src/assets/gallery/backyard-3.jpg",
        "/src/assets/gallery/backyard-4.jpg",
        "/src/assets/gallery/backyard-5.jpg",
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (projectIndex) => {
    setSelectedProject(projects[projectIndex]);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % (selectedProject?.images.length || 1)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + (selectedProject?.images.length || 1)) %
        (selectedProject?.images.length || 1)
    );
  };

  if (selectedProject) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="relative max-w-4xl w-full">
          {/* Close Button */}
          <button
            onClick={closeProject}
            className="absolute top-4 right-4 text-white text-2xl z-10 bg-amber-600 p-2 rounded-full hover:bg-amber-700 transition-colors"
          >
            &times;
          </button>
          {/* Current Image */}
          <img
            src={selectedProject.images[currentImageIndex]}
            alt={`${selectedProject.caption} - Image ${currentImageIndex + 1}`}
            className="w-full h-96 object-contain rounded-xl shadow-2xl"
          />
          {/* Caption */}
          <p className="text-white text-center mt-4 text-lg font-semibold">
            {selectedProject.caption}
          </p>
          {/* Image Counter */}
          <p className="text-white text-center mt-2">
            {currentImageIndex + 1} / {selectedProject.images.length}
          </p>
          {/* Navigation Arrows */}
          {selectedProject.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full hover:bg-amber-700 transition-colors"
              >
                &larr;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full hover:bg-amber-700 transition-colors"
              >
                &rarr;
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 md:px-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 tracking-tight">
        Our Work
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => openProject(index)}
            className="relative cursor-pointer rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.images[0]} // Hero image (first from post)
              alt={project.caption}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white text-lg font-semibold p-4 truncate">
                {project.caption}
              </p>
            </div>
            {project.images.length > 1 && (
              <div className="absolute top-4 right-4 bg-amber-600 text-white px-2 py-1 rounded text-sm font-bold">
                +{project.images.length - 1} more
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
