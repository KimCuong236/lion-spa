import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About LuxeSpa</h3>
            <p className="text-gray-400">
              Discover the ultimate relaxation and beauty experience at LuxeSpa. 
              We offer premium services tailored to your needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-pink-500">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-pink-500">Services</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-pink-500">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-pink-500">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Hair Removal</li>
              <li className="text-gray-400">Filler & Botox</li>
              <li className="text-gray-400">Facial Treatments</li>
              <li className="text-gray-400">Body Treatments</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                info@luxespa.com
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                123 Spa Street, Beauty City
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="w-5 h-5 mr-2" />
                Mon-Sat: 9:00 AM - 8:00 PM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LuxeSpa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};