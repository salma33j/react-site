import React from 'react';
import '../pagesPReact/style3.css'

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 DO1 - <span className="highligh">We do it as one</span></p>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" title="Facebook">
          <img src="/fac.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <img src="/ins.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src="/in.jpg" alt="LinkedIn" />
        </a>
        <a href="mailto:contact@do1club.com" title="Email">
          <img src="/mail.jpg" alt="Email" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
