'use client';

import React, { useState } from 'react';

export default function PartnersNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  const partners = [
    { 
      name: 'kLab', 
      logo: (
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">k</span>
          </div>
          <span className="text-gray-800 font-semibold text-sm md:text-base">Lab</span>
        </div>
      )
    },
    { 
      name: 'Harambee', 
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-green-600 font-medium text-xs md:text-sm">harambee</span>
        </div>
      )
    },
    { 
      name: 'dot.rwanda', 
      logo: (
        <div className="flex items-center gap-1">
          <span className="text-cyan-600 text-xl md:text-2xl font-bold">dot.</span>
          <span className="text-gray-600 text-xs md:text-sm font-medium">RWANDA</span>
        </div>
      )
    },
    { 
      name: 'SOLVIT AFRICA', 
      logo: (
        <div className="flex items-center gap-2">
          <div className="relative w-5 h-8 md:w-6 md:h-10">
            <div className="absolute inset-0 bg-blue-500 rounded-sm transform rotate-12"></div>
            <div className="absolute inset-0 bg-cyan-400 rounded-sm transform -rotate-6 translate-x-1"></div>
          </div>
          <div>
            <div className="text-xs md:text-sm font-bold text-gray-800 leading-none">SOLVIT</div>
            <div className="text-xs text-gray-600 leading-none mt-0.5">AFRICA</div>
          </div>
        </div>
      )
    },
    { 
      name: 'HENCE', 
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
            <path d="M4 4L12 12L4 20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 12L20 4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 12L20 20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-gray-800 font-medium text-sm md:text-base">HENCE</span>
        </div>
      )
    },
  ];

  // Duplicate partners for seamless infinite scroll
  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-12 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Partners Section */}
        <div className="mb-8">
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-cyan-100 px-6 py-1.5 rounded-full">
              <span className="text-cyan-600 font-semibold text-xs tracking-wide uppercase">
                Our Partners
              </span>
            </div>
          </div>

          {/* Sliding Partner Logos */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Sliding Container */}
            <div className="flex animate-[slide_30s_linear_infinite] hover:animate-[slide_30s_linear_infinite_paused] w-max">
              {allPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 md:w-40 h-14 md:h-16 bg-gray-50 rounded-lg flex items-center justify-center p-3 mx-2 hover:shadow-md transition-shadow duration-200"
                >
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-cyan-600 text-white rounded-2xl p-6 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-2">
                Stay Updated
              </h2>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                Join our newsletter to get coding tips, updates, and events straight to your inbox!
              </p>
            </div>

            {/* Email Form */}
            <div className="flex-1 max-w-md">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your email"
                  required
                  className="flex-1 px-5 py-3 rounded-full border-0 bg-white/80 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-md"
                >
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}