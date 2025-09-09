import React from 'react';
import { Facebook, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";


const About = () => {
  return (
    <div className="About ">
      {/* Company Description */}
      <section className="company-description py-8 px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl font-bold mb-4">J4MII is a software development group dedicated to building smart and user-friendly digital solutions.</h1>
        <p className="text-gray-500 leading-relaxed">
          We developed MiSkul, an academic tracking app that helps university students calculate grades, store results, and generate official statements with ease.
        </p>
        <p className="text-gray-500 leading-relaxed mt-4">
          Beyond MiSkul, we offer a range of software development services including:
        </p>
        <ul className="text-gray-500 leading-relaxed list-disc list-inside mt-2">
          <li>Web & Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>Database & System Architecture</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="team-section py-8 px-4 md:px-8 lg:px-16">
        <div className="flex justify-center mb-8">
          <span className="bg-black text-white text-sm md:text-base font-bold px-6 py-2 rounded-full shadow-md">
            THE TEAM
          </span>
        </div>
        <div className="team-members grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'Ibrahim Koroma', role: ['Project Manager', 'Frontend Developer'], image: 'SLB.jpeg' },
            { name: 'Anwarr O. B. Turay', role: ['Chief Tech Officer', 'Backend(Lead)'], image: 'Anwarr.jpeg' },
            { name: 'Abubakarr Marah', role: ['Backend Developer', 'UI/UX Design(Lead)'], image: 'Marah1.jpeg' },
            { name: 'Julius Khamara', role: ['Frontend(Lead)'], image: 'JK.jpg' },
            { name: 'Ibrahim S. Bangura', role: ['Backend Developer'], image: 'IB.jpeg' },
            { name: 'Mohamed A. D. Gbla', role: ['Backend Developer'], image: 'Gbla.jpeg' },
          ].map((member, index) => (
            <div key={index} className="team-member shadow-lg rounded-xl hover:scale-105 transition-transform duration-300 bg-[#3d5afe] overflow-hidden flex flex-col h-[22rem]">
              <div className="team-member-image relative h-64 bg-gray-200 overflow-hidden rounded-b-3xl">
                <img src={`/assets/images/${member.image}`} alt={member.name} 
                className="w-full h-full object-cover object-center"/>
              </div>
              <div className="team-member-info w-full py-3 bg-[#3d5afe] flex flex-col flex-grow justify-center">
                <h3 className="text-white text-lg font-bold text-center">{member.name}</h3>
                <div className="flex flex-col items-center space-y-1 mt-1">
                  {member.role.map((r, i) => (
                    <p key={i} className="text-gray-100 text-sm text-center">
                      {r}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;