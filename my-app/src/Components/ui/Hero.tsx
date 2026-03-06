import React from 'react'
import Image from 'next/image'
import PartnersSection from './PartnersSection'

function Hero() {
  return (
    <section className='relative bg-gray-100 min-h-screen overflow-hidden'>
      {/* Decorative Elements */}
      <div className='absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-50 to-transparent opacity-50' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-[#009BCF]/5 rounded-full blur-3xl' />
      
      <div className='relative flex flex-row justify-between items-center px-16 min-h-screen gap-12'>
        {/* Left Content */}
        <div className="flex flex-col max-w-2xl space-y-8 z-10">
          {/* Badge with unique shape */}
          <div className="relative w-fit">
            <div className="bg-cyan-100 text-cyan-600 text-sm font-medium py-2 px-6 clip-path-badge">
              Bridging the Gender Gap in Tech
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#009BCF] rounded-full" />
          </div>

          {/* Headline with creative layout */}
          <div className="relative">
            <h1 className="text-6xl font-bold text-gray-900 leading-tight">
              The leading channel to get{' '}
              <span className="relative inline-block">
                <span className="text-cyan-600">women</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4 Q50 0, 100 4 T200 4" stroke="#009BCF" strokeWidth="3" fill="none" />
                </svg>
              </span>
              {' '}in tech
            </h1>
          </div>

          {/* Subtext with accent */}
          <div className="flex items-start gap-3">
            <div className="w-1 h-16 bg-[#009BCF] mt-1" />
            <div className="text-lg text-gray-600">
              <p>Join our community of more than</p>
              <p className="font-semibold text-2xl text-gray-900">800 successful women in tech today.</p>
            </div>
          </div>

          {/* Partners */}
          <PartnersSection />

          {/* Stats with unique card design */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-50 to-transparent rounded-2xl" />
            <div className="relative grid grid-cols-3 gap-6 p-6">
              <div className="text-center group cursor-pointer">
                <div className="relative inline-block">
                  <h2 className="text-3xl font-bold text-cyan-600 group-hover:scale-110 transition-transform">1,200+</h2>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#009BCF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-700 text-sm font-medium mt-1">Learners</p>
                <p className="text-gray-500 text-xs">since 2018</p>
              </div>

              <div className="text-center group cursor-pointer border-x border-gray-200">
                <div className="relative inline-block">
                  <h2 className="text-3xl font-bold text-cyan-600 group-hover:scale-110 transition-transform">84%</h2>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#009BCF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-700 text-sm font-medium mt-1">Employment</p>
                <p className="text-gray-500 text-xs">Rate</p>
              </div>

              <div className="text-center group cursor-pointer">
                <div className="relative inline-block">
                  <h2 className="text-3xl font-bold text-cyan-600 group-hover:scale-110 transition-transform">92%</h2>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#009BCF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-700 text-sm font-medium mt-1">Graduate</p>
                <p className="text-gray-500 text-xs">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Buttons with unique styling */}
          <div className="flex gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-[#009BCF] text-white font-semibold overflow-hidden">
              <span className="relative z-10">Explore Courses</span>
              <div className="absolute inset-0 bg-[#0087b3] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-white/20 border-l-[20px] border-l-transparent" />
            </button>

            <button className="relative px-8 py-4 bg-white text-[#009BCF] font-semibold border-2 border-[#009BCF] hover:bg-cyan-50 transition group">
              Hire Talent
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#009BCF] group-hover:w-full transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Right Image with unique frame */}
        <div className='relative z-10'>
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#009BCF]" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-[#009BCF]" />
          <div className="relative">
            <Image src="/hero.jpg" alt="Hero Image" width={650} height={650} className='object-contain' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
