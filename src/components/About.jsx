import React from "react";
import cartoon from '../assets/cartoon.jpg';

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-10 px-6 sm:px-8 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start lg:gap-16">
          {/* Text Section */}
          <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 text-cyan-500">About Me💫</h2>
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-montserrat">
              A dedicated Full Stack developer skilled in crafting responsive, user-friendly websites. 
              With expertise in frontend and backend technologies, I deliver seamless digital 
              experiences tailored to client goals and focused on quality and impact.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-6 lg:mt-0 lg:w-1/3 flex justify-center">
            <img 
              src={cartoon} 
              alt="Sandeep"
              className="w-64 h-64 rounded-full border-4 border-cyan-500"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
