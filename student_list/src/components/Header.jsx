import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="site-title">My Website</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;