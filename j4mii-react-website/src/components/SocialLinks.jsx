import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const SocialLinks = () => {
  return (
    <div className="fixed left-8 sm:left-20 md:left-10 lg:left-28 bottom-10 sm:bottom-16 md:bottom-20 lg:bottom-20 z-40">
        <div className="bg-black rounded-full p-2 flex flex-col gap-2 shadow-lg">
            <a className="bg-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full grid place-items-center hover:bg-gray-500 transition" href="#"><Facebook className="w-4 h-4 text-black group-hover:text-white" /></a>
            <a className="bg-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full grid place-items-center hover:bg-gray-500 transition" href="#"><Instagram className="w-4 h-4 text-black group-hover:text-white" /></a>
            <a className="bg-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full grid place-items-center hover:bg-gray-500 transition" href="#"><SiTiktok className="w-4 h-4 text-black group-hover:text-white" /></a>
        </div>
    </div>
  );
};

export default SocialLinks;
