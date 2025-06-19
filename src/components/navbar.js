// Navbar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3 sticky-top">
      <div className="container">
        {/* Left: Logo + Brand */}
        <Link to="" className="navbar-brand d-flex align-items-center">
          <img
            src="https://marketplace.canva.com/EAF0Hq4UHjM/1/0/1600w/canva-orange-phoenix-animal-gaming-logo-WIPEOAyYPIs.jpg"
            alt="Logo"
            width="30"
            height="30"
            className="me-2 rounded-circle"
          />
          <strong>MyBrand</strong>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbnpm install react-bootstrap bootstraparContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
          {/* Center: Navigation */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/property_post" className="nav-link">Post Property</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact_us" className="nav-link">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/subscription" className="nav-link">Subscription</Link>
            </li>
          </ul>

          {/* Right: Login + Signup */}
          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
