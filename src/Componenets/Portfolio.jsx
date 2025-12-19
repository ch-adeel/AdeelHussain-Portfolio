import React from "react";
import { useState } from "react";
import company1 from "../assets/company.png";
import company2 from "../assets/xavor.jpg";
import company3 from "../assets/digitify.png";
import company4 from "../assets/techveria.jpg";

import { FaPlus, FaMinus } from "react-icons/fa";
import installNode from "../assets/portfolio/installNode.png";
import reactParallax from "../assets/portfolio/reactParallax.png";
import navbar from "../assets/portfolio/navbar.png";
import reactSmooth from "../assets/portfolio/reactSmooth.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import Moviewatch from "../assets/portfolio/Movie-watch.png";

const Portfolio = () => {
  const portfolios = [
    { id: 2, src: reactParallax, title: "Attendance Management System" },
    { id: 3, src: installNode, title: "Miro Boards Clone" },
    { id: 4, src: navbar, title: "E-Progression System For FYP" },
    { id: 5, src: reactSmooth, title: "Chrome Bookmarks Extension" },
    { id: 6, src: reactWeather, title: "Weather Forecast" },
    { id: 7, src: Moviewatch, title: "Blue-bird Movie-app" },
  ];
  const experiences = [
    {
      id: 1,
      company: "Orcion Systems",
      location: "London, UK",
      duration: "2022 - Present",
      image: company1,
      description:
        "Worked as a Frontend Developer & Manual QA Tester. Developed web applications using React, Next.js, and Tailwind CSS. Conducted manual testing, created test cases, and ensured smooth user experience.",
    },
    {
      id: 2,
      company: "Xavor",
      location: "Lahore DHA 5, PAK",
      duration: "2023 - 2024",
      image: company2,
      description:
        "Built responsive business applications with reusable UI components. Integrated backend REST APIs and enhanced performance and scalability. Developed full-stack Chrome extensions and MERN-based production features.",
    },
    {
      id: 3,
      company: "Digitify",
      location: "Islamabad I-10 Block-A, PAK",
      duration: "2021 - 2022",
      image: company3,
      description:
        "Built full-stack applications. Collaborated with the engineering team, performed code reviews, and improved UI/UX consistency. Used Jira for bug tracking, project planning, and delivery of production-ready features. Implemented frontend best practices while developing Angular-based applications.",
    },
    {
      id: 4,
      company: "Techveria",
      location: "Rawalpindi SADAR, PAK",
      duration: "2019 - 2020",
      image: company4,
      description:
        "Designed UI/UX for web and mobile applications. Collaborated with cross-functional teams throughout design process. Completed an internship in Adobe Illustrator focused on logo & branding design.",
    },
  ];

  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:pb-8">
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-4">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={title}
                className="w-full h-auto duration-200 hover:scale-105"
              />
              <p className="mt-2 text-center mb-3 font-semibold hover:border-b-2 hover:border-red-200 hover:text-cyan-200 hover:cursor-pointer">
                {title}
              </p>
            </div>
          ))}
        </div>

        <div name="professional-experience">
          <div className="max-w-screen-lg mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  flex justify-center text-center mb-12 border-b-4 border-gray-500 inline-block pt-9">
              Professional Experience
            </h2>

            <div className="flex flex-col gap-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
                >
                  {/* Header with Company + Location */}
                  <div
                    className="flex justify-between items-center cursor-pointer px-6 py-4"
                    onClick={() => toggleOpen(exp.id)}
                  >
                    <div>
                      <h3 className="text-xl font-semibold">{exp.company}</h3>                      
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-400 text-sm">{exp.duration}</span>
                      {openId === exp.id ? (
                        <FaMinus className="text-gray-300" />
                      ) : (
                        <FaPlus className="text-gray-300" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  {openId === exp.id && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-4">
                      <div>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                      <div className="flex justify-center md:justify-end">
                        <img
                          src={exp.image}
                          alt={exp.company}
                          className="rounded-lg w-2/3 md:w-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
