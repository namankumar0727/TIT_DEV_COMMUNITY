import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import heroes from "../../assets/heroes.jpg";
import heroes2 from "../../assets/heroes2.jpg";
import bg1 from "../../assets/bg1.png";

const HomeSection = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div
      className="mx-0 md:-mx-3 overflow-x-hidden relative min-h-screen text-white mt-[-250px] w-[780px] md:w-screen"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
      
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20 px-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-white to-black-500 text-transparent bg-clip-text leading-tight font-orbitron ">
            Empowering Juniors, <br /> Led by Seniors
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-12">
            Join the revolution of mentorship, collaboration, and innovation. Learn, build, and excel in tech!
          </p>
          <div className="flex justify-center items-center mt-12 mr-0 md:mr-56">
            <button
              className="relative px-6 py-3 text-lg font-bold bg-gradient-to-r from-indigo-500 to-gray-900 text-black uppercase border-2 border-indigo-900 rounded-full overflow-hidden group transition duration-500 ease-in-out"
              onClick={() => navigate("/contactus")} // Navigate to Contact Us page
            >
              <span className="absolute inset-0 w-full h-full bg-indigo-900 left-0 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-white transition duration-500">Get Involved 🚀</span>
            </button>
          </div>
        </div>

        <div className="md:w-1/3 md:mt-0 mt-12 flex flex-col items-center space-y-11">
          <img
            src={heroes}
            alt="Tech Community"
            className="md:w-70 rounded-3xl shadow-2xl border border-gray-700 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:opacity-90 animate-float md:mr-24 w-80"
          />
          <img
            src={heroes2}
            alt="Tech Community 2"
            className="md:w-70 rounded-3xl shadow-2xl border border-gray-700 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:opacity-90 animate-float  md:mr-24 w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
