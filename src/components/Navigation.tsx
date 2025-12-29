"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/jaynelogo.png"
              alt="Jayne Agency"
              width={200}
              height={100}
              className="w-auto h-20"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/about-us"
              className={`text-sm font-medium relative group transition-colors duration-300 ${
                isActive("/about-us")
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              About Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c3a] transition-all duration-300 ${
                isActive("/about-us") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
            <Link
              href="/work-with-us"
              className={`text-sm font-medium relative group transition-colors duration-300 ${
                isActive("/work-with-us")
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Work With Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c3a] transition-all duration-300 ${
                isActive("/work-with-us") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
            <Link
              href="/case-studies"
              className={`text-sm font-medium relative group transition-colors duration-300 ${
                isActive("/case-studies")
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Case Studies
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c3a] transition-all duration-300 ${
                isActive("/case-studies") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
            <Link
              href="/speaking"
              className={`text-sm font-medium relative group transition-colors duration-300 ${
                isActive("/speaking")
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Speaking
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c3a] transition-all duration-300 ${
                isActive("/speaking") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
            <Link
              href="/agency-advisory"
              className={`text-sm font-medium relative group transition-colors duration-300 ${
                isActive("/agency-advisory")
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Agency & Advisory
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c3a] transition-all duration-300 ${
                isActive("/agency-advisory") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black relative group transition-colors duration-300"
            >
              Clarity University
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c3a] group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="inline-flex items-center px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-[#ff6b00] to-[#ff8c3a] text-white rounded-full hover:shadow-lg hover:shadow-[#ff6b00]/50 hover:scale-105 transition-all duration-300"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-2xl transition-all duration-300 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="px-6 py-8 space-y-1">
          <Link
            href="/about-us"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
              isActive("/about-us")
                ? "bg-[#ff6b00]/10 text-black border-l-2 border-[#ff6b00]"
                : "text-gray-600 hover:text-black hover:bg-gray-50"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/work-with-us"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
              isActive("/work-with-us")
                ? "bg-[#ff6b00]/10 text-black border-l-2 border-[#ff6b00]"
                : "text-gray-600 hover:text-black hover:bg-gray-50"
            }`}
          >
            Work With Us
          </Link>
          <Link
            href="/case-studies"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
              isActive("/case-studies")
                ? "bg-[#ff6b00]/10 text-black border-l-2 border-[#ff6b00]"
                : "text-gray-600 hover:text-black hover:bg-gray-50"
            }`}
          >
            Case Studies
          </Link>
          <Link
            href="/speaking"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
              isActive("/speaking")
                ? "bg-[#ff6b00]/10 text-black border-l-2 border-[#ff6b00]"
                : "text-gray-600 hover:text-black hover:bg-gray-50"
            }`}
          >
            Speaking
          </Link>
          <Link
            href="/agency-advisory"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
              isActive("/agency-advisory")
                ? "bg-[#ff6b00]/10 text-black border-l-2 border-[#ff6b00]"
                : "text-gray-600 hover:text-black hover:bg-gray-50"
            }`}
          >
            Agency & Advisory
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-300"
          >
            Clarity University
          </Link>
          <div className="pt-4">
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-[#ff6b00] to-[#ff8c3a] text-white rounded-full hover:shadow-lg hover:shadow-[#ff6b00]/50 transition-all duration-300"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
