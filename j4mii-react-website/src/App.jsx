import { Facebook, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_#f3f4f6,_#e5e7eb_60%,_#d1d5db_100%)] text-black relative overflow-hidden">

      {/* ===== Fixed Navbar ===== */}
      <nav className="w-full bg-black text-white fixed top-5 left-0 z-50">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between py-4 px-2 lg:px-12">
    
    {/* Logo */}
    <h1 className="px-4 py-0 rounded-full bg-white border border-black/10 
                   text-xs sm:text-sm md:text-base lg:text-lg text-black font-logo mb-2 sm:mb-0">
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


      {/* ===== Fixed Social Icons ===== */}
      <div className="fixed left-8 sm:left-20 md:left-10 lg:left-28 bottom-10 sm:bottom-16 md:bottom-20 lg:bottom-20 z-40">
        <div className="bg-black rounded-full p-2 flex flex-col gap-2 shadow-lg">
          <a className="bg-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full grid place-items-center hover:bg-blue-500 hover:text-white transition" href="#"><Facebook className="w-4 h-4" /></a>
          <a className="bg-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full grid place-items-center hover:bg-blue-500 hover:text-white transition" href="#"><Instagram className="w-4 h-4" /></a>
          <a className="bg-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full grid place-items-center hover:bg-blue-500 hover:text-white transition" href="#"><SiTiktok className="w-4 h-4" /></a>
        </div>
      </div>

      {/* ===== Main Content (Zoomable Area) ===== */}
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

      {/* ===== Fixed Footer ===== */}
      <footer className="fixed bottom-6 sm:bottom-12 md:bottom-16 right-10 sm:right-12 md:right-16 text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700 font-bold z-50">
        Copyrights © j4mii 2025
      </footer>
    </div>
  );
}
