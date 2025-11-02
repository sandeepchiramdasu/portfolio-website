import React, { useState } from "react";
import weather from "../assets/weather.png";
import quiz from "../assets/quiz.png";
import signup from "../assets/signup.png";
import mart from "../assets/mart.png"
import todo from "../assets/todo.png"
import calcy from "../assets/calcy.png";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "C - Mart",
      description:
        "Developed an e-commerce website using React.js with responsive design for a seamless user experience across devices. Features include dynamic product listings and a shopping cart powered by React state management and Hooks.",
      imgSrc: mart,
      link: "https://cmartwebapp.netlify.app/",
    },
    {
      title: "Weather App",
      description:
        "This Weather Application built with React.js dynamically fetches weather data for a searched city or the user's current location using the OpenWeather API.",
      imgSrc: weather,
      link: "https://weatherapz.netlify.app/",
    },
    {
      title: "Quiz App",
      description:
        "Quiz Application built with React.js, offering a variety of technology-related questions. The app features a sleek UI, timer functionality, and a submit button for seamless quiz completion.",
      imgSrc: quiz,
      link: "https://quizapz.netlify.app/",
    },
    { title: "SignUp-Login",
      description: "A signup/login page built with React.js includes forms for user registration and login, with fields for email/username and password. It handles form validation, state management, and displays error/success messages based on user input",
      imgSrc: signup,
      link: "https://signuploginapz.netlify.app/"
    }
      ,
    { title: "To-Do App",
     description: "A simple React-based To-Do List app that allows users to add, toggle, and remove tasks.The app offers an easy-to-use interface for managing tasks with a focus on simplicity and functionality.",
     imgSrc: todo,
     link:"https://santodoapp.netlify.app/"
    },
    { title: "Calculator",
     description: "A simple calculator app built with React.js. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division. The UI adapts for both desktop and mobile", 
     imgSrc: calcy,
     link:"https://sandycalcy.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="p-4 sm:p-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 text-cyan-500">Projects🔑</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
          <div
            key={index}
            className="border p-4 rounded-md bg-gray-900 hover:scale-105 transition-transform duration-300"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover mb-4 rounded-md"
              />
            </a>
            <h3 className="text-lg sm:text-xl md:text-2xl  mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-50 font-montserrat">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 bg-cyan-500 text-black py-2 px-4 rounded-md text-sm sm:text-base md:text-lg"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default Projects;
