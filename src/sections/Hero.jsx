const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-2 rounded-lg overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url(/images/spaseekers.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(12px)",
            transform: "scale(1.1)",
          }}
        ></div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-2 rounded-lg bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 mt-36 text-center px-4 max-w-6xl mx-auto">

        {/* Top Badge */}
        <p className="text-xs md:text-sm tracking-widest uppercase text-gray-300 mb-6">
          #1 Most Recommended Content Marketing Agency
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
          We Create <br />
          Category{" "}
          <span className="inline-block align-middle mx-2">
            <img
              src="/images/spaseekers.webp"
              alt="inline"
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-cover rounded-xl inline-block"
            />
          </span>{" "}
          Leaders
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          on every searchable platform
        </p>

        {/* Platform Row */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-300 text-sm md:text-base opacity-80">
          <span>Google</span>
          <span>ChatGPT</span>
          <span>Gemini</span>
          <span>TikTok</span>
          <span>YouTube</span>
          <span>Pinterest</span>
          <span>GIPHY</span>
          <span>Reddit</span>
          <span>Amazon</span>
        </div>

<div className="flex flex-col  md:flex-row md:justify-between md:items-start pt-28">

  {/* Left */}
  <p className="text-xs md:text-sm text-gray-300 md:max-w-md leading-relaxed">
    Organic media planners creating, distributing & optimising <br />
    search-first content for SEO, Social, PR, AI and LLM search
  </p>

  {/* Right */}
  <p className="text-xs md:text-sm text-gray-300 md:text-right leading-relaxed md:ml-auto">
  4 Global Offices serving <br />
    UK, USA (New York) & EU
  </p>

</div>

      </div>
    </section>
  );
};

export default Hero;