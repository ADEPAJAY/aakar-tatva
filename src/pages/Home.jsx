import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dravidian from "../assets/dravidian.jpg";
import buddhist from "../assets/buddhist.jpg";
import nagara from "../assets/nagara.jpg";
import indus from "../assets/indus.jpg";
import "./../App.css";

export default function Home() {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");
  const [factIndex, setFactIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const facts = [
    "The Brihadeeswarar Temple was built over 1000 years ago using interlocking stones—no cement!",
    "The Indus Valley cities had advanced drainage systems centuries before Rome.",
    "Each temple’s design in India was aligned with astronomical precision.",
    "The Kailasa Temple at Ellora was carved from a single rock.",
    "Vastu Shastra principles influenced ancient urban layouts."
  ];

  // 🕐 Greeting based on time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning ☀️");
    else if (hour < 18) setGreeting("Good Afternoon 🌤️");
    else setGreeting("Good Evening 🌙");
  }, []);

  // 🔁 Rotate architecture facts
  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % facts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [facts.length]);

  // 📊 Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌟 Reveal on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const onScroll = () => {
      revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("active");
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page home">
      {/* 🔵 Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* 🏛 HERO SECTION */}
      <section className="hero-section reveal">
        <h1 className="hero-title">{greeting}</h1>
        <h2>Welcome to Ancient Indian Architecture 🏛️</h2>
        <p className="hero-subtitle">
          A journey through India’s most iconic architectural masterpieces — where
          art, history, and spirituality meet.
        </p>
        <img
          src={dravidian}
          alt="Dravidian Temple"
          className="hero-image animated-img"
        />
        <div className="scroll-down">↓ Scroll to Explore</div>
      </section>

      {/* 💡 Rotating Facts */}
      <section className="facts-section reveal">
        <h2>Did You Know?</h2>
        <p className="fact-text">{facts[factIndex]}</p>
      </section>

      {/* 🏗 ABOUT WEBSITE */}
      <section className="about-section reveal">
        <h2>About This Website</h2>
        <p>
          This platform is dedicated to exploring and preserving the legacy of India's
          architectural brilliance. From the intricate carvings of the Chola dynasty to
          the mathematical precision of Nagara temples, we bring you a visual and
          historical insight into every marvel.
        </p>
        <p>
          Whether you're a student, an architecture enthusiast, or simply curious about
          cultural heritage, this site serves as a learning hub connecting ancient
          wisdom with modern design principles.
        </p>
      </section>

      {/* 🕍 ARCHITECTURE STYLES */}
      <section className="highlights-section reveal">
        <h2>Explore Architectural Styles</h2>
        <div className="highlight-grid">
          <div className="highlight-card reveal">
            <img src={nagara} alt="Nagara Architecture" />
            <h3>Nagara Architecture</h3>
            <p>North India's curvilinear temples reaching skyward like mountains.</p>
          </div>

          <div className="highlight-card reveal">
            <img src={buddhist} alt="Buddhist Architecture" />
            <h3>Buddhist Architecture</h3>
            <p>Rock-cut caves and stupas reflecting meditation and enlightenment.</p>
          </div>

          <div className="highlight-card reveal">
            <img src={indus} alt="Indus Valley Architecture" />
            <h3>Indus Valley Civilization</h3>
            <p>Urban planning and design far ahead of their time.</p>
          </div>
        </div>
      </section>

      {/* ✨ FINAL SECTION */}
      <section className="final-section reveal">
        <h2>Step into History ✨</h2>
        <p>
          Every structure tells a story — of faith, innovation, and timeless artistry.
          Scroll, explore, and rediscover the heritage that shaped India’s civilization.
        </p>
        <button className="explore-btn" onClick={() => navigate("/articles")}>
          Explore Articles →
        </button>
      </section>
    </div>
  );
}
