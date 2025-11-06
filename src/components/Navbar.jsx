import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="navbar-left">
        <img src={logo} alt="Aakar Tatva Logo" className="navbar-logo" />
      </div>

      {/* Center - Title */}
      <div className="navbar-center">
        <h2 className="navbar-title">Aakar Tatva</h2>
        <p className="navbar-tagline">Where Form Meets Philosophy</p>
      </div>

      {/* Right - Links */}
      <ul className="navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/quiz">Match</Link></li> {/* 🧠 New Quiz Link */}
        <li><Link to="/map">Map</Link></li>
      </ul>
    </nav>
  );
}
