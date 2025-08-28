"use client";
import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Page1() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);



  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  // const openVideo = () => {
  //   setIsVideoOpen(true);
  // };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  console.log(isVideoOpen);
  return (
    <>
      <div className="h-[70%] relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://thumbs.dreamstime.com/b/office-group-team-professionals-business-people-negotiating-modern-boardroom-discussing-project-planning-contract-terms-378790595.jpg')`
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-green-400 opacity-80"></div>

        {/* Dark Overlay on the right side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-gray-900 via-gray-800 to-transparent opacity-90"></div>

        <div className="relative z-10 grid lg:grid-cols-2 items-center">
          {/* Left Side - Video Play Button */}
          <div className="flex items-center justify-center p-8" >
            <div className="relative">
              {/* Outer Ring */}
              <div className="w-32 h-32 rounded-full border-4 border-white border-opacity-50 flex items-center justify-center">
                {/* Inner Circle with Play Button */}
                <button
                  className="w-20 h-20 bg-orange-500 z-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors group"
                  onClick={() => setIsVideoOpen(!isVideoOpen)}
                >
                  <Play size={24} className="text-white ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Pulsing Animation Rings */}
              <div className="absolute inset-2 w-28 h-28 rounded-full border border-white border-opacity-20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div data-aos="fade-up" className="p-8 lg:p-16 text-white">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Leading SEO Digital Agency For your Business
              </h1>

              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-lg">
                Quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci velit, sed quia non numquam eius mod.
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Video Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/Hin8-nEFIuI?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};