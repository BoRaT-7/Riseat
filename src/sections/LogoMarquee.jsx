import { FaPlaystation } from "react-icons/fa";

const LogoMarquee = () => {
  return (
    <>
      {/* Logo Marquee Section */}
      <section className="w-full bg-white py-6 overflow-hidden">
        <div className="flex items-center">

          {/* Left Static Text */}
          <div className="shrink-0 px-6 md:px-10 border-r border-gray-200 z-10 bg-white">
            <p className="text-sm md:text-lg font-medium text-black whitespace-nowrap">
              The agency behind...
            </p>
          </div>

          {/* Marquee Area */}
          <div className="flex overflow-hidden w-full">

            {/* First Row */}
            <div className="animate-marquee flex items-center gap-20 md:gap-28 whitespace-nowrap min-w-max pl-10">

              <h2 className="text-2xl md:text-3xl font-bold tracking-[4px] text-black">
                REVOLUTION
              </h2>

              <FaPlaystation className="text-5xl md:text-6xl text-black" />

              <h2 className="text-3xl md:text-4xl font-bold text-black">
                AXA
              </h2>

              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black">
                Emirates
              </h2>

              <h2 className="text-3xl md:text-4xl font-bold italic text-black">
                SharkNinja
              </h2>
            </div>

            {/* Duplicate Row */}
            <div className="animate-marquee flex items-center gap-20 md:gap-28 whitespace-nowrap min-w-max ml-20 md:ml-28">

              <h2 className="text-2xl md:text-3xl font-bold tracking-[4px] text-black">
                REVOLUTION
              </h2>

              <FaPlaystation className="text-5xl md:text-6xl text-black" />

              <h2 className="text-3xl md:text-4xl font-bold text-black">
                AXA
              </h2>

              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black">
                Emirates
              </h2>

              <h2 className="text-3xl md:text-4xl font-bold italic text-black">
                SharkNinja
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full min-h-screen bg-white px-5 md:px-10 lg:px-16 py-10 overflow-hidden">

        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* Left Text */}
          <div className="max-w-xl pt-8">
            <p className="text-black text-[20px] md:text-[28px] leading-[1] font-medium tracking-tight">
              A global team of search-first content marketers
              engineering semantic relevancy & category
              signals for both the internet and people
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start">

            {/* Heading */}
       <div className="relative max-w-[900px]">

  <h1
    className="text-black font-semibold tracking-[-4px] leading-[0.9]
    text-[48px]
    sm:text-[60px]
    md:text-[78px]
    lg:text-[88px]
    xl:text-[110px]"
  >
    Driving Demand &

    <span className="flex items-center gap-1 whitespace-nowrap">
      Discovery

      <img
        src="/images/spaseekers.webp"
        alt="team"
        className="
        w-[55px] h-[55px]
        sm:w-[65px] sm:h-[65px]
        md:w-[78px] md:h-[78px]
        lg:w-[88px] lg:h-[88px]
        xl:w-[105px] xl:h-[105px]
        object-cover rounded-2xl"
      />
    </span>
  </h1>

</div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-5 mt-10">

              <button className="group bg-white hover:bg-black transition-all duration-300 rounded-full px-8 py-4 flex items-center gap-3">
                <span className="text-black group-hover:text-white text-xl font-medium">
                  Our Story
                </span>

                <span className="text-black group-hover:text-white text-xl transition-all duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>

              <button className="group flex items-center gap-3">
                <span className="text-black text-xl font-medium">
                  Our Services
                </span>

                <span className="text-black text-xl transition-all duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoMarquee;