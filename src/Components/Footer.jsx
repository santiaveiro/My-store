import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <p className="copy">&copy; {new Date().getFullYear()} E-Commerce App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
