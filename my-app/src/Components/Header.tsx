"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import Image from "next/image";

function Header() {
  const router = useRouter(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleApplyClick = () => {
    router.push("/apply"); 
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 ">
     
      <div className="max-w-8xl mx-auto px-20 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="SheCanCode Logo" width={120} height={120} />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-lg ">
          <Link href="/Home" className="text-neutral-600 hover:text-[#009BCF]">
            Home
          </Link>
          <Link href="/Courses" className="text-neutral-600 hover:text-[#009BCF]">
            Courses
          </Link>
          <Link href="/About" className="text-neutral-600 hover:text-[#009BCF]">
            About us 
          </Link>
          <Link href="/community" className="text-neutral-600 hover:text-[#009BCF]">
            Career
          </Link>
          <Link href="/community" className="text-neutral-600 hover:text-[#009BCF]">
           Blog
          </Link>
          <Link href="/community" className="text-neutral-600 hover:text-[#009BCF]">
            Contact Us
          </Link>
        </nav>

        {/* CTA Button with Programmatic Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={handleApplyClick}
            className="px-6 py-2.5 rounded-full bg-[#009BCF] text-white shadow-lg shadow-[#009BCF] font-semibold hover:from-indigo-600 hover:to-purple-600 transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;