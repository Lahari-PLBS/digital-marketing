"use client";
import React, { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"

const PortfolioSection = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);
    const portfolioItems = [
        {
            category: "Web Design",
            title: "Duis aute irure dolor...",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            category: "Mobile App",
            title: "Ruis aute irure doloea...",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            category: "Digital Marketing",
            title: "Nuis aute dolor inea...",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            category: "Social Marketing",
            title: "Guis aute irure inea...",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            category: "Web Development",
            title: "Muis irure dolor inea...",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div data-aos="slide-up" className="text-center mb-16">
                    <p className="text-orange-500 text-sm uppercase tracking-wider mb-4 font-semibold">
                        OUR PORTFOLIO
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        Check Our Amazing Work We<br />
                        Have Done
                    </h1>
                </div>

                {/* Portfolio Cards - All Same Size in One Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            {/* Image Container - Fixed Height */}
                            <div className="relative h-64">
                                <img
                                    src="https://assets.entrepreneur.com/content/3x2/2000/1671213536-GettyImages-1367899893.jpg"
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Hover Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-orange-400 text-xs uppercase tracking-wider font-semibold mb-2">
                                        {item.category}
                                    </span>
                                    <h3 className="text-white font-bold text-lg mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-200 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Default Content (Always Visible) */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white group-hover:bg-transparent transition-colors duration-300">
                                <span className="text-orange-500 text-xs uppercase tracking-wider font-semibold mb-2 block group-hover:hidden">
                                    {item.category}
                                </span>
                                <h3 className="text-gray-900 font-bold text-lg group-hover:hidden">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;