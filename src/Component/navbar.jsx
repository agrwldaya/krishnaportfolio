import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-6 flex justify-center items-center bg-white transition duration-300 hover:bg-[#B7EBE7]">
      <div className="flex flex-col items-center">
        {/* Name */}
        <h1 className="text-4xl font-pinyon text-gray-800">Krisha Agrawal</h1>

        {/* Navigation Links */}
        <div className="mt-2 flex space-x-8 text-gray-600 text-lg">
          <a href="/" className="hover:text-teal-500 transition">Portfolio</a>
          <a href="/contact" className="hover:text-gray-800 transition">Work</a>
          <a href="/about" className="hover:text-gray-800 transition">About</a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;