import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">MyPortfolio</Link>
      <div>
        <Link to="/education">Education</Link>
        <Link to="/work">Work</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}

export default Navbar;
