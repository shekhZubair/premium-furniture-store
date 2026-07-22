
import "./Footer.css";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterestP,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}
                <div className="footer-brand">

                    <h2>LuxeHome</h2>

                    <p>
                        Discover timeless furniture crafted with elegance,
                        comfort, and premium quality to transform every
                        house into a beautiful home.
                    </p>

                    <div className="social-icons">

                        <a href="#">
                            <FaFacebookF />
                        </a>

                        <a href="#">
                            <FaInstagram />
                        </a>

                        <a href="#">
                            <FaTwitter />
                        </a>

                        <a href="#">
                            <FaPinterestP />
                        </a>

                    </div>

                </div>

                {/* Quick Links */}

                <div className="footer-links">

                    <h3>Quick Links</h3>

                    <ul>

                        <li><a href="#">Home</a></li>

                        <li><a href="#">Shop</a></li>

                        <li><a href="#">Collections</a></li>

                        <li><a href="#">About Us</a></li>

                        <li><a href="#">Contact</a></li>

                    </ul>

                </div>

                {/* Support */}

                <div className="footer-links">

                    <h3>Support</h3>

                    <ul>

                        <li><a href="#">Help Center</a></li>

                        <li><a href="#">Shipping</a></li>

                        <li><a href="#">Returns</a></li>

                        <li><a href="#">Privacy Policy</a></li>

                        <li><a href="#">Terms & Conditions</a></li>

                    </ul>

                </div>

                {/* Contact */}

                <div className="footer-contact">

                    <h3>Contact</h3>

                    <p> Bhopal, Madhya Pradesh</p>

                    <p> +91 98765 43210</p>

                    <p> hello@luxehome.com</p>

                    <p>Mon - Sat : 9:00 AM - 7:00 PM</p>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 LuxeHome. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;