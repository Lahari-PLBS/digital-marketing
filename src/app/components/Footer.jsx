"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUp, Send, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleEmailSubmit = () => {
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  // Scroll logic to show/hide the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollButton(scrollTop > 100); // Show button after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const brandLogos = [
    { name: 'Craft', text: 'Craft' },
    { name: 'Hype', text: 'Hype' },
    { name: 'QG Power', text: 'QG POWER XMP MODULE' },
    { name: 'Logo', text: 'LOGO' },
    { name: 'LogoIpsum', text: 'logoipsum' },
    { name: 'Minimum', text: 'MINIMUM' }
  ];

  return (
    <div className="bg-gray-50 pt-16 pb-8 relative">
      {/* Brand Logos Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brandLogos.map((brand, index) => (
            <div key={index} className="flex items-center justify-center h-16 w-full">
              <div className="text-gray-400 font-medium text-sm lg:text-base text-center">
                {brand.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded border-2 border-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">KW</span>
              </div>
              <span className="text-xl font-semibold text-gray-800">keywordly</span>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit aut elit tellus luctus nec ulla corper mattis ulvinar daibus leo.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <div className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:border-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:border-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer">
                <Twitter size={18} />
              </div>
              <div className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:border-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer">
                <Linkedin size={18} />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <nav className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-700 hover:text-green-500 cursor-pointer transition-colors duration-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Home</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 hover:text-green-500 cursor-pointer transition-colors duration-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>About</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 hover:text-green-500 cursor-pointer transition-colors duration-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Services</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 hover:text-green-500 cursor-pointer transition-colors duration-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Contact us</span>
              </div>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3 text-gray-700">
              <Phone size={18} className="text-green-500" />
              <span>+61 3 8376 6284</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <Mail size={18} className="text-green-500" />
              <span>info@keywordly.com</span>
            </div>
            <div className="flex items-start space-x-3 text-gray-700">
              <MapPin size={18} className="text-green-500 mt-1 flex-shrink-0" />
              <span>21 King Street Melbourne, 3000, Australia</span>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <button
                onClick={handleEmailSubmit}
                className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-r-lg transition-colors duration-300"
              >
                <Send size={18} />
              </button>
            </div>
            
            <div className="flex items-start space-x-3">
              <input 
                type="checkbox" 
                className="mt-1 w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
              />
              <p className="text-sm text-gray-600">
                Quis autem vel eum iure reprehenderit rui in ea voluptate esse.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2023 Keywordly All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button - Only show when scrolled */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 z-50 flex items-center justify-center animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default FooterSection;