"use client";

// components/Navbar.js
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {/* Logo and Name */}
            <Image src="/images/Emma.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
            <a href="/" className="text-black font-bold text-xl">Emmanuel</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-black hover:text-gray-700">Home</a>
            <a href="/about" className="text-black hover:text-gray-700">About</a>
            <a href="/cv" className="text-black hover:text-gray-700">CV</a>
            <div className="relative" onMouseEnter={() => setProjectsOpen(true)} onMouseLeave={() => setProjectsOpen(false)}>
              <a href="#" className="text-black hover:text-gray-700">Projects</a>
              {projectsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <a href="/projects/graphic-design" className="block px-4 py-2 text-black hover:bg-gray-100">Graphic Design</a>
                  <a href="/projects/web" className="block px-4 py-2 text-black hover:bg-gray-100">Web</a>
                  <a href="/projects/mobile-app" className="block px-4 py-2 text-black hover:bg-gray-100">Mobile App</a>
                  <a href="/projects/teaching-education" className="block px-4 py-2 text-black hover:bg-gray-100">Teaching and Education</a>
                </div>
              )}
            </div>
            <a href="/contact" className="text-black hover:text-gray-700">Contact</a>
            <a href="/blog" className="text-black hover:text-gray-700">Blog</a>
          </div>

          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://web.facebook.com/profile.php?id=100095368848132"><FaFacebook className="hover:text-gray-700 text-black" /></a>
            <a href="#"><FaTwitter className="hover:text-gray-700 text-black" /></a>
            <a href="#"><FaInstagram className="hover:text-gray-700 text-black" /></a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-black focus:outline-none" onClick={toggleMenu}>
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="bg-blue-700 text-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block hover:text-black">Home</a>
            <a href="/about" className="block hover:text-black">About</a>
            
            <a href="/cv" className="block hover:text-black">CV</a>
            <a href="/projects" className="block hover:text-black">Projects</a>
            <div className="flex justify-center mt-4 space-x-3">
              <a href="https://web.facebook.com/profile.php?id=100095368848132"><FaFacebook className="hover:text-black" /></a>
              <a href="#"><FaTwitter className="hover:text-black" /></a>
              <a href="#"><FaInstagram className="hover:text-black" /></a>
            </div>
            <a href="/contact" className="block hover:text-black">Contact</a>
            <a href="/blog" className="block hover:text-black">Blog</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;