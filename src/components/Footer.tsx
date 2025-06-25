
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">The Grand Palace</h3>
            <p className="text-gray-300 leading-relaxed">
              Experience luxury and comfort in the heart of the city. Where exceptional hospitality meets modern elegance.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Rooms & Suites</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Dining</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Facilities</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Palace Street, City Center</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@grandpalace.com</p>
              <p>24/7 Reception & Support</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 The Grand Palace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
