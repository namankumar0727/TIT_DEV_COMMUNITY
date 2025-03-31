import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import androidimage from "../../assets/androiddev.png";
import codingquest from "../../assets/codingquest.png";
import webdev from "../../assets/webdev.png";
import classes from "../../assets/Image17.png";
import bg2 from "../../assets/bg2.png";

const events = [
  { title: "Android Development Workshop", image: androidimage, path: "/android" },
  { title: "Web Development Hackathon", image: webdev, path: "/webdev" },
  { title: "Coding Quest", image: codingquest, path: "/codingquest" },
  { title: "Regular Classes", image: classes, path: "/classes" },
];

const EventSection = () => {
  return (
    <div className="mx-0 md:-mx-3 overflow-x-hidden relative min-h-screen w-[780px] flex flex-col items-center justify-center text-white py-24 px-6 md:w-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-7xl font-extrabold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text font-monteserrat mb-8 -mt-4">
          EVENTS
        </h2>
        <p className="text-lg text-gray-300 mt-6 max-w-3xl mx-auto font-Montserrat">
          Stay updated with our latest workshops, hackathons, and learning sessions.
        </p>
      </div>

      {/* Event Cards */}
      <div className="relative z-10 max-w-4xl md:px-0 px-20 md:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 mt-12">
        {events.map((event, index) => (
          <Link
            key={index}
            to={event.path} // Correcting the navigation
            className="relative bg-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center overflow-hidden"
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md flex items-center justify-center">
              <h3 className="text-3xl font-semibold text-white font-archivo drop-shadow-2xl p-3">
                {event.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
