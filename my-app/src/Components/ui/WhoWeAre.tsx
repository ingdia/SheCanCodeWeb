'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhoWeAre() {
  const offerings = [
    'Learn Coding Skills',
    'Get Mentorship',
    'Join a Community',
    'Grow Your Career',
    'Attend Workshops & Events',
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#009BCF]/10 text-[#009BCF] text-sm font-semibold py-2 px-5 rounded-full mb-6">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering Women in Tech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At SheCanCode, we believe everyone can learn to code. Our mission is to bridge the gender gap in tech and create opportunities for women to thrive in technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with Play Button */}
          <div className="relative group">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/hero.jpg" 
                alt="Women learning to code" 
                fill
                className='object-cover'
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center cursor-pointer">
                <div className="w-20 h-20 bg-[#009BCF] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Offerings Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              What We Offer
            </h3>

            <ul className="space-y-5 mb-8">
              {offerings.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#009BCF]/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#009BCF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 leading-relaxed mb-6">
              Hundreds of women have already started their journey in tech with SheCanCode — gaining skills, confidence, and connections to make an impact.
            </p>

            <Link href="/About/who-we-are" className="inline-block px-6 py-3 bg-[#009BCF] text-white font-semibold rounded-lg hover:bg-[#0087b3] transition-colors">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}