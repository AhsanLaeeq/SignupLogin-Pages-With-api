import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">MyAuthApp</a>
      </div>
      <nav className="nav-links">
        <Link to ="/">Home</Link>
        <Link to ="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/contact">Contact</Link>
    
      
      </nav>
    </header>
  );
};

export default Header;
