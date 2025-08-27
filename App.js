import React from "react";
import Navbar from "./composes/navbar";
import Project from "./composes/project";
import "./composes/styling.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Social Sidebar */}
      <div className="social-sidebar">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-tiktok"></i></a>
      </div>

      {/* Projects Section */}
      <Project />

      {/* Footer */}
      <footer>
        <p>Copyrights © J4mii 2025</p>
      </footer>
    </>
  );
}

export default App;
