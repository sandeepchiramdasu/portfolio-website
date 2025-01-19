import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black p-4 text-white font-semibold">
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/sandeepchiramdasu"
          target="_blank"
          rel="noreferrer"
          className="hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-110 transition-transform duration-300"
        >
          <FaGithub size={30} className="text-cyan-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/sandeep-kumar-a54205226/"
          target="_blank"
          rel="noreferrer"
          className="hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin size={30} className="text-cyan-500" />
        </a>
        <a
          href="https://www.instagram.com/sandeepchiramdasu/"
          target="_blank"
          rel="noreferrer"
          className="hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-110 transition-transform duration-300"
        >
          <FaInstagram size={30} className="text-cyan-500" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
