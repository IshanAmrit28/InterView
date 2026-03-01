import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logoutUser } = useAuth();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "AI Chat", path: "/chat" },
    { name: "Interview", path: "/practice" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Video Feed", path: "/video-feed" },
    { name: "Notes", path: "/notes" },
    { name: "Quiz", path: "/quiz" },
  ];

  return (
    <header className="minimal-navbar">
      <div className="navbar-container">
        
        {/* Brand Logo - Text Only */}
        <Link to="/" className="navbar-brand">
          InterVerse
        </Link>

        {/* Global Navigation Links */}
        <nav className="navbar-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item.path)}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions (Logout) */}
        <div className="navbar-actions">
          <button 
            className="logout-button" 
            onClick={() => {
              logoutUser();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
