import './App.css';
import React from 'react';

const Navbar = () => {
    return ( 
        <div className="nav-content">
        <nav className="navbar">
            <div className="link">
                <a href="/">Home</a>
                <a href="/">Contact</a>
                <a href="/">Log in</a>
            </div>
        </nav>
        </div>

     );
}
 
export default Navbar;