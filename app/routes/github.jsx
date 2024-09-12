import React, { useState } from "react";
import Navbar from "../componets/navbar";
import Topbar from "../componets/topbar";

export const meta = () => {
  return [
    { title: "Portfolio - Josueth Salverredy" },
    { name: "description", content: "Josueth's Portfolio" },
  ];
};

export default function Index() {

  return (
    <div className="layout">
      <Navbar  />
      <div className="main-content">
        <Topbar />
        <div className="content">
          github
        </div>
      </div>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </div>
  );
}
