import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Wrapper */}
      <div className="fixed top-4 left-0 w-full z-50 flex justify-center">
        
        <div className="w-[95%] max-w-7xl bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-lg font-semibold tracking-tight">
            Rise at Seven
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li className="flex items-center gap-1 cursor-pointer">
              Services <span>+</span>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Industries <span>+</span>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              International <span>+</span>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              About <span>+</span>
            </li>

            {/* Work with badge */}
            <li className="relative cursor-pointer">
              Work
              <span className="absolute -top-2 -right-4 text-[10px] bg-green-300 text-black px-1.5 py-[1px] rounded-full">
                25
              </span>
            </li>

            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Webinar</li>
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-black text-white text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition">
              Get in Touch ↗
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-8 text-2xl font-semibold transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setIsOpen(false)}
        >
          <HiOutlineX size={30} />
        </button>

        <p>Services +</p>
        <p>Industries +</p>
        <p>International +</p>
        <p>About +</p>
        <p>Work</p>
        <p>Careers</p>
        <p>Blog</p>
        <p>Webinar</p>

        <button className="bg-white text-black px-6 py-3 rounded-full text-lg mt-4">
          Get in Touch11 ↗
        </button>
      </div>
    </>
  );
};

export default Navbar;