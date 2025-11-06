import React, { useEffect, useState } from "react";
import "./../App.css";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <div className={`page about fade-in ${visible ? "visible" : ""}`}>
      <h1>About Adep Ajay</h1>

      <p>
        Hello! I'm <strong>Adep Ajay</strong>, a passionate learner and creator with
        a deep interest in technology, design, and the philosophical essence of
        Indian architecture. I love exploring how ancient ideas of balance,
        geometry, and form can inspire modern creative and digital work.
      </p>

      <p>
        I completed my <strong>Bachelor’s in Computer Applications</strong> from{" "}
        <strong>Bhavan’s Vivekananda College of Science, Humanities and Commerce</strong>,
        and I’m currently pursuing my <strong>MCA at Chaitanya Bharathi Institute of Technology (CBIT)</strong>.
        My academic and creative journey reflect a growing fascination with how
        structure — whether in code or in stone — can tell stories and connect people.
      </p>

      <section className="journey-section">
        <h2>💡 My Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h4>🏗️ Inspiration</h4>
            <p>
              The beauty and precision of ancient Indian temples inspired me to
              blend creativity with logic — understanding how every structure
              has purpose and soul. This curiosity shaped the foundation for
              <strong> Aakar Tatva</strong>.
            </p>
          </div>
          <div className="timeline-item">
            <h4>🧠 Growth</h4>
            <p>
              Over time, I developed skills in programming, UI/UX design, and
              storytelling. I aim to create meaningful digital experiences that
              reflect India’s cultural depth and timeless design wisdom.
            </p>
          </div>
          <div className="timeline-item">
            <h4>🚀 Vision</h4>
            <p>
              My goal is to connect technology and heritage — showing how
              creativity can preserve and reimagine ancient philosophies for a
              modern world.
            </p>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <h2>🌟 Vision</h2>
        <p>
          I believe architecture, like code, is a language — one that expresses
          harmony, proportion, and deeper meaning. Through Aakar Tatva, I hope
          to inspire others to rediscover India’s architectural brilliance and
          its connection to design, spirituality, and self-expression.
        </p>
      </section>

      <h3>Connect with Me</h3>
      <div className="social-links">
        <a
          href="https://www.instagram.com/adep._.ajay"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="icon-img"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/adepajay03/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="icon-img"
          />
        </a>

        <a href="mailto:adepajay03@gmail.com" className="social-icon">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            alt="Email"
            className="icon-img"
          />
        </a>
      </div>
    </div>
  );
}
