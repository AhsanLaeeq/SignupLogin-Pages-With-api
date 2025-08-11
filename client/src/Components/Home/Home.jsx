import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero content */}
      <div className="hero">
        <h1 className="title">Welcome to MyAuthApp</h1>
        <p className="subtitle">Secure. Stylish. Seamless Authentication.</p>
        <div className="buttons">
          <button onClick={() => navigate('/signup')} className="glow-button">Signup</button>
          <button onClick={() => navigate('/login')} className="glow-button">Login</button>
        </div>
      </div>

      {/* Light beams */}
      <div className="glow-beams">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="beam"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              height: `${80 + Math.random() * 20}vh`,
              width: `${2 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      {/* Animated particles */}
      <div className="animated-bg">
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
          }} />
        ))}
      </div>
    </div>
  );
};

export default Home;
