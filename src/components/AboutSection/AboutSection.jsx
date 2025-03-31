import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import bg2 from "../../assets/bg2.png";

const AboutSection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="mx-0 md:-mx-3 overflow-x-hidden relative min-h-screen  flex flex-col items-center justify-center text-white -pb-12 md:py-8  md:w-screen w-[780px] md:px-0 px-12  ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-7xl font-extrabold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text font-monteserrat -mt-24 ">
          About TDC
        </h2>
        <p className="text-md text-gray-300 mt-8 max-w-2xl mx-auto font-Montserrat">
          Empowering students through mentorship, workshops, and hands-on learning to bridge the gap between juniors and seniors.
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="relative z-10 max-w-3xl w-full mt-10 space-y-8">
        {[
          {
            title: "Introduction",
            content: (
              <>
                <p className="text-gray-700 mt-3 text-sm font-Montserrat">
                  TIT Developer Community is a student-led initiative focused on providing mentorship, industry insights, and real-world experience.
                </p>
                <p className="text-gray-700 mt-2 text-sm font-Montserrat">
                  We host mentorship programs, hackathons, and workshops to prepare students for the tech industry.
                </p>
              </>
            ),
          },
          {
            title: "Why Join Us?",
            content: (
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 text-sm font-Montserrat">
                <li>Hands-on Learning with Real-World Projects</li>
                <li>Access to Exclusive Workshops and Hackathons</li>
                <li>Personalized Mentorship from Industry-Ready Seniors</li>
                <li>Build a Robust Technical Portfolio for Placements</li>
              </ul>
            ),
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="bg-gray-300 p-4 rounded-xl shadow-lg cursor-pointer"
            onClick={() => toggleSection(index)}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-center">
              <motion.h3
                className="text-2xl font-semibold bg-gradient-to-r from-indigo-900 to-blue-500 text-transparent bg-clip-text font-archivo"
                animate={{ y: openSection === index ? -5 : 0, x: openSection === index ? 10 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {section.title}
              </motion.h3>
              <motion.div
                animate={{ rotate: openSection === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openSection === index ? (
                  <FaChevronUp className="text-gray-700 text-sm" />
                ) : (
                  <FaChevronDown className="text-gray-700 text-sm" />
                )}
              </motion.div>
            </div>

            <AnimatePresence>
              {openSection === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-3"
                >
                  {section.content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
