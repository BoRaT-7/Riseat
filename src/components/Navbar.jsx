import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Detect scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollingUp(false); // scrolling DOWN
      } else {
        setScrollingUp(true); // scrolling UP
      }

      // Show/hide navbar (same as your logic)
      if (currentScrollY < heroHeight) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 👉 Only show background when:
  // 1. scrolling UP
  // 2. not at top
  const showBg = scrollingUp && lastScrollY > 50;

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-4 left-0 w-full z-50 flex justify-center transition-all duration-500
        ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
        `}
      >
        <div
          className={`group w-[98%] px-3 py-3 flex items-center justify-between rounded-full border transition-all duration-300
          ${
            showBg
              ? "bg-white border-gray-200"
              : "bg-transparent border-transparent"
          }
          `}
        >
          {/* Logo */}
          <div
            className={`text-lg font-semibold tracking-tight transition-colors duration-300
            ${showBg ? "text-black" : "text-white"}
            `}
          >
            Rise at Seven
          </div>

          {/* Menu */}
          <ul
            className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-colors duration-300
            ${showBg ? "text-black" : "text-white"}
            `}
          >
            <li>Services +</li>
            <li>Industries +</li>
            <li>International +</li>
            <li>About +</li>

            <li className="relative">
              Work
              <span className="absolute -top-5 -right-4 text-[8px] bg-green-300 text-black px-1.5 rounded-full">
                25
              </span>
            </li>

            <li>Careers</li>
            <li>Blog</li>
            <li>Webinar</li>
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              className={`flex items-center gap-2 text-sm px-6 py-3 rounded-full border transition-all duration-300 hover:rounded-md
              ${
                showBg
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-white"
              }
              `}
            >
              <span className="transition-transform font-bold duration-300 hover:-translate-y-0.5">
                Get in Touch
              </span>

              <FiArrowUpRight
                className="transition-transform duration-300 hover:-translate-y-0.5"
                size={16}
              />
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiOutlineX
                  size={26}
                  className={showBg ? "text-black" : "text-white"}
                />
              ) : (
                <HiOutlineMenu
                  size={26}
                  className={showBg ? "text-black" : "text-white"}
                />
              )}
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

        <button className="bg-black text-white px-6 py-3 rounded-full text-lg mt-4">
          Get in Touch ↗
        </button>
      </div>
    </>
  );
};

export default Navbar;