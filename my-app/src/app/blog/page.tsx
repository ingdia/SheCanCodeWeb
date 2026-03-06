'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'Breaking Into Tech: A Beginner\'s Guide',
    excerpt: 'Starting your tech journey can feel overwhelming. Here\'s how to take the first step and build a successful career in technology.',
    author: 'Sarah Mugisha',
    date: 'March 15, 2024',
    category: 'Career',
    readTime: '5 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
  },
  {
    id: 2,
    title: 'Women in Tech: Success Stories from Rwanda',
    excerpt: 'Meet the inspiring women who are changing the tech landscape in Rwanda and beyond.',
    author: 'Grace Uwase',
    date: 'March 10, 2024',
    category: 'Inspiration',
    readTime: '8 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80'
  },
  {
    id: 3,
    title: 'Top 5 Programming Languages to Learn in 2024',
    excerpt: 'Which programming language should you learn first? We break down the most in-demand skills.',
    author: 'Divine Ishimwe',
    date: 'March 5, 2024',
    category: 'Tech',
    readTime: '6 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80'
  },
  {
    id: 4,
    title: 'How to Prepare for Your First Tech Interview',
    excerpt: 'Ace your tech interview with these proven tips and strategies from industry professionals.',
    author: 'Sarah Mugisha',
    date: 'February 28, 2024',
    category: 'Career',
    readTime: '7 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800&q=80'
  },
  {
    id: 5,
    title: 'Building Your Portfolio: What Employers Want to See',
    excerpt: 'Learn how to create a portfolio that stands out and showcases your skills effectively.',
    author: 'Grace Uwase',
    date: 'February 20, 2024',
    category: 'Career',
    readTime: '5 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
  },
  {
    id: 6,
    title: 'The Power of Community in Tech',
    excerpt: 'Why joining a tech community can accelerate your learning and open doors to opportunities.',
    author: 'Divine Ishimwe',
    date: 'February 15, 2024',
    category: 'Community',
    readTime: '4 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80'
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Career', 'Tech', 'Inspiration', 'Community'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero with diagonal split */}
      <section className="relative bg-gray-900 py-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#009BCF] transform skew-x-12 origin-top-right"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Stories, tips, and insights from the SheCanCode community</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-gray-200 sticky top-20 bg-white z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-[#009BCF] text-white scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts - Large cards */}
      {selectedCategory === 'All' && (
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#009BCF]"></div>
              <h2 className="text-2xl font-bold text-gray-800">Featured</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white text-[#009BCF] text-xs font-bold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#009BCF] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#009BCF] rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {post.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts - Masonry-style grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#009BCF]"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCategory === 'All' ? 'Latest Posts' : `${selectedCategory} Posts`}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className={`group bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#009BCF] transition-all duration-300 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                  <div className={`relative overflow-hidden ${index === 0 ? 'h-64' : 'h-48'}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-[#009BCF] uppercase">{post.category}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className={`font-bold text-gray-800 mb-2 group-hover:text-[#009BCF] transition-colors ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                      {post.title}
                    </h3>
                    <p className={`text-gray-600 mb-3 ${index === 0 ? 'text-base' : 'text-sm line-clamp-2'}`}>{post.excerpt}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs text-gray-600">{post.author}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
