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
    skills: ['React', 'TypeScript', 'CSS'],
    urgent: false
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
    skills: ['Node.js', 'Python', 'MongoDB'],
    urgent: true
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
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    urgent: false
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
    skills: ['React', 'Node.js', 'PostgreSQL'],
    urgent: true
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
    skills: ['Python', 'SQL', 'Tableau'],
    urgent: false
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
    skills: ['React Native', 'Swift', 'Kotlin'],
    urgent: false
  }
];

export default function CareersPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const types = ['All', 'Full-time', 'Contract', 'Hybrid', 'Remote'];
  const levels = ['All', 'Junior', 'Mid-level', 'Senior'];

  const filteredJobs = jobListings.filter(job => {
    const typeMatch = selectedType === 'All' || job.type === selectedType || job.location === selectedType;
    const levelMatch = selectedLevel === 'All' || job.level === selectedLevel;
    return typeMatch && levelMatch;
  });

  const toggleSaveJob = (id: number) => {
    setSavedJobs(prev => 
      prev.includes(id) ? prev.filter(jobId => jobId !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      {/* Hero with stats */}
      <section className="relative bg-gradient-to-r from-[#009BCF] to-[#0087b3] py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Career Opportunities</h1>
            <p className="text-xl text-white/90">
              Find your next opportunity with our partner companies
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-white">{jobListings.length}</div>
              <div className="text-white/80 text-sm">Open Positions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/80 text-sm">Partner Companies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-white">85%</div>
              <div className="text-white/80 text-sm">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Job Type</label>
              <div className="flex gap-2 overflow-x-auto">
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm transition-all ${
                      selectedType === type
                        ? 'bg-[#009BCF] text-white scale-105'
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
                    className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm transition-all ${
                      selectedLevel === level
                        ? 'bg-[#009BCF] text-white scale-105'
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
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-800">{filteredJobs.length}</span> opportunities
            </p>
            {savedJobs.length > 0 && (
              <p className="text-sm text-[#009BCF] font-semibold">
                {savedJobs.length} saved
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredJobs.map(job => (
              <article key={job.id} className="group relative bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#009BCF] transition-all duration-300 hover:shadow-lg">
                {job.urgent && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Urgent
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#009BCF] to-[#0087b3] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">{job.company.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#009BCF] transition-colors">{job.title}</h3>
                      <p className="text-gray-600 text-sm">{job.company}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleSaveJob(job.id)}
                    className="text-gray-400 hover:text-[#009BCF] transition-colors"
                  >
                    <svg className="w-6 h-6" fill={savedJobs.includes(job.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-600 text-sm mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border border-gray-200">
                    📍 {job.location}
                  </span>
                  <span className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border border-gray-200">
                    ⏰ {job.type}
                  </span>
                  <span className="px-3 py-1 bg-[#009BCF]/10 text-[#009BCF] text-xs rounded-full font-semibold border border-[#009BCF]/20">
                    {job.level}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-lg font-bold text-gray-800">{job.salary}</div>
                    <div className="text-xs text-gray-500">{job.posted}</div>
                  </div>
                  <button className="px-6 py-2 bg-[#009BCF] text-white rounded-lg hover:bg-[#0087b3] transition-colors font-semibold">
                    Apply
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, #009BCF 25%, transparent 25%, transparent 75%, #009BCF 75%, #009BCF), linear-gradient(45deg, #009BCF 25%, transparent 25%, transparent 75%, #009BCF 75%, #009BCF)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Fit?</h2>
              <p className="text-gray-300 mb-8">
                Join our bootcamp and we'll help you find the perfect opportunity
              </p>
              <Link href="/Courses" className="inline-block px-8 py-3 bg-[#009BCF] text-white rounded-lg hover:bg-[#0087b3] transition-colors font-semibold">
                Explore Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
