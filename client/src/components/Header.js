import { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import '../styles/Header.css';

function Header() {
  const [open, setOpen] = useState(false);

  <div className="logo">
        <Link to="/">DOKO Battlefield</Link>
      </div>

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Events", to: "/events" },
    { name: "Food & Drinks", to: "/restaurants" },
    { name: "The Experience", to: "/experience" },
    { name: "Media Vault", to: "/media" },
    { name: "VR Game", to: "/game-info" },
    { name: "Investors", to: "/investors" },
    { name: "Partners", to: "/partners"},
    { name: "Contact", to: "/contact"},
  ];

  return (
    <header className="header">
    <div className="header-container">
      {/* Left: Hamburger (mobile only) */}
      <button className="hamburger" onClick={() => setOpen(true)}>
        <Menu size={28} />
      </button>

      {/* Desktop Nav */}
      <nav className="nav-desktop">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="nav-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right: Logo */}
      <div className="logo">
        <img src="/DOKO_Battlefield.png" alt="Logo" className="logo-img" />
        <h1 className="logo-text">DOKO</h1>
      </div>
    </div>

    {/* Mobile Menu */}
    {open && (
      <div className="mobile-menu-overlay">
        <div className="mobile-menu-box">
          <div className="mobile-menu-header">
            <h2>Menu</h2>
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="mobile-nav-link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </header>
);
}

export default Header;