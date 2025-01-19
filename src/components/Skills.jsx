import React from "react";
import express from "../assets/express.webp";
import css from "../assets/css3.svg";
import html from "../assets/html.svg";
import Mongo from "../assets/Mongo.svg";
import Javascript from '../assets/javaScript.svg'
import reactjs from "../assets/reactjs.svg"
import python from "../assets/python.svg"
import node from "../assets/node.svg"
import java from "../assets/java.svg"
import tailwind from "../assets/tailwindcss.svg"
import mysql from "../assets/mysql.svg"
import git from "../assets/git.svg"
import postman  from "../assets/postman.svg"
import spring from "../assets/spring.svg"
import Springboot from "../assets/springboot.jpg"


const Skills = () => {
  const skills = [
    { name: "HTML5",
       imgSrc: html 
    },
    { name: "CSS3",
       imgSrc: css 
    },
    {
      name: "JavaScript",
      imgSrc: Javascript,
    },
    {
      name: "React",
      imgSrc: reactjs,
    },
    // {
    //   name: "Node.js",
    //   imgSrc: node,
    // },
    // { 
    //   name: "Express.js",
    //   imgSrc: express 
    // },
    {
      name: "MySQL",
      imgSrc: mysql,
    },
    // { 
    //   name: "MongoDB",
    //   imgSrc: Mongo 
    // },
    {
      name: "Java",
      imgSrc: java,
    },
    {
      name: "Python",
      imgSrc: python,
    },
    {
      name: "Tailwind",
      imgSrc: tailwind,
    },
    {
      name: "Spring",
      imgSrc: spring,
    },
    {
      name: "Springboot",
      imgSrc: Springboot,
    },
    {
      name: "Git",
      imgSrc: git,
    },
    {
      name: "Postman",
      imgSrc: postman,
    },
  ];

  return (
    <section id="skills" className="p-4 sm:p-8 lg:p-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans mb-6">Skills⚡</h2>
      <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center  rounded-md bg-gray-900 py-2 hover:scale-110 transition-transform duration-300"
          >
            <img
              src={skill.imgSrc}
              alt={skill.name}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 "
            />
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium font-montserrat text-gray-50">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
