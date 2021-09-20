import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/Countries">Countries</a>
                <a href="/About">About</a>
            </nav>
        </div>
    );
};

export default Header;