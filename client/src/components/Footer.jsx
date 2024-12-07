import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-8">
          {/* About Us Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">About Us</h3>
            <p className="text-gray-400 text-sm">
              We provide high-quality car rentals to meet your travel needs with comfort and ease.
            </p>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Contact</h3>
            <p className="text-gray-400 text-sm">
            Have any questions or need assistance? Get in touch with us!
            </p>
            <p className="text-gray-400 text-sm mb-2 mt-2">
              <strong>Email: </strong>
              <a href="mailto:attaswiya46@gmail.com" className="text-teal-400 hover:text-teal-500">info@carrental.com</a>
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Phone: </strong>
              <a href="tel:+911111111" className="text-teal-400 hover:text-teal-500">(+91) 8123456789</a>
            </p>
          </div>

          {/* Useful Links Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-teal-500 transition duration-300 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-teal-500 transition duration-300 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-teal-500 transition duration-300 text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; 2024 CarRental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
