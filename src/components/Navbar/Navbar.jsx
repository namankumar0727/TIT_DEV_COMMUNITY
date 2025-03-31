import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 w-96 md:w-full max-w-80 md:max-w-3xl" >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900 text-white flex items-center justify-between px-4 md:px-6 py-3 rounded-full shadow-lg"
      >
        <div className="md:hidden mr-2">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-zinc-900 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />

        <div className="hidden md:flex space-x-6 font-Montserrat">
          {[{ name: "Home", path: "/" },
            { name: "About", path: "/aboutus" },
            { name: "Gallery", path: "/gallery" },
            { name: "Events", path: "/upcomingevents" },
            { name: "Contact Us", path: "/contactus" }].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link to={item.path} className="text-gray-300 hover:text-white relative">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal" afterSignInUrl="/">
              <motion.button
                className="bg-white text-black px-4 py-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Sign In
              </motion.button>
            </SignInButton>
          )}
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="absolute top-16 left-4 bg-zinc-900 text-white rounded-lg shadow-lg p-4 space-y-3 flex flex-col w-48"
          >
            {[{ name: "Home", path: "/" },
              { name: "About", path: "/aboutus" },
              { name: "Gallery", path: "/gallery" },
              { name: "Events", path: "/upcomingevents" },
              { name: "Contact Us", path: "/contactus" }].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link 
                  to={item.path} 
                  className="text-gray-300 hover:text-white pr-2"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            {!isSignedIn && (
              <SignInButton mode="modal" afterSignInUrl="/">
                <motion.button
                  className="bg-white text-black px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)} // Close menu when clicking Sign In
                >
                  Sign In
                </motion.button>
              </SignInButton>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
