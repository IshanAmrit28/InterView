import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Bot,
  LayoutDashboard,
  FileText,
  Sun,
  Moon,
  MessageSquare,
  Video,
  Map,
  BrainCircuit,
  Youtube,
  Menu,
  X,
} from "lucide-react";
import "./Navbar.css";

function Navbar({ theme, toggleTheme }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    { name: "AI Chat", path: "/chat", icon: <MessageSquare size={18} /> },
    { name: "Interview", path: "/interview", icon: <Video size={18} /> },
    { name: "Roadmap", path: "/roadmap", icon: <Map size={18} /> },
    { name: "Video Feed", path: "/video-feed", icon: <Youtube size={18} /> },
    { name: "Notes", path: "/notes", icon: <FileText size={18} /> },
    { name: "Quiz", path: "/quiz", icon: <BrainCircuit size={18} /> },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-badge">
            <Bot className="logo-icon" size={24} />
          </div>
          <span>InterVerse</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`nav-link ${isActive(item.path)}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}

          {/* Theme Toggle */}
          {/* <li>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </li> */}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={closeMobileMenu}></div>
      )}

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h3>Navigation</h3>
          <button
            className="mobile-menu-close"
            onClick={closeMobileMenu}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-menu-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`mobile-nav-link ${isActive(item.path)}`}
                onClick={closeMobileMenu}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* <div className="mobile-menu-footer">
          <button className="mobile-theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
          </button>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
