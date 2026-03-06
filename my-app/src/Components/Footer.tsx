import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin
} from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-200 pt-20 pb-10 overflow-hidden">

      {/*  Tech Glow Background */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#009BCF]/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-cyan-400/20 blur-[120px] rounded-full"></div>

      {/*  Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#009BCF_1px,transparent_1px),linear-gradient(to_bottom,#009BCF_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-8xl mx-auto px-6 lg:px-20">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row justify-between gap-20 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">

            <Image
              src="/logo.png"
              alt="SheCanCode Logo"
              width={140}
              height={140}
              className="mb-4"
            />

            <div className="text-neutral-600 text-sm leading-relaxed mb-6">
              <p>Empowering girls and women to pursue their dreams in technology</p>
               <p>through education, mentorship, and community support.</p>
            </div>

            {/* Socials */}
            <div className="flex gap-3">

              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#009BCF]
                  text-[#009BCF] hover:bg-[#009BCF] hover:text-white
                  transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#009BCF] mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-neutral-700">

              <li>
                <Link href="/courses" className="hover:text-[#009BCF] transition">
                  Our Courses
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[#009BCF] transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/careers" className="hover:text-[#009BCF] transition">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="/support" className="hover:text-[#009BCF] transition">
                  Support Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold text-[#009BCF] mb-4">
              Community
            </h3>

            <ul className="space-y-3 text-neutral-700">

              <li>
                <Link href="/events" className="hover:text-[#009BCF] transition">
                  Events
                </Link>
              </li>

              <li>
                <Link href="/mentorship" className="hover:text-[#009BCF] transition">
                  Mentorship
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-[#009BCF] transition">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/partners" className="hover:text-[#009BCF] transition">
                  Partners
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact / Work Hours */}
          <div className="lg:col-span-2">

            <h3 className="text-lg font-semibold text-[#009BCF] mb-4">
              Contact & Work Hours
            </h3>

            <ul className="space-y-4 text-neutral-700">

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#009BCF]" />
                <span>Mon - Fri : 9:00 AM - 5:00 PM</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#009BCF]" />
                <span>Kigali, Rwanda</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#009BCF]" />
                <a href="tel:+250123456789" className="hover:text-[#009BCF] transition">
                  +250 123 456 789
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#009BCF]" />
                <a href="mailto:info@shecancode.org" className="hover:text-[#009BCF] transition">
                  info@shecancode.org
                </a>
              </li>

            </ul>

            {/* Contact Button */}
            <div className="mt-6">

              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-[#009BCF]
                text-white font-semibold
                shadow-md shadow-[#009BCF]/40
                hover:scale-105 hover:shadow-xl
                transition-all duration-300"
              >
                Contact Us
              </Link>

            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">

          <p>© 2026 She Can Code. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#009BCF] transition">
              Privacy Policy
            </Link>

            <Link href="/terms-of-service" className="hover:text-[#009BCF] transition">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;