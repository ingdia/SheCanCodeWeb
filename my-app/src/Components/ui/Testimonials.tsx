'use client';

import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Kevine Uwase',
      role: 'Frontend Developer',
      image: '/Hero.jpg',
      quote: 'She Can Code helped me build my first website and gave me the confidence to apply for tech internships. The mentorship made a huge difference.',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      image: '/Hero.jpg',
      quote: 'The community support and hands-on projects gave me the portfolio I needed to land my dream job at a tech startup.',
    },
    {
      id: 3,
      name: 'Marie Claire',
      role: 'UX Designer',
      image: '/Hero.jpg',
      quote: 'I went from knowing nothing about coding to building my own applications. The mentorship was incredible.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-cyan-100 to-teal-100">
        
        {/* Wave Pattern */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="testiWave" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              <path d="M0 200 Q100 100, 200 200 T400 200" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2"/>
              <path d="M0 250 Q100 150, 200 250 T400 250" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testiWave)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-white px-8 py-2.5 rounded-full shadow-md">
              <span className="text-cyan-600 font-semibold text-sm">
                Testimonies
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-light italic text-gray-800 mb-4">
            Real Stories. Real Impact.
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            See how She Can Code is helping women gain skills, confidence, and career opportunities in tech.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-cyan-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-cyan-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-xl relative"
              >
                {/* Opening Quote */}
                <div className="absolute top-6 left-6">
                  <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="text-gray-800 text-lg font-medium leading-relaxed mb-32 mt-6 pl-2">
                  {testimonial.quote}
                </p>

                {/* Closing Quote */}
                <div className="absolute bottom-24 right-6">
                  <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Profile Section - Light blue background at bottom left */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-cyan-100 rounded-2xl p-4 mx-6 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-semibold text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-cyan-500' : 'w-8 bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}