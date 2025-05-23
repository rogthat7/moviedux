import React from "react";
import "../styles.css";
export default function Header() {
  return (
    <header
      className="app-header"
      style={{ position: "relative", top: 0, width: "100%" }}
    >
      <img
        className="logo"
        style={{ width: "25%" }}
        src="../logo.png"
        alt="logo"
      />
    </header>
  );
}
