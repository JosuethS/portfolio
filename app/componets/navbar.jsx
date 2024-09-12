import React from "react";
import { Link, useLocation } from "@remix-run/react"; // Import the Link and useLocation components
import "../styles/navbar.css"; // Import your CSS file

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const currentPath = location.pathname; // Get the current URL path

  return (
    <div className="navbar">
      <ul>
        <li className={currentPath === "/" ? "navhighlight" : ""} id="home">
          <Link to="/" aria-label="Folder Open">
            <ion-icon name="folder-open"></ion-icon>
          </Link>
        </li>
        <li className={currentPath === "/about" ? "navhighlight" : ""} id="about">
          <Link to="/about" aria-label="Search">
            <ion-icon name="search"></ion-icon>
          </Link>
        </li>
        <li className={currentPath === "/projects" ? "navhighlight" : ""} id="projects">
          <Link to="/projects" aria-label="Projects">
            <ion-icon name="hammer"></ion-icon>
          </Link>
        </li>
        <li className={currentPath === "/github" ? "navhighlight" : ""} id="github">
          <Link to="/github" aria-label="GitHub">
            <ion-icon name="logo-github"></ion-icon>
          </Link>
        </li>
        <li className={currentPath === "/timeline" ? "navhighlight" : ""} id="timeline">
          <Link to="/timeline" aria-label="Timeline">
            <ion-icon name="footsteps"></ion-icon>
          </Link>
        </li>
        <li>
          <Link to="/settings" aria-label="Settings">
            <ion-icon id="setting-icon" name="settings"></ion-icon>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
