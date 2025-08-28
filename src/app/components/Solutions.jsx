"use client";
import React from 'react';
import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Aos from "aos"
import "aos/dist/aos.css"

export default function Solutions() {

  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <div className="bg-gray-50 py-16 px-8 relative overflow-hidden">
      {/* Background decorative circles */}
      {/* <div className="absolute bottom-20 left-20 w-32 h-32 bg-orange-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-40 right-40 w-20 h-20 bg-orange-100 rounded-full opacity-50"></div> */}

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="text-md font-semibold text-gray-700 tracking-wider mb-4">
                DIGITAL MARKETING SOLUTIONS...
              </div>
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Generate 100% Traffic On Your Website
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius mod.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-lg text-gray-800 font-medium">Advertising & Marketing</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-lg text-gray-800 font-medium">Web Development</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-lg text-gray-800 font-medium">Mobile App Development</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-lg text-gray-800 font-medium">Search Engine Optimization</span>
              </div>
            </div>

            {/* CEO Profile */}
            <div className="flex items-center space-x-4 pt-8">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="https://t4.ftcdn.net/jpg/05/84/65/25/360_F_584652599_s89lyUhPSMfX5YsRlKsa1AglJT7vNioO.jpg"
                  alt="Sophie Davidson - CEO & Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">Sophie Davidson</h4>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>
        </div>

        {/* Right Image Section */}
        <div data-aos="flip-left" className="relative">
          {/* Main Image Grid */}
          <div className="grid grid-cols-2 gap-4 relative">

            {/* Bottom Left Image - Man working */}
            <div className="overflow-hidden transform translate-y-30">
              {/* <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-sm font-medium mb-2">Professional</div>
                    <div className="text-xs">Working</div>
                  </div>
                </div> */}
              <img className="h-[270px] w-[350px] border-10 border-gray-300" src="https://www.shutterstock.com/image-photo/group-happy-business-people-working-600nw-2111719991.jpg" />
            </div>

            {/* Top Right Image - Team collaboration */}
            <div className="overflow-hidden transform -translate-y-20">
              {/* <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <div className="text-center text-yellow-600">
                    <div className="text-sm font-medium mb-2">Team</div>
                    <div className="text-xs">Collaboration</div>
                  </div>
                </div> */}
              <img className="h-[250px] w-[350px] border-10 border-gray-300" src="https://assets.unileversolutions.com/v1/134103152.jpg" />
            </div>

          </div>

          {/* Experience Badge Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-green-500 text-white px-8 py-6 rounded-md text-center shadow-lg">
              <div className="text-4xl font-bold mb-1">30+</div>
              <div className="text-sm font-medium">Years of Experience</div>
            </div>
          </div>

          {/* Signature */}
          {/* <div className="absolute bottom-8 right-8 z-10">
              <div className="text-gray-400 font-script text-2xl transform rotate-12">
                Sophie Davidson
              </div>
            </div> */}
        </div>
      </div>
    </div>
    </div >
  );
};
