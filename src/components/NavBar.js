import React from 'react';
import './NavBar.css';

const NavBar = ({ onModelClick }) => {
    const handleModelClick = (model) => {
        onModelClick(model);
    };

    return (
        <nav className="navbar">
        <div className="navbar__logo">
        {/* Tesla logo or brand name */}
        <img
            src="tesla-logo.png" // Replace with your Tesla logo image
            alt="Tesla Logo"
        />
    </div>
            <div className="navbar__center">
                {/* Add an onClick handler to each Model link */}
                <a onClick={() => handleModelClick('Model S')}>Model S</a>
                <a onClick={() => handleModelClick('Model 3')}>Model 3</a>
                <a onClick={() => handleModelClick('Model X')}>Model X</a>
                <a onClick={() => handleModelClick('Model Y')}>Model Y</a>
            </div>
            <div className="navbar__right">
                {/* Other navbar elements like Sign In, Menu, etc. */}
                <a href="#">Sign In</a>
            </div>
        </nav>
    );
}

export default NavBar;
