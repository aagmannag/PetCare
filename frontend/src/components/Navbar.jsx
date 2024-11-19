import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-logo">
            <img src="/src/assets/images/NavLogo.png" alt="Logo" className="logo-image" />
            PETIFY
        </div>

        <div className="navbar-links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/products">PRODUCTS</Link>
            <Link to="/contact">CONTACT US</Link>
        </div>
        
        <div className="navbar-search">
            <input type="text" placeholder="Search" />
        </div>
    </nav>
);

export default Navbar;
