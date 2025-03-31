import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import ankitkumar from "../../assets/ankitkumar.jpg";
import anandsoni from "../../assets/AnandSoni.png";
import ankitpatel from "../../assets/ankitpatel.jpg";
import bg4 from "../../assets/bg4.png";

const mentors = [
  { 
    name: "Ankit Kumar", 
    linkedin: "https://www.linkedin.com/in/ankitkumar0905/", 
    image: ankitkumar 
  },
  { 
    name: "Anand Soni", 
    linkedin: "https://www.linkedin.com/in/anandsoni992/", 
    image: anandsoni 
  },
  { 
    name: "Ankit Patel", 
    linkedin: "https://www.linkedin.com/in/ankit-patel-563b9927b/", 
    image: ankitpatel 
  }
];

const MentorSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mentors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mentors.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="mx-0 md:-mx-3 overflow-x-hidden relative bg-cover bg-center text-black py-16 px-6 w-[780px] md:w-screen"
      style={{ backgroundImage: `url(${bg4})` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        <h2 className="text-7xl font-extrabold text-center bg-gradient-to-r from-white to-black bg-clip-text font-orbitron">
          Meet Our Mentors
        </h2>
        <div className="relative flex items-center justify-center w-full mt-10">
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 z-20 text-gray-700 hover:text-gray-900 transform hover:scale-110 transition-all duration-300"
          >
            <SlArrowLeft size={60} className="text-blue-900 hover:drop-shadow-lg" />
          </button>

          <div className="relative flex w-[800px] h-[400px] overflow-hidden items-center">
            {mentors.map((mentor, index) => {
              const position = (index - currentIndex + mentors.length) % mentors.length;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    position === 0
                      ? "md:left-12 left-36 scale-95 translate-x-[-100px] opacity-45 z-5"
                      : position === 1
                      ? "left-1/2 transform -translate-x-1/2 scale-125 h-[320px] opacity-100 z-10"
                      : position === 2
                      ? "md:right-12 right-36 scale-95 translate-x-[100px] opacity-45 z-5"
                      : "opacity-0 scale-75 z-0"
                  }`}
                >
                  <div
                    className={`p-6 rounded-lg shadow-sm text-center w-[220px] h-[300px] flex flex-col justify-center items-center ${
                      position === 0
                        ? "bg-gradient-to-r from-gray-100 to-gray-300"
                        : position === 1
                        ? "bg-gradient-to-b from-gray-800 to-zinc-200"
                        : position === 2
                        ? "bg-gradient-to-l from-gray-100 to-gray-400"
                        : "bg-gray-100"
                    }`}
                  >
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-24 h-32 mx-auto rounded-full border-2 border-gray-600"
                    />
                    <h3 className="text-xl font-archivo mt-4">{mentor.name}</h3>
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-blue-600 hover:text-blue-800"
                    >
                      <FaLinkedin size={30} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 z-20 text-gray-700 hover:text-gray-900 transform hover:scale-110 transition-all duration-300"
          >
            <SlArrowRight size={60} className="text-blue-900 hover:drop-shadow-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorSection;