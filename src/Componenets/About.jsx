import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:pb-8">
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-base sm:text-lg md:text-xl mt-6">
          I’m a{" "}
          <a href="https://www.linkedin.com/in/adeel-hussain-139113186/" className="text-yellow-400 hover:underline font-semibold" >
          {/* <span className="text-yellow-400 font-semibold"> */}
            Full-Stack MERN Developer
          </a>{" "}
          and Manual QA Engineer, blending development and testing skills to
          deliver robust, fault-free digital solutions.
        </p>

        <p className="text-base sm:text-lg md:text-xl mt-4">
          I’m skilled in{" "}
          <span className="underline decoration-pink-500">manual testing</span>,
          reviewing UI/UX functionality, validating user flows, writing detailed
          test scenarios, regression testing, writing test cases, bug tracking,
          API testing with Postman, sprint planning, and Jira ticket creation
          and management. This combination allows me to deliver{" "}
          <span className="underline decoration-indigo-500">
            clean, tested, and reliable features
          </span>
          . I’m passionate about building intuitive interfaces, maintaining code
          quality, and continuously improving user experience. I enjoy
          collaborating with teams, understanding requirements, and transforming
          ideas into production-ready solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
