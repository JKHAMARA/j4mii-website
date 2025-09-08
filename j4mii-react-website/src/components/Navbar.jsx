import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white fixed top-5 left-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between py-4 px-2 lg:px-12">
        
        {/* Logo */}
        <h1 className="px-4 py-0 rounded-full bg-white border border-black/10 text-xs sm:text-sm md:text-base lg:text-lg text-black font-logo mb-2 sm:mb-0">
        J4MII
        </h1>

        {/* Nav Links */}
        <ul className="flex justify-center sm:justify-end items-center 
                    gap-8 sm:gap-6 md:gap-8 
                    text-xs sm:text-sm md:text-base tracking-wide">
        <li className="relative pb-1 after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-full after:bg-blue-500">
            <a href="#">Home</a>
        </li>
        <li><a className="hover:text-blue-400" href="#">Projects</a></li>
        <li><a className="hover:text-blue-400" href="#">About</a></li>
        <li><a className="hover:text-blue-400" href="#">Contact</a></li>
        </ul>
    </div>
</nav>

  );
};

export default Navbar;
