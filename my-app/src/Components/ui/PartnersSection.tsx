'use client';

import React from 'react';

export default function PartnersSection() {
  // Replace with your actual partner images
  const partnerImages = [
    '/hero.jpg',
    '/hero.jpg',
    '/hero.jpg',
    '/hero.jpg',
    '/hero.jpg',
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto  ">
        {/* Circular Partner Images */}
        <div className="flex mb-8">
          <div className="flex -space-x-4 md:-space-x-6">
            {partnerImages.map((src, index) => (
              <div
                key={index}
                className="relative w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-white shadow-md hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer"
                title={`Partner ${index + 1}`}
              >
                <img
                  src={src}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gray-100 border-3 border-white flex items-center justify-center text-xs md:text-sm font-semibold text-gray-600 shadow-md">
              +45
            </div>
            <p className='text-black py-6 px-8 text-2xl'>partners</p>

            

          </div>
        </div>


      </div>
    </section>
  );
}