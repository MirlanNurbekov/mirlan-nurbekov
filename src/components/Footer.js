// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 My Portfolio. All Rights Reserved.</p>
        <div className="social-links">
          {/* Use icons or text links to your social media */}
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
