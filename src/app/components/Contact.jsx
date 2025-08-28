"use client";
import React, { useState } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

const ContactSection = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                alert('Message sent successfully! We will get back to you soon.');
                // Reset form
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    website: '',
                    message: ''
                });
            } else {
                alert(`Error: ${result.error || 'Failed to send message. Please try again.'}`);
            }
        } catch (error) {
            console.log('Error submitting form:', error);
            alert('Error: Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gray-900 py-16 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Contact Form */}
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <p className="text-orange-500 text-sm uppercase tracking-wider mb-4 font-semibold">
                                GET IN TOUCH
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                Send us a Message
                            </h1>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-200 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300"
                                    required
                                    disabled={isSubmitting}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-200 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-200 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300"
                                    required
                                    disabled={isSubmitting}
                                />
                                <input
                                    type="url"
                                    name="website"
                                    placeholder="Website URL"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-200 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-200 text-gray-700 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 resize-vertical"
                                required
                                disabled={isSubmitting}
                            ></textarea>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Images and Support Badge */}
                    <div data-aos="zoom-in" data-aos-easing="ease-in" className="relative">
                        <div className="absolute">
                            {/* Top Image */}
                            <div className="relative mb-6 transform translate-y-20 translate-x-40 border-6 border-gray-300">
                                <img
                                    src="https://t3.ftcdn.net/jpg/06/38/82/10/360_F_638821021_n9ANLh4fSNXWNUJNURAWF0rQGRnCaa9f.jpg"
                                    alt="Customer service representative"
                                    className="h-64 object-cover rounded-lg shadow-lg"
                                />
                            </div>

                            {/* 24/7 Support Badge */}
                            <div className="absolute transform translate-x-20 -translate-y-5  bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold">24/7</div>
                                    <div className="text-sm font-medium">Customer Support</div>
                                </div>
                            </div>

                            {/* Bottom Image */}
                            <div className="absolute transform translate-y-5  border-6 border-gray-300 ">
                                <img
                                    src="https://www.trivalleycareercenter.org/wp-content/uploads/2018/12/Handshake3-scaled.jpg"
                                    alt="Business handshake"
                                    className="h-64 object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;