import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ["about", "projects", "skills", "contact"];

  return (
    <header className="sticky top-0 bg-black text-cyan-500 p-4 shadow-lg z-10 font-montserrat">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        
        <h1 className="text-3xl font-bold">
          <Link
            to="hero" 
            smooth={true}
            duration={500}
            className="cursor-pointer font-serif pl-10 "
          >
            SK
          </Link>
        </h1>

        {/* Hamburger Menu */}
        <button
          className="block sm:hidden text-cyan-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navbar Links - Desktop */}
        <ul className="hidden sm:flex space-x-6 text-lg">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                offset={-70}
                duration={300}
                spy={true}
                className={`cursor-pointer py-2 px-4 rounded-md transition-all duration-100 font-serif ${
                  activeSection === section
                    ? "bg-cyan-500 text-black"
                    : "hover:bg-cyan-500 hover:text-black "
                }`}
                aria-label={`Navigate to ${section} section`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Side Menu - Mobile */}
        <div
          className={`fixed top-0 right-0 h-[50vh] w-2/3 bg-black text-cyan-500 p-6 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 sm:hidden z-20`}
        >
          <button
            className="absolute top-4 right-4 text-cyan-500"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col space-y-4 mt-10">
            {sections.map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  offset={-70}
                  duration={300}
                  spy={true}
                  onClick={() => setIsMenuOpen(false)}
                  className={`cursor-pointer py-2 px-4 rounded-md transition-all duration-100 font-serif ${
                    activeSection === section
                      ? "bg-cyan-500 text-black"
                      : "hover:text-cyan-400"
                  }`}
                  aria-label={`Navigate to ${section} section`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <hr className="text-gray-600"/>
    </header>
  );
};

export default Header;
