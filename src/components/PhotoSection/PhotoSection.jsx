import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../assets/img1.JPG";
import img2 from "../../assets/img2.JPG";
import img3 from "../../assets/img3.JPG";
import img4 from "../../assets/img4.JPG";
import img5 from "../../assets/img5.JPG";
import img6 from "../../assets/img6.JPG";

const images = [img1, img2, img3, img4, img5, img6];

const PhotoSection = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[780px] md:w-screen mx-0 md:-mx-3 h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 1, filter: "blur(30px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 1, filter: "blur(30px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </AnimatePresence>
      
      <button
        onClick={prevSlide}
        className="absolute left-5 px-1 py-5 bg-gray-300 text-indigo-900 rounded-full shadow-lg hover:bg-gray-300"
      >
        <ChevronLeft size={50} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 px-1 py-5 bg-gray-300 text-indigo-900 rounded-full shadow-lg hover:bg-gray-300"
      >
        <ChevronRight size={50} />
      </button>
    </div>
  );
};

export default PhotoSection;