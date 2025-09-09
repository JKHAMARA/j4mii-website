import React from "react";

const Home = () => {
  return (
    // ===== Main Content (Zoomable Area) ===== 
      <main className="relative flex-1 flex items-center justify-center h-screen">
        <div className="relative text-center sm:text-left">

          {/* "The" + Logo */}
          <div className="relative flex flex-col items-center justify-center">
            <span className="absolute left-[30%] -translate-x-1/2 -top-2 text-xs sm:text-sm md:text-base">
              The
            </span>
            <h1 className="text-6xl sm:text-5xl md:text-[90px] lg:text-[150px] font-logo leading-none relative">
              J4MII
            </h1>
          </div>

          {/* Blue Line */}
          <span className="absolute top-0 -right-2 md:-right-5 h-full w-[2px] sm:w-[3px] bg-blue-700 rounded"></span>

          {/* Tagline */}
          <div className="text-right pr-0">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700">Software</p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700">Development</p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700">Group</p>

            <button className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg px-4 md:px-5 py-2 bg-black text-white rounded hover:bg-gray-800">
              Hire Us
            </button>
          </div>
        </div>
      </main>
  );
};

export default Home;
