import { Facebook, Instagram, Music2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProjectImage from "./assets/miskul-bg.png";

const Projects = () => {
  const projects = [
    { id: 1, title: "MiSkul", image: ProjectImage, url: "https://miskul.com" },
    { id: 2, title: "Project 2", image: ProjectImage, url: "https://miskul.com" },
    { id: 3, title: "Project 3", image: ProjectImage, url: "https://miskul.com" },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? prev : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? prev : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F8F8] to-[#999999] flex flex-col">
      {/* Main Section */}
      <main className="flex flex-col items-center flex-1 px-4 py-10">
        {/* Description */}
        <div className="text-center max-w-2xl order-1 sm:order-2 mt-0 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">J4MII PROJECTS</h2>
          <p className="text-sm sm:text-base text-black">
            J4MII is a pioneering startup revolutionizing the digital landscape
            with innovative app solutions. Specializing in crafting intuitive and
            high-performance applications for both mobile and web platforms, J4MII
            empowers businesses and individuals to reach their full potential.
          </p>
          <button className="hidden sm:inline-block mt-6 bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-gray-800">
            View Projects
          </button>
        </div>

        {/* Desktop Carousel */}
        <div className="relative hidden sm:flex w-full max-w-5xl items-center justify-center order-1 sm:order-1 mt-8 sm:mt-0">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={`absolute left-0 z-20 p-3 rounded-full 
              ${current === 0 ? "bg-gray-400 cursor-not-allowed opacity-50" : "bg-black/70 hover:bg-black text-white"}`}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 overflow-hidden">
            {projects.map((project, index) => {
              let position =
                index === current
                  ? "scale-110 z-20"
                  : index === (current + 1) % projects.length ||
                    index === (current - 1 + projects.length) % projects.length
                  ? "scale-90 opacity-80 z-10"
                  : "hidden sm:block scale-75 opacity-50 z-0";

              return (
                <div
                  key={project.id}
                  className={`bg-gradient-to-b from-[#F8F8F8] to-[#929292] transition-all duration-500 ease-in-out w-40 sm:w-56 md:w-64 lg:w-72 h-56 sm:h-72 md:h-80 lg:h-96   shadow-md flex items-center justify-center ${position}`}
                >
                  <a href={project.url} target="_blank">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-contain h-32 sm:h-40 md:h-48"
                    />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={current === projects.length - 1}
            className={`absolute right-0 z-20 p-3 rounded-full 
              ${current === projects.length - 1 ? "bg-gray-400 cursor-not-allowed opacity-50" : "bg-black/70 hover:bg-black text-white"}`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="flex flex-col gap-6 sm:hidden w-full max-w-md mt-6 order-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full h-48 bg-gradient-to-b from-[#F8F8F8] to-[#929292]
              rounded-lg shadow-md flex items-center justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-contain h-32"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center px-6 sm:px-12 py-6 text-sm">
        {/* Socials */}
        <div className="flex flex-col gap-2 py-2 px-2 bg-black rounded-full">
          <a
            href="https://facebook.com"
            className="p-2 rounded-full bg-white text-black hover:bg-gray-800"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            className="p-2 rounded-full bg-white text-black hover:bg-gray-800"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://tiktok.com"
            className="p-2 rounded-full bg-white text-black hover:bg-gray-800"
          >
            <Music2 size={20} />
          </a>
        </div>
        <p className="text-gray-black">Copyrights &copy;
j4mii 2025</p>
      </footer>
    </div>
  );
};

export default Projects;