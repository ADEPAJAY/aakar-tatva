import React from "react";
import "./../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Aakar Tatava</p>
        <p>
          📧 <a href="mailto:adepajay03@gmail.com">adepajay03@gmail.com</a>
        </p>
        <div className="footer-links">
          <a
            href="https://www.instagram.com/adep._.ajay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="footer-icon"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/adepajay03/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="footer-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
