import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full mx-auto mt-2 shadow-md bg-black text-white z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between py-2 px-2 lg:px-12">
        
        {/* Logo */}
        <h1 className="px-4 py-0 rounded-full bg-white border border-black/10 text-xs sm:text-sm md:text-base lg:text-lg text-black font-logo mb-2 sm:mb-0">
        J4MII
        </h1>

        {/* Nav Links */}
        <ul className="flex justify-center sm:justify-end items-center 
                gap-8 sm:gap-6 md:gap-8 
                text-xs sm:text-sm md:text-base tracking-wide">
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <li key={link.name} className="relative pb-1">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-[#3d5afe] transition-colors ${
                      isActive
                        ? "after:absolute after:left-0 after:-bottom-[2px] after:h-[3px] after:w-full after:bg-[#3d5afe] after:rounded-full"
              : ""
                 }`
               }
         >
               {link.name}
             </NavLink>
           </li>
         ))}
       </ul>
      </div>
    </nav>
  );
};

export default Navbar;
