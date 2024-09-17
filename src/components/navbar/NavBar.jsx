import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png'; // Import the logo from the assets folder
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Company Logo" className="navbar-logo-image" />
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <button className="navbar-button">Shop</button>
                <Link to="/sell" className="navbar-link">Sell</Link>
                <a href="#" className="navbar-link">Guide</a>
                <a href="#" className="navbar-link">Contact</a>
            </div>
        </nav>
    );
};

export default NavBar;
