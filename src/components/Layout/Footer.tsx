import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Eye } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-[#ffb990]" />
              <span className="text-xl font-semibold">Vision Artistry</span>
            </div>
            <p className="text-gray-400">
              Crafting custom ocular prosthetics with precision and care.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#ffb990]">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-[#ffb990]">Portfolio</Link></li>
              <li><Link to="/biography" className="text-gray-400 hover:text-[#ffb990]">Biography</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-[#ffb990]">Pricing & Subsidies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Vision Street</li>
              <li>Melbourne, VIC 3000</li>
              <li>Phone: (03) 9123 4567</li>
              <li>Email: info@visionartistry.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#ffb990]">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ffb990]">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ffb990]">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vision Artistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;