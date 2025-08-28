"use client";
import React, { useState } from 'react';
import { ChevronDown, Settings, TrendingUp, Heart } from 'lucide-react';
import Aos from "aos"
import "aos/dist/aos.css"
// Accordion Components
const Accordion = ({ children }) => {
  return <div className="space-y-4">{children}</div>;
};

const AccordionItem = ({ header, children, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={onClick}
        className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none transition-colors duration-200 ${
          isOpen
            ? 'bg-orange-500 text-white'
            : 'bg-white text-gray-900 hover:bg-gray-50'
        }`}
      >
        <span className="font-medium text-base">
          {header}
        </span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-1000 flex-shrink-0 ml-4 ${
            isOpen ? 'transform rotate-180' : ''
          } ${
            isOpen ? 'text-white' : 'text-gray-500'
          }`}
        />
      </button>
      
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 transform transition-transform duration-1000 ease-in-out">
          <p className="text-gray-600 text-sm leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

const Page2 = () => {
  const [openAccordion, setOpenAccordion] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  const services = [
    {
      icon: <Settings className="w-6 h-6 text-orange-500" />,
      title: "High Quality Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      title: "Perfect Business Solution",
      description: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor."
    },
    {
      icon: <Heart className="w-6 h-6 text-orange-500" />,
      title: "Commitment to Deliver",
      description: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-8">
            Taking Brands To The<br />
            Next Level
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Services */}
          <div className="space-y-8">
            {/* Team Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://thumbs.dreamstime.com/b/office-group-team-professionals-business-people-negotiating-modern-boardroom-discussing-project-planning-contract-terms-378790595.jpg"
                alt="Professional business team in modern office"
                className="w-full h-60 object-cover"
              />
            </div>

            {/* Services List */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-orange-50 rounded-full">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div data-aos="fade-up">
            <Accordion>
              <AccordionItem 
                header="What is digital marketing?" 
                isOpen={openAccordion === 0}
                onClick={() => toggleAccordion(0)}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
              </AccordionItem>

              <AccordionItem 
                header="What are SEO and SEM?" 
                isOpen={openAccordion === 1}
                onClick={() => toggleAccordion(1)}
              >
                SEO (Search Engine Optimization) and SEM (Search Engine Marketing) are digital marketing strategies to improve your online visibility and drive targeted traffic to your website.
              </AccordionItem>

              <AccordionItem 
                header="How much does digital marketing cost?" 
                isOpen={openAccordion === 2}
                onClick={() => toggleAccordion(2)}
              >
                Digital marketing costs vary depending on your business size, goals, and chosen strategies. We offer customized packages to fit different budgets and requirements.
              </AccordionItem>

              <AccordionItem 
                header="How do I get my website to the top of Google?" 
                isOpen={openAccordion === 3}
                onClick={() => toggleAccordion(3)}
              >
                Getting to the top of Google requires a comprehensive SEO strategy including keyword optimization, quality content, technical SEO, and building authoritative backlinks.
              </AccordionItem>

              <AccordionItem 
                header="How do I get my website to the top of Google?" 
                isOpen={openAccordion === 4}
                onClick={() => toggleAccordion(4)}
              >
                This involves implementing proven SEO techniques, creating valuable content, optimizing for user experience, and maintaining consistent digital marketing efforts over time.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;