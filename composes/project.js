import React from "react";
import "../composes/styling.css";

function Project() {
  return (
    <section className="projects">
      <div className="project-cards">
        <div className="card"><img src="logo.png" alt="project" /></div>
        <div className="card main"><img src="logo.png" alt="project" /></div>
        <div className="card"><img src="logo.png" alt="project" /></div>
      </div>

      <div className="project-info">
        <h2>J4MII PROJECTS</h2>
        <p>
          J4MII is a pioneering startup revolutionizing the digital landscape 
          with innovative app solutions. Specializing in crafting intuitive 
          and high-performance applications for both mobile and web platforms, 
          J4MII empowers businesses and individuals to reach their full potential.
        </p>
        <button className="btn">View Projects</button>
      </div>
    </section>
  );
}

export default Project;
