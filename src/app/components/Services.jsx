'use client'

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Services(){

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
    <div className="bg-gray-50 py-20 px-8 relative">

      {/* Floating Back to Top Button */}
      {/* <div className="fixed bottom-8 right-8 z-50">
        <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-600 transition-colors shadow-lg">
          <ArrowUp size={20} />
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="text-md font-semibold text-gray-800 tracking-wider mb-4">
            UNLOCK THE POTENTIAL
          </div>
          <h2 className="text-4xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl">
            Boost your SEO Ranking with Excellent, Cost-effective Services
          </h2>
          {/* Decorative line with dots */}
          <div className="flex items-center mt-8">
            <div className="w-16 h-1 bg-gray-800"></div>
            <div className="flex ml-2 space-x-1">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Business Growth Card */}
          <div 
            data-aos="fade-up" 
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer group relative overflow-hidden"
          >
            {/* Background Image Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
              style={{
                backgroundImage: "url('https://agims.com/wp-content/uploads/elementor/thumbs/digital-marketing-el-paso-2-qqkp8sz4c4fvud4diphk29ldy9q24hq9ytvnjptk1s.jpg')"
              }}
            ></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="relative">
                    {/* Chart Icon */}
                    <div className="w-10 h-8 border-2 border-gray-700 rounded-sm relative">
                      {/* Chart bars */}
                      <div className="absolute bottom-0 left-1 w-1 h-4 bg-orange-500"></div>
                      <div className="absolute bottom-0 left-3 w-1 h-6 bg-orange-500"></div>
                      <div className="absolute bottom-0 left-5 w-1 h-3 bg-orange-500"></div>
                      <div className="absolute bottom-0 left-7 w-1 h-5 bg-orange-500"></div>
                      {/* Trend line */}
                      <div className="absolute top-1 left-1 w-8 h-px bg-gray-700 transform rotate-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Growth
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
              
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-0 hover:bg-orange-500 hover:text-white transition-colors font-medium">
                Read More
              </button>
            </div>
          </div>

          {/* Business Growth Card (Second) */}
          <div 
            data-aos="fade-up" 
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer group relative overflow-hidden"
          >
            {/* Background Image Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
              style={{
                backgroundImage: "url('https://agims.com/wp-content/uploads/elementor/thumbs/digital-marketing-el-paso-2-qqkp8sz4c4fvud4diphk29ldy9q24hq9ytvnjptk1s.jpg')"
              }}
            ></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="relative">
                    {/* Chart Icon */}
                    <div className="w-10 h-8 border-2 border-gray-700 rounded-sm relative">
                      {/* Chart bars */}
                      <div className="absolute bottom-0 left-1 w-1 h-4 bg-orange-500"></div>
                      <div className="absolute bottom-0 left-3 w-1 h-6 bg-orange-500"></div>
                      <div className="absolute bottom-0 left-5 w-1 h-3 bg-orange-500"></div>
                      <div className="absolute bottom-0 left-7 w-1 h-5 bg-orange-500"></div>
                      {/* Trend line */}
                      <div className="absolute top-1 left-1 w-8 h-px bg-gray-700 transform rotate-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Growth
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
              
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-0 hover:bg-orange-500 hover:text-white transition-colors font-medium">
                Read More
              </button>
            </div>
          </div>

          {/* SEO Optimization Card */}
          <div 
            data-aos="fade-up" 
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer group relative overflow-hidden"
          >
            {/* Background Image Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
              style={{
                backgroundImage: "url('https://agims.com/wp-content/uploads/elementor/thumbs/digital-marketing-el-paso-2-qqkp8sz4c4fvud4diphk29ldy9q24hq9ytvnjptk1s.jpg')"
              }}
            ></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="relative">
                    {/* Hand Icon */}
                    <div className="w-8 h-6 border-2 border-gray-700 rounded-full relative">
                      {/* Palm */}
                      <div className="w-6 h-4 bg-white border-2 border-gray-700 rounded-full absolute -top-1 left-0"></div>
                      {/* Fingers */}
                      <div className="absolute -top-2 left-1 w-1 h-3 bg-gray-700 rounded-full"></div>
                      <div className="absolute -top-2 left-3 w-1 h-3 bg-gray-700 rounded-full"></div>
                      <div className="absolute -top-2 left-5 w-1 h-3 bg-gray-700 rounded-full"></div>
                    </div>
                    {/* SEO symbol */}
                    <div className="absolute -top-2 -right-1">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <div className="text-white text-xs font-bold">SEO</div>
                      </div>
                      {/* Sparkle effects */}
                      <div className="absolute -top-1 -left-1 w-1 h-1 bg-orange-400 rounded-full"></div>
                      <div className="absolute -top-1 -right-1 w-1 h-1 bg-orange-400 rounded-full"></div>
                      <div className="absolute top-2 -left-2 w-1 h-1 bg-orange-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                SEO Optimization
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </p>
              
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-0 hover:bg-orange-500 hover:text-white transition-colors font-medium">
                Read More
              </button>
            </div>
          </div>

          {/* SEO Optimization Card (Second) */}
          <div 
            data-aos="fade-up" 
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer group relative overflow-hidden"
          >
            {/* Background Image Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
              style={{
                backgroundImage: "url('https://agims.com/wp-content/uploads/elementor/thumbs/digital-marketing-el-paso-2-qqkp8sz4c4fvud4diphk29ldy9q24hq9ytvnjptk1s.jpg')"
              }}
            ></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="relative">
                    {/* Hand Icon */}
                    <div className="w-8 h-6 border-2 border-gray-700 rounded-full relative">
                      {/* Palm */}
                      <div className="w-6 h-4 bg-white border-2 border-gray-700 rounded-full absolute -top-1 left-0"></div>
                      {/* Fingers */}
                      <div className="absolute -top-2 left-1 w-1 h-3 bg-gray-700 rounded-full"></div>
                      <div className="absolute -top-2 left-3 w-1 h-3 bg-gray-700 rounded-full"></div>
                      <div className="absolute -top-2 left-5 w-1 h-3 bg-gray-700 rounded-full"></div>
                    </div>
                    {/* SEO symbol */}
                    <div className="absolute -top-2 -right-1">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <div className="text-white text-xs font-bold">SEO</div>
                      </div>
                      {/* Sparkle effects */}
                      <div className="absolute -top-1 -left-1 w-1 h-1 bg-orange-400 rounded-full"></div>
                      <div className="absolute -top-1 -right-1 w-1 h-1 bg-orange-400 rounded-full"></div>
                      <div className="absolute top-2 -left-2 w-1 h-1 bg-orange-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                SEO Optimization
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </p>
              
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-0 hover:bg-orange-500 hover:text-white transition-colors font-medium">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}