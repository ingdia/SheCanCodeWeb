'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import PartnersSection from './PartnersSection'

function Hero() {
  const [mounted, setMounted] = useState(false)
  const badgeRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const subtextRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const observers: IntersectionObserver[] = []
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    }

    const elements = [
      { ref: badgeRef, delay: 0 },
      { ref: headlineRef, delay: 100 },
      { ref: subtextRef, delay: 200 },
      { ref: statsRef, delay: 300 },
      { ref: buttonsRef, delay: 400 },
      { ref: imageRef, delay: 200 }
    ]

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0')
                entry.target.classList.remove('opacity-0', 'translate-y-4', 'translate-x-8')
              }, delay)
            }
          })
        }, observerOptions)
        
        observer.observe(ref.current)
        observers.push(observer)
      }
    })

    return () => observers.forEach(observer => observer.disconnect())
  }, [])

  return (
    <section className='relative bg-gray-100 min-h-screen overflow-hidden'>
      {/* Animated Decorative Elements */}
      <div className='absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-50 to-transparent opacity-50' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-[#009BCF]/5 rounded-full blur-3xl' />
      
      <div className='relative flex flex-row justify-between items-center px-16 min-h-screen gap-12'>
        {/* Left Content */}
        <div className="flex flex-col max-w-2xl space-y-8 z-10">
          {/* Badge with animation */}
          <div ref={badgeRef} className="relative w-fit opacity-0 translate-y-4 transition-all duration-700">
            <div className="bg-cyan-100 text-cyan-600 text-sm font-medium py-2 px-6 hover:bg-cyan-200 transition-colors">
              Bridging the Gender Gap in Tech
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#009BCF] rounded-full animate-ping" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#009BCF] rounded-full" />
          </div>

          {/* Headline with creative layout */}
          <div ref={headlineRef} className="relative opacity-0 translate-y-4 transition-all duration-700">
            <h1 className="text-6xl font-bold text-gray-900 leading-tight">
              The leading channel to get{' '}
              <span className="relative inline-block group">
                <span className="text-cyan-600 transition-colors duration-300 group-hover:text-[#0087b3]">women</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4 Q50 0, 100 4 T200 4" stroke="#009BCF" strokeWidth="3" fill="none" />
                </svg>
              </span>
              {' '}in tech
            </h1>
          </div>

          {/* Subtext with accent */}
          <div ref={subtextRef} className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-700">
            <div className="w-1 h-16 bg-[#009BCF] mt-1" />
            <div className="text-lg text-gray-600">
              <p className="hover:translate-x-1 transition-transform duration-300">Join our community of more than</p>
              <p className="font-semibold text-2xl text-gray-900 hover:text-[#009BCF] transition-colors duration-300">800 successful women in tech today.</p>
            </div>
          </div>

          {/* Partners */}
          <div className="hover:scale-105 transition-transform duration-300">
            <PartnersSection />
          </div>

          {/* Stats with unique card design */}
          <div ref={statsRef} className="relative opacity-0 translate-y-4 transition-all duration-700">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-50 to-transparent rounded-2xl" />
            <div className="relative grid grid-cols-3 gap-6 p-6">
              <div className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative inline-block">
                  <h2 className="text-3xl font-bold text-cyan-600 group-hover:scale-125 transition-transform duration-300">1,200+</h2>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#009BCF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#009BCF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-700 text-sm font-medium mt-1">Learners</p>
                <p className="text-gray-500 text-xs">since 2018</p>
              </div>

              <div className="text-center group cursor-pointer border-x border-gray-200 transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative inline-block">
                  <h2 className="text-3xl font-bold text-cyan-600 group-hover:scale-125 transition-transform duration-300">84%</h2>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#009BCF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#009BCF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-700 text-sm font-medium mt-1">Employment</p>
                <p className="text-gray-500 text-xs">Rate</p>
              </div>

              <div className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative inline-block">
                  <h2 className="text-3xl font-bold text-cyan-600 group-hover:scale-125 transition-transform duration-300">92%</h2>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#009BCF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#009BCF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-700 text-sm font-medium mt-1">Graduate</p>
                <p className="text-gray-500 text-xs">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Buttons with unique styling */}
          <div ref={buttonsRef} className="flex gap-4 pt-4 opacity-0 translate-y-4 transition-all duration-700">
            <button className="group relative px-8 py-4 bg-[#009BCF] text-white font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">Explore Courses</span>
              <div className="absolute inset-0 bg-[#0087b3] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-white/20 border-l-[20px] border-l-transparent" />
            </button>

            <button className="relative px-8 py-4 bg-white text-[#009BCF] font-semibold border-2 border-[#009BCF] hover:bg-cyan-50 transition-all duration-300 group transform hover:scale-105">
              Hire Talent
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#009BCF] group-hover:w-full transition-all duration-500" />
            </button>
          </div>
        </div>

        {/* Right Image with unique frame */}
        <div ref={imageRef} className='relative z-10 opacity-0 translate-x-8 transition-all duration-1000'>
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#009BCF]" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-[#009BCF]" />
          <div className="relative transform hover:scale-105 transition-transform duration-500">
            <Image src="/hero.jpg" alt="Hero Image" width={650} height={650} className='object-contain' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
