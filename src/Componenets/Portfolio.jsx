import React from 'react'
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpeg"
import installNode from "../assets/portfolio/installNode.png"
import reactParallax from "../assets/portfolio/reactParallax.png"
import navbar from "../assets/portfolio/navbar.png"
import reactSmooth from "../assets/portfolio/reactSmooth.png"
import reactWeather from "../assets/portfolio/reactWeather.jpg"
import Moviewatch from "../assets/portfolio/Movie-watch.png"

const Portfolio = () => {
  
const portfolios =[
  
    {
        id:2,
        src: reactParallax,
        title:"Attendance Management System"
    },
    {
        id:3,
        src: installNode,
        title:"Miro Boards Clone"
    },
    {
        id:4,
        src: navbar,
        title:"E-Progression System For FYP"
    },
    {
        id:5,
        src: reactSmooth,
        title:"Chrome Bookmarks Extension"
    },
    {
        id:6,
        src: reactWeather,
        title:"Weather Forecast"
    },
    {
        id:7,
        src: Moviewatch,
        title:"Blue-bird Movie-app"
    }
]

    return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-6">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
               Portfolio 
            </p>
            <p className="py-6">Check Out Some of my Work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
                portfolios.map(({id, src, title}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="Projects" className="rounded-md duration-200 hover:scale-105"/>
                    <p className="mt-4 text-center mb-3 font-semibold hover:border-b-2 hover:border-red-200 hover:text-cyan-200 hover:cursor-pointer">{title}</p>
                    </div>
            ))
            }
     
            </div>
      </div>
    </div>
  )
}

export default Portfolio
