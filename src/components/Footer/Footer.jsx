import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span>Mohammad</span> Kasaf
            </h3>
            <p className="footer-tagline">Full Stack Java Developer</p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#resume">Resume</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Me</h4>
            <ul>
              <li>
                <FaEnvelope className="contact-icon" />
                kaashifchishti611@gmail.com
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                +91-9719936609
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-icons">
              <a href="https://github.com/MohammadKasaf" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/MohammadKasaf" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
             
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mohammad Kasaf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;