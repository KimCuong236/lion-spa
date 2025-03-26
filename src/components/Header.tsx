import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Space as Spa, Menu, X } from "lucide-react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSocialClick = (platform: string) => {
    switch (platform) {
      case "facebook":
        window.open("https://www.facebook.com/lionbeautycenter", "_blank");
        break;
      case "instagram":
        window.open("https://www.instagram.com/lionbeautycenterr/", "_blank");
        break;
      case "zalo":
        window.open("https://zalo.me", "_blank");
        break;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md animate-slide-in relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <Spa className="h-8 w-8 text-pink-600 animate-float" />
            <span className="text-2xl font-bold text-gray-800">LionBeauty</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-pink-600 transition-colors hover-lift"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-pink-600 transition-colors hover-lift"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 hover:text-pink-600 transition-colors hover-lift"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-pink-600 transition-colors hover-lift"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => handleSocialClick("facebook")}
                className="text-blue-600 hover:text-blue-700 hover-scale"
              >
                <Facebook className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleSocialClick("instagram")}
                className="text-pink-600 hover:text-pink-700 hover-scale"
              >
                <Instagram className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleSocialClick("zalo")}
                className="text-blue-500 hover:text-blue-600 hover-scale"
              >
                <span className="font-bold">Zalo</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-600 hover:text-pink-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-end mb-6">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-pink-600 transition-colors text-lg"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-600 hover:text-pink-600 transition-colors text-lg"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-pink-600 transition-colors text-lg"
                onClick={toggleMobileMenu}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-pink-600 transition-colors text-lg"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => handleSocialClick("facebook")}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Facebook className="h-6 w-6" />
                </button>
                <button
                  onClick={() => handleSocialClick("instagram")}
                  className="text-pink-600 hover:text-pink-700"
                >
                  <Instagram className="h-6 w-6" />
                </button>
                <button
                  onClick={() => handleSocialClick("zalo")}
                  className="text-blue-500 hover:text-blue-600"
                >
                  <span className="font-bold">Zalo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
