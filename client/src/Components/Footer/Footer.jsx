import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>MyAuthApp</h2>
          <p>A simple and secure authentication system built with modern tech.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
          
       <li><Link to="/">Home</Link></li>
  <li><Link to="/login">Login</Link></li>
  <li><Link to="/signup">Signup</Link></li>
  <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: support@myauthapp.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Location: Lahore, Pakistan</p>
        </div>

        <div className="footer-section socials">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MyAuthApp | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
