import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link 
          to="home" 
          className="navbar-logo" 
          onClick={closeMenu}
          smooth={true}
          duration={500}
          offset={-80}
        >
          <span>My</span> Portfolio
        </Link>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="about" 
              className="nav-link" 
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-80}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="skills" 
              className="nav-link" 
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="projects" 
              className="nav-link" 
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="education" 
              className="nav-link" 
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="trainings" 
              className="nav-link" 
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Training
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="resume" 
              className="nav-link" 
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="contact" 
              className="nav-link contact-btn" 
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;