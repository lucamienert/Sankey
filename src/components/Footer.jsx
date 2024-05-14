// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer m-0 bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">© 2024 Your Company. All Rights Reserved.</p>
        <p className="mb-0">Follow us on:</p>
        <div>
          <a href="https://www.facebook.com" className="text-white me-2" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.twitter.com" className="text-white me-2" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.instagram.com" className="text-white me-2" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
