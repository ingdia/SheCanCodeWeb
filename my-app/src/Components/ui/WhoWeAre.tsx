'use client';

import React from 'react';
import Image from 'next/image';

export default function WhoWeAre() {
  const offerings = [
    'Learn Coding Skills',
    'Get Mentorship',
    'Join a Community',
    'Grow Your Career',
    'Attend Workshops & Events',
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with wave pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-sky-200 to-cyan-300">
        {/* Subtle wave patterns */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q25 25, 50 50 T100 50" fill="none" stroke="white" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-white px-6 py-2 rounded-full shadow-md">
            <span className="text-cyan-600 font-semibold text-sm">Who We Are</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-light italic text-gray-800 text-center mb-4">
          Empowering Women in Tech
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-6">
          At She Can Code, we believe everyone can learn to code.
        </p>

        {/* Mission Paragraph */}
        <p className="text-base md:text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          Our mission is to bridge the gender gap in tech and create opportunities for women to thrive in technology.
          Through hands-on learning, mentorship, and community support, we help learners build real-world skills and confidence.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left: Video Thumbnail */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/hero.jpg" alt="Hero Image" width={50} height={50} className='w-full h-80 md:h-96 object-cover'/>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <svg 
                    className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: White Card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-600 text-center mb-8">
              What We Offer:
            </h2>

            {/* Checklist */}
            <ul className="space-y-4 mb-8">
              {offerings.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-4 h-4 md:w-5 md:h-5 text-cyan-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={3} 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Text */}
            <p className="text-gray-500 text-sm md:text-base italic text-center leading-relaxed">
              Hundreds of women have already started their journey in tech with She Can Code — gaining skills, confidence,
              and connections to make an impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}