"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const handleApplyClick = () => {
    router.push("/apply");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      {/* Main Header Container */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image 
            src="/logo.png" 
            alt="SheCanCode Logo" 
            width={120} 
            height={120} 
            className="h-30 w-auto object-contain"
          />
        </Link>

        {/*  Nav Links (Desktop Only) */}
        <nav className="hidden lg:flex items-center gap-8 text-lg ">
          <Link href="/" className="text-neutral-600 hover:text-[#009BCF] transition font-medium">
            Home
          </Link>
          <Link href="/Courses" className="text-neutral-600 hover:text-[#009BCF] transition font-medium">
            Courses
          </Link>
          <div 
            className="relative"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <button className="text-neutral-600 hover:text-[#009BCF] transition font-medium flex items-center gap-1">
              About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isAboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <Link href="/About/who-we-are" className="block px-4 py-2 text-neutral-600 hover:bg-[#009BCF]/10 hover:text-[#009BCF] transition">
                  Who We Are
                </Link>
                <Link href="/About/what-we-do" className="block px-4 py-2 text-neutral-600 hover:bg-[#009BCF]/10 hover:text-[#009BCF] transition">
                  What We Do
                </Link>
              </div>
            )}
          </div>
          <Link href="/community" className="text-neutral-600 hover:text-[#009BCF] transition font-medium">
            Career
          </Link>
          <Link href="/blog" className="text-neutral-600 hover:text-[#009BCF] transition font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-neutral-600 hover:text-[#009BCF] transition font-medium">
            Contact Us
          </Link>
        </nav>

        {/*  CTA Button (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={handleApplyClick}
            className="px-6 py-2.5 rounded-full bg-[#009BCF] text-white font-semibold hover:bg-[#0087b3] transition shadow-lg shadow-[#009BCF]/30"
          >
            Apply Now
          </button>
        </div>

        {/*  Mobile Menu Button (Hamburger) */}
        <button
          className="lg:hidden flex items-center justify-center p-2 text-neutral-600 hover:text-[#009BCF] transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/*  Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-neutral-600 hover:text-[#009BCF] transition font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/Courses"
              className="text-neutral-600 hover:text-[#009BCF] transition font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/About"
              className="text-neutral-600 hover:text-[#009BCF] transition font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/community"
              className="text-neutral-600 hover:text-[#009BCF] transition font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Career
            </Link>
            <Link
              href="/blog"
              className="text-neutral-600 hover:text-[#009BCF] transition font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-neutral-600 hover:text-[#009BCF] transition font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            {/* Mobile CTA Button */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  handleApplyClick();
                  setIsMenuOpen(false);
                }}
                className="w-full px-6 py-3 rounded-full bg-[#009BCF] text-white font-semibold hover:bg-[#0087b3] transition shadow-lg shadow-[#009BCF]/30"
              >
                Apply Now
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;