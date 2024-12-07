import React from "react";
import "./Footer.css"; 

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h5 className="footer-heading">About Us</h5>
            <p className="text-gray-600">
              We provide the best bike rental service to make your journeys
              memorable and convenient. Explore with us!
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/login" className="hover:text-gray-400">Login</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
              <li><a href="/services" className="hover:text-gray-400">Services</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h5 className="footer-heading">Contact Us</h5>
            <p className="text-gray-600">Email: support@bikerentals.com</p>
            <p className="text-gray-600">Phone: +1 234 567 890</p>
            <p className="text-gray-600">Address: 123 Bike Lane, Adventure City</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Bike Rentals. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
