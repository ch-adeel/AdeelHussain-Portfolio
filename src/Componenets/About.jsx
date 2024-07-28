import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
         <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>      
      <p className="text-xl mt-10 text-white">
      I’m a  <a href="https://www.linkedin.com/in/adeel-hussain-139113186/" className='text-yellow-400'> "Full-Stack Developer"</a>, Graphic Designer, and WordPress Developer with a robust background in Software Engineering. Combining my technical expertise and creative flair, I specialize in crafting seamless and visually appealing digital experiences.
      </p>
        
      <br />
      <p className="text-xl text-white">
      Over the past decade, I’ve built a diverse portfolio that spans software engineering, web development, and graphic design. Starting as a software engineer, I quickly expanded my skills to include full-stack development and WordPress, enabling me to manage both the technical and visual aspects of projects. My design journey began with a passion for creating compelling visuals, which I’ve refined into a professional graphic design practice.
      </p>
    </div>
    </div>
  )
}

export default About
