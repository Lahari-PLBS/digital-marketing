"use client";
import React, { useEffect } from 'react';
import { Briefcase, Users, HandHeart, Monitor } from 'lucide-react';
import Aos from "aos"
import "aos/dist/aos.css"

const Page3 = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    
  const statistics = [
    {
      icon: <Briefcase className="w-6 h-6 text-gray-600" />,
      number: "2975",
      label: "Business Ideas",
      color: "text-gray-900"
    },
    {
      icon: <Users className="w-6 h-6 text-gray-600" />,
      number: "3545",
      label: "Happy Customers",
      color: "text-gray-900"
    },
    {
      icon: <HandHeart className="w-6 h-6 text-gray-500" />,
      number: "7456",
      label: "Finished Projects",
      color: "text-gray-900",
      highlight: true
    },
    {
      icon: <Monitor className="w-6 h-6 text-gray-600" />,
      number: "500",
      label: "Products launched",
      color: "text-gray-900"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Content - Mobile First Order */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Header Content */}
            <div className="text-center lg:text-left">
              <p className="text-gray-600 text-sm lg:text-md uppercase tracking-wider mb-3 lg:mb-4">
                WHAT WE DO
              </p>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                We Create Customer<br />
                Relationships That<br />
                Last Forever
              </h1>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                Quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
                adipisci velit, sed quia non numquam eius mod.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="group p-4 lg:p-6 rounded-lg bg-white shadow-md hover:shadow-lg hover:border-2 hover:border-green-200 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <div className="flex-shrink-0 p-2 rounded-full bg-gray-50 group-hover:bg-orange-50 transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline space-x-1">
                        <span className={`text-2xl lg:text-3xl font-bold ${stat.color} ${
                          stat.color === 'text-green-600' ? '' : 'group-hover:text-green-600'
                        } transition-colors duration-300`}>
                          {stat.number}
                        </span>
                        <span className="text-orange-500 text-xl lg:text-2xl font-bold">+</span>
                      </div>
                      <p className="text-gray-600 text-sm font-medium mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images - Mobile Second Order */}
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            {/* Background decorative circles - Hidden on mobile */}
            <div className="hidden lg:block absolute -top-8 -left-8 w-32 h-32 bg-orange-300 rounded-full opacity-30"></div>
            <div className="hidden lg:block absolute -bottom-16 -right-8 w-48 h-48 bg-green-300 rounded-full opacity-30"></div>
            
            <div data-aos="zoom-in" className="relative h-80 lg:h-auto">
              {/* Mobile: Single centered image */}
              <div className="lg:hidden flex justify-center">
                <img
                  src="https://www.protocol80.com/hubfs/Teamwork_revenue_planning-1.jpg"
                  alt="Team collaboration and planning"
                  className="w-full max-w-sm h-64 object-cover rounded-lg shadow-lg border-4 border-white"
                />
              </div>

              {/* Desktop: Overlapping images layout */}
              <div className="hidden lg:block">
                {/* Top Image */}
                <div className="absolute z-10 transform -translate-x-8 translate-y-20 border-6 border-gray-300">
                  <img
                    src="https://www.protocol80.com/hubfs/Teamwork_revenue_planning-1.jpg"
                    alt="Team collaboration and planning"
                    height={300}
                    className="w-half h-64 object-cover shadow-lg"
                  />
                </div>
                
                {/* Bottom Image - Offset */}
                <div className="absolute z-10 ml-8 transform translate-x-40 translate-y-70 border-6 border-gray-300">
                  <img
                    src="https://www.xcellimark.com/hubfs/Digital_Marketing-3-2.jpg"
                    alt="Digital marketing analytics"
                    height={300}
                    className="h-64 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;