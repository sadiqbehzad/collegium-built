import "./navbar.css";
import logo from "./logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  //Hook for Services:
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const toggleServicesMenu = () => {
    if (isServicesVisible) {
      setIsServicesVisible(false);
    } else {
      setIsServicesVisible(true);
      setIsResourcesVisible(false);
      setIsAboutUsVisible(false);
    }
  };
  //Hook For Resources:
  const [isResourcesVisible, setIsResourcesVisible] = useState(false);
  const toggleResourcesMenu = () => {
    if (isResourcesVisible) {
      setIsResourcesVisible(false);
    } else {
      setIsResourcesVisible(true);
      setIsServicesVisible(false);
      setIsAboutUsVisible(false);
    }
  };
  //Hook For About Us:
  const [isAboutUsVisible, setIsAboutUsVisible] = useState(false);
  const toggleAboutUsMenu = () => {
    if (isAboutUsVisible) {
      setIsAboutUsVisible(false);
    } else {
      setIsAboutUsVisible(true);
      setIsServicesVisible(false);
      setIsResourcesVisible(false);
    }
  };
  //Hook for Hamburger Icon:
  const [isNavListVisible, setisNavListVisible] = useState(true);
  const handleHamburgerClick = () => {
    if (isNavListVisible) {
      setisNavListVisible(false);
    } else {
      setisNavListVisible(true);
    }
  };
  return (
    <nav class="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleHamburgerClick}>
          &#9776;
        </div>

        <ul className={`nav-list ${isNavListVisible ? "show" : ""} `}>
          <li>
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <div className="nav-link" onClick={toggleServicesMenu}>
              Services
            </div>
            {isServicesVisible && (
              <ul className="sub-menu">
                <li>
                  <a className="nav-link" href="/owners">
                    Owners
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/developers">
                    Developers
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/projectteam">
                    Project Team
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div className="nav-link" onClick={toggleResourcesMenu}>
              Resources
            </div>
            {isResourcesVisible && (
              <ul className="sub-menu">
                <li>
                  <a className="nav-link" href="/community">
                    Community
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/blogs">
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/userstories">
                    User Stories
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div className="nav-link" onClick={toggleAboutUsMenu}>
              About Us
            </div>
            {isAboutUsVisible && (
              <ul className="sub-menu">
                <li>
                  <a className="nav-link" href="/who-we-are">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/partners">
                    Partners
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a className="nav-link" href="/careers">
              Careers
            </a>
          </li>
          <li>
            <a className="nav-link" href="/faqs">
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
