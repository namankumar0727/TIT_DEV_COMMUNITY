import React from "react";
import { motion } from "framer-motion";
import robot from "../../assets/robot.jpg";
import { useNavigate } from "react-router-dom";


export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <main className="relative flex items-center justify-center h-screen -mx-1 md:ml-0 ml-4 w-[770px] md:w-full md:h-[1100px] bg-gray-600 overflow-hidden">
      <img src={robot} className="absolute inset-0 w-[780px] md:w-full h-full object-cover " alt="Robot" />


      {/* Animated 3D Button with Water Filling Effect */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={() => navigate("/model")}
        className="absolute z-10 px-10 py-3 text-xl font-bold text-gray-300 bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-300 rounded-xl shadow-2xl relative overflow-hidden md:bottom-72 md:right-2 bottom-56 right-2"
      >
        <span className="absolute inset-0 bg-blue-300 opacity-50 transition-all duration-500 group-hover:h-full h-0" />
        <span className="relative z-10">Explore 3D</span>
      </motion.button>

      {/* Hidden on smaller screens */}
      <div className="hidden md:block absolute top-36 left-28 text-11xl font-bold font-orbitron bg-gradient-to-r from-zinc-900 via-gray-400 to-gray-200 bg-clip-text text-transparent">
        TIT
      </div>
      <div className="hidden md:block absolute top-40 right-8 text-10xl font-bold font-orbitron bg-gradient-to-r from-gray-200 to-zinc-900 bg-clip-text text-transparent">
        DEV
      </div>
      <div className="hidden md:block absolute top-96 mt-12 left-16 text-8xl font-bold font-orbitron bg-gradient-to-r from-zinc-800 to-gray-200 bg-clip-text text-transparent">
        COM
      </div>
      <div className="hidden md:block absolute top-96 mt-12 right-20 text-8xl font-bold font-orbitron bg-gradient-to-r from-gray-200 to-zinc-800 bg-clip-text text-transparent">
        NITY
      </div>
    </main>
  );
}