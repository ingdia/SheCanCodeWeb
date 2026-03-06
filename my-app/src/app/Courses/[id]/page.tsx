'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface Course {
  id: number;
  level: string;
  duration: string;
  status: string;
  title: string;
  description: string;
  courseItems: string[];
  isOpen: boolean;
  image: string;
  category: string;
  fullDescription: string;
  prerequisites: string[];
  outcomes: string[];
  instructor: string;
  startDate: string;
  price: string;
}

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const courseId = Number(params.id);

  const courses: Course[] = [
    {
      id: 1,
      level: 'Beginner',
      duration: '12 weeks',
      status: 'Open Now',
      title: 'Web Fundamentals',
      description: 'Start your coding journey with HTML, CSS, JavaScript, and design basics.',
      fullDescription: 'This comprehensive course is designed for absolute beginners who want to start their journey in web development. You will learn the fundamental building blocks of the web, including HTML for structure, CSS for styling, and JavaScript for interactivity. By the end of this course, you will be able to build responsive, modern websites from scratch.',
      courseItems: [
        'HTML basics to structure web pages',
        'CSS fundamentals for styling',
        'JavaScript basics',
        'Figma for designing',
      ],
      prerequisites: ['No prior coding experience required', 'Basic computer skills', 'Passion to learn'],
      outcomes: [
        'Build responsive websites from scratch',
        'Understand web development fundamentals',
        'Create interactive web pages with JavaScript',
        'Design mockups using Figma',
      ],
      isOpen: true,
      image: '/hero.jpg',
      category: 'Web Development',
      instructor: 'Sarah Johnson',
      startDate: 'February 15, 2025',
      price: 'Free',
    },
    {
      id: 2,
      level: 'Advanced',
      duration: '16 weeks',
      status: 'Closed Now',
      title: 'Advanced Frontend',
      description: 'Master React, Next.js, and modern frontend development practices.',
      fullDescription: 'Take your frontend skills to the next level with this advanced course covering React, Next.js, and modern development practices. Learn to build scalable, performant web applications using industry-standard tools and frameworks.',
      courseItems: [
        'React fundamentals and hooks',
        'Next.js framework',
        'State management with Redux',
        'TypeScript integration',
      ],
      prerequisites: ['Strong JavaScript knowledge', 'HTML & CSS proficiency', 'Basic React experience'],
      outcomes: [
        'Build complex React applications',
        'Master Next.js for production apps',
        'Implement state management solutions',
        'Write type-safe code with TypeScript',
      ],
      isOpen: false,
      image: '/hero.jpg',
      category: 'Frontend',
      instructor: 'Michael Chen',
      startDate: 'TBA',
      price: 'Free',
    },
    {
      id: 3,
      level: 'Advanced',
      duration: '16 weeks',
      status: 'Open Now',
      title: 'Advanced Backend',
      description: 'Build scalable server-side applications with Node.js and databases.',
      fullDescription: 'Master backend development with Node.js, Express, and database management. Learn to build RESTful APIs, implement authentication, and deploy scalable server-side applications.',
      courseItems: [
        'Node.js and Express',
        'Database design (SQL & NoSQL)',
        'RESTful API development',
        'Authentication & security',
      ],
      prerequisites: ['JavaScript proficiency', 'Understanding of web fundamentals', 'Basic command line knowledge'],
      outcomes: [
        'Build RESTful APIs',
        'Design and manage databases',
        'Implement secure authentication',
        'Deploy production-ready applications',
      ],
      isOpen: true,
      image: '/hero.jpg',
      category: 'Backend',
      instructor: 'David Martinez',
      startDate: 'March 1, 2025',
      price: 'Free',
    },
    {
      id: 4,
      level: 'Intermediate',
      duration: '10 weeks',
      status: 'Open Now',
      title: 'Python Programming',
      description: 'Learn Python for data science, automation, and web development.',
      fullDescription: 'Discover the power of Python programming in this comprehensive course. Learn Python syntax, data structures, and how to build practical applications for data science, automation, and web development.',
      courseItems: [
        'Python syntax and fundamentals',
        'Data structures and algorithms',
        'Working with libraries',
        'Building practical projects',
      ],
      prerequisites: ['Basic programming concepts', 'Logical thinking skills', 'Computer literacy'],
      outcomes: [
        'Write efficient Python code',
        'Work with popular Python libraries',
        'Build automation scripts',
        'Analyze data with Python',
      ],
      isOpen: true,
      image: '/hero.jpg',
      category: 'Programming',
      instructor: 'Emily Watson',
      startDate: 'February 20, 2025',
      price: 'Free',
    },
    {
      id: 5,
      level: 'Beginner',
      duration: '8 weeks',
      status: 'Open Now',
      title: 'UI/UX Design',
      description: 'Create beautiful, user-friendly designs with industry-standard tools.',
      fullDescription: 'Learn the principles of user interface and user experience design. Master Figma and other design tools to create beautiful, user-centered designs that solve real problems.',
      courseItems: [
        'Design principles and theory',
        'Figma and prototyping',
        'User research methods',
        'Portfolio development',
      ],
      prerequisites: ['No design experience required', 'Creative mindset', 'Basic computer skills'],
      outcomes: [
        'Design user-friendly interfaces',
        'Create interactive prototypes',
        'Conduct user research',
        'Build a professional portfolio',
      ],
      isOpen: true,
      image: '/hero.jpg',
      category: 'Design',
      instructor: 'Lisa Anderson',
      startDate: 'February 10, 2025',
      price: 'Free',
    },
    {
      id: 6,
      level: 'Advanced',
      duration: '14 weeks',
      status: 'Closed Now',
      title: 'Mobile Development',
      description: 'Build native mobile apps for iOS and Android platforms.',
      fullDescription: 'Learn to build cross-platform mobile applications using React Native. Create native mobile apps for both iOS and Android with a single codebase.',
      courseItems: [
        'React Native fundamentals',
        'Mobile UI/UX patterns',
        'Native device features',
        'App deployment',
      ],
      prerequisites: ['React knowledge', 'JavaScript proficiency', 'Understanding of mobile platforms'],
      outcomes: [
        'Build cross-platform mobile apps',
        'Implement native device features',
        'Design mobile-first interfaces',
        'Deploy apps to app stores',
      ],
      isOpen: false,
      image: '/hero.jpg',
      category: 'Mobile',
      instructor: 'James Wilson',
      startDate: 'TBA',
      price: 'Free',
    },
  ];

  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Course Not Found</h1>
          <Link href="/Courses" className="text-[#009BCF] hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#009BCF]">Home</Link>
          <span>/</span>
          <Link href="/Courses" className="hover:text-[#009BCF]">Courses</Link>
          <span>/</span>
          <span className="text-gray-800">{course.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="relative h-64">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#009BCF] text-white px-4 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-50 text-[#009BCF] text-sm font-medium rounded-full">
                    {course.category}
                  </span>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    course.isOpen ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {course.status}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{course.title}</h1>
                <p className="text-gray-600 text-lg leading-relaxed">{course.fullDescription}</p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.courseItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#009BCF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Prerequisites</h2>
              <ul className="space-y-3">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#009BCF] font-bold">•</span>
                    <span className="text-gray-700">{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning Outcomes</h2>
              <div className="space-y-4">
                {course.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#009BCF] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 pt-1">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-[#009BCF] mb-2">{course.price}</div>
                <p className="text-gray-600">Full course access</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#009BCF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#009BCF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Starts: {course.startDate}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#009BCF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Instructor: {course.instructor}</span>
                </div>
              </div>

              {course.isOpen ? (
                <Link
                  href="/apply"
                  className="block w-full text-center bg-[#009BCF] hover:bg-[#0087b3] text-white font-semibold py-4 rounded-lg transition-colors duration-200 mb-4"
                >
                  Apply Now
                </Link>
              ) : (
                <button disabled className="w-full bg-gray-300 text-gray-500 font-semibold py-4 rounded-lg cursor-not-allowed mb-4">
                  Registration Closed
                </button>
              )}

              <Link href="/Courses" className="block w-full text-center border-2 border-[#009BCF] text-[#009BCF] hover:bg-cyan-50 font-semibold py-4 rounded-lg transition-colors duration-200">
                Back to Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
