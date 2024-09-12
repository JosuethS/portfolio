import React from "react";
import { useLocation } from "@remix-run/react";
import "../styles/topbar.css"; // Import your styles

const Topbar = () => {
  const location = useLocation(); // Get the current location
  const currentPath = location.pathname; // Get the current URL path

  return (
    <div className="topbar">
      <div>
        <ion-icon id="run-btn" name="play"></ion-icon>
      </div>

      <div id="home" className={`topbarfilecss ${currentPath === "/" ? "highlight" : ""}`}>
        home.html
      </div>
      <div id="about" className={`topbarfilecss ${currentPath === "/about" ? "highlight" : ""}`}>
        about me.jsx
      </div>
      <div id="projects" className={`topbarfilecss ${currentPath === "/projects" ? "highlight" : ""}`}>
        projects.css
      </div>
      <div id="github" className={`topbarfilecss ${currentPath === "/github" ? "highlight" : ""}`}>
        github.md
      </div>
      <div id="timeline" className={`topbarfilecss ${currentPath === "/timeline" ? "highlight" : ""}`}>
        timeline.json
      </div>
    </div>
  );
};

export default Topbar;
