import logo from "../assets/logo-noBG.jpg";

export default function Header() {
  return (
    <header className="bg-red-500 text-black py-16 px-4 text-center md:text-left rounded-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center md:justify-between gap-4">
        <img src={logo} alt="Eakes & Son Logo" className="w-32 md:w-60" />

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold mb-2 text-center">
            Eakes & Son Dirt Worx
          </h1>
          <p className="text-lg mb-4 text-center">
            Professional Dirt & Excavation Services
          </p>
          <a
            href="#contact"
            className="bg-white text-red-500 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
