import { motion } from "framer-motion";
import bg1 from "../../assets/bg1.png";

const ContactUsSection = () => {
  const handleEmailClick = () => {
    const recipient = "ankit95001kumar@gmail.com"; // Replace with actual recipient email
    const subject = encodeURIComponent("Contact Inquiry");
    const body = encodeURIComponent("Hello,\n\nI would like to get in touch.");
    
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <div 
      className="mx-0 md:-mx-3 relative flex flex-col md:flex-row min-h-screen md:w-screen text-black p-10 md:p-24 w-[780px] md:pt-24 pt-28 "
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-lg"></div>

      {/* Left Section */}
      <div className="hidden md:block relative z-10 w-full md:w-1/2 bg-gradient-to-r from-zinc-100 to-zinc-500 rounded-2xl p-12 md:flex flex-col justify-center">
        <h2 className="text-7xl font-archivo mb-6">We'd love to hear from you</h2>
        <div className="border-t-4 border-gray-500 mt-4 w-2/3"></div>
      </div>
      
      {/* Right Section - Contact Form */}
      <div className="relative z-10 w-full md:w-1/2 bg-white rounded-2xl md:p-12 p-24 flex flex-col justify-center shadow-lg">
        <h3 className="text-3xl font-orbitron mb-8">CONTACT US</h3>
        
        <form className="space-y-6">
          <div className="flex gap-4">
            <input type="text" placeholder="First Name" className="w-1/2 border-b border-gray-400 p-2 focus:outline-none focus:border-black" />
            <input type="text" placeholder="Last Name" className="w-1/2 border-b border-gray-400 p-2 focus:outline-none focus:border-black" />
          </div>
          <div className="flex gap-4">
            <input type="email" placeholder="Email" className="w-1/2 border-b border-gray-400 p-2 focus:outline-none focus:border-black" />
            <input type="text" placeholder="Phone Number" className="w-1/2 border-b border-gray-400 p-2 focus:outline-none focus:border-black" />
          </div>
          <textarea placeholder="Message" className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-black"></textarea>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-lg font-semibold text-black hover:underline"
            onClick={handleEmailClick}
            type="button"
          >
            Submit <span className="text-xl">→</span>
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsSection;