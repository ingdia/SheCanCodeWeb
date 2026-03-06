'use client';

import { useState } from 'react';
import Link from 'next/link';

const jobListings = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp Rwanda',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
    level: 'Junior',
    salary: '500,000 - 800,000 RWF',
    posted: '2 days ago',
    description: 'Join our team to build modern web applications using React and TypeScript.',
    skills: ['React', 'TypeScript', 'CSS']
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Innovation Hub',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
    level: 'Mid-level',
    salary: '900,000 - 1,200,000 RWF',
    posted: '5 days ago',
    description: 'Work on scalable backend systems using Node.js and Python.',
    skills: ['Node.js', 'Python', 'MongoDB']
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Digital Solutions',
    location: 'Remote',
    type: 'Contract',
    level: 'Junior',
    salary: '600,000 - 900,000 RWF',
    posted: '1 week ago',
    description: 'Design beautiful and intuitive user interfaces for mobile and web applications.',
    skills: ['Figma', 'Adobe XD', 'Prototyping']
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: 'StartupX',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
    level: 'Senior',
    salary: '1,500,000 - 2,000,000 RWF',
    posted: '3 days ago',
    description: 'Lead development of our core platform using modern tech stack.',
    skills: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 5,
    title: 'Data Analyst',
    company: 'Analytics Pro',
    location: 'Hybrid',
    type: 'Full-time',
    level: 'Mid-level',
    salary: '800,000 - 1,100,000 RWF',
    posted: '4 days ago',
    description: 'Analyze data and provide insights to drive business decisions.',
    skills: ['Python', 'SQL', 'Tableau']
  },
  {
    id: 6,
    title: 'Mobile Developer',
    company: 'AppWorks',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
    level: 'Junior',
    salary: '700,000 - 1,000,000 RWF',
    posted: '1 week ago',
    description: 'Build native mobile applications for iOS and Android platforms.',
    skills: ['React Native', 'Swift', 'Kotlin']
  }
];

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'hire'>('jobs');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const types = ['All', 'Full-time', 'Contract', 'Hybrid', 'Remote'];
  const levels = ['All', 'Junior', 'Mid-level', 'Senior'];

  const filteredJobs = jobListings.filter(job => {
    const typeMatch = selectedType === 'All' || job.type === selectedType || job.location === selectedType;
    const levelMatch = selectedLevel === 'All' || job.level === selectedLevel;
    return typeMatch && levelMatch;
  });

  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      {/* Hero */}
      <section className="bg-[#009BCF] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Careers</h1>
          <p className="text-xl text-white/90">
            Connecting talented women with amazing opportunities
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`py-4 px-2 font-semibold transition-colors relative ${
                activeTab === 'jobs'
                  ? 'text-[#009BCF]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Job Vacancies
              {activeTab === 'jobs' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009BCF]"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('hire')}
              className={`py-4 px-2 font-semibold transition-colors relative ${
                activeTab === 'hire'
                  ? 'text-[#009BCF]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Hire Talent
              {activeTab === 'hire' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009BCF]"></div>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Job Vacancies Tab */}
      {activeTab === 'jobs' && (
        <>
          {/* Filters */}
          <section className="bg-white border-b border-gray-200 py-6 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Job Type</label>
                  <div className="flex gap-2 overflow-x-auto">
                    {types.map(type => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm transition-colors ${
                          selectedType === type
                            ? 'bg-[#009BCF] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Experience Level</label>
                  <div className="flex gap-2 overflow-x-auto">
                    {levels.map(level => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm transition-colors ${
                          selectedLevel === level
                            ? 'bg-[#009BCF] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Job Listings */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <p className="text-gray-600 mb-6">
                {filteredJobs.length} opportunities available
              </p>

              <div className="space-y-4">
                {filteredJobs.map(job => (
                  <article key={job.id} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#009BCF] hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#009BCF] rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-xl font-bold text-white">{job.company.charAt(0)}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
                            <p className="text-gray-600 mb-3">{job.company}</p>
                            <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {job.skills.map(skill => (
                                <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full">
                                {job.location}
                              </span>
                              <span className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full">
                                {job.type}
                              </span>
                              <span className="px-3 py-1 bg-[#009BCF]/10 text-[#009BCF] text-xs rounded-full font-semibold">
                                {job.level}
                              </span>
                              <span className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full">
                                {job.salary}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                        <span className="text-sm text-gray-500">{job.posted}</span>
                        <button className="px-6 py-2 bg-[#009BCF] text-white rounded-lg hover:bg-[#0087b3] transition-colors font-semibold">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Hire Talent Tab */}
      {activeTab === 'hire' && (
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hire Talented Women in Tech</h2>
              <p className="text-xl text-gray-600">
                Access a pool of skilled, trained, and job-ready developers, designers, and tech professionals
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-[#009BCF]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#009BCF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pre-vetted Talent</h3>
                <p className="text-gray-600 text-sm">All candidates have completed our intensive bootcamp and passed technical assessments</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-[#009BCF]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#009BCF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Hiring</h3>
                <p className="text-gray-600 text-sm">Get matched with qualified candidates within days, not months</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-[#009BCF]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#009BCF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Diversity Impact</h3>
                <p className="text-gray-600 text-sm">Build diverse teams and support women's empowerment in tech</p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-[#009BCF] rounded-lg p-8 mb-12">
              <div className="grid grid-cols-3 gap-6 text-center text-white">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-white/90">Graduates</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <div className="text-white/90">Placement Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-white/90">Partner Companies</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009BCF]"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009BCF]"
                      placeholder="Full name"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009BCF]"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009BCF]"
                      placeholder="+250 XXX XXX XXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Hiring Needs</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009BCF]"
                    placeholder="Tell us about the roles you're looking to fill..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#009BCF] text-white rounded-lg hover:bg-[#0087b3] transition-colors font-semibold"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
