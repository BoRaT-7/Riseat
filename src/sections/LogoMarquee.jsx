import { FaPlaystation } from "react-icons/fa";

const LogoMarquee = () => {
  return (
    <section className="w-full bg-white py-4 overflow-hidden">
    
      <div className="flex overflow-hidden">

        {/* First */}
        <div className="animate-marquee flex items-center gap-28 whitespace-nowrap min-w-max">

          <h2 className="text-2xl font-medium text-black">
            The agency behind
          </h2>

          <h2 className="text-3xl font-bold tracking-[4px] text-black">
            REVOLUTION
          </h2>

          <FaPlaystation className="text-6xl text-black" />

          <h2 className="text-4xl font-bold text-black">
            AXA
          </h2>

          <h2 className="text-4xl font-serif font-semibold text-black">
            Emirates
          </h2>

          <h2 className="text-4xl font-bold italic text-black">
            SharkNinja
          </h2>
        </div>

        {/* Duplicate */}
        <div className="animate-marquee flex items-center gap-28 whitespace-nowrap min-w-max ml-28">

          <h2 className="text-2xl font-medium text-black">
            The agency behind
          </h2>

          <h2 className="text-3xl font-bold tracking-[4px] text-black">
            REVOLUTION
          </h2>

          <FaPlaystation className="text-6xl text-black" />

          <h2 className="text-4xl font-bold text-black">
            AXA
          </h2>

          <h2 className="text-4xl font-serif font-semibold text-black">
            Emirates
          </h2>

          <h2 className="text-4xl font-bold italic text-black">
            SharkNinja
          </h2>
        </div>

      </div>
    </section>
  );
};

export default LogoMarquee;