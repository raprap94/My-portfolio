import React from 'react';
import './Footer.css'; // You can create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Roxz Caballero Rafil. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
