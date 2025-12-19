import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
<div
  name="home"
  className="w-full bg-gradient-to-b from-black via-black to-gray-800 py-16"
>
  <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
    {/* Text Section */}
    <div className="flex flex-col justify-center order-1 md:order-1">
      <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mt-8 md:mt-0 mb-4 sm:mb-6">
        I’m a Full-Stack MERN Developer & QA Tester
      </h2>
      <p className="text-gray-400 text-base sm:text-lg md:text-lg mb-6 max-w-md">
        I build modern, responsive web applications using React, Next.js, TypeScript, Tailwind CSS, Bootstrap, Material UI, and backend tools like Express.js & MongoDB. I also ensure apps are reliable through manual testing.
      </p>

      {/* Portfolio Button - visible on desktop under text */}
      <div className="hidden md:flex md:justify-start">
        <Link
          to="portfolio"
          smooth
          duration={500}
          className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        >
          Portfolio
          <span className="group-hover:rotate-90 duration-300">
            <MdKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex justify-center md:justify-end order-2">
      <img
        src={HeroImage}
        alt="my-picture"
        className="rounded-2xl w-2/3 sm:w-2/3 md:w-3/5 lg:w-2/3"
      />
    </div>

    {/* Portfolio Button - visible on mobile under image */}
    <div className="flex justify-center md:hidden mt-6 order-3">
      <Link
        to="portfolio"
        smooth
        duration={500}
        className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
      >
        Portfolio
        <span className="group-hover:rotate-90 duration-300">
          <MdKeyboardArrowRight size={25} className="ml-1" />
        </span>
      </Link>
    </div>
  </div>
</div>



  );
};

export default Home;
