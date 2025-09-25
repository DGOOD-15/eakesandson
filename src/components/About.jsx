export default function About() {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
      <div className="md:flex md:items-center md:gap-8 max-w-5xl mx-auto">
        <div className="relative md:w-1/2 mb-6 md:mb-0">
          <img
            src="/assets/about.jpg"
            alt="About Eakes & Son"
            className="w-full rounded-lg shadow"
          />
          <img
            src="/assets/licensed.png"
            alt="100% Licensed and Insured Stamp"
            className="absolute top-0 left-0 w-1/3 transform -rotate-12 -translate-x-4 -translate-y-4"
          />
        </div>
        <p className="md:w-1/2 text-lg leading-relaxed">
          We do the dirty work! From land clearing and demolition to grading,
          drain tiles, driveways and bush hogging. We handle the tough jobs with
          precision and professionalism. Licensed, insured we bring the muscle
          and machinery.
        </p>
      </div>
    </section>
  );
}
