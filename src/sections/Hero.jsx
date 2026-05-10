import {
  FaGoogle,
  FaRedditAlien,
  FaAmazon,
  FaYoutube,
} from "react-icons/fa";

import {
  SiOpenai,
  SiGooglegemini,
  SiTiktok,
  SiPinterest,
  SiGiphy,
} from "react-icons/si";

import LogoMarquee from "./LogoMarquee";

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden text-white">

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

        {/* Overlay */}
        <div className="absolute inset-2 rounded-lg bg-black/50 z-0"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col justify-between h-full px-4">

          {/* Center Content */}
          <div className="flex flex-col items-center justify-center text-center flex-1 max-w-6xl mx-auto">

            {/* Top Badge */}
            <p className="text-sm tracking-widest uppercase text-gray-300 mb-6">
              #1 Most Recommended <br />
              Content Marketing Agency
            </p>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight">
              We Create <br />
              Category{" "}
              <span className="inline-block align-middle mx-2">
                <img
                  src="/images/spaseekers.webp"
                  alt="inline"
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-cover rounded-xl inline-block"
                />
              </span>
              Leaders
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-gray-300">
              on every searchable platform
            </p>

            {/* Platform Row */}
            <div className="hidden sm:flex flex-wrap justify-center gap-6 mt-10 text-gray-300 text-sm md:text-base opacity-80">

              <div className="flex items-center gap-2">
                <FaGoogle className="text-lg" />
                <span>Google</span>
              </div>

              <div className="flex items-center gap-2">
                <SiOpenai className="text-lg" />
                <span>ChatGPT</span>
              </div>

              <div className="flex items-center gap-2">
                <SiGooglegemini className="text-lg" />
                <span>Gemini</span>
              </div>

              <div className="flex items-center gap-2">
                <SiTiktok className="text-lg" />
                <span>TikTok</span>
              </div>

              <div className="flex items-center gap-2">
                <FaYoutube className="text-lg" />
                <span>YouTube</span>
              </div>

              <div className="flex items-center gap-2">
                <SiPinterest className="text-lg" />
                <span>Pinterest</span>
              </div>

              <div className="flex items-center gap-2">
                <SiGiphy className="text-lg" />
                <span>GIPHY</span>
              </div>

              <div className="flex items-center gap-2">
                <FaRedditAlien className="text-lg" />
                <span>Reddit</span>
              </div>

              <div className="flex items-center gap-2">
                <FaAmazon className="text-lg" />
                <span>Amazon</span>
              </div>

            </div>
          </div>

          {/* Bottom Text */}
          <div className="w-full flex justify-between items-end p-4">

            <p className="hidden md:block text-sm text-gray-300 leading-relaxed">
              Organic media planners creating, distributing & optimising <br />
              search-first content for SEO, Social, PR, AI and LLM search
            </p>

            <p className="w-full md:w-auto text-center md:text-right text-xs md:text-sm text-gray-300 leading-relaxed">
              4 Global Offices serving <br />
              UK, USA (New York) & EU
            </p>

          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <LogoMarquee />
    </>
  );
};

export default Hero;