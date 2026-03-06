'use client';

import React from 'react';

interface Article {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  date: string;
}

export default function News() {
  const articles: Article[] = [
    {
      id: 1,
      image: '/hero.jpg',
      title: 'She Can Code Alumni Wins Hackathon',
      excerpt: 'Congratulations to Aline, one of our graduates, for winning first place at the Kigali Hackathon! Her innovative web app impressed judges and showcased the skills she developed at She Can Code',
      author: 'IGIRE Rwanda Organization',
      authorImage: '/hero.jpg',
      date: 'November 27, 2025',
    },
    {
      id: 2,
      image: '/hero.jpg',
      title: 'She Can Code Alumni Wins Hackathon',
      excerpt: 'Congratulations to Aline, one of our graduates, for winning first place at the Kigali Hackathon! Her innovative web app impressed judges and showcased the skills she developed at She Can Code',
      author: 'IGIRE Rwanda Organization',
      authorImage: '/hero.jpg',
      date: 'November 27, 2025',
    },
    {
      id: 3,
      image: '/hero.jpg',
      title: 'She Can Code Alumni Wins Hackathon',
      excerpt: 'Congratulations to Aline, one of our graduates, for winning first place at the Kigali Hackathon! Her innovative web app impressed judges and showcased the skills she developed at She Can Code',
      author: 'IGIRE Rwanda Organization',
      authorImage: '/hero.jpg',
      date: 'November 27, 2025',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          {/* Top Badge with Lines */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-cyan-300"></div>
            <div className="bg-cyan-100 px-6 py-2 rounded-full">
              <span className="text-cyan-600 font-bold text-sm tracking-wide">
                LATEST NEWS
              </span>
            </div>
            <div className="h-px w-12 bg-cyan-300"></div>
          </div>

          {/* Main Heading & Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-light italic text-gray-800 mb-3">
                What's New at She Can Code
              </h1>
              <p className="text-gray-600 text-base">
                Stay up-to-date with our workshops, student achievements, and exciting opportunities in tech
              </p>
            </div>

            {/* View All Button */}
            <div>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                View all articles
              </button>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              {/* Article Image */}
              <div className="relative h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="p-5">
                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {article.excerpt}
                </p>

                {/* Author Info & Read More */}
                <div className="flex items-center justify-between">
                  {/* Author */}
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={article.authorImage}
                        alt={article.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium text-xs">
                        {article.author}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {article.date}
                      </p>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-xs py-2 px-4 rounded-full transition-colors duration-200">
                    Read more
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}