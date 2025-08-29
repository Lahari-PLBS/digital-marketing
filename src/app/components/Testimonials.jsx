"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const testimonials = [
    {
      quote: "Sed ruia nontempora incidunt ut labore uamdolore magnam aliruam quaerat earurtvm rerum auic.",
      name: "Kevin Andrew",
      position: "CEO - Company",
      rating: 5
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Sarah Johnson",
      position: "Marketing Director - TechCorp",
      rating: 5
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Michael Chen",
      position: "Founder - StartupXYZ",
      rating: 5
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "Emma Wilson",
      position: "CTO - InnovateLab",
      rating: 5
    },
    {
      quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "David Martinez",
      position: "VP Sales - GlobalTech",
      rating: 5
    }
  ];

  // Handle window resize and initial mount
  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // On mobile (single card view), cycle through all testimonials
        if (isMobile) {
          return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
        }
        // On desktop (3 cards view), cycle through groups of 3
        return prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length, isMobile, mounted]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // On mobile, cycle through individual testimonials
      if (isMobile) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      }
      // On desktop, cycle through groups of 3
      return prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // On mobile, cycle through individual testimonials
      if (isMobile) {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
      // On desktop, cycle through groups of 3
      return prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1;
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-gray-400 fill-gray-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  // Don't render until mounted to avoid SSR issues
  if (!mounted) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://t4.ftcdn.net/jpg/03/19/15/01/360_F_319150146_rWplWQeh299EYiDQ0Ao4V1q6Gspecw5J.jpg)'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 bg-blend-overlay"></div>

      <div className="relative z-10 py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <p className="text-white text-sm md:text-md uppercase tracking-wider mb-3 md:mb-4">
              TESTIMONIALS
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight px-4">
              What Our Satisfied Clients<br />
              are Saying!
            </h1>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 md:-left-6 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 md:-right-6 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>

            {/* Testimonials Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (isMobile ? 100 : 100/3)}%)`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-4"
                  >
                    <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl h-full flex flex-col mx-2 md:mx-0">
                      {/* Quote Icon */}
                      <div className="mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                          <Quote className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>

                      {/* Quote Text */}
                      <div className="flex-1 mb-4 md:mb-6">
                        <p className="text-gray-600 italic text-center leading-relaxed text-sm md:text-base">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center space-x-1 mb-4 md:mb-6">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Client Info */}
                      <div className="text-center">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6 md:mt-8">
              {Array.from({ 
                length: isMobile ? testimonials.length : testimonials.length - 2 
              }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;