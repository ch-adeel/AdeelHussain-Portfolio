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
            Full-Stack Developer
          </a>{" "}
          and Manual QA Engineer, combining development and testing expertise to
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
          <span className="underline decoration-lime-200">
            User experiences
          </span>
          . I focus strongly on customer satisfaction, efficient performance,
          and ensuring the final product works as expected across all flows
          before release. I enjoy collaborating with cross-functional teams,
          understanding business requirements, and transforming ideas into
          production-ready solutions that add measurable value.
        </p>
        <div className="max-w-6xl mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="order-2 md:order-1  bg-gradient-to-b from-gray-800 to-black p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                🤖 Engineering Values:
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                <li>
                🔹 Clean, maintainable, and well-documented code <br /> 
                </li>
                <li>
                🔹 Focus on scalability and performance <br />
                </li>
                <li>
                🔹 Collaborative mindset and strong communication <br />
                </li>
                <li>
                🔹 Continuous learning and improvement
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2  bg-gradient-to-b from-gray-800 to-black p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                🧰 Technical Expertise
              </h4>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Frontend:</strong> React.js, Redux, Angular, HTML5,
                  CSS3, SCSS, Tailwind, MUI, BootStrap
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, Express.js, REST APIs,
                  GraphQL
                </li>
                <li>
                  <strong>Languages:</strong> JavaScript (ES6+), TypeScript
                </li>
                <li>
                  <strong>Tools & DevOps:</strong> Git, Jira,
                  Agile/Scrum
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
