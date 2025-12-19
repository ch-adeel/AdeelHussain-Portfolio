import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-20 md:mt-32">
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/lajkkvob"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              autoComplete="off"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none w-full"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              autoComplete="off"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full min-h-[150px]"
            ></textarea>
            <button className="text-white bg-gradient-to-b my-8 px-6 py-3 mx-auto from-cyan-500 to-blue-500 hover:scale-110 duration-300 w-fit">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
