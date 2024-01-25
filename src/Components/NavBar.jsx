import React, { useState } from "react";
import "./NavBar.css";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__mobile-toggle" onClick={toggleMenu}>
        <div className="hamburger-icon"></div>
        {/* <span></span> define 3 times  */}
      </div>
      <ul className={`navbar__list ${showMenu ? "show" : ""}`}>
        <li className="navbar__item">
          <button
            className="navbar__button"
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
        </li>
        <li className="navbar__item">
          <button
            className="navbar__button"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
        </li>
        <li className="navbar__item">
          <button
            className="navbar__button"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
        </li>
        <li className="navbar__item">
          <button
            className="navbar__button"
            onClick={() => scrollToSection("education")}
          >
            Education
          </button>
        </li>
        <li className="navbar__item">
          <button
            className="navbar__button"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
