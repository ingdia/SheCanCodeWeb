import React from 'react'
import Image from 'next/image'
import PartnersSection from './PartnersSection'


function Hero() {
  return (
    <section className='bg-gray-100 flex flex-row  justify-between px-16 min-h-screen  text-white text-4xl font-bold'>
        {/* left part */}
{/* left part */}
<div className="py-8 flex flex-col max-w-xl space-y-6">

  
  <div className="bg-cyan-100 text-cyan-600 text-sm font-medium py-2 px-4 w-fit rounded-full">
    Bridging the Gender Gap in Tech
  </div>

 
  <h1 className="text-5xl font-bold text-gray-900 leading-tight">
    The leading channel to get <br />
    <span className="text-cyan-600">women</span> in tech
  </h1>

  <div className="text-lg text-gray-600">
    <p>Join our community of more than</p>
    <p className="font-semibold">800 successful women in tech today.</p>
  </div>


  <PartnersSection />


  <div className="grid grid-cols-3 bg-cyan-50 rounded-xl px-8 py-4 text-center">
    <div>
      <h2 className="text-2xl font-bold text-cyan-600">1,200+</h2>
      <p className="text-gray-700 text-sm">Learners</p>
      <p className="text-gray-500 text-sm">since 2018</p>
    </div>

    <div>
      <h2 className="text-2xl font-bold text-cyan-600">84%</h2>
      <p className="text-gray-700 text-sm">Employment</p>
      <p className="text-gray-500 text-sm">Rate</p>
    </div>

    <div>
      <h2 className="text-2xl font-bold text-cyan-600">92%</h2>
      <p className="text-gray-700 text-sm">Graduate</p>
      <p className="text-gray-500 text-sm">Satisfaction</p>
    </div>
  </div>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-gray-200">
    <button className="px-6 py-3 text-base rounded-full bg-[#009BCF] text-white font-semibold hover:bg-[#0087b3] transition shadow-lg shadow-[#009BCF]/30">
      Explore Courses
    </button>

    <button className="px-6 py-3 text-base rounded-full bg-white text-[#009BCF] font-semibold border-2 border-[#009BCF] hover:bg-cyan-50 transition shadow-lg shadow-[#009BCF]/20">
      Hire Talent
    </button>
  </div>

</div>
     {/* right part */}
     <div className=''>
        <Image src="/hero.jpg" alt="Hero Image" width={650} height={650} className='object-contain'/>
     </div>
    </section>
  )
}

export default Hero
