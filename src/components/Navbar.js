"use client"

// components/Navbar.js
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <a href="/" className="heading text-black font-bold text-xl">Emmanuel Binalison Mbewe</a>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-black hover:text-gray-700">Home</a>
              <a href="about" className="text-black hover:text-gray-700">About</a>
              <a href="blog" className="text-black hover:text-gray-700">Blog</a>
              <a href="contact" className="text-black hover:text-gray-700">Contact</a>
              <a href="cv" className="text-black hover:text-gray-700">CV</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {/* <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 rounded-full bg-gray-200 text-black focus:outline-none"
                />
              </div> */}

              <div className="flex space-x-3 text-black">
                <a href="https://web.facebook.com/profile.php?id=100095368848132"><FaFacebook className="hover:text-gray-700" /></a>
                <a href="#"><FaTwitter className="hover:text-gray-700" /></a>
                <a href="#"><FaInstagram className="hover:text-gray-700" /></a>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center absolute right-4">
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-black hover:text-gray-700">Home</a>
            <a href="about" className="block text-black hover:text-gray-700">About</a>
            <a href="blog" className="block text-black hover:text-gray-700">Blog</a>
            <a href="contact" className="block text-black hover:text-gray-700">Contact</a>
            <a href="cv" className="text-black hover:text-gray-700">cv</a>
            <div className="flex justify-center mt-4 space-x-3">
              <a href="https://web.facebook.com/profile.php?id=100095368848132"><FaFacebook className="hover:text-gray-700 text-black" /></a>
              <a href="#"><FaTwitter className="hover:text-gray-700 text-black" /></a>
              <a href="#"><FaInstagram className="hover:text-gray-700 text-black" /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;