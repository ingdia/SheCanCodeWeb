'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Course {
  id: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  status: 'Open Now' | 'Closed Now';
  title: string;
  description: string;
  courseItems: string[];
  isOpen: boolean;
  image: string;
  category: string;
}

export default function Courses() {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const courses: Course[] = [
    {
      id: 1,
      level: 'Beginner',
      duration: '12 weeks',
      status: 'Open Now',
      title: 'Web Fundamentals',
      description: 'Start your coding journey with HTML, CSS, JavaScript, and design basics.',
      courseItems: [
        'HTML basics to structure web pages',
        'CSS fundamentals for styling',
        'JavaScript basics',
        'Figma for designing',
      ],
      isOpen: true,
      image: '/hero.jpg',
      category: 'Web Development',
    },
    {
      id: 2,
      level: 'Advanced',
      duration: '16 weeks',
      status: 'Closed Now',
      title: 'Advanced Frontend',
      description: 'Master React, Next.js, and modern frontend development practices.',
      courseItems: [
        'React fundamentals and hooks',
        'Next.js framework',
        'State management with Redux',
        'TypeScript integration',
      ],
      isOpen: false,
      image: '/hero.jpg',
      category: 'Frontend',
    },
    {
      id: 3,
      level: 'Advanced',
      duration: '16 weeks',
      status: 'Open Now',
      title: 'Advanced Backend',
      description: 'Build scalable server-side applications with Node.js and databases.',
      courseItems: [
        'Node.js and Express',
        'Database design (SQL & NoSQL)',
        'RESTful API development',
        'Authentication & security',
      ],
      isOpen: true,
      image: '/hero.jpg',
      category: 'Backend',
    },
    {
      id: 4,
      level: 'Intermediate',
      duration: '10 weeks',
      status: 'Open Now',
      title: 'Python Programming',
      description: 'Learn Python for data science, automation, and web development.',
      courseItems: [
        'Python syntax and fundamentals',
        'Data structures and algorithms',
        'Working with libraries',
        'Building practical projects',
      ],
      isOpen: true,
      image: '/hero.jpg',
      category: 'Programming',
    },
    {
      id: 5,
      level: 'Beginner',
      duration: '8 weeks',
      status: 'Open Now',
      title: 'UI/UX Design',
      description: 'Create beautiful, user-friendly designs with industry-standard tools.',
      courseItems: [
        'Design principles and theory',
        'Figma and prototyping',
        'User research methods',
        'Portfolio development',
      ],
      isOpen: true,
      image: '/hero.jpg',
      category: 'Design',
    },
    {
      id: 6,
      level: 'Advanced',
      duration: '14 weeks',
      status: 'Closed Now',
      title: 'Mobile Development',
      description: 'Build native mobile apps for iOS and Android platforms.',
      courseItems: [
        'React Native fundamentals',
        'Mobile UI/UX patterns',
        'Native device features',
        'App deployment',
      ],
      isOpen: false,
      image: '/hero.jpg',
      category: 'Mobile',
    },
  ];

  // Filter courses
  const filteredCourses = courses.filter(course => {
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
    const statusMatch = selectedStatus === 'All' || course.status === selectedStatus;
    return levelMatch && statusMatch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-cyan-50/30 to-white pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#009BCF] to-[#0087b3] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="font-semibold text-sm">OUR PROGRAMS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light italic mb-6">
            Transform Your Future with Code
          </h1>
          <p className="text-xl text-cyan-50 max-w-3xl mx-auto">
            Choose from our comprehensive courses designed to take you from beginner to professional developer
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {/* Level Filter */}
              <div className="flex gap-2">
                {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                  <button
                    key={level}
                    onClick={() => {
                      setSelectedLevel(level);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedLevel === level
                        ? 'bg-[#009BCF] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
              {/* Status Filter */}
              <div className="flex gap-2">
                {['All', 'Open Now', 'Closed Now'].map((status) => (
                  <button
                    key={status}
                    onClick={() => {
                      setSelectedStatus(status);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedStatus === status
                        ? 'bg-[#009BCF] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-gray-600 text-sm">
              Showing {currentCourses.length} of {filteredCourses.length} courses
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {currentCourses.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No courses found matching your filters.</p>
            </div>
          ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCourses.map((course) => (
              <div
                key={course.id}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  course.isOpen ? 'hover:shadow-2xl' : 'opacity-75'
                }`}
              >
                {/* Level Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#009BCF] text-white px-4 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>

                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className={`w-full h-full object-cover ${
                      course.isOpen ? '' : 'grayscale'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#009BCF]/10 to-transparent" />
                </div>

                {/* Duration and Status Bar */}
                <div className="relative flex">
                  <div className="bg-gray-100 px-4 py-2 flex-1">
                    <span className="text-gray-700 font-medium">{course.duration}</span>
                  </div>
                  <div
                    className={`px-6 py-2 flex-1 text-center font-medium ${
                      course.status === 'Open Now'
                        ? 'bg-[#009BCF] text-white'
                        : 'bg-gray-400 text-white'
                    }`}
                  >
                    {course.status}
                  </div>
                  <div className="absolute -right-6 top-0 w-12 h-full bg-white transform skew-x-12" />
                </div>

                {/* Course Content */}
                <div className={`p-6 ${course.isOpen ? '' : 'grayscale'}`}>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    {course.description}
                  </p>

                  <p className="text-gray-600 font-medium mb-4">What You'll Learn:</p>

                  <ul className="space-y-2 mb-6">
                    {course.courseItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-[#009BCF] flex-shrink-0 mt-0.5"
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
                    <Link
                      href={`/Courses/${course.id}`}
                      className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-all duration-200 text-center ${
                        course.isOpen
                          ? 'bg-[#009BCF] text-white hover:bg-[#0087b3]'
                          : 'bg-gray-300 text-gray-500 pointer-events-none'
                      }`}
                    >
                      View Details
                    </Link>
                    <Link
                      href="/apply"
                      className={`flex-1 py-2.5 px-4 rounded-lg font-medium border-2 flex items-center justify-center gap-2 transition-all duration-200 text-center ${
                        course.isOpen
                          ? 'border-[#009BCF] text-[#009BCF] hover:bg-cyan-50'
                          : 'border-gray-300 text-gray-400 pointer-events-none'
                      }`}
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
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentPage === page
                      ? 'bg-[#009BCF] text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#009BCF] to-[#0087b3]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-cyan-50 mb-8">
            Join thousands of women who have transformed their careers through our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#009BCF] hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-200">
              Apply Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-full transition-all duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
