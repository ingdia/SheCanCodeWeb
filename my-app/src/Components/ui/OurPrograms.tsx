'use client';

import React from 'react';

interface CourseCardProps {
  level: 'Beginner' | 'Advanced';
  duration: string;
  status: 'Open Now' | 'Closed Now';
  title: string;
  courseItems: string[];
  isOpen: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  level,
  duration,
  status,
  title,
  courseItems,
  isOpen,
}) => {
  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
        isOpen ? 'hover:shadow-2xl' : 'opacity-75'
      }`}
    >
      {/* Level Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          {level}
        </span>
      </div>

      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src="/hero.jpg"
          alt={title}
          className={`w-full h-full object-cover ${
            isOpen ? '' : 'grayscale'
          }`}
        />
        {/* Diagonal overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
      </div>

      {/* Duration and Status Bar */}
      <div className="relative flex">
        <div className="bg-gray-100 px-4 py-2 flex-1">
          <span className="text-gray-700 font-medium">{duration}</span>
        </div>
        <div
          className={`px-6 py-2 flex-1 text-center font-medium ${
            status === 'Open Now'
              ? 'bg-cyan-500 text-white'
              : 'bg-gray-400 text-white'
          }`}
        >
          {status}
        </div>
        {/* Diagonal stripe decoration */}
        <div className="absolute -right-6 top-0 w-12 h-full bg-white transform skew-x-12" />
      </div>

      {/* Course Content */}
      <div className={`p-6 ${isOpen ? '' : 'grayscale'}`}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
          {title}
        </h3>

        <p className="text-gray-600 font-medium mb-4">What You'll Learn:</p>

        <ul className="space-y-2 mb-6">
          {courseItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-600 text-sm">{item}</span>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-all duration-200 ${
              isOpen
                ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!isOpen}
          >
            View Details
          </button>
          <button
            className={`flex-1 py-2.5 px-4 rounded-lg font-medium border-2 flex items-center justify-center gap-2 transition-all duration-200 ${
              isOpen
                ? 'border-cyan-500 text-cyan-500 hover:bg-cyan-50'
                : 'border-gray-300 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!isOpen}
          >
            Apply Now
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function OurPrograms() {
  const courseItems = [
    'HTML basics to structure web pages',
    'CSS fundamentals for styling',
    'JavaScript basics',
    'Figma for designing',
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-cyan-100 px-6 py-2 rounded-full">
              <span className="text-cyan-600 font-semibold text-sm">
                Our Programs
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-light italic text-gray-800 mb-4">
            What You Can Learn
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Explore coding courses designed for women of all levels. Learn
            skills, build projects, and start your tech journey today.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 - Beginner */}
          <CourseCard
            level="Beginner"
            duration="12 weeks"
            status="Open Now"
            title="Web Fundamentals"
            courseItems={courseItems}
            isOpen={true}
          />

          {/* Card 2 - Advanced (Closed) */}
          <CourseCard
            level="Advanced"
            duration="16 weeks"
            status="Closed Now"
            title="Advanced Frontend"
            courseItems={courseItems}
            isOpen={false}
          />

          {/* Card 3 - Advanced */}
          <CourseCard
            level="Advanced"
            duration="16 weeks"
            status="Open Now"
            title="Advanced Backend"
            courseItems={courseItems}
            isOpen={true}
          />
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-full flex items-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Explore more courses
          </button>
        </div>
      </div>
    </section>
  );
}