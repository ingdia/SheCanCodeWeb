'use client';

import React, { useState } from 'react';

export default function AboutPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-cyan-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-[#009BCF]/10 rounded-full mb-6">
            <span className="text-[#009BCF] font-semibold text-sm">ABOUT US</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light italic text-gray-800 mb-6">
            Empowering Women in Tech
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            She Can Code is dedicated to bridging the gender gap in technology by providing quality coding education to women across Rwanda.
          </p>
        </div>
      </section>

      {/* Dropdown Sections */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Who We Are */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl">
            <button
              onClick={() => toggleSection('who')}
              className="w-full px-8 py-6 flex items-center justify-between text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-[#009BCF]/5 hover:to-transparent"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#009BCF] to-[#0087b3] rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Who We Are</h2>
              </div>
              <svg
                className={`w-6 h-6 text-[#009BCF] transition-transform duration-500 ${openSection === 'who' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openSection === 'who' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-8 pb-8 space-y-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#009BCF]/30 to-transparent mb-6" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To empower women with the technical skills and confidence needed to thrive in the technology industry, creating a more inclusive and diverse tech ecosystem in Rwanda and beyond.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A future where women are equally represented in technology, leading innovation and driving positive change in their communities through coding and digital skills.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Our Story</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Founded with a passion for closing the gender gap in technology, She Can Code has grown from a small initiative to a leading coding bootcamp for women in Rwanda. We've trained hundreds of women, helping them launch successful careers in tech.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our community of alumni continues to inspire and support each other, creating a network of empowered women developers, designers, and tech leaders across the country.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-[#009BCF] mb-1">500+</div>
                    <div className="text-sm text-gray-600">Women Trained</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-[#009BCF] mb-1">85%</div>
                    <div className="text-sm text-gray-600">Employment Rate</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-[#009BCF] mb-1">50+</div>
                    <div className="text-sm text-gray-600">Partner Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl">
            <button
              onClick={() => toggleSection('what')}
              className="w-full px-8 py-6 flex items-center justify-between text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-[#009BCF]/5 hover:to-transparent"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">What We Do</h2>
              </div>
              <svg
                className={`w-6 h-6 text-[#009BCF] transition-transform duration-500 ${openSection === 'what' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openSection === 'what' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-8 pb-8 space-y-6">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-6" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-10 h-10 bg-[#009BCF] rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Coding Bootcamps</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Intensive training programs covering web development, mobile apps, UI/UX design, and more. Our hands-on curriculum prepares students for real-world tech careers.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Career Support</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Job placement assistance, resume building, interview preparation, and connections with hiring partners to help our graduates launch their tech careers.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Mentorship Programs</h3>
                    <p className="text-gray-600 leading-relaxed">
                      One-on-one mentorship with experienced tech professionals, providing guidance, support, and industry insights throughout the learning journey.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Community Building</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Creating a supportive network of women in tech through events, workshops, hackathons, and ongoing alumni engagement activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#009BCF] to-[#0087b3] rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-cyan-50 mb-8">
            Join hundreds of women who have transformed their lives through coding
          </p>
          <button className="bg-white text-[#009BCF] hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Apply Now
          </button>
        </div>
      </section>
    </main>
  );
}
