import bgImage from "../assets/spaseekers.webp";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Space Seekers
        </h1>

        <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
          Explore the universe with us and discover new possibilities beyond the stars.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;