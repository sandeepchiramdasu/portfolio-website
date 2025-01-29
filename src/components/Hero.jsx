import React from 'react'
import { FaLinkedin, FaGithub, FaHackerrank, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
    <section
  id="hero"
  className="relative text-white py-16 px-6 sm:px-10 md:px-16 lg:px-24"
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative container mx-auto text-left">
    <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-cyan-500">Hello! I'm-</h1>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4">
      Sandeep Kumar.
    </h1>
    <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-500">
      <span className="text-2xl font-semibold text-white">Full Stack Developer.</span> Let's explore my journey and projects!
    </p>
    <p className="text-base sm:text-lg md:text-xl mb-6">
      🚀 Currently Specializing in <span className="text-cyan-300">React, Springboot</span>
    </p>
    <p className="text-base sm:text-lg md:text-xl mb-6">
    📍 Associate Software Engineer at <span className="text-cyan-300">Movate</span>
    </p>
    <div className="flex gap-6 mb-6">
      <a
        href="https://www.linkedin.com/in/sandeep-kumar-a54205226/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 text-white py-2 px-2 rounded-md flex items-center gap-2 hover:bg-gray-900 hover:scale-110 transition-transform duration-300"
      >
        <FaLinkedin size={20} className="text-cyan-500" />
        LinkedIn
      </a>
      <a
        href="https://github.com/sandeepchiramdasu"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 text-white py-2 px-2 rounded-md flex items-center gap-2 hover:bg-gray-900 hover:scale-110 transition-transform duration-300"
      >
        <FaGithub size={20} className="text-cyan-500" />
        GitHub
      </a>
      <a
        href="#contact"
        className="bg-gray-900 text-white py-2 px-2 rounded-md flex items-center gap-2 hover:bg-gray-900 hover:scale-110 transition-transform duration-300"
      >
        <FaEnvelope size={20} className="text-cyan-500" />
        Email
      </a>
    </div>
  </div>
</section>

    </>
  )
}

export default Hero
