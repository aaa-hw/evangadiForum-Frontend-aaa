import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppState } from "../../App"; // Import context
import "./Header.css";
import headImage from "/evangadi-logo-black.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleLogout, user } = useContext(AppState); // Access handleLogout from context
  const token = localStorage.getItem("token");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="outer_container">
      <div className="inner_container">
        <div className="logo-container">
          <Link to="/">
            <img
              src={headImage}
              // src="https://66cf6e20751318039e6352ff--peaceful-dragon-75676e.netlify.app/assets/evangadi-logo-home-D98Zk6nH.png"
              alt="Evangadi Logo"
            />
          </Link>
        </div>
        <div>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>

          <nav className={`nav-container ${isMenuOpen ? "open" : ""}`}>
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="divider" />
              <li>
                <Link to="/how-it-works">How it Works</Link>
              </li>
              <li className="divider" />
            </ul>

            <div>
              {/* Show logout button only if the user is logged in */}
              {token ? (
                <button className="button-container" onClick={handleLogout}>
                  LOG OUT
                </button>
              ) : (
                <Link to="/login">
                  <button className="button-container">SIGN IN</button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
