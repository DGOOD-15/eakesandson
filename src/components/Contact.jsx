import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-16 bg-gradient-to-b from-gray-50 to-gray-100 text-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800 tracking-tight">
        Contact Us
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-1 sm:p-2 md:p-12 text-center max-w-full md:max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Ready to tackle your project? Contact us today for a free estimate!
          </p>
          <div className="space-y-4">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 break-words">
              <a
                href="tel:+12703508093"
                className="text-amber-600 hover:text-amber-700 transition-colors duration-300"
              >
                (270) 350-8093
              </a>
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 break-words">
              <a
                href="mailto:Eakesandsondirtworx@gmail.com"
                className="text-amber-600 hover:text-amber-700 transition-colors duration-300"
              >
                Eakesandsondirtworx@gmail.com
              </a>
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 break-words">
              Cadiz, KY 42211
            </p>
          </div>
          <a
            href="tel:+12703508093"
            className="inline-block mt-8 bg-amber-600 text-white px-8 py-4 rounded-lg shadow hover:bg-amber-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
