import React from "react";
import akash from "../../assets/akash.jpeg";
import aman from "../../assets/aman.jpg";
import aryan from "../../assets/aryan.jpg";
import dipu from "../../assets/dipu.png";
import deepika from "../../assets/deepika.jpg";
import md from "../../assets/md.jpg";
import prakhar from "../../assets/prakhar.jpg";
import naman from "../../assets/naman.jpg";
import bg5 from "../../assets/bg4.png";

const students = [
  { name: "Dipu Kumar", year: "2nd Year", domain: "Android Development", achievements: "Developed multiple apps, Earned 4+ certifications in Android Development.", image: dipu },
  { name: "Aryan Sharma", year: "3rd Year", domain: "Android Development", achievements: "Built and deployed 10+ apps on Play Store. Participated in 5+ hackathons, won 2 of them.", image: aryan },
  { name: "Aman Mishra", year: "2nd Year", domain: "Machine Learning", achievements: "Created 5+ major projects including a predictive model for stock prices. SIH 2024 Finalist.", image: aman },
  { name: "Deepika Deshmukh", year: "3rd Year", domain: "Machine Learning", achievements: "Developed 10+ ML projects. Competed in 5+ hackathons.", image: deepika },
  { name: "Prakhar", year: "2nd Year", domain: "Web Development", achievements: "Built 10+ websites including an e-commerce platform. SIH 2024 Finalist.", image: prakhar },
  { name: "Naman Kumar", year: "3rd Year", domain: "Web Development", achievements: "Completed 5+ projects, secured an internship at a leading tech firm.", image: naman },
  { name: "Akash Kumar", year: "2nd Year", domain: "Cybersecurity", achievements: "Worked on 3+ security projects including a network vulnerability scanner. Optimized ATS resume.", image: akash },
  { name: "Mohd Meraaz", year: "3rd Year", domain: "Cybersecurity", achievements: "Completed intensive cybersecurity training, worked on ethical hacking projects.", image: md }
];

const FameSection = () => {
  return (
    <div 
      className="mx-0 md:-mx-3 overflow-x-hidden relative text-black py-20 px-6 min-h-screen w-[780px] md:w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg5})` }}
    >
      {/* Overlay with Backdrop Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      {/* Fame Section Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-7xl font-extrabold bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text font-orbitron -mt-4 mb-8">
          Hall of Fame
        </h2>
        <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto font-Montserrat">
          Recognizing outstanding students for their remarkable achievements in various domains.
        </p>
      </div>
      
      {/* Fame Cards */}
      <div className="relative z-10 max-w-4xl md:px-0 px-20 md:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 mt-12">
        {students.map((student, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-t from-gray-900 to-gray-300 p-5 rounded-2xl shadow-2xl hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center
              ${index >= students.length - 2 ? "md:ml-40 md:w-64" : ""}`} // Centers last two cards
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-20 h-22 mx-auto rounded-full border-4 border-gray-300"
            />
            <h3 className="text-2xl font-semibold mt-4 bg-gradient-to-r from-indigo-300 to-blue-400 text-transparent bg-clip-text font-archivo">
              {student.name}
            </h3>
            <p className="text-lg text-gray-300">{student.year}</p>
            <p className="text-lg font-medium text-gray-300 mt-2">{student.domain}</p>
            <p className="text-sm mt-1 text-gray-400">{student.achievements}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FameSection;