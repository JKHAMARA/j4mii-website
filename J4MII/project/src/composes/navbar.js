import React from "react";
import "../composes/styling.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">J4MII</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#" className="active">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
