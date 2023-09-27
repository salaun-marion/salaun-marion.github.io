import React, { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar(){
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

    return <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <a href ="/" className ="site-title"> What's_up_?</a>
        <button className="hamburger" onClick={toggleMenu}>
            {/* icon from heroicons.com */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
            >
            <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
            </svg>
        </button>
        <ul>
            <li>
                <a href="/about"> About</a>
            </li>
            <li>
                <a href="/project"> Project</a>
            </li>
            <li>
                <a href="/contact"> Contact</a>
            </li>
        </ul>
    </nav>
}