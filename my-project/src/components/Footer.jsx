import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h2 className="footer-logo">Creative<span>Cube</span></h2>
          <p>
            Premium modular furniture & interior solutions designed
            to transform your living and workspace.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Our Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Custom Furniture</li>
            <li>Interior Design</li>
            <li>Free Installation</li>
            <li>Fast Delivery</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Bilaspur, Chhattisgarh</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> info@creativecube.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 CreativeCube. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;