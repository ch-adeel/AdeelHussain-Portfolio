import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:pb-8">
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-base sm:text-lg md:text-xl mt-6">
          I’m a{" "}
          <a
            href="https://www.linkedin.com/in/adeel-hussain-139113186/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-yellow-400 hover:underline font-semibold"
          >
            {/* <span className="text-yellow-400 font-semibold"> */}
            Full-Stack MERN Developer
          </a>{" "}
          Manual QA Engineer, combining development and testing expertise to
          deliver stable, high-quality web applications.
        </p>

        <p className="text-base sm:text-lg md:text-xl mt-4">
          I’m skilled in{" "}
          <span className="underline decoration-pink-500">manual testing</span>,
          UI/UX validation,user flow analysis, regression testing, writing
          detailed test scenarios and test cases, API testing using Postman, bug
          tracking, sprint participation, and Jira ticket lifecycle management.
          My dual skillset enables me to build and validate features end-to-end,
          ensuring both functionality and reliability. I am passionate about
          writing clean code, maintaining quality standards, and delivering
          seamless, intuitive{" "}
          <a className="underline decoration-lime-200">User experiences</a>. I
          focus strongly on customer satisfaction, efficient performance, and
          ensuring the final product works as expected across all flows before
          release. I enjoy collaborating with cross-functional teams,
          understanding business requirements, and transforming ideas into
          production-ready solutions that add measurable value.
        </p>
      </div>
    </div>
  );
};

export default About;
