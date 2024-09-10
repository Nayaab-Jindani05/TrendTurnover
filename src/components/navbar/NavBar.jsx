import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png'; // Import the logo from the assets folder

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Company Logo" className="navbar-logo-image" />
            </div>
            <div className="navbar-links">
                <a href="#" className="navbar-link">Home</a>
                <button className="navbar-button">Shop</button>
                <a href="#" className="navbar-link">Sell</a>
                <a href="#" className="navbar-link">Guide</a>
                <a href="#" className="navbar-link">Contact</a>
            </div>
        </nav>
    );
};

export default NavBar;
