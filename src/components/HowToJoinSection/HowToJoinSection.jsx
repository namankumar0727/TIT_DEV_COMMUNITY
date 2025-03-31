import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import bg1 from "../../assets/bg1.png";

const howToJoinSteps = [
  {
    title: "Coding Quest",
    description: "Annual competition fostering technical skills and community recruitment.",
    details: [
      "Round 1: MCQ-based (via TIT-developed app)",
      "Round 2: Coding challenge (Unstop platform)",
      "200+ Participants, 60 Finalists",
      "₹1000 for category toppers, trophies for the top 3",
    ],
  },
  {
    title: "Hackathon & Recruitment",
    description:
      "Annual event where exceptional performers join the TIT Developer Community.",
    details: [],
  },
];

const HowToJoinSection = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="mx-0 md:-mx-3 overflow-x-hidden relative min-h-screen w-[780px] flex flex-col items-center justify-center text-white py-20 px-6 md:w-screen ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` }}
      ></div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-6xl font-extrabold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text font-orbitron mb-8">
          How to Join?
        </h2>
        <p className="text-lg text-gray-300 mt-6 max-w-3xl mx-auto font-Montserrat">
          Participate in our technical challenges and events to become part of the TIT Developer Community.
        </p>
      </div>

      <div className="relative z-10 max-w-5xl md:px-12 px-12 md:mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
        {howToJoinSteps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-300 px-8 py-4 rounded-2xl shadow-2xl hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-800 to-blue-500 text-transparent bg-clip-text font-archivo">
              {step.title}
            </h3>
            <p className="text-lg text-gray-700 mt-2">{step.description}</p>
            {step.details.length > 0 && (
              <ul className="list-disc list-inside text-sm mt-2 text-gray-600 text-left">
                {step.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex justify-center items-center mt-12">
        <button 
          onClick={() => navigate("/contactus")} // Navigate to Contact Us
          className="relative px-6 py-3 text-lg font-bold bg-gradient-to-r from-indigo-500 to-gray-900 text-black uppercase border-2 border-indigo-900 rounded-full overflow-hidden group transition duration-500 ease-in-out"
        >
          <span className="absolute inset-0 w-full h-full bg-indigo-900 left-0 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-white transition duration-500">Register</span>
        </button>
      </div>
    </div>
  );
};

export default HowToJoinSection;
