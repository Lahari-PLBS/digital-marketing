"use client";
import React, { useState, useEffect } from 'react';
import { Heart, Globe, Linkedin, ShoppingCart, Search, Play, Menu, X } from 'lucide-react';
import Aos from "aos"
import "aos/dist/aos.css"

export default function Home(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
      Aos.init({ duration: 1000 })
    }, [])

  return (
    <div className="relative bg-[url(https://burst.shopifycdn.com/photos/business-team-meeting-boardroom.jpg?width=1000&format=pjpg&exif=0&iptc=0)] bg-cover bg-center bg-black/60 bg-blend-overlay w-full min-h-screen">
      {/* Left Social Sidebar - Hidden on mobile */}
      <div className="hidden md:flex absolute left-4 top-0 w-16 bg-orange-500 z-20 pb-3 flex-col items-center rounded-b-full">
        <div className="text-white text-md font-medium transform -rotate-270 mt-20 mb-8 whitespace-nowrap">
          FOLLOW US: 
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full border border-white hover:text-black hover:bg-white flex items-center justify-center text-white hover:bg-opacity-30 cursor-pointer">
            <Heart size={18} />
          </div>
          <div className="w-10 h-10 rounded-full border border-white hover:text-black hover:bg-white flex items-center justify-center text-white hover:bg-opacity-30 cursor-pointer">
            <Globe size={18} />
          </div>
          <div className="w-10 h-10 rounded-full border border-white hover:text-black hover:bg-white flex items-center justify-center text-white hover:bg-opacity-30 cursor-pointer">
            <Linkedin size={18} />
          </div>
        </div>
      </div>

      {/* Right Video Sidebar - Hidden on mobile */}
      <div className="hidden md:flex absolute right-2 bottom-0 rounded-t-full w-16 h-[390px] bg-green-400 z-20 flex-col items-center justify-center gap-7">
        <div className="text-white text-sm font-medium transform rotate-90 whitespace-nowrap mb-8">
          WATCH OUR VIDEO
        </div>
        <div className="w-10 h-10 transform -rotate-270 border border-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 cursor-pointer mt-8">
          <Play size={18} />
        </div>
        <div className="z-10 w-0.5 h-15 bg-white"></div>
      </div>

      {/* Main Content */}
      <div className="md:pl-16 md:pr-16 px-4">
        {/* Header */}
        <header className="flex items-center justify-between py-6 px-4 md:px-8">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-sm mr-3">
              KW
            </div>
            <div className="text-gray-800">
              <span className="font-bold text-lg">key</span>
              <span className="font-normal text-lg text-green-500">wordly</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-white hover:text-green-500 flex items-center">
                Home
              </button>
            </div>
            <a href="#" className="text-white hover:text-green-500">About</a>
            <div className="relative group">
              <button className="text-white hover:text-green-500 flex items-center">
                Pages
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-white hover:text-green-500 flex items-center">
                Blog
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-white hover:text-green-500">Contact</a>
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <div className="w-10 h-10 rounded flex items-center justify-center text-white">
                <ShoppingCart size={18} />
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                02
              </div>
            </div>
            <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center text-white">
              <Search size={18} />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium">
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/80 z-40 md:hidden">
            <div className="absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-lg">
              <div className="flex flex-col p-6 pt-20">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-sm mr-3">
                      KW
                    </div>
                    <div className="text-gray-800">
                      <span className="font-bold text-lg">key</span>
                      <span className="font-normal text-lg text-green-500">wordly</span>
                    </div>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  <div className="bg-green-500 text-white px-4 py-3 rounded">
                    <span className="text-sm font-medium">WELCOME TO KEYWORDLY</span>
                  </div>
                  
                  <a href="#" className="text-gray-800 hover:text-green-500 py-2 text-lg border-b border-gray-200">
                    Home <span className="text-green-500">▼</span>
                  </a>
                  <a href="#" className="text-gray-800 hover:text-green-500 py-2 text-lg border-b border-gray-200">About</a>
                  <a href="#" className="text-gray-800 hover:text-green-500 py-2 text-lg border-b border-gray-200">
                    Pages <span className="text-green-500">▼</span>
                  </a>
                  <a href="#" className="text-gray-800 hover:text-green-500 py-2 text-lg border-b border-gray-200">
                    Blog <span className="text-green-500">▼</span>
                  </a>
                  <a href="#" className="text-gray-800 hover:text-green-500 py-2 text-lg border-b border-gray-200">Contact</a>
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center px-4">
          
          {/* Orange Geometric Shape - Hidden on mobile */}
          <div className="hidden md:block absolute top-72 right-0 w-80 h-60 bg-orange-500 transform rotate-30 translate-x-50 -translate-y-30"></div>
          
          {/* Hero Content */}
          <div data-aos="slide-up" className="text-center max-w-4xl mx-auto px-4 md:px-8 relative z-10">
            <div className="inline-block bg-green-500 text-white px-4 md:px-6 py-2 rounded-full text-sm font-medium mb-6 md:mb-8">
              WELCOME TO KEYWORDLY
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Leading SEO Agency For Your Business
            </h1>
            
            <p className="text-lg md:text-xl text-white mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Optimize your website SEO and take your business to newer heights with expert services from Keywordly.
            </p>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-lg text-lg font-semibold transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};