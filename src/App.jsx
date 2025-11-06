import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import Map from "./pages/Map"; // 🗺️ Added Map Page
import ScrollToTop from "./ScrollToTop";
import "./App.css";

export default function App() {
  return (
    <Router>
      {/* Ensures route change scrolls to top */}
      <ScrollToTop />

      <div
        className="app"
        style={{
          margin: 0,
          padding: 0,
          width: "100vw",
          minHeight: "100vh",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
        }}
      >
        {/* 🌟 Navbar */}
        <Navbar />

        {/* 📄 Main Content */}
        <div
          className="content"
          style={{
            flex: 1,
            width: "100%",
            boxSizing: "border-box",
            padding: 0,
            margin: 0,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<About />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/map" element={<Map />} /> {/* 🗺️ New Map route */}
          </Routes>
        </div>

        {/* 🔻 Footer */}
        <Footer />
      </div>
    </Router>
  );
}
