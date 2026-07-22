import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="container">

                {/* Logo */}
                <div className="logo">
                    LuxeHome
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>Shop</a></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>Collections</a></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>

                {/* Search Box */}
                <div className="search-box">
                    <FaSearch className="search-icon" />

                    <input
                        type="text"
                        placeholder="Search furniture..."
                    />

                    <button className="search-btn">
                        Search
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div
                    className="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>


            </div>
        </nav>
    );
}

export default Navbar;