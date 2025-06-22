import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const location = useLocation();

  // Decide navbar class based on current route
  const navClass =
    location.pathname === "/"
      ? "navbar home-nav"
      : location.pathname === "/cinema"
      ? "navbar cinema-nav"
      : location.pathname === "/architecture"
      ? "navbar arch-nav"
      : location.pathname === "/gastronomie"
      ? "navbar gastro-nav"
      : location.pathname === "/automobile"
      ? "navbar auto-nav"
      : location.pathname === "/religion"
      ? "navbar relg-nav"
      : "navbar default-nav";
  return (
    <nav className={navClass}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/architecture" className="nav-button">
          Architecture
        </Link>
        <Link to="/religion" className="nav-button">
          Religion
        </Link>
        <Link to="/gastronomie" className="nav-button">
          Gastronomie
        </Link>
        <Link to="/cinema" className="nav-button">
          Cinema
        </Link>
        <Link to="/automobile" className="nav-button">
          Automobile
        </Link>
      </div>
    </nav>
  );
};
