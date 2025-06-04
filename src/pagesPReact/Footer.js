import React from 'react';
import './style3.css'
import facebook from './face.png';
import instagram from './ins.png';
import linkedin from './in.jpg';
import mail from './mail.jpg';


function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 DO1 - <span className="highligh">We do it as one</span></p>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank"  title="Facebook">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank"  title="Instagram">
          <img src={instagram}alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank"  title="LinkedIn">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="mailto:contact@do1club.com" title="Email">
          <img src={mail} alt="Email" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
